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
    /// Handles the creation and storage of Axle Weight test results.
    /// </summary>
    public class AxleWeightTestResultHandler : IRequestHandler<AxleWeightTestResultRequestDto, TestResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, TestResultAxleWeight> genericRepository;
        private readonly IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly IGenericRepository<InspectionDBContext, Station> genericStationRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="AxleWeightTestResultHandler"/> class.
        /// </summary>
        public AxleWeightTestResultHandler
            (IMapper mapper,
              IGenericRepository<InspectionDBContext, TestResultAxleWeight> genericRepository,
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
        /// Handles the request to create and store a Axle Weight test result.
        /// </summary>
        public async Task<TestResultResponseDto> Handle(AxleWeightTestResultRequestDto request, CancellationToken cancellationToken)
        {
            LaneStationAppointmentManager laneStationAppointmentManager = new();
            TestResultResponseDto data = new();
            data.Message = CommonMessages.DataNotSaved;
            data.IsSuccess = false;
            data.HttpStatusCode = HttpStatusCode.NotModified;
            try
            {
                if (request != null && !string.IsNullOrEmpty(request.AxleWeightTestResultDto.Result))
                {
                    var station = await GetStation(request);
                    if (station != null)
                    {
                        var test = await CreateTest(request, station);
                        if (test != null)
                        {
                            var axleWeightTest = await CreateAxleWeightTest(request, test);
                            if (axleWeightTest != null)
                            {
                                await SaveTestAndAxleWeightTest(test, axleWeightTest);
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
                    laneStationAppointmentManager.SaveAppointment(request.TestDto.LaneId, request.TestDto.StationId, request.TestDto.AppointmentId, TestType.AxleHeight);
            }
            return data;
        }
        /// <summary>
        /// Retrieves a Station object based on the provided request.
        /// </summary>
        private async Task<Station> GetStation(AxleWeightTestResultRequestDto request)
        {
            var stations = await genericStationRepository
                .GetByQuery(i => i.Lane.LaneName == request.TestDto.LaneId && i.StationName == request.TestDto.StationId, i => i.Lane);
            return stations.FirstOrDefault();
        }
        /// <summary>
        /// Creates a Test object based on the provided request and station.
        /// </summary>
        private async Task<Test> CreateTest(AxleWeightTestResultRequestDto request, Station station)
        {
            try
            {
                var createdTests = await genericTestRepository.GetByQuery(i => i.InspectionId == request.TestDto.InspectionId && i.TestItems.TestItem == CommonConstants.AxleWeightbridgeTest);
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
                test.EndResult = request.AxleWeightTestResultDto.Result;
                test.StationId = station.Id;
                test.SkipApprovalInd = !String.IsNullOrEmpty(request.AxleWeightTestResultDto.SkipTestReasonId);
                test.Mode = String.IsNullOrEmpty(request.TestDto.Mode) ? CommonConstants.AutoTestMode : request.TestDto.Mode;
                test.Attempt = request.TestDto.Attempt ?? 1;
                test.AbortSuspendTestReasonId = string.IsNullOrEmpty(request.TestDto.AbortSuspendTestReasonId) ? null : request.TestDto.AbortSuspendTestReasonId;
                test.SkipTestReasonId = string.IsNullOrEmpty(request.AxleWeightTestResultDto.SkipTestReasonId) ? null : request.AxleWeightTestResultDto.SkipTestReasonId;
                test.LastRecordTransactionDateTime = DateTime.UtcNow;

                return test;
            }
            catch (Exception)
            {
                return null!;
            }
        }
        /// <summary>
        /// Creates a TestResultAxleWeight object based on the provided request and test.
        /// </summary>
        private async Task<TestResultAxleWeight> CreateAxleWeightTest(AxleWeightTestResultRequestDto request, Test test)
        {
            try
            {
                var axleWeightResults = await genericRepository.GetByQuery(i => i.TestId == test.TestId);
                var axleWeightResult = axleWeightResults.FirstOrDefault();
                var axleWeightTest = mapper.Map<TestResultAxleWeight>(request.AxleWeightTestResultDto);
                if (CommonConstants.validValues.Contains(request.AxleWeightTestResultDto.Result) && axleWeightTest != null && axleWeightResult != null)
                {
                    axleWeightTest.SkipTestReasonId = string.IsNullOrEmpty(request.AxleWeightTestResultDto.SkipTestReasonId.Trim()) ? default(string) : request.AxleWeightTestResultDto.SkipTestReasonId;
                    axleWeightTest.Id = axleWeightResult.Id;
                    axleWeightTest.TestId = axleWeightResult.TestId;

                    return axleWeightTest;
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
        private async Task SaveTestAndAxleWeightTest(Test test, TestResultAxleWeight axleWeightTest)
        {
            genericTestRepository.Update(test);
            genericRepository.Update(axleWeightTest);
            await unitOfWork.SaveChanges();
        }
    }
}