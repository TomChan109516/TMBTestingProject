namespace VICSS.Service.Inspection.Interface
{
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;
    public interface ICommonMethods
    {
        public Task<Station?> GetStation(TestDto testDto, string trackingId);
        public Task<Station?> GetStationDetailsbyLane(string stationId, string laneId);
        public Task<Test?> UpdateTest(TestDto testDto, Station station, string result, string skipTestReasonId, string testItemId);
        public Task<TestItems?> GetTestItem(string testItemName);
    }
}
