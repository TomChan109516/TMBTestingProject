namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("user")]
    public class User : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        //FK
        [Column("user_role_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserRoleId { get; set; }

        [Column("user_id", TypeName = "nvarchar(100)")]
        [Required]
        public string UserId { get; set; }

        [Column("pwd_hash_text", TypeName = "nvarchar(256)")]
        [Required]
        public string PasswordHashText { get; set; }

        //FK
        [Column("smartcard_id", TypeName = "nvarchar(40)")]
        public string? SmartCardId { get; set; }

        [Column("dyno_room", TypeName = "nvarchar(1)")]
        public string? DynoRoom { get; set; }

        [Column("real_name", TypeName = "nvarchar(80)")]
        public string? RealName { get; set; }

        [Column("username", TypeName = "nvarchar(60)")]
        public string? UserName { get; set; }

        //FK
        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        //FK
        [Column("station_id", TypeName = "nvarchar(40)")]
        [Required]
        public string StationId { get; set; }

        [Column("signature_url", TypeName = "nvarchar(100)")]
        [Required]
        public string SignatureUrl { get; set; }

        [Column("activate_ind", TypeName = "boolean")]
        [Required]
        public bool ActiveIndicator { get; set; }


    }
}
