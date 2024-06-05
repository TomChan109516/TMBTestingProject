using SCS_Backend_API.DTO;
using static SCS_Backend_API.DTO.DeleteExamScheduleDto;
using static SCS_Backend_API.DTO.EditExamScheduleDto;
using static SCS_Backend_API.DTO.SearchExamScheduleDto;
using static SCS_Backend_API.DTO.ViewExamScheduleDto;

namespace SCS_Backend_API
{
    public interface ICenterService
    {
        Task<CenterResponseDto> GetAllCenters();
        Task<SearchExamScheduleResponse> SearchExamSchedule(SearchExamScheduleRequestDto request);
        Task<CreateExamScheduleResponseDto> CreateExamSchedule(CreateExamScheduleRequestDto request);
        Task<CreateExamScheduleDetailsResponse> CreateExamScheduleQuota(List<CreateExamScheduleDetailsRequestDto> request);
        Task<ViewExamScheduleWithDetailsResponse> ViewExamSchedule(Int64 VisExamScheduleKey);
        Task<EditExamScheduleResponse> EditExamSchedule(EditExamScheduleRequestDto request);
        Task<DeleteExamScheduleResponse> DeleteExamSchedule(Int64 VisExamScheduleKey);
    }
}
