namespace VICSS.Service.Artu.Interface
{
    public interface ISendMessageToInspection
    {
        public Task SendArtuStatusToVics(string lane, string station, string artuStatus, string veesStatus);

        public Task SendTestResults(string testResultXml, string testId, string lane, string station);
    }
}
