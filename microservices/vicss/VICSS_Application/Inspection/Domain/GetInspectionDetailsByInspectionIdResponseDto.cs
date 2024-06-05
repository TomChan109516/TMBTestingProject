namespace VICSS.Service.Inspection.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    public class GGetInspectionDetailsByInspectionIdResponseDto : ApiErrorMessage
    {
        public GGetInspectionDetailsByInspectionIdResponseDto() 
        {
            InspectionDetailsDtos = new List<InspectionDetailsDto>();
        }

        [JsonPropertyName("inspectionDetails")]
        public List<InspectionDetailsDto> InspectionDetailsDtos { get; set; }
    }
}
