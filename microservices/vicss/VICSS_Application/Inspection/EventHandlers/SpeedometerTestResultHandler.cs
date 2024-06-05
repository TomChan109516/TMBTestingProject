namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using Inspection.Domain;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Common;

    /// <summary>
    /// Handles the creation and storage of Speedometer test results.
    /// </summary>
    public class SpeedometerTestResultHandler : IRequestHandler<SpeedometerTestResultRequestDto, TestResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, TestResultSpeedometer> genericRepository;
        private readonly IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly IGenericRepository<InspectionDBContext, Station> genericStationRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="SpeedometerTestResultHandler"/> class.
        /// </summary>
        public SpeedometerTestResultHandler
            (IMapper mapper,
              IGenericRepository<InspectionDBContext, TestResultSpeedometer> genericRepository,
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
        /// Handles the request to create and store a Speedometer test result.
        /// </summary>
        public async Task<TestResultResponseDto> Handle(SpeedometerTestResultRequestDto request, CancellationToken cancellationToken)
        {
            TestResultResponseDto data = new();
            LaneStationAppointmentManager laneStationAppointmentManager = new();
            data.Message = CommonMessages.DataNotSaved;
            data.IsSuccess = false;
            data.HttpStatusCode = HttpStatusCode.NotModified;
            try
            {
                if (request != null && !string.IsNullOrEmpty(request.SpeedometerTestResultDto.Result))
                {
                    var station = await GetStation(request);
                    if (station != null)
                    {
                        var test = await CreateTest(request, station);
                        if (test != null)
                        {
                            var speedometerTest = await CreateSpeedometerTest(request, test);
                            if (speedometerTest != null)
                            {
                                await SaveTestAndSpeedometerTest(test, speedometerTest);
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
                    laneStationAppointmentManager.SaveAppointment(request.TestDto.LaneId, request.TestDto.StationId, request.TestDto.AppointmentId, TestType.SppedoMeter);
            }

            return data;
        }
        /// <summary>
        /// Retrieves a Station object based on the provided request.
        /// </summary>
        private async Task<Station> GetStation(SpeedometerTestResultRequestDto request)
        {
            var stations = await genericStationRepository
                .GetByQuery(i => i.Lane.LaneName == request.TestDto.LaneId && i.StationName == request.TestDto.StationId, i => i.Lane);
            return stations.FirstOrDefault();
        }
        /// <summary>
        /// Creates a Test object based on the provided request and station.
        /// </summary>
        private async Task<Test> CreateTest(SpeedometerTestResultRequestDto request, Station station)
        {
            try
            {
                var createdTests = await genericTestRepository.GetByQuery(i => i.InspectionId == request.TestDto.InspectionId && i.TestItems.TestItem == CommonConstants.SpeedometerTest);
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
                test.EndResult = request.SpeedometerTestResultDto.Result;
                test.StationId = station.Id;
                test.SkipApprovalInd = !String.IsNullOrEmpty(request.SpeedometerTestResultDto.SkipTestReasonId);
                test.Mode = String.IsNullOrEmpty(request.TestDto.Mode) ? CommonConstants.AutoTestMode : request.TestDto.Mode;
                test.Attempt = request.TestDto.Attempt ?? 1;
                test.AbortSuspendTestReasonId = string.IsNullOrEmpty(request.TestDto.AbortSuspendTestReasonId) ? null : request.TestDto.AbortSuspendTestReasonId;
                test.SkipTestReasonId = string.IsNullOrEmpty(request.SpeedometerTestResultDto.SkipTestReasonId) ? null : request.SpeedometerTestResultDto.SkipTestReasonId;
                test.LastRecordTransactionDateTime = DateTime.UtcNow;

                return test;
            }
            catch (Exception)
            {

                return null!;
            }
        }

        /// <summary>
        /// Creates a TestResultSpeedometer object based on the provided request and test.
        /// </summary>
        private async Task<TestResultSpeedometer> CreateSpeedometerTest(SpeedometerTestResultRequestDto request, Test test)
        {
            try
            {
                var speedometerResults = await genericRepository.GetByQuery(i => i.TestId == test.TestId);
                var speedometerResult = speedometerResults.FirstOrDefault();
                var speedometerTest = mapper.Map<TestResultSpeedometer>(request.SpeedometerTestResultDto);
                if (CommonConstants.validValues.Contains(request.SpeedometerTestResultDto.Result) && speedometerTest != null && speedometerResult != null)
                {
                    speedometerTest.SkipTestReasonId = string.IsNullOrEmpty(request.SpeedometerTestResultDto.SkipTestReasonId) ? null : request.SpeedometerTestResultDto.SkipTestReasonId;
                    speedometerTest.Id = speedometerResult.Id;
                    speedometerTest.TestId = speedometerResult.TestId;

                    return speedometerTest;
                }
                return null!;
            }
            catch (Exception)
            {

                return null!;
            }
        }
        /// <summary>
        /// Updates the provided test and speedometer test in the database.
        /// </summary>
        private async Task SaveTestAndSpeedometerTest(Test test, TestResultSpeedometer speedometerTest)
        {
            genericTestRepository.Update(test);
            genericRepository.Update(speedometerTest);
            await unitOfWork.SaveChanges();
        }
    }
}