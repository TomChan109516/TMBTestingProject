namespace VICSS.Infrastructure.DataAccess.Entities.Appointment
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    // In DB we have attachments table name and in excel we have attachment.
    [Table("attachment")]  
    public class Attachment
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string AttachmentId { get; set; }

        //fk
        [Column("vhcl_id", TypeName = "nvarchar(40)")]
        public string VehicleId { get; set; }

        //fk        
        [Column("appt_id", TypeName = "nvarchar(40)")]
        [Required]
        public string? AppointmentId { get; set; }

        //fk        
        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CenterId { get; set; }

        [Column("file_name", TypeName = "nvarchar(8)")]
        [Required]
        public string FileName { get; set; }

        [Column("file_url", TypeName = "nvarchar(128)")]
        [Required]
        public string FileUrl { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        [Column("add_message", TypeName = "text")]
        public string? AdditionalMessage { get; set; }

        //fk        
        [Column("upload_user_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UploadedUserId { get; set; }

        [Column("upload_datetime", TypeName = "datetime")]
        [Required]
        public DateTime UploadDateTime { get; set; }

        //Navigation Properties
    }
}
