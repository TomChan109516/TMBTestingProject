namespace VICSS.Infrastructure.DataAccess.Entities.Artu
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using VICSS.Infrastructure.DataAccess.Entities;

    [Table("artu")]
    public class Artu 
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string ArtuId { get; set; }

        [Column("max_log_age", TypeName = "int")]
        [Required]
        [Range(0, 10, ErrorMessage = "MaxLogAge must be a positive number.")]
        public int MaxLogAge { get; set; }

        [Column("vee_heart_beat_interval", TypeName = "numeric(9,2)")]
        [Required]
        [Range(1000.0, 90000.0, ErrorMessage = "Code must be between 10000.0 and 90000.0")]
        public float VEEHeartBeatInterval { get; set; }

    }
}