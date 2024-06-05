using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    public class Attachment
    {
        [Key]
        public int Attachment_Key { get; set; }
        public long AppointmentNumber { get; set; }
        public string ChassisNumber { get; set; }
        public string CentreCode { get; set; }
        public DateTime SubmissionDateTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string File { get; set; }
        public string FileExtension { get; set; }
        public string SubmittedBy { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string AdditionalMessage { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;
        public string AttachmentFor { get; set; } = string.Empty;
    }
}
