namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using Inspection.Domain;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Shared.Models.Common;
    public class HeadLampTestConfigHandler : IRequestHandler<HeadLampTestConfigRequestDto, HeadLampTestConfigResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, TestConfigHeadLamp> genericRepository;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;

        /// <summary>
        /// Initializes a new instance of the <see cref="HeadLampTestConfigHandler"/> class.
        /// </summary>
        public HeadLampTestConfigHandler(IMapper mapper, IGenericRepository<InspectionDBContext, TestConfigHeadLamp> genericRepository, IGenericRepository<InspectionDBContext, Test> genericTestRepository, IUnitOfWork<InspectionDBContext> unitOfWork)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.genericTestRepository = genericTestRepository;
            this.unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Handles the incoming request to configure a headlamp test.
        /// Updates the headlamp configuration if it exists, otherwise returns an error.
        /// </summary>
        public async Task<HeadLampTestConfigResponseDto> Handle(HeadLampTestConfigRequestDto request, CancellationToken cancellationToken)
        {
            HeadLampTestConfigResponseDto data = new();
            data.Message = CommonMessages.DataNotSaved;
            data.IsSuccess = false;
            data.HttpStatusCode = HttpStatusCode.NotModified;

            try
            {
                if (request!=null)
                {
                    var tests = await genericTestRepository.GetByQuery(i => i.InspectionId == request.InspectionId && i.TestItems.TestItem == CommonConstants.HeadlampTest);
                    var test = tests.FirstOrDefault();
                    var headLampConfig = mapper.Map<TestConfigHeadLamp>(request);
                    if (test != null && headLampConfig != null)
                    {
                        var createdHeadLampConfigs = await genericRepository.GetByQuery(i => i.TestId == test.TestId);
                        var createdHadLampConfig = createdHeadLampConfigs.FirstOrDefault();
                        if (createdHadLampConfig != null)
                        {
                            UpdateHeadLampConfig(headLampConfig, createdHadLampConfig, request.UserId);

                            genericRepository.Update(headLampConfig);
                            await unitOfWork.SaveChanges();
                            data.Message = CommonMessages.DataSaved;
                            data.IsSuccess = true;
                            data.HttpStatusCode = HttpStatusCode.OK;
                        }
                    }
                    else
                    {
                        data.ErrorMessage = CommonMessages.NoTestFound;
                        data.HttpStatusCode= HttpStatusCode.NotFound;
                    } 
                }
                else
                {
                    data.ErrorMessage = CommonMessages.BadRequest;
                    data.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception)
            {

                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                data.ErrorMessage = CommonErrorMessage.InternalServerError;
            }
            
            return data;
        }
        /// <summary>
        /// Updates the provided headlamp configuration with the details from the existing configuration and the provided user ID.
        /// </summary>
        private void UpdateHeadLampConfig(TestConfigHeadLamp headLampConfig, TestConfigHeadLamp createdHadLampConfig, string userId)
        {
            headLampConfig.Id = createdHadLampConfig.Id;
            headLampConfig.TestId = createdHadLampConfig.TestId;
            headLampConfig.VehicleId = createdHadLampConfig.VehicleId;
            headLampConfig.LastRecordTransactionDateTime = DateTime.UtcNow;
            headLampConfig.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;
            headLampConfig.LastRecordTransactionUserId = userId;
        }
    }
}
