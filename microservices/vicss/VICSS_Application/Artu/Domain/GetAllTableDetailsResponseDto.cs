using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using VICSS.Shared.Models.Common;
using System.Diagnostics.CodeAnalysis;

namespace VICSS.Service.Artu.Domain
{
    [ExcludeFromCodeCoverage]
    public class GetAllTableDetailsResponseDto : ApiErrorMessage
    {
        public List<EntityDto> Entities { get; set; }
    }
        
        [ExcludeFromCodeCoverage]
        public class EntityDto
        {
            public string ArtuConfigId { get; set; }
            public string LaneId { get; set; }
            public string StationId { get; set; }
            public string VeesIp { get; set; }
            public string VeesPort { get; set; }
            public int MaxLogAge { get; set; }
            public float VEEHeartBeatInterval { get; set; }
            public string Description { get; set; }
            public DateTime LastRecordTransactionDateTime { get; set; }
            public string LastRecordTransactionTypeCode { get; set; }
            public string LastRecordTransactionUserId { get; set; }
        }
}