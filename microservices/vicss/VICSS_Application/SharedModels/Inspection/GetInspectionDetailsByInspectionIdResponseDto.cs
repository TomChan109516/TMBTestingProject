namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    public class GetInspectionDetailsByInspectionIdResponseDto : ApiErrorMessage
    {
        public GetInspectionDetailsByInspectionIdResponseDto() 
        {
            InspectionDetailsDtos = new List<InspectionDetailsDto>();
        }

        [JsonPropertyName("inspectionDetails")]
        public List<InspectionDetailsDto> InspectionDetailsDtos { get; set; }
    }
}
