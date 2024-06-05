namespace VICSS.Service.Vehicle.EventHandlers
{
    using MediatR;
    using Microsoft.EntityFrameworkCore;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Vehicle.Domain;
    using VICSS.Shared.Models.Common;

    public class SearchRegMarkHandler : IRequestHandler<SearchRegMarkRequestDto, SearchRegMarkResponseDto>
    {
        private readonly IGenericRepository<VehicleDBContext, Vehicle> genericRepository;
        private readonly ILogger<SearchRegMarkHandler> logger;

        public SearchRegMarkHandler(IGenericRepository<VehicleDBContext, Vehicle> genericRepository, ILogger<SearchRegMarkHandler> logger)
        {
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<SearchRegMarkResponseDto> Handle(SearchRegMarkRequestDto searchRegMarkRequestDto, CancellationToken cancellationToken)
        {
            SearchRegMarkResponseDto response = new SearchRegMarkResponseDto();
            if (searchRegMarkRequestDto == null || string.IsNullOrEmpty(searchRegMarkRequestDto.VehicleRegMarkNumber))

            {
                response.HttpStatusCode = HttpStatusCode.BadRequest;
                return response;
            }
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "SearchRegMarkHandler", "SearchRegMarkHandler initiated");

                if (!string.IsNullOrEmpty(searchRegMarkRequestDto.VehicleRegMarkNumber) && searchRegMarkRequestDto.VehicleRegMarkNumber.Length >= 3)
                {
                    string searchParam = searchRegMarkRequestDto.VehicleRegMarkNumber + "%";
                    var vehicles = await genericRepository.GetByQuery(v => EF.Functions.Like(v.VehicleRegMarkNumber, searchParam));
                    response.VehicleRegMarkNumber = vehicles.Select(v => v.VehicleRegMarkNumber).Distinct().Take(10).ToList();

                    if (response.VehicleRegMarkNumber.Count > 0)
                    {
                        response.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "SearchRegMarkHandler", "SearchRegMarkHandler completed");
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "SearchRegMarkHandler", ex.ToString());
            }

            return response;
        }
    }
}