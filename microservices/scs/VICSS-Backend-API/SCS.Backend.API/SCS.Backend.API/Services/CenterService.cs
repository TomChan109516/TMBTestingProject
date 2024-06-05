using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.Constants;
using SCS_Backend_API.Data;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Models;
using SCS_Backend_API.Models1;
using System;
using System.Net;
using static SCS_Backend_API.DTO.DeleteExamScheduleDto;
using static SCS_Backend_API.DTO.EditExamScheduleDto;
using static SCS_Backend_API.DTO.SearchExamScheduleDto;
using static SCS_Backend_API.DTO.ViewExamScheduleDto;

namespace SCS_Backend_API
{
    public class CenterService : ICenterService
    {
        #region Private Methods
        private readonly AppDBContextEF _context;
        private readonly IMapper _mapper;
        private readonly ILogger<CenterService> _logger;
        #endregion

        #region Constructor
        public CenterService(AppDBContextEF context, IMapper mapper, ILogger<CenterService> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }
        #endregion

        #region Public Services
        //GetAllCenters

        /// <summary>
        /// This function brings the list of all centers present
        /// </summary>
        /// <returns> list of centers</returns>
        public async Task<CenterResponseDto> GetAllCenters()
        {
            _logger.LogInformation("GetAllCenters service started.");
            CenterResponseDto response = new CenterResponseDto();
            var centerList = await _context.SCS_Centers
                .ToListAsync();
            var centerData = _mapper.Map<List<CenterDto>>(centerList);

            response.data = centerData;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = centerList.Count == 0 ? CommonMessages.CentersNotFound : CommonMessages.CentersFetchSuccessfully;

            _logger.LogInformation("GetAllCenters service completed.");
            return response;
        }


        public async Task<SearchExamScheduleResponse> SearchExamSchedule(SearchExamScheduleRequestDto request)
        {
            try
            {
                _logger.LogInformation(" Search Exam Schedule Service Started");
                var response = new SearchExamScheduleResponse();
                var result = _context.ExaminationSchedules.AsQueryable();
                await Task.Run(() =>
                {
                    if (result != null)
                    {

                        if (request.Type.Length > 0)
                        {
                            result = result.Where(x => request.Type.Contains(x.ExamScheduleTypeCode));
                        }

                        if (!string.IsNullOrEmpty(request.Ctr_Id))
                        {
                            result = result.Where(a => a.CenterId == request.Ctr_Id);
                        }

                        if (request.ExamScheduleStartDate != null && request.ExamScheduleEndDate != null)
                        {
                            result = result.Where(x => x.ExamScheduleBeginDate >= request.ExamScheduleStartDate && x.ExamScheduleEndDate <= request.ExamScheduleEndDate);
                        }
                        var details = _mapper.Map<List<SearchExamScheduleDto>>(result);
                        response.data = details;
                        response.StatusCode = (int)HttpStatusCode.OK;

                    }
                    response.Message = result?.Count() > 0 ? CommonMessages.ExamScheduleFound : CommonMessages.NoExamScheduleFound;
                });
                _logger.LogInformation(" Search Exam Schedule Service Completed");
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Search Exam Schedule Exception : " + ex.Message);
                throw;
            }
        }
        public async Task<CreateExamScheduleResponseDto> CreateExamSchedule(CreateExamScheduleRequestDto request)
        {
            try
            {
                _logger.LogInformation("Create Exam Schedule service started.");
                CreateExamScheduleResponseDto response = new CreateExamScheduleResponseDto();
                var examSchedule = _mapper.Map<ExaminationSchedule>(request);
                examSchedule.LastRecordTransactionDateTime = DateTime.UtcNow;
                examSchedule.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
                examSchedule.LastRecordTransactionUserId = "Abhiram";
                
                var dbrow = await _context.ExaminationSchedules.AddAsync(examSchedule);
                await _context.SaveChangesAsync();
                Console.WriteLine(dbrow.Entity);

                var examScheduleDetails = _mapper.Map<CreateExamScheduleResponse>(dbrow.Entity);
                response.data = examScheduleDetails;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.ExamScheduleDetailsCreated;

                _logger.LogInformation("Create Exam Schedule service Completed.");
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Create Exam Schedule Exception : " + ex.Message);
                throw;
            }
        }

       
        public async Task<CreateExamScheduleDetailsResponse> CreateExamScheduleQuota(List<CreateExamScheduleDetailsRequestDto> request)
        {
            try
            {
                _logger.LogInformation("Create Exam Schedule service started.");
                CreateExamScheduleDetailsResponse response = new CreateExamScheduleDetailsResponse();
                var examSchedule = _mapper.Map<List<ExaminationScheduleDetails>>(request);
                foreach (var item in examSchedule)
                {
                    item.LastRecordTransactionDateTime = DateTime.UtcNow;
                    item.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
                    item.LastRecordTransactionUserId = "Abhiram";
                }
                await _context.ExaminationScheduleDetails.AddRangeAsync(examSchedule);
                await _context.SaveChangesAsync();

                var examScheduleDetails = _mapper.Map<List<CreateExamScheduleDetailsDto>>(examSchedule);
                response.data = examScheduleDetails;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.ExamScheduleDetailsCreated;

                _logger.LogInformation("Create Exam Schedule service Completed.");
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Create Exam Schedule Exception : " + ex.Message);
                throw;
            }

        }

        public async Task<ViewExamScheduleWithDetailsResponse> ViewExamSchedule(Int64 VisExamScheduleKey)
        {
            _logger.LogInformation("View Service Started");
            ViewExamScheduleWithDetailsResponse response = new ViewExamScheduleWithDetailsResponse();
            ViewExamScheduleWithDetails details2 = new ViewExamScheduleWithDetails();
            var examschedule = await _context.ExaminationSchedules.FirstOrDefaultAsync
                (a => a.VisExamScheduleKey == VisExamScheduleKey);
            var examscheduledetails = await _context.ExaminationScheduleDetails.Where
                (a => a.VisExamScheduleKey == VisExamScheduleKey).ToListAsync();


            if (examschedule != null)
            {
                var details = _mapper.Map<ViewExamScheduleDto>(examschedule);
                var details1 = _mapper.Map<List<CreateExamScheduleDetailsDto>>(examscheduledetails);
                details2.ViewExamScheduleDto = details;
                details2.CreateExamScheduleDetailsDto = details1;
                response.data = details2;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.ExamScheduleFound;
            }
            else
            {
                response.Message = CommonMessages.NoExamScheduleFound;
            }
            _logger.LogInformation(" Search Exam Schedule Service Completed");
            return response;
        }

        public async Task<EditExamScheduleResponse> EditExamSchedule(EditExamScheduleRequestDto request)
        {
            _logger.LogInformation("Edit Service Started");
            EditExamScheduleResponse response = new EditExamScheduleResponse();
            var examschedule = await _context.ExaminationSchedules.FirstOrDefaultAsync
                (a => a.VisExamScheduleKey == request.VisExamScheduleKey);

            if (examschedule != null)
            {
                examschedule.CenterId = request.CenterId;
                examschedule.ExamScheduleBeginDate = request.ExamScheduleBeginDate;
                examschedule.ExamScheduleEndDate = request.ExamScheduleEndDate;
                examschedule.ExamScheduleDescription = request.ExamScheduleDescription;
                await _context.SaveChangesAsync();
                var examScheduleResponse = _mapper.Map<EditExamScheduleDto>(examschedule);

                response.data = examScheduleResponse;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.ExamScheduleEdit;
            }

            else
            {
                response.Message = CommonMessages.NoExamScheduleEdit;
            }
            _logger.LogInformation(" Edit Exam Schedule Service Completed");
            return response;
        }

        public async Task<DeleteExamScheduleResponse> DeleteExamSchedule(Int64 VisExamScheduleKey)
        {
            _logger.LogInformation("Delete Service Started");
            DeleteExamScheduleResponse response = new DeleteExamScheduleResponse();
            var examschedule = await _context.ExaminationSchedules.FirstOrDefaultAsync
                (a => a.VisExamScheduleKey == VisExamScheduleKey);

            if (examschedule != null && examschedule.LastRecordTransactionTypeCode != 'D')
            {
                examschedule.LastRecordTransactionTypeCode = CommonConstants.DeleteTranTypeCode;
                examschedule.LastRecordTransactionDateTime = DateTime.UtcNow;
                await _context.SaveChangesAsync();

                var details = _mapper.Map<DeleteExamScheduleDto>(examschedule);
                response.data = details;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.ExamScheduleDeleted;
            }

            else
            {
                response.Message = CommonMessages.NoExamScheduleDeleted;
            }
            _logger.LogInformation(" Delete Exam Schedule Service Completed");
            return response;
        }

       
    }
    #endregion
}
