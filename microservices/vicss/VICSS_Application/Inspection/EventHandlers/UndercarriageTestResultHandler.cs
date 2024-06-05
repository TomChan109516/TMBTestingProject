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
    /// Handles the creation and storage of Undercarriage test results.
    /// </summary>
    public class UndercarriageTestResultHandler : IRequestHandler<UndercarriageTestResultRequestDto, TestResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, TestResultUndercarriage> genericRepository;
        private readonly IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly IGenericRepository<InspectionDBContext, Station> genericStationRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="UndercarriageTestResultHandler"/> class.
        /// </summary>
        public UndercarriageTestResultHandler
            (IMapper mapper,
              IGenericRepository<InspectionDBContext, TestResultUndercarriage> genericRepository,
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
        /// Handles the request to create and store a Undercarriage test result.
        /// </summary>
        public async Task<TestResultResponseDto> Handle(UndercarriageTestResultRequestDto request, CancellationToken cancellationToken)
        {
            TestResultResponseDto data = new();
            LaneStationAppointmentManager laneStationAppointmentManager = new();
            data.Message = CommonMessages.DataNotSaved;
            data.IsSuccess = false;
            data.HttpStatusCode = HttpStatusCode.NotModified;
            try
            {
                if (request != null && !string.IsNullOrEmpty(request.UndercarriageTestResultDto.Result))
                {
                    var station = await GetStation(request);
                    if (station != null)
                    {
                        var test = await CreateTest(request, station);
                        if (test != null)
                        {
                            var undercarriageTest = await CreateUndercarriageTest(request, test);
                            if (undercarriageTest != null)
                            {
                                await SaveTestAndUndercarriageTest(test, undercarriageTest);
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
                    laneStationAppointmentManager.SaveAppointment(request.TestDto.LaneId, request.TestDto.StationId, request.TestDto.AppointmentId, TestType.UC);
            }
            return data;
        }
        /// <summary>
        /// Retrieves a Station object based on the provided request.
        /// </summary>
        private async Task<Station> GetStation(UndercarriageTestResultRequestDto request)
        {
            var stations = await genericStationRepository
                .GetByQuery(i => i.Lane.LaneName == request.TestDto.LaneId && i.StationName == request.TestDto.StationId, i => i.Lane);
            return stations.FirstOrDefault();
        }
        /// <summary>
        /// Creates a Test object based on the provided request and station.
        /// </summary>
        private async Task<Test> CreateTest(UndercarriageTestResultRequestDto request, Station station)
        {
            try
            {
                var createdTests = await genericTestRepository.GetByQuery(i => i.InspectionId == request.TestDto.InspectionId && i.TestItems.TestItem == CommonConstants.UnderCarriageInspection);
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
                test.EndResult = request.UndercarriageTestResultDto.Result;
                test.StationId = station.Id;
                test.SkipApprovalInd = !String.IsNullOrEmpty(request.UndercarriageTestResultDto.SkipTestReasonId);
                test.Mode = String.IsNullOrEmpty(request.TestDto.Mode) ? CommonConstants.AutoTestMode : request.TestDto.Mode;
                test.Attempt = request.TestDto.Attempt ?? 1;
                test.AbortSuspendTestReasonId = string.IsNullOrEmpty(request.TestDto.AbortSuspendTestReasonId) ? null : request.TestDto.AbortSuspendTestReasonId;
                test.SkipTestReasonId = string.IsNullOrEmpty(request.UndercarriageTestResultDto.SkipTestReasonId) ? null : request.UndercarriageTestResultDto.SkipTestReasonId;
                test.LastRecordTransactionDateTime = DateTime.UtcNow;

                return test;
            }
            catch (Exception)
            {

                return null!;
            }
        }
        /// <summary>
        /// Creates a TestResultUndercarriage object based on the provided request and test.
        /// </summary>
        private async Task<TestResultUndercarriage> CreateUndercarriageTest(UndercarriageTestResultRequestDto request, Test test)
        {
            try
            {
                var undercarriageResults = await genericRepository.GetByQuery(i => i.TestId == test.TestId);
                var undercarriageResult = undercarriageResults.FirstOrDefault();
                var undercarriageTest = mapper.Map<TestResultUndercarriage>(request.UndercarriageTestResultDto);
                if (CommonConstants.validValues.Contains(request.UndercarriageTestResultDto.Result) && undercarriageTest != null && undercarriageResult != null)
                {
                    undercarriageTest.SkipTestReasonId= string.IsNullOrEmpty(request.UndercarriageTestResultDto.SkipTestReasonId) ? null : request.UndercarriageTestResultDto.SkipTestReasonId;
                    undercarriageTest.Id = undercarriageResult.Id;
                    undercarriageTest.TestId = undercarriageResult.TestId;

                    return undercarriageTest;
                }
                return null!;
            }
            catch (Exception)
            {

                return null!;
            }
        }
        /// <summary>
        /// Updates the provided test and undercarriage test in the database.
        /// </summary>
        private async Task SaveTestAndUndercarriageTest(Test test, TestResultUndercarriage undercarriageTest)
        {
            genericTestRepository.Update(test);
            genericRepository.Update(undercarriageTest);
            await unitOfWork.SaveChanges();
        }
    }
}