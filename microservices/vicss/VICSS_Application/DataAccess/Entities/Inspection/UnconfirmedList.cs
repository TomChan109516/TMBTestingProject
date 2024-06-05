namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("unconfirmed_list")]
    public class UnconfirmedList
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("appt_id", TypeName = "nvarchar(40)")]
        [Required]
        public string AppointmentId { get; set; }

        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }
        [Column("vehicle_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleId { get; set; }

        [Column("create_datetime", TypeName = "datetime")]
        [Required]
        public DateTime CreateDatetime { get; set; }

        [Column("remove_datetime", TypeName = "datetime")]
        public DateTime? RemoveDatetime { get; set; }

    }

}
