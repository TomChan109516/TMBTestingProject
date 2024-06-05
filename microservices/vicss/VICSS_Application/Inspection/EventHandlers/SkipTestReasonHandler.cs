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

    public class SkipTestReasonHandler : IRequestHandler<SkipTestReasonRequestDto, SkipTestReasonResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, SkipTestReason> genericRepository;

        public SkipTestReasonHandler(IMapper mapper, IGenericRepository<InspectionDBContext, SkipTestReason> genericRepository)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
        }
        public async Task<SkipTestReasonResponseDto> Handle(SkipTestReasonRequestDto request, CancellationToken cancellationToken)
        {
            SkipTestReasonResponseDto data= new();
            List<SkipTestReason>? reasons = null;
            try 
            {
                // I,U,D
                //All Records
                if (request.status == 0)
                {
                    reasons = (List<SkipTestReason>)await genericRepository.GetAll();
                }
                //Active Records
                else if (request.status == 1)
                {
                    reasons = (List<SkipTestReason>)await genericRepository.GetByQuery(x => x.ActivateIndicator == true);
                }
                //Inactive Records , status:2
                else
                {
                    reasons = (List<SkipTestReason>)await genericRepository.GetByQuery(x => x.ActivateIndicator == false);
                }

               
                data.SkipTestReasons = mapper.Map<List<SkipTestReasonDto>>(reasons);
                data.HttpStatusCode=HttpStatusCode.OK;
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
