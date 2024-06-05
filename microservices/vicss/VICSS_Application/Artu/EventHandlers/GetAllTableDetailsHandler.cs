namespace VICSS.Service.Artu.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Collections.Generic;
    using System.Net;
    using System.Threading;
    using System.Threading.Tasks;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;

    public class GetAllTableDetails : IRequestHandler<GetAllTableDetailsRequestDto, GetAllTableDetailsResponseDto>
    {
        #region Private Variable
        private readonly IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository;
        private readonly IMapper mapper;
        #endregion

        public GetAllTableDetails(IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository, IMapper mapper)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
        }

        public async Task<GetAllTableDetailsResponseDto> Handle(GetAllTableDetailsRequestDto request, CancellationToken cancellationToken)
        {
            GetAllTableDetailsResponseDto data = new GetAllTableDetailsResponseDto();
            try
            {
                var entities = await genericRepository.GetAll();

                if (entities != null)
                {
                    data.Entities = mapper.Map<List<EntityDto>>(entities);
                    data.HttpStatusCode = HttpStatusCode.OK;
                }

                if (data.Entities != null)
                {
                    data.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    data.HttpStatusCode = HttpStatusCode.NotFound;
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