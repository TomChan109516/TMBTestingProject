namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using Azure;
    using Inspection.Domain;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Shared.Models.Common;

    public class TestConfigOhmHandler : IRequestHandler<TestConfigOhmRequestDto, TestConfigOhmResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, TestConfigHeight> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;

        public TestConfigOhmHandler(IMapper mapper, IGenericRepository<InspectionDBContext, TestConfigHeight> genericRepository,IUnitOfWork<InspectionDBContext> unitOfWork)
        {
           
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
        }
        public async Task<TestConfigOhmResponseDto> Handle(TestConfigOhmRequestDto request, CancellationToken cancellationToken)
        {
            TestConfigOhmResponseDto data = new();
            data.Message = "Data not Saved";
            data.IsSuccess = false;
            try
            {
                if (request != null)
                {
                    TestConfigHeight testConfigHeight = mapper.Map<TestConfigHeight>(request);
                    testConfigHeight.Id = Guid.NewGuid().ToString("N");
                    testConfigHeight.LastRecordTransactionUserId = request.UserId;
                    testConfigHeight.LastRecordTransactionDateTime = DateTime.UtcNow;
                    testConfigHeight.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;

                    await genericRepository.Add(testConfigHeight);
                    await unitOfWork.SaveChanges();
                    data.Message = "Data Saved Succesfully";
                    data.IsSuccess = true;
                    data.HttpStatusCode = HttpStatusCode.OK;

                }
            }
            catch (Exception ex)
            
            {
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                data.ErrorMessage = ex.Message;
            }

            return data;

        }
    }
}
