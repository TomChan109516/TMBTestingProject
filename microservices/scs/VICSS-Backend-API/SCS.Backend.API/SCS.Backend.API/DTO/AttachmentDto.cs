using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class AttachmentDto
    {
        public long AppointmentNumber { get; set; } = 0;
        [Required]
        public string ChassisNumber { get; set; }
        public string CentreCode { get; set; }
        public DateTime SubmissionDateTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        [Required]
        public IFormFile AttachmentFile { get; set; }
        [Required]
        public string SubmittedBy { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string AdditionalMessage { get; set; } = string.Empty;
        public string AttachmentFor { get; set; } = string.Empty;
    }

    public class AttachmentResponse
    {
        public int Attachment_Key { get; set; }
        public long AppointmentNumber { get; set; }
        public string ChassisNumber { get; set; }
        public string CentreCode { get; set; }
        public DateTime SubmissionDateTime { get; set; }
        public string File { get; set; }
        public string FileExtension { get; set; }
        public string SubmittedBy { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string AdditionalMessage { get; set; } = string.Empty;
        public string AttachmentFor { get; set; } = string.Empty;
    }
}
