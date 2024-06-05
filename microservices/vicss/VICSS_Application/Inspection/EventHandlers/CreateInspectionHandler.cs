namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using System.Runtime.InteropServices;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;

    public class CreateInspectionHandler : IRequestHandler<InspectionRequestDto, InspectionResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Inspection> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly IMediator _mediator;
        private readonly ILogger<CreateInspectionHandler> logger;
        private readonly IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository;
        private readonly IGenericRepository<InspectionDBContext, ExamCodeTestItems> genericExamCodeTestItemRepository;
        public CreateInspectionHandler(IMapper mapper, IGenericRepository<InspectionDBContext, Inspection> genericRepository, IUnitOfWork<InspectionDBContext> unitOfWork, IMediator mediator, ILogger<CreateInspectionHandler> logger, IGenericRepository<InspectionDBContext,
            TestItems> genericTestItemRepository, IGenericRepository<InspectionDBContext, ExamCodeTestItems> genericExamCodeTestItemRepository)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            _mediator = mediator;
            this.logger = logger;
            this.genericTestItemRepository = genericTestItemRepository;
            this.genericExamCodeTestItemRepository = genericExamCodeTestItemRepository;
        }
        /// <summary>
        /// Handles the creation of an inspection and returns the response.
        /// </summary>
        public async Task<InspectionResponseDto> Handle(InspectionRequestDto request, CancellationToken cancellationToken)
        {
            InspectionResponseDto response = new InspectionResponseDto();
            Inspection inspection = new Inspection();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CreateInspectionHandler", "CreateInspectionHandler initiated");

                if (request.InspectionCreatedDto.InspectionId != null)
                {
                    inspection.InspectionId = request.InspectionCreatedDto.InspectionId;
                    inspection.VehicleId = request.InspectionCreatedDto.VehicleId;
                    inspection.LaneId = request.InspectionCreatedDto.LaneId;
                    inspection.SecondLaneId = request.InspectionCreatedDto.LaneId;
                    inspection.InspectionStatus = string.Empty;
                    inspection.InspectionStartDateTime = DateTime.UtcNow;
                    inspection.InspectionEndDateTime = DateTime.UtcNow;
                    inspection.InspectionEndResult = ' ';
                    inspection.LastRecordTransactionDateTime = DateTime.UtcNow;
                    inspection.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
                    inspection.LastRecordTransactionUserId = request.InspectionCreatedDto.UserId;
                    inspection.InspectionExamCodes = await InspectionExamCode(request.InspectionCreatedDto.InspectionId, request.InspectionCreatedDto.InspectionTypeId);

                    var testitems = await GetExamCodeTestItems(request.InspectionCreatedDto.InspectionTypeId);

                    if (testitems == null)
                    {
                        response.ErrorMessage = CommonErrorMessage.ErrorMessage;
                        logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CreateInspectionHandler", "testitems coming as Null");

                        return response;
                    }
                    List<string> testItemsId = testitems.Select(x => x.TestItemsId).ToList();

                    inspection.Tests = await InsertTestData(testItemsId, request.InspectionCreatedDto.InspectionId, request.InspectionCreatedDto.UserId, request.InspectionCreatedDto.VehicleId);

                    await genericRepository.Add(inspection);
                    bool dataSaved = await unitOfWork.SaveChanges();
                    if (dataSaved)
                    {
                        response.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                    }

                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CreateInspectionHandler", "CreateInspectionHandler completed");
                }
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CreateInspectionHandler", ex.ToString());
            }
            return response;
        }
        /// <summary>
        /// Creates a list of InspectionExamCode for given InspectionId and InspectionTypeIds.
        /// </summary>
        private async Task<List<InspectionExamCode>> InspectionExamCode(string InspectionId, List<string> InspectionTypeId)
        {
            List<string> examCodes = null;
            List<InspectionExamCode> inspectionExamCodes = new List<InspectionExamCode>();
            var result = await _mediator.Send(new GetExamCodeRequestDto(CommonConstants.ActiveStatus), CancellationToken.None);
            examCodes = result.ExamCodeDtos.Where(x => InspectionTypeId.Contains(x.InspectionTypeId)).Select(x => x.ExamCode).ToList();
            foreach (string examCode in examCodes)
            {
                inspectionExamCodes.Add(new InspectionExamCode
                {
                    InspectionExamCodeId = Guid.NewGuid().ToString(),
                    InspectionId = InspectionId,
                    ExamCode = examCode
                });
            }

            return inspectionExamCodes;
        }
        /// <summary>
        /// Retrieves a list of ExamCodeTestItems for given InspectionTypeIds.
        /// </summary>
        private async Task<List<ExamCodeTestItems>> GetExamCodeTestItems(List<string> InspectionTypeId)
        {
            List<ExamCodeTestItems> examCodeTestItems = new List<ExamCodeTestItems>();
            if (InspectionTypeId.Count > 0)
            {
                examCodeTestItems = (List<ExamCodeTestItems>)await genericExamCodeTestItemRepository.GetByQuery(x => InspectionTypeId.Contains(x.InspectionTypeId));
            }

            return examCodeTestItems;
        }
        /// <summary>
        /// Retrieves a list of test items.
        /// </summary>
        private async Task<List<TestItems>> GetTestItems()
        {
            List<TestItems> testItems = new List<TestItems>();

            testItems = (List<TestItems>)await genericTestItemRepository.GetByQuery(x => x.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);
            return testItems;
        }
        /// <summary>
        /// Inserts test data for a list of test items.
        /// </summary>
        private async Task<List<Test>> InsertTestData(List<string> testItemsId, string inspectionId, string userId, string vehicleId, [Optional] string stationId)
        {
            List<Test> testItems = new List<Test>();
            var testNames = await GetTestItems();

            foreach (string itemId in testItemsId)
            {
                string testId = Guid.NewGuid().ToString();
                string testName = testNames.Where(x => x.Id == itemId).Select(x => x.TestItem).FirstOrDefault();

                var test = new Test
                {
                    TestId = testId,
                    InspectionId = inspectionId,
                    UserId = userId,
                    TestItemsId = itemId,
                    Mode = string.Empty,
                    Attempt = 0,
                    EndResult = string.Empty,
                    LastRecordTransactionDateTime = DateTime.UtcNow,
                };

                switch (testName)
                {
                    case CommonConstants.HeadlampTest:
                        test.TestResultHeadLamps = await InsertTestResultHeadLamp(testId);
                        test.TestConfigHeadLamps = await InsertTestConfigHeadLamp(testId, userId, vehicleId);
                        break;
                    case CommonConstants.OverheadHeightMeasurement:
                        test.TestResultHeights = await InsertTestResultHeight(testId);
                        test.TestConfigHeights = await InsertTestConfigHeight(testId, userId, vehicleId);
                        break;
                    case CommonConstants.BrakeRollerTest:
                        test.TestResultBrakes = await InsertTestResultBrake(testId);
                        test.TestConfigBrakes = await InsertTestConfigBrake(testId, userId, vehicleId);
                        break;
                    case CommonConstants.UnderCarriageInspection:
                        test.TestResultUndercarriages = await InsertTestResultUndercarriage(testId);
                        break;
                    case CommonConstants.VisualInspection:
                        test.TestResultVisuals = await InsertTestResultVisual(testId);
                        break;
                    case CommonConstants.TaximeterTest:
                        test.TestResultTaximeters = await InsertTestResultTaximeter(testId);
                        test.TestConfigTaximeters = await InsertTestConfigTaximeter(testId, userId, vehicleId);
                        break;
                    case CommonConstants.SpeedometerTest:
                        test.TestConfigSpeedometers = await InsertTestConfigSpeedometer(testId, userId, vehicleId);
                        test.TestResultSpeedometers = await InsertTestResultSpeedometer(testId);
                        break;
                    case CommonConstants.AxleWeightbridgeTest:
                        test.TestResultAxleWeights = await InsertTestResultAxleWeight(testId);
                        test.TestConfigAxleWeights = await InsertTestConfigAxleWeight(testId, userId, vehicleId);
                        break;
                    case CommonConstants.ExhaustEmissionTestPetrol:
                        test.TestResultExhausts = await InsertTestResultExhaust(testId);
                        test.TestConfigExhausts = await InsertTestConfigExhaust(testId, userId, vehicleId);
                        break;
                    case CommonConstants.TiltingTest:
                        test.TestResultTiltings = await InsertTestResultTilting(testId);
                        break;
                }

                testItems.Add(test);
            }

            return testItems;
        }
        /// <summary>
        /// Creates and returns a list of TestResultHeadLamp objects.
        /// </summary>
        private async Task<List<TestResultHeadLamp>> InsertTestResultHeadLamp(string testId)
        {
            List<TestResultHeadLamp> testResult = new List<TestResultHeadLamp>();

            testResult.Add(new TestResultHeadLamp
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                Result = string.Empty,
            });
            return testResult;
        }

        /// <summary>
        /// Creates and returns a list of TestConfigHeadLamp objects.
        /// </summary>
        private async Task<List<TestConfigHeadLamp>> InsertTestConfigHeadLamp(string testId, string userId, string vehicleId)
        {
            List<TestConfigHeadLamp> testResult = new List<TestConfigHeadLamp>();

            testResult.Add(new TestConfigHeadLamp
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                NumHeadLamp = CommonConstants.NumHeadLamp,
                MainBeamAdjustable = CommonConstants.MainBeamAdjustable,
                HeadlightMeasuringMethod = CommonConstants.HeadLightMasuringMethod,
                SteeringPosition = CommonConstants.SteeringPosition,
                LeftMainLamp = false,
                RightMainLamp = false,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId = userId,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                VehicleId = vehicleId
            });
            return testResult;
        }
        /// <summary>
        /// Creates and returns a list of TestResultHeight objects.
        /// </summary>
        private async Task<List<TestResultHeight>> InsertTestResultHeight(string testId)
        {
            List<TestResultHeight> testResult = new List<TestResultHeight>();

            testResult.Add(new TestResultHeight
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                Length = 0,
                Width = 0,
                Height = 0,
                Result = string.Empty,
            });
            return testResult;
        }
        /// <summary>
        /// Creates and returns a list of TestConfigHeight objects.
        /// </summary>
        private async Task<List<TestConfigHeight>> InsertTestConfigHeight(string testId, string userId, string vehicleId)
        {
            List<TestConfigHeight> testResult = new List<TestConfigHeight>();

            testResult.Add(new TestConfigHeight
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                OhmMeasuringMethod = 0,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId = userId,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                VehicleId = vehicleId
            });
            return testResult;
        }
        /// <summary>
        /// Creates and returns a list of TestResultBrake objects.
        /// </summary>
        private async Task<List<TestResultBrake>> InsertTestResultBrake(string testId)
        {
            List<TestResultBrake> testResult = new List<TestResultBrake>();

            testResult.Add(new TestResultBrake
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                ServiceBrake = 0,
                ServiceBrakeEfficiency = 0,
                SecondaryBrake = 0,
                ParkingBrake = 0,
                ParkingBrakeEfficiency = 0,
                Result = string.Empty,
                SecondaryBrakeEfficiency = default(decimal)
            });
            return testResult;
        }

        /// <summary>
        /// Creates and returns a list of TestConfigBrake objects.
        /// </summary>
        private async Task<List<TestConfigBrake>> InsertTestConfigBrake(string testId, string userId, string vehicleId)
        {
            List<TestConfigBrake> testConfig = new List<TestConfigBrake>();

            testConfig.Add(new TestConfigBrake
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                NumOfAxles = 0,
                TestType = string.Empty,
                BrakeTestMethod = string.Empty,
                ServiceBrakeEfficiencyFormula = string.Empty,
                ParkingBrakeEfficiencyFormula = string.Empty,
                SecondaryBrake = string.Empty,
                ElectronicParkBrakeSys = string.Empty,
                SteeringAxlePosition = 0,
                PullParkingBrakeInAdvance = string.Empty,
                SeparateSecondaryBrakeTest = string.Empty,
                SecondaryBrakeEfficiencyFormula = string.Empty,
                TbParking = string.Empty,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId = userId,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                VehicleId = vehicleId
            });

            return testConfig;
        }
        /// <summary>
        /// Creates and returns a list of TestResultUndercarriage objects.
        /// </summary>
        private async Task<List<TestResultUndercarriage>> InsertTestResultUndercarriage(string testId)
        {
            List<TestResultUndercarriage> testResultUndercarriages = new List<TestResultUndercarriage>();

            testResultUndercarriages.Add(new TestResultUndercarriage
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                Result = string.Empty
            });

            return testResultUndercarriages;
        }
        /// <summary>
        /// Creates and returns a list of TestResultVisual objects.
        /// </summary>
        private async Task<List<TestResultVisual>> InsertTestResultVisual(string testId)
        {
            List<TestResultVisual> testResultVisuals = new List<TestResultVisual>();

            testResultVisuals.Add(new TestResultVisual
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                Result = string.Empty
            });

            return testResultVisuals;
        }
        /// <summary>
        /// Creates and returns a list of TestResultTaximeter objects.
        /// </summary>
        private async Task<List<TestResultTaximeter>> InsertTestResultTaximeter(string testId)
        {
            List<TestResultTaximeter> testResultTaximeters = new List<TestResultTaximeter>();

            testResultTaximeters.Add(new TestResultTaximeter
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                Test1 = 0,
                Test2 = 0,
                Test3 = 0,
                Test4 = 0,
                WaitingTimeResult = string.Empty,
                LongDistanceTestResult = string.Empty,
                AntiTamperingResult = string.Empty,
                Result = string.Empty,
                DynoInd = false
            });

            return testResultTaximeters;
        }
        /// <summary>
        /// Creates and returns a list of TestConfigTaximeter objects.
        /// </summary>
        private async Task<List<TestConfigTaximeter>> InsertTestConfigTaximeter(string testId, string userId, string vehicleId)
        {
            List<TestConfigTaximeter> testConfigTaximeters = new List<TestConfigTaximeter>();

            testConfigTaximeters.Add(new TestConfigTaximeter
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                SpeedSetting = 0,
                SpeedTestMode = string.Empty,
                Propulsion = string.Empty,
                WheelTestType = string.Empty,
                MileageSegFirst = 0,
                MileageSegSecond = 0,
                MileageSegThird = 0,
                MileageSegForth = 0,
                SpeedLimitDevice = false,
                SpeedometerTest = false,
                SpeedDisplayDeviceTest = false,
                TaximeterTest = false,
                LongDistanceTest = false,
                AntiTempering = false,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId = userId,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                VehicleId = vehicleId
            });

            return testConfigTaximeters;
        }
        /// <summary>
        /// Creates and returns a list of TestResultSpeedometer objects.
        /// </summary>
        private async Task<List<TestResultSpeedometer>> InsertTestResultSpeedometer(string testId)
        {
            List<TestResultSpeedometer> testResultSpeedometers = new List<TestResultSpeedometer>();

            testResultSpeedometers.Add(new TestResultSpeedometer
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                TestingSpeed = 0,
                MeasuredSpeed = 0,
                Result = string.Empty
            });

            return testResultSpeedometers;
        }
        /// <summary>
        /// Creates and returns a list of TestConfigSpeedometer objects.
        /// </summary>
        private async Task<List<TestConfigSpeedometer>> InsertTestConfigSpeedometer(string testId, string userId, string vehicleId)
        {
            List<TestConfigSpeedometer> testConfigSpeedometers = new List<TestConfigSpeedometer>();

            testConfigSpeedometers.Add(new TestConfigSpeedometer
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                SpeedSetting = 0,
                SpeedTestMode = string.Empty,
                Propulsion = string.Empty,
                WheelTestType = string.Empty,
                MileageSegFirst = 0,
                MileageSegSecond = 0,
                MileageSegThird = 0,
                MileageSegForth = 0,
                SpeedLimitDevice = false,
                SpeedometerTest = false,
                SpeedDisplayDeviceTest = false,
                TaximeterTest = false,
                LongDistanceTest = false,
                AntiTempering = false,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId = userId,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                VehicleId = vehicleId
            });

            return testConfigSpeedometers;
        }
        /// <summary>
        /// Creates and returns a list of TestConfigAxleWeight objects.
        /// </summary>
        private async Task<List<TestConfigAxleWeight>> InsertTestConfigAxleWeight(string testId, string userId, string vehicleId)
        {
            List<TestConfigAxleWeight> testConfigAxleWeights = new List<TestConfigAxleWeight>();

            testConfigAxleWeights.Add(new TestConfigAxleWeight
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                AwbMeasuringMethod = string.Empty,
                AwbTest = string.Empty,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId = userId,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                VehicleId = vehicleId
            });

            return testConfigAxleWeights;
        }
        /// <summary>
        /// Creates and returns a list of TestResultAxleWeight objects.
        /// </summary>
        private async Task<List<TestResultAxleWeight>> InsertTestResultAxleWeight(string testId)
        {
            List<TestResultAxleWeight> testResultAxleWeights = new List<TestResultAxleWeight>();

            testResultAxleWeights.Add(new TestResultAxleWeight
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                Result = string.Empty
            });

            return testResultAxleWeights;
        }
        /// <summary>
        /// Creates and returns a list of TestResultExhaust objects.
        /// </summary>
        private async Task<List<TestResultExhaust>> InsertTestResultExhaust(string testId)
        {
            List<TestResultExhaust> testResultExhaust = new List<TestResultExhaust>();

            testResultExhaust.Add(new TestResultExhaust
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                PetrolInd = false,
                DynoInd = false,
                Result = string.Empty

            });

            return testResultExhaust;
        }

        private async Task<List<TestConfigExhaust>> InsertTestConfigExhaust(string testId, string userId, string vehicleId)
        {
            List<TestConfigExhaust> testConfigAxleExhaust = new List<TestConfigExhaust>();

            testConfigAxleExhaust.Add(new TestConfigExhaust
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                AirIntakeSystem = "",
                Propulsion = "",
                Pgvw = "",
                NumOfAxles = 0,
                HsuLimit = 0,
                RpmLimit = 0,
                IdleDetectionTime = 0,
                HighIdelDetectionTime = 0,
                NumFatTest = 0,
                MaxRpm = 0,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId = userId,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                VehicleId = vehicleId
            });

            return testConfigAxleExhaust;
        }
        /// <summary>
        /// Creates and returns a list of TestResultTilting objects.
        /// </summary>
        private async Task<List<TestResultTilting>> InsertTestResultTilting(string testId)
        {
            List<TestResultTilting> testResult = new List<TestResultTilting>();

            testResult.Add(new TestResultTilting
            {
                Id = Guid.NewGuid().ToString(),
                TestId = testId,
                Result = string.Empty,
            });
            return testResult;
        }
    }
}
