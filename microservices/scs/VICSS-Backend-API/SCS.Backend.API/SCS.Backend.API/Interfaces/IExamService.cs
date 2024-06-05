using SCS_Backend_API.DTO;
using SCS_Backend_API.Models;

namespace SCS_Backend_API.Interfaces
{
    public interface IExamService
    {
        Task<List<ExamCodeDto>> GetPrimaryExamList(string centerId);
        Task<List<ExamCodeDto>> GetSupplementaryExamList(string centerId);
        Task<ExamResponseDto> GetVehicleExamList(string centerId);


    }
}
