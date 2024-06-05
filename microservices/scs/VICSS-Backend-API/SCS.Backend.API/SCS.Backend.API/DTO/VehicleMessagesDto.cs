using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class VehicleMessagesDto
    {
        [Required]
        [StringLength(25)]
        public string VehicleId { get; set; }
        public string MessageEn { get; set; } = string.Empty;
        public string MessageCh { get; set; } = string.Empty;
        public string? CreatedBy { get; set; }
        public string? ModifiedBy { get; set; }
    }

    public class VehicleMessagesResponse : HttpStatusResponse
    {
        public VehicleMessagesDto? data { get; set; }
    }
}
