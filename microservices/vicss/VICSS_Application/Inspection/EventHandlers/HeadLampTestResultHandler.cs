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
    /// Handles the creation and storage of headlamp test results.
    /// </summary>
    public class HeadLampTestResultHandler : IRequestHandler<HeadLampTestResultRequestDto, TestResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, TestResultHeadLamp> genericRepository;
        private readonly IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IGenericRepository<InspectionDBContext, Station> genericStationRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;


        /// <summary>
        /// Initializes a new instance of the <see cref="HeadLampTestResultHandler"/> class.
        /// </summary>
        public HeadLampTestResultHandler
        (IMapper mapper,
        IGenericRepository<InspectionDBContext, TestResultHeadLamp> genericRepository,
        IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository,
        IGenericRepository<InspectionDBContext, Test> genericTestRepository,
        IGenericRepository<InspectionDBContext, Station> genericStationRepository, IUnitOfWork<InspectionDBContext> unitOfWork)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.genericTestItemRepository = genericTestItemRepository;
            this.genericTestRepository = genericTestRepository;
            this.genericStationRepository = genericStationRepository;
            this.unitOfWork = unitOfWork;

        }

        /// <summary>
        /// Handles the request to create and store a headlamp test result.
        /// </summary>
        public async Task<TestResultResponseDto> Handle(HeadLampTestResultRequestDto request, CancellationToken cancellationToken)
        {

            TestResultResponseDto data = new();
            LaneStationAppointmentManager laneStationAppointmentManager = new();
            data.Message = CommonMessages.DataNotSaved;
            data.IsSuccess = false;
            data.HttpStatusCode = HttpStatusCode.NotModified;
            try
            {
                if (request != null && !string.IsNullOrEmpty(request.SaveHeadLampTestResultDto.Result))
                {
                    var station = await GetStation(request);
                    if (station != null)
                    {
                        var test = await CreateTest(request, station);
                        if (test != null)
                        {

                            var headLampTest = await CreateHeadLampTest(request, test);
                            if (headLampTest != null)
                            {
                                await SaveTestAndHeadLampTest(test, headLampTest);
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
                    laneStationAppointmentManager.SaveAppointment(request.TestDto.LaneId, request.TestDto.StationId, request.TestDto.AppointmentId, TestType.HT);

            }
            return data;
        }
        /// <summary>
        /// Retrieves a Station object based on the provided request.
        /// </summary>
        private async Task<Station> GetStation(HeadLampTestResultRequestDto request)
        {
            var stations = await genericStationRepository
                .GetByQuery(i => i.Lane.LaneName == request.TestDto.LaneId && i.StationName == request.TestDto.StationId, i => i.Lane);
            return stations.FirstOrDefault();
        }
        /// <summary>
        /// Creates a Test object based on the provided request and station.
        /// </summary>
        private async Task<Test> CreateTest(HeadLampTestResultRequestDto request, Station station)
        {
            try
            {
                var createdTests = await genericTestRepository.GetByQuery(i => i.InspectionId == request.TestDto.InspectionId && i.TestItems.TestItem == CommonConstants.HeadlampTest);
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
                test.EndResult = request.SaveHeadLampTestResultDto.Result;
                test.StationId = station.Id;
                test.SkipApprovalInd = !String.IsNullOrEmpty(request.SaveHeadLampTestResultDto.SkipTestReasonId);
                test.Mode = String.IsNullOrEmpty(request.TestDto.Mode) ? CommonConstants.AutoTestMode : request.TestDto.Mode;
                test.Attempt = request.TestDto.Attempt ?? 1;
                test.AbortSuspendTestReasonId = string.IsNullOrEmpty(request.TestDto.AbortSuspendTestReasonId) ? null : request.TestDto.AbortSuspendTestReasonId;
                test.SkipTestReasonId = string.IsNullOrEmpty(request.SaveHeadLampTestResultDto.SkipTestReasonId) ? null : request.SaveHeadLampTestResultDto.SkipTestReasonId;
                test.LastRecordTransactionDateTime = DateTime.UtcNow;

                return test;
            }
            catch (Exception)
            {
                return null!;
            }
        }
        /// <summary>
        /// Creates a TestResultHeadLamp object based on the provided request and test.
        /// </summary>
        private async Task<TestResultHeadLamp> CreateHeadLampTest(HeadLampTestResultRequestDto request, Test test)
        {
            try
            {
                var headLampResults = await genericRepository.GetByQuery(i => i.TestId == test.TestId);
                var headLampResult = headLampResults.FirstOrDefault();
                var headLampTest = mapper.Map<TestResultHeadLamp>(request.SaveHeadLampTestResultDto);
                if (CommonConstants.validValues.Contains(request.SaveHeadLampTestResultDto.Result) && headLampTest != null && headLampResult != null)
                {

                    headLampTest.SkiptTestReasonId = string.IsNullOrEmpty(request.SaveHeadLampTestResultDto.SkipTestReasonId.Trim()) ? default(string) : request.SaveHeadLampTestResultDto.SkipTestReasonId;
                    headLampTest.Id = headLampResult.Id;
                    headLampTest.TestId = headLampResult.TestId;


                    return headLampTest;
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
        private async Task SaveTestAndHeadLampTest(Test test, TestResultHeadLamp headLampTest)
        {
            genericTestRepository.Update(test);
            genericRepository.Update(headLampTest);
            await unitOfWork.SaveChanges();
        }
    }
}
