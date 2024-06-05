using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Kafka
{
    public class KafkaModel
    {
        public KafkaModel(string guid, string message, string action)
        {
            Guid = guid;
            Message = message;
            Action = action;
            ServiceTime = DateTime.Now;
            ServiceName = "Service 1";
        }

        public string Guid { get; set; }
        public string Message { get; set; }
        public string Action { get; set; }
        public string CloseStream { get; set; } = string.Empty;
        public string Ip { get; set; }
        public string ServiceName { get; set; }
        public DateTime ServiceTime { get; set; }
    }
}
