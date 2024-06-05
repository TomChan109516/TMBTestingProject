namespace VICSS.Service.Inspection.Implementation
{
    using AutoMapper;
    using Inspection.Interface;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;
    public class CommonMethods : ICommonMethods
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Station> genericStationRepository;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository;
        private readonly ILogger<CommonMethods> logger;

        public CommonMethods(IMapper mapper, IGenericRepository<InspectionDBContext, Station> genericStationRepository, IGenericRepository<InspectionDBContext, Test> genericTestRepository, IGenericRepository<InspectionDBContext, TestItems> genericTestItemRepository, ILogger<CommonMethods> logger)
        {
            this.mapper = mapper;
            this.genericStationRepository = genericStationRepository;
            this.genericTestRepository = genericTestRepository;
            this.genericTestItemRepository = genericTestItemRepository;
            this.logger = logger;
        }
        public async Task<Test?> UpdateTest(TestDto testDto, Station station, string result, string skipTestReasonId, string testItemId)
        {
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName,"CommonMethods", "UpdateTest Service Initiated.");
                var createdTests = await genericTestRepository.GetByQuery(i => i.InspectionId == testDto.InspectionId && i.TestItems.TestItem == testItemId);
                var createdTest = createdTests.FirstOrDefault();
                if (createdTest == null)
                {
                    return null!;
                }
                var test = mapper.Map<Test>(testDto);
                if (test == null)
                {
                    return null!;
                }

                test.TestId = createdTest.TestId;
                test.TestItemsId = createdTest.TestItemsId;
                test.EndResult = result;
                test.StationId = station.Id;
                test.SkipApprovalInd = !string.IsNullOrEmpty(skipTestReasonId);
                test.Mode = string.IsNullOrEmpty(testDto.Mode) ? CommonConstants.AutoTestMode : testDto.Mode;
                test.Attempt = testDto.Attempt ?? 1;
                test.AbortSuspendTestReasonId = string.IsNullOrEmpty(testDto.AbortSuspendTestReasonId) ? null : testDto.AbortSuspendTestReasonId;
                test.SkipTestReasonId = string.IsNullOrEmpty(skipTestReasonId) ? null : skipTestReasonId;
                test.LastRecordTransactionDateTime = DateTime.UtcNow;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName,"CommonMethods", "UpdateTest Service Completed.");
                return test;
            }
            catch (Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CommonMethods:UpdateTest", ex.ToString());

                return null!;
            }
        }
        public async Task<TestItems?> GetTestItem(string testItemName)
        {
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName,"CommonMethods", "GetTestItem Service Initiated.");
                var testItems = await genericTestItemRepository.GetByQuery(i => i.TestItem == testItemName);
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName,"CommonMethods", "GetTestItem Service Initiated.");
                return testItems.FirstOrDefault();
            }
            catch (Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CommonMethods:GetTestItem", ex.ToString());
                return null!;
            }
        }
        public async Task<Station?> GetStation(TestDto testDto, string trackingId)
        {
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,"CommonMethods", "GetStation Service Initiated.");
                var stations = await genericStationRepository
                .GetByQuery(i => i.Lane.LaneName == testDto.LaneId && i.StationName == testDto.StationId, i => i.Lane);
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,"CommonMethods", "GetStation Service completed .");
                return stations.FirstOrDefault();
            }
            catch (Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "CommonMethods:GetStation", ex.ToString());
                return null!;
            }
        }

        public async Task<Station?> GetStationDetailsbyLane(string stationId, string laneId)
        {
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CommonMethods", "GetStationDetailsbyLane Service Initiated.");
                var stations = await genericStationRepository
                .GetByQuery(i => i.Lane.LaneName == laneId && i.StationName == stationId, i => i.Lane);
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CommonMethods", "GetStationDetailsbyLane Service completed .");
                return stations.FirstOrDefault();
            }
            catch (Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "CommonMethods:GetStationDetailsbyLane", ex.ToString());
                return null!;
            }
        }
    }
}
