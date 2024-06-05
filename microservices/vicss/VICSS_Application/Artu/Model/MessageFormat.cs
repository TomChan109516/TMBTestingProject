using System.Diagnostics.CodeAnalysis;

namespace VICSS.Service.Artu.Model
{
    //Acknowledgment model: To be sent to VEEs
    [ExcludeFromCodeCoverage]
    public class AcknowledgementModel
    {
        public int Code { get; set; }
        public string? Message { get; set; }
    }

    //Acknowledgment model: To be sent to VICS using Kafka
    [ExcludeFromCodeCoverage]
    public class MessageToKafka
    {
        public string? XmlBody { get; set; }
    }

    [ExcludeFromCodeCoverage]
    public class ReturnMessageBody
    {
        public AcknowledgementModel? AcknowledgementModel { get; set; }
        public MessageToKafka? MessageToKafka { get; set; }
    }
}
