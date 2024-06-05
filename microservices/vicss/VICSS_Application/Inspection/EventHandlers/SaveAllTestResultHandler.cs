namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using Azure.Core;
    using Inspection.Domain;
    using MediatR;
    using System.Net;
    using System.Threading;
    using System.Threading.Tasks;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Shared.Models.Common;

    /// <summary>
    /// Handles the creation and storage of All test results.
    /// </summary>
    public class SaveAllTestResultHandler : IRequestHandler<SaveAllTestResultRequestDto, TestResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Test> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ILogger<SaveAllTestResultHandler> logger;


        /// <summary>
        /// Initializes a new instance of the <see cref="SaveAllTestResultHandler"/> class.
        /// </summary>
        public SaveAllTestResultHandler
        (IMapper mapper,
          IGenericRepository<InspectionDBContext, Test> genericRepository,
          IUnitOfWork<InspectionDBContext> unitOfWork,
          ILogger<SaveAllTestResultHandler> logger
          )
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }
        /// <summary>
        /// Handles the request to update and  store All test result.
        /// </summary>
        public async Task<TestResultResponseDto> Handle(SaveAllTestResultRequestDto request, CancellationToken cancellationToken)
        {
            TestResultResponseDto response = new TestResultResponseDto();
            response.HttpStatusCode = HttpStatusCode.NotFound;
            response.IsSuccess = false;
            response.Message = CommonMessages.OperationUnsuccessful;

            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SaveAllTestResultHandler", "SaveAllTestResultHandler initiated");
                if (request.InspectionId != null)
                {
                    var testDetails = await GetTestDetails(request.InspectionId);
                    if (testDetails != null && testDetails.Count>0)
                    {
                        ProcessTestResultHeights(testDetails, request);
                        ProcessTestResultHeadLamps(testDetails, request);
                        ProcessTestResultVisuals(testDetails, request);
                        ProcessTestResultAxleWeights(testDetails, request);
                        ProcessTestResultBrakes(testDetails, request);
                        ProcessTestResultSpeedometers(testDetails, request);
                        ProcessTestResultTaximeters(testDetails, request);
                        ProcessTestResultUndercarriages(testDetails, request);
                        ProcessTestResultExhaust(testDetails, request);
                        ProcessTestResultTilting(testDetails, request);
                        await unitOfWork.SaveChanges();
                        response.HttpStatusCode = HttpStatusCode.OK;
                        response.IsSuccess = true;
                        response.Message = CommonMessages.OperationSuccessful;
                    }
                    else
                    {
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                        response.ErrorMessage = CommonMessages.NoTestsFound;
                    }
                }
                else
                {
                    response.HttpStatusCode = HttpStatusCode.BadRequest;
                    response.ErrorMessage = CommonMessages.BadRequest;

                }
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SaveAllTestResultHandler", ex.ToString());
            }

            return response;
        }

        private async Task<List<Test>> GetTestDetails(string inspectionId)
        {
            return (List<Test>)await genericRepository.GetByQuery(
                x => x.InspectionId == inspectionId,
                param1 => param1.TestResultBrakes,
                param2 => param2.TestResultExhausts,
                param3 => param3.TestResultHeadLamps,
                param4 => param4.TestResultAxleWeights,
                param5 => param5.TestResultHeights,
                param6 => param6.TestResultSpeedometers,
                param7 => param7.TestResultUndercarriages,
                param8 => param8.TestResultTaximeters,
                param9 => param9.TestResultVisuals,
                param10 => param10.TestResultTiltings,
                param11 => param11.TestItems
                );
        }

        private void ProcessTestResultHeights(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.OhmTestId) && !string.IsNullOrEmpty(request.OhmResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.OverheadHeightMeasurement);

                if (result != null)
                {
                    var testResult = result.TestResultHeights.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.OhmResult;
                        testResult.Result = request.OhmResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }

        private void ProcessTestResultHeadLamps(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.HeadlampTestId) && !string.IsNullOrEmpty(request.HeadlampResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.HeadlampTest);

                if (result != null)
                {
                    var testResult = result.TestResultHeadLamps.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.HeadlampResult;
                        testResult.Result = request.HeadlampResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }

        private void ProcessTestResultVisuals(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.VisualTestId) && !string.IsNullOrEmpty(request.VisualResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.VisualInspection);

                if (result != null)
                {
                    var testResult = result.TestResultVisuals.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.VisualResult;
                        testResult.Result = request.VisualResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }
        private void ProcessTestResultAxleWeights(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.AxleWeightTestId) && !string.IsNullOrEmpty(request.AxleWeightResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.AxleWeightbridgeTest);

                if (result != null)
                {
                    var testResult = result.TestResultAxleWeights.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.AxleWeightResult;
                        testResult.Result = request.AxleWeightResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }

        private void ProcessTestResultBrakes(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.BrakeTestId) && !string.IsNullOrEmpty(request.BrakeResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.BrakeRollerTest);

                if (result != null)
                {
                    var testResult = result.TestResultBrakes.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.BrakeResult;
                        testResult.Result = request.BrakeResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }
        private void ProcessTestResultSpeedometers(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.SpeedometerTestId) && !string.IsNullOrEmpty(request.SpeedometerResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.SpeedometerTest);

                if (result != null)
                {
                    var testResult = result.TestResultSpeedometers.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.SpeedometerResult;
                        testResult.Result = request.SpeedometerResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }
        private void ProcessTestResultTaximeters(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.TaximeterTestId) && !string.IsNullOrEmpty(request.TaximeterResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.TaximeterTest);

                if (result != null)
                {
                    var testResult = result.TestResultTaximeters.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.TaximeterResult;
                        testResult.Result = request.TaximeterResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }
        private void ProcessTestResultUndercarriages(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.UnderCarriageTestId) && !string.IsNullOrEmpty(request.UnderCarriageResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.UnderCarriageInspection);

                if (result != null)
                {
                    var testResult = result.TestResultUndercarriages.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.UnderCarriageResult;
                        testResult.Result = request.UnderCarriageResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }
        private void ProcessTestResultExhaust(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.ExhaustTestId) && !string.IsNullOrEmpty(request.ExhaustResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.ExhaustEmissionTestPetrol);

                if (result != null)
                {
                    var testResult = result.TestResultExhausts.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.ExhaustResult;
                        testResult.Result = request.ExhaustResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }
        private void ProcessTestResultTilting(List<Test> testDetails, SaveAllTestResultRequestDto request)
        {
            if (!string.IsNullOrEmpty(request.TiltingTestId) && !string.IsNullOrEmpty(request.TiltingTestResult))
            {
                var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.TiltingTest);

                if (result != null)
                {
                    var testResult = result.TestResultTiltings.FirstOrDefault();

                    if (testResult != null)
                    {
                        result.EndResult = request.TiltingTestResult;
                        testResult.Result = request.TiltingTestResult;
                        genericRepository.Update(result);
                    }
                }
            }
        }
    }
}