namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using Inspection.Domain;
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Common;

    /// <summary>
    /// Handles the creation and storage of Visual test results.
    /// </summary>
    public class VisualTestResultHandler : IRequestHandler<VisualTestResultRequestDto, TestResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, TestResultVisual> genericRepository;
        private readonly IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly IGenericRepository<InspectionDBContext, Station> genericStationRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="VisualTestResultHandler"/> class.
        /// </summary>
        public VisualTestResultHandler
            (IMapper mapper,
              IGenericRepository<InspectionDBContext, TestResultVisual> genericRepository,
              IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository,
              IGenericRepository<InspectionDBContext, Test> genericTestRepository,
              IUnitOfWork<InspectionDBContext> unitOfWork,
              IGenericRepository<InspectionDBContext, Station> genericStationRepository)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.genericTestItemRepository = genericTestItemRepository;
            this.genericTestRepository = genericTestRepository;
            this.unitOfWork = unitOfWork;
            this.genericStationRepository = genericStationRepository;
        }

        /// <summary>
        /// Handles the request to create and store a Visual Inspection test result.
        /// </summary>
        public async Task<TestResultResponseDto> Handle(VisualTestResultRequestDto request, CancellationToken cancellationToken)
        {
            LaneStationAppointmentManager laneStationAppointmentManager = new();
            TestResultResponseDto data = new();
            data.Message = CommonMessages.DataNotSaved;
            data.IsSuccess = false;
            data.HttpStatusCode = HttpStatusCode.NotModified;
            try
            {
                if (request != null && !string.IsNullOrEmpty(request.SaveVisualTestResultDto.Result))
                {
                    var station = await GetStation(request);
                    if (station != null)
                    {
                        var test = await CreateTest(request, station);
                        if (test != null)
                        {
                            var visualTest = await CreateVisualTest(request, test);
                            if (visualTest != null)
                            {
                                await SaveTestAndVisualTest(test, visualTest);
                                data.Message = CommonMessages.DataSaved;
                                data.IsSuccess = true;
                                data.HttpStatusCode = HttpStatusCode.OK;
                            }
                            else
                            {
                                data.Message = CommonMessages.BadRequest;
                                data.HttpStatusCode = HttpStatusCode.BadRequest;
                            }
                        }
                    }
                    else
                    {
                        data.Message = CommonMessages.NoStationFound;
                        data.HttpStatusCode = HttpStatusCode.BadRequest;
                    }
                }
                else
                {
                    data.Message = CommonMessages.EmptyFields;
                    data.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception)
            {
                data.ErrorMessage = CommonErrorMessage.InternalServerError;
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
            }
            finally
            {
                if (data.IsSuccess)
                    laneStationAppointmentManager.SaveAppointment(request.TestDto.LaneId, request.TestDto.StationId, request.TestDto.AppointmentId, TestType.VI);
            }

            return data;
        }
        /// <summary>
        /// Retrieves a Station object based on the provided request.
        /// </summary>
        private async Task<Station> GetStation(VisualTestResultRequestDto request)
        {
            var stations = await genericStationRepository
                .GetByQuery(i => i.Lane.LaneName == request.TestDto.LaneId && i.StationName == request.TestDto.StationId, i => i.Lane);
            return stations.FirstOrDefault();
        }
        /// <summary>
        /// Creates a Test object based on the provided request and station.
        /// </summary>
        private async Task<Test> CreateTest(VisualTestResultRequestDto request, Station station)
        {
            try
            {
                var createdTests = await genericTestRepository.GetByQuery(i => i.InspectionId == request.TestDto.InspectionId && i.TestItems.TestItem == CommonConstants.VisualInspection);
                var createdTest = createdTests.FirstOrDefault();

                if (createdTest == null)
                {
                    return null!;
                }

                var test = mapper.Map<Test>(request.TestDto);

                if (test == null)
                {
                    return null!;
                }

                test.TestId = createdTest.TestId;
                test.TestItemsId = createdTest.TestItemsId;
                test.EndResult = request.SaveVisualTestResultDto.Result;
                test.StationId = station.Id;
                test.SkipApprovalInd = !String.IsNullOrEmpty(request.SaveVisualTestResultDto.SkipTestReasonId);
                test.Mode = String.IsNullOrEmpty(request.TestDto.Mode) ? CommonConstants.AutoTestMode : request.TestDto.Mode;
                test.Attempt = request.TestDto.Attempt ?? 1;
                test.AbortSuspendTestReasonId = string.IsNullOrEmpty(request.TestDto.AbortSuspendTestReasonId.Trim()) ? default(string) : request.TestDto.AbortSuspendTestReasonId;
                test.SkipTestReasonId = string.IsNullOrEmpty(request.SaveVisualTestResultDto.SkipTestReasonId.Trim()) ? default(string) : request.SaveVisualTestResultDto.SkipTestReasonId;
                test.LastRecordTransactionDateTime = DateTime.UtcNow;

                return test;
            }
            catch (Exception)
            {
                return null!;
            }
        }
        /// <summary>
        /// Creates a TestResultVisual object based on the provided request and test.
        /// </summary>
        private async Task<TestResultVisual> CreateVisualTest(VisualTestResultRequestDto request, Test test)
        {
            try
            {
                var visualResults = await genericRepository.GetByQuery(i => i.TestId == test.TestId);
                var visualResult = visualResults.FirstOrDefault();
                var visualTest = mapper.Map<TestResultVisual>(request.SaveVisualTestResultDto);
                if (CommonConstants.validValues.Contains(request.SaveVisualTestResultDto.Result)
                    && visualTest != null && visualResult != null)
                {
                    visualTest.SkipTestReasonId = string.IsNullOrEmpty(request.SaveVisualTestResultDto.SkipTestReasonId.Trim()) ? default(string) : request.SaveVisualTestResultDto.SkipTestReasonId;
                    visualTest.Id = visualResult.Id;
                    visualTest.TestId = visualResult.TestId;
                    return visualTest;
                }
                return null!;
            }
            catch (Exception ex)
            {

                return null!;
            }
        }
        /// <summary>
        /// Updates the provided test and headlamp test in the repository.
        /// </summary>
        private async Task SaveTestAndVisualTest(Test test, TestResultVisual visualTest)
        {
            genericTestRepository.Update(test);
            genericRepository.Update(visualTest);
            await unitOfWork.SaveChanges();
        }
    }
}