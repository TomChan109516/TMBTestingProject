namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_cancel_reason")]
    public class VehicleCancelReason : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string VehicleCancelReasonId { get; set; }

        //uk
        [Column("vhcl_cncl_rsn_code", TypeName = "nvarchar(1)")]
        public string VehicleCancelReasonCode { get; set; }

        [Column("vhcl_cncl_rsn_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleCancelReasonName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        //Navigation Property
        public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
