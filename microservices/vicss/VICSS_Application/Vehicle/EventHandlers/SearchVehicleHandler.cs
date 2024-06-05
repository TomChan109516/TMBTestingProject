namespace VICSS.Service.Vehicle.EventHandlers
{
    using System.Linq.Expressions;
    using System.Net;
    using System.Text.RegularExpressions;
    using AutoMapper;
    using MediatR;
    using Microsoft.EntityFrameworkCore;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Vehicle.Domain;
    using VICSS.Shared.Models.Common;

    public class SearchVehicleHandler : IRequestHandler<SearchVehicleRequestDto, SearchVehicleResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<VehicleDBContext, Vehicle> genericRepository;
        private readonly ILogger<SearchVehicleHandler> logger;

        public SearchVehicleHandler(IMapper mapper, IGenericRepository<VehicleDBContext, Vehicle> genericRepository, ILogger<SearchVehicleHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<SearchVehicleResponseDto> Handle(SearchVehicleRequestDto searchVehicleRequestDto, CancellationToken cancellationToken)
        {
            SearchVehicleResponseDto searchVehicleResponseDto = new SearchVehicleResponseDto();
            string trackingId = Guid.NewGuid().ToString();
            List<Vehicle>? vehicles = null;
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "SearchVehicleHandler", "SearchVehicleHandler initiated");

                searchVehicleRequestDto.VehicleId = ReplaceWildcardCharacter(searchVehicleRequestDto.VehicleId);
                searchVehicleRequestDto.VehicleRegistrationDocumentTransactionNumber = ReplaceWildcardCharacter(searchVehicleRequestDto.VehicleRegistrationDocumentTransactionNumber);
                searchVehicleRequestDto.VehicleRegMarkNumber = ReplaceWildcardCharacter(searchVehicleRequestDto.VehicleRegMarkNumber);
                searchVehicleRequestDto.CERefNumber = ReplaceWildcardCharacter(searchVehicleRequestDto.CERefNumber);
                searchVehicleRequestDto.VehicleTypeApprovalNumber = ReplaceWildcardCharacter(searchVehicleRequestDto.VehicleTypeApprovalNumber);

                if (searchVehicleRequestDto.VehicleChasisNumber != null && searchVehicleRequestDto.VehicleChasisNumber.Contains(CommonConstants.SearchWildcardCharacter))
                {
                    searchVehicleRequestDto.VehicleChasisNumber = ReplaceWildcardCharacter(searchVehicleRequestDto.VehicleChasisNumber);
                }
                else if (searchVehicleRequestDto.RemoveSpecialCharacters)
                {
                    searchVehicleRequestDto.VehicleChasisNumber = searchVehicleRequestDto.VehicleChasisNumber != null ? RemoveSpecialCharacters(searchVehicleRequestDto.VehicleChasisNumber) : null;
                }

                if (this.IsSearchParamEmpty(searchVehicleRequestDto))
                {
                    vehicles = (List<Vehicle>)await genericRepository.GetAll(param1 => param1.VehicleClass, param2 => param2.VehicleMake);
                }
                else
                {
                    vehicles = (List<Vehicle>)await genericRepository.GetByQuery(CreateSearchQuery(searchVehicleRequestDto), param1 => param1.VehicleClass, param2 => param2.VehicleMake);
                }

                searchVehicleResponseDto.searchVehicle = mapper.Map<List<SearchVehicleDto>>(vehicles);

                if (searchVehicleResponseDto.searchVehicle.Count > 0)
                {
                    searchVehicleResponseDto.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    searchVehicleResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                }

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "SearchVehicleHandler", "SearchVehicleHandler completed");

            }
            catch (Exception ex)
            {
                searchVehicleResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                searchVehicleResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "SearchVehicleHandler", ex.ToString());
            }

            return searchVehicleResponseDto;
        }

        private bool IsSearchParamEmpty(SearchVehicleRequestDto searchVehicleRequestDto)
        {
            //If all values are empty
            if (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleId) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.VehicleRegMarkNumber) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.VehicleChasisNumber) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.VehicleClassId) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.VehicleSubclassId) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.VehicleMakeId) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.CERefNumber) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.VehicleRegistrationDocumentTransactionNumber) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.VehicleTypeApprovalNumber) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.VehicleRecordTypeCode) &&
                String.IsNullOrEmpty(searchVehicleRequestDto.MasterChild)
                )
            {

                return true;
            }
            else
            {
                return false;
            }
        }

        private string ReplaceWildcardCharacter(string input)
        {
            return input?.Replace(CommonConstants.SearchWildcardCharacter, CommonConstants.WildcardPercentCharacter);
        }

        private string RemoveSpecialCharacters(string input)
        {
            return Regex.Replace(input,CommonConstants.RemoveSpecialCharactersPattern, "");
        }

        private Expression<Func<Vehicle, bool>> CreateSearchQuery(SearchVehicleRequestDto searchVehicleRequestDto)
        {
            if (searchVehicleRequestDto.RemoveSpecialCharacters)
            {
                searchVehicleRequestDto.VehicleChasisNumber = searchVehicleRequestDto.VehicleChasisNumber != null ? RemoveSpecialCharacters(searchVehicleRequestDto.VehicleChasisNumber) : null;
            }

            Expression<Func<Vehicle, bool>> baseQuery = x =>
                (String.IsNullOrEmpty(searchVehicleRequestDto.CERefNumber) || EF.Functions.Like(x.CERefNumber, searchVehicleRequestDto.CERefNumber)) &&
                (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleTypeApprovalNumber) || EF.Functions.Like(x.VehicleTypeApprovalNumber, searchVehicleRequestDto.VehicleTypeApprovalNumber)) &&
                (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleRegMarkNumber) || EF.Functions.Like(x.VehicleRegMarkNumber, searchVehicleRequestDto.VehicleRegMarkNumber)) &&
                (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleRegistrationDocumentTransactionNumber) || EF.Functions.Like(x.VehicleRegistrationDocumentTransactionNumber, searchVehicleRequestDto.VehicleRegistrationDocumentTransactionNumber)) &&
                (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleId) || EF.Functions.Like(x.VehicleValidId, searchVehicleRequestDto.VehicleId)) &&
                (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleMakeId) || x.VehicleMakeId == searchVehicleRequestDto.VehicleMakeId) &&
                (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleRecordTypeCode) || x.VehicleRecordTypeCode == searchVehicleRequestDto.VehicleRecordTypeCode) &&
                (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleChasisNumber) || EF.Functions.Like(x.VehicleChasisNumber, searchVehicleRequestDto.VehicleChasisNumber)) &&
                (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleSubclassId) || x.VehicleClassId == searchVehicleRequestDto.VehicleSubclassId);

            if (searchVehicleRequestDto.VehicleClassId != null && searchVehicleRequestDto.VehicleSubclassId == null)
            {
                Expression<Func<Vehicle, bool>> classQuery = x =>
                    (String.IsNullOrEmpty(searchVehicleRequestDto.VehicleClassId) || x.VehicleClass.VehicleClassCode == searchVehicleRequestDto.VehicleClassId);

                baseQuery = Expression.Lambda<Func<Vehicle, bool>>(Expression.AndAlso(baseQuery.Body, classQuery.Body), baseQuery.Parameters);
            }

            return baseQuery;
        }
    }
}
