using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VICSS.Shared.Models.Kafka
{
    public class KafKaTestRequestDto
    {
        public KafKaTestRequestDto()
        {

        }

        public KafKaTestRequestDto(string EventID, string XmlBody, string typeofMessage)
        {
            this.eventID = EventID;
            this.xmlBody = XmlBody;
            this.typeofMessage = typeofMessage;
        }

        public string? eventID { get; set; }

        public string xmlBody { get; set; }
        public string typeofMessage { get; set; }
        public TypeOfTest typeOfTest { get; set; }

    }

    public enum TypeOfTest
    {
        HT,
        OHM
    }
}
