namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Interface;
    using VICSS.Shared.Models.Common;

    /// <summary>
    /// Handles the creation and storage of Tilting test results.
    /// </summary>
    public class TiltingTestResultHandler : IRequestHandler<TiltingTestResultRequestDto, TestResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ILogger<TiltingTestResultHandler> logger;
        private readonly ICommonMethods helper;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IGenericRepository<InspectionDBContext, TestResultTilting> genericRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="TiltingTestResultHandler"/> class.
        /// </summary>
        public TiltingTestResultHandler(IMapper mapper,
        IGenericRepository<InspectionDBContext, TestResultTilting> genericRepository,
        IUnitOfWork<InspectionDBContext> unitOfWork, ILogger<TiltingTestResultHandler> logger, ICommonMethods helper,
        IGenericRepository<InspectionDBContext, Test> genericTestRepository)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
            this.helper = helper;
            this.genericTestRepository = genericTestRepository;
        }
        /// <summary>
        /// Handles the request to create and store a Tilting test result.
        /// </summary>
        public async Task<TestResultResponseDto> Handle(TiltingTestResultRequestDto request, CancellationToken cancellationToken)
        {
            TestResultResponseDto data = new();
            data.Message = CommonMessages.DataNotSaved;
            data.IsSuccess = false;
            data.HttpStatusCode = HttpStatusCode.NotModified;
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,"TiltingTestResultHandler", "TiltingTestResultHandler service started.");
                if (request != null && !string.IsNullOrEmpty(request.TiltingTestResultDto.Result))
                {
                    var station = await helper.GetStation(request.TestDto, trackingId);
                    if (station != null)
                    {
                        var skipTestReasonId = string.IsNullOrEmpty(request.TiltingTestResultDto.SkipTestReasonId) ? "" : request.TiltingTestResultDto.SkipTestReasonId;
                        var testItem = CommonConstants.TiltingTest;
                        var test = await helper.UpdateTest(request.TestDto, station, request.TiltingTestResultDto.Result, skipTestReasonId, testItem);
                        if (test != null)
                        {
                            var tiltingTest = await CreateTiltingTest(request, test);
                            if (tiltingTest != null)
                            {
                                await SaveTestAndTiltingTest(test, tiltingTest);
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
                        data.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    data.Message = CommonMessages.EmptyFields;
                    data.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception ex)
            {
                data.ErrorMessage = CommonErrorMessage.InternalServerError;
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "TiltingTestResultHandler", ex.ToString());
            }
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,"TiltingTestResultHandler", "TiltingTestResultHandler service Completed.");
            return data;
        }
        /// <summary>
        /// Creates a TestResultTilting object based on the provided request and test.
        /// </summary>
        private async Task<TestResultTilting> CreateTiltingTest(TiltingTestResultRequestDto request, Test test)
        {
            try
            {
                var tiltingResults = await genericRepository.GetByQuery(i => i.TestId == test.TestId);
                var tiltingResult = tiltingResults.FirstOrDefault();
                var tiltingTest = mapper.Map<TestResultTilting>(request.TiltingTestResultDto);
                if (CommonConstants.validValues.Contains(request.TiltingTestResultDto.Result) && tiltingTest != null && tiltingResult != null)
                {
                    tiltingTest.SkipTestReasonId = string.IsNullOrEmpty(request.TiltingTestResultDto.SkipTestReasonId) ? null : request.TiltingTestResultDto.SkipTestReasonId;
                    tiltingTest.Id = tiltingResult.Id;
                    tiltingTest.TestId = tiltingResult.TestId;

                    return tiltingTest;
                }
                return null!;
            }
            catch (Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "TiltingTestResultHandler", ex.ToString());
                return null!;
            }
        }
        /// <summary>
        /// Updates the provided test and Tilting test in the database.
        /// </summary>
        private async Task SaveTestAndTiltingTest(Test test, TestResultTilting tiltingTest)
        {
            genericTestRepository.Update(test);
            genericRepository.Update(tiltingTest);
            await unitOfWork.SaveChanges();
        }
    }
}
