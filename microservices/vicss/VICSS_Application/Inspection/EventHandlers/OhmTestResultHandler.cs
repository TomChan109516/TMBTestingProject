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
    /// Handles the creation and storage of Overhead Height Measurement test results.
    /// </summary>
    public class OhmTestResultHandler : IRequestHandler<OhmTestResultRequestDto, TestResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, TestResultHeight> genericRepository;
        private readonly IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly IGenericRepository<InspectionDBContext, Station> genericStationRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="OhmTestResultHandler"/> class.
        /// </summary>
        public OhmTestResultHandler
            (IMapper mapper,
              IGenericRepository<InspectionDBContext, TestResultHeight> genericRepository,
              IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository,
              IGenericRepository<InspectionDBContext, Test> genericTestRepository,
              IUnitOfWork<InspectionDBContext> unitOfWork,
              IGenericRepository<InspectionDBContext, Station> genericStationRepository
              )
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.genericTestItemRepository = genericTestItemRepository;
            this.genericTestRepository = genericTestRepository;
            this.unitOfWork = unitOfWork;
            this.genericStationRepository = genericStationRepository;

        }

        /// <summary>
        /// Handles the request to create and store a Overhead Height Measurement test result.
        /// </summary>
        public async Task<TestResultResponseDto> Handle(OhmTestResultRequestDto request, CancellationToken cancellationToken)
        {

            TestResultResponseDto data = new();
            LaneStationAppointmentManager laneStationAppointmentManager = new();
            data.Message = CommonMessages.DataNotSaved;
            data.IsSuccess = false;
            data.HttpStatusCode = HttpStatusCode.NotModified;

            try
            {
                if (request != null && !string.IsNullOrEmpty(request.OhmTestResultDto.Result))
                {
                    var station = await GetStation(request);
                    if (station != null)
                    {
                        var test = await CreateTest(request, station);
                        if (test != null)
                        {

                            var ohmTest = await CreateOhmTest(request, test);
                            if (ohmTest != null)
                            {
                                await UpdateTestAndOhmTest(test, ohmTest);
                                laneStationAppointmentManager.SaveAppointment(request.TestDto.LaneId, request.TestDto.StationId, request.TestDto.AppointmentId, TestType.OHM);
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
                    laneStationAppointmentManager.SaveAppointment(request.TestDto.LaneId, request.TestDto.StationId, request.TestDto.AppointmentId, TestType.OHM);
            }
            return data;
        }
        /// <summary>
        /// Retrieves a Station object based on the provided request.
        /// </summary>
        private async Task<Station> GetStation(OhmTestResultRequestDto request)
        {
            var stations = await genericStationRepository
                .GetByQuery(i => i.Lane.LaneName == request.TestDto.LaneId && i.StationName == request.TestDto.StationId, i => i.Lane);
            return stations.FirstOrDefault();
        }
        /// <summary>
        /// Creates a Test object based on the provided request and station.
        /// </summary>
        private async Task<Test> CreateTest(OhmTestResultRequestDto request, Station station)
        {
            try
            {
                var createdTests = await genericTestRepository.GetByQuery(i => i.InspectionId == request.TestDto.InspectionId && i.TestItems.TestItem == CommonConstants.OverheadHeightMeasurement);
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
                test.EndResult = request.OhmTestResultDto.Result;
                test.StationId = station.Id;
                test.SkipApprovalInd = !String.IsNullOrEmpty(request.OhmTestResultDto.SkipTestReasonId);
                test.Mode = String.IsNullOrEmpty(request.TestDto.Mode) ? CommonConstants.AutoTestMode : request.TestDto.Mode;
                test.Attempt = request.TestDto.Attempt ?? 1;
                test.AbortSuspendTestReasonId = string.IsNullOrEmpty(request.TestDto.AbortSuspendTestReasonId) ? null : request.TestDto.AbortSuspendTestReasonId;
                test.SkipTestReasonId = string.IsNullOrEmpty(request.OhmTestResultDto.SkipTestReasonId) ? null : request.OhmTestResultDto.SkipTestReasonId;
                test.LastRecordTransactionDateTime = DateTime.UtcNow;

                return test;
            }
            catch (Exception)
            {
                return null!;
            }
        }
        /// <summary>
        /// Creates a TestResultHeight object based on the provided request and test.
        /// </summary>
        private async Task<TestResultHeight> CreateOhmTest(OhmTestResultRequestDto request, Test test)
        {
            try
            {
                var ohmResults = await genericRepository.GetByQuery(i => i.TestId == test.TestId);
                var ohmResult = ohmResults.FirstOrDefault();
                var ohmTest = mapper.Map<TestResultHeight>(request.OhmTestResultDto);
                if (CommonConstants.validValues.Contains(request.OhmTestResultDto.Result) && ohmTest != null && ohmResult != null)
                {
                    ohmTest.SkiptTestReasonId = string.IsNullOrEmpty(request.OhmTestResultDto.SkipTestReasonId.Trim()) ? default(string) : request.OhmTestResultDto.SkipTestReasonId;
                    ohmTest.Id = ohmResult.Id;
                    ohmTest.TestId = ohmResult.TestId;

                    return ohmTest;
                }
                return null!;
            }
            catch (Exception)
            {

                return null!;
            }
        }
        /// <summary>
        /// Updates the provided test and headlamp test in the Database.
        /// </summary>
        private async Task UpdateTestAndOhmTest(Test test, TestResultHeight ohmTest)
        {
            genericTestRepository.Update(test);
            genericRepository.Update(ohmTest);
            await unitOfWork.SaveChanges();
        }
    }
}

