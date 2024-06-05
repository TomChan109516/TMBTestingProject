using SCS_Backend_API.DTO;

namespace SCS_Backend_API.Interfaces
{
    public interface IVehicleService
    {
        Task<VVandMPVResponseDTO> CreateNewVillageVehicle(VillageAndMovementPermitVehicleDto vehicleInfo);
        Task<CreateNewNonValidVehicleDtoResponse> AmendNonValidVehicle(CreateNewNonValidVehicleDto amendNonValidVehicleRequest);
        Task<AmendVVandMPVResponseDto> AmendVVandMPV(AmendVVandMPVRequestDto request, string chasisNo);
        Task<VehicleOperationRemarkResponse> VehicleOperationalRemark(AttachmentDto attachmentRequest, string remark, string chasisNumber);
        Task<VehicleMessagesResponse> VehicleMessage(VehicleMessagesDto vehicleMessagesDto);
        Task<SearchWatchListResponseDto> SearchWatchList(WatchListRequestDto searchWhtlst);
        Task<WatchListCancelResponse> CancelWatchList(CancelWatchListDto cnclwhlst);
        Task<CreateWatchListDtoResponse> CreateWatchList(CreateWatchListDto request);
        Task<CountryCodeResponse> GetCountryCode();
    }
}
