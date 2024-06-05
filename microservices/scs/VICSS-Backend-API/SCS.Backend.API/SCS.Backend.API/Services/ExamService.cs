using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.Constants;
using SCS_Backend_API.Data;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using System.Net;

namespace SCS_Backend_API.Services
{
    public class ExamService : IExamService
    {
        #region Private Variables
        private readonly AppDBContextEF _context;
        private readonly IMapper _mapper;
        private readonly ILogger<ExamService> _logger;
        #endregion

        #region Constructor
        public ExamService(AppDBContextEF context, IMapper mapper, ILogger<ExamService> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }
        #endregion

        #region Public Services
        //GetVehicleExamList

        /// <summary>
        /// Gets the List of Primary exams from related centers.
        /// </summary>
        /// <param name="centerId"></param>
        /// <returns>Primary Exam List</returns>
        public async Task<List<ExamCodeDto>> GetPrimaryExamList(string centerId)
        {
            _logger.LogInformation("GetPrimaryExamList service started.");
            var primaryExams = await _context.SCS_ExamCodes
               .Where(e => e.IsPrimary && e.Centers.Any(c => c.Ctr_Id == centerId) && e.IsActive == true).ToListAsync();
            var primaryExamResponse = _mapper.Map<List<ExamCodeDto>>(primaryExams);

            _logger.LogInformation("GetPrimaryExamList service completed.");
            return primaryExamResponse;
        }

        //GetVehicleExamList

        /// <summary>
        /// Gets the List of Supplementary exams from related centers.
        /// </summary>
        /// <param name="centerId"></param>
        /// <returns>Supplementary Exam List</returns>
        public async Task<List<ExamCodeDto>> GetSupplementaryExamList(string centerId)
        {
            _logger.LogInformation("GetSupplementaryExamList service started.");
            var supplementaryExams = await _context.SCS_ExamCodes
               .Where(e => !e.IsPrimary && e.Centers.Any(c => c.Ctr_Id == centerId) && e.IsActive == true).ToListAsync();
            var supplementaryExamResponse = _mapper.Map<List<ExamCodeDto>>(supplementaryExams);

            _logger.LogInformation("GetSupplementaryExamList service completed.");
            return supplementaryExamResponse;
        }

        //GetVehicleExamList

        /// <summary>
        /// Gets the List of Primary and Supplementary exams from related centers.
        /// </summary>
        /// <param name="centerId"></param>
        /// <returns>Combined Exam List</returns>
        public async Task<ExamResponseDto> GetVehicleExamList(string centerId)
        {
            _logger.LogInformation("GetVehicleExamList service started.");
            ExamResponseDto response = new ExamResponseDto();
            var primaryExamList = await GetPrimaryExamList(centerId);
            var supplementaryExamList = await GetSupplementaryExamList(centerId);

            if (primaryExamList.Count > 0 || supplementaryExamList.Count > 0)
            {
                ExamCombinedResponseDto combinedData = new ExamCombinedResponseDto
                {
                    Primary = primaryExamList,
                    Supplementary = supplementaryExamList
                };

                response.data = combinedData;
            }
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = primaryExamList.Count == 0 || supplementaryExamList.Count == 0 ? CommonMessages.NoVehicleExamFound : CommonMessages.ExamsFetchSuccessfully;

            _logger.LogInformation("GetVehicleExamList service completed.");
            return response;
        }
        #endregion
    }
}
