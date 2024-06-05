namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_reg_mark_history")]
    public class VehicleRegMarkHistory : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string VehicleRegistrationMarkHistoryId { get; set; }

        [Column("vhcl_id", TypeName = "nvarchar(40)")]
        public string VehicleId { get; set; }

        [Column("current_reg_mark", TypeName = "nvarchar(10)")]
        public string CurrentRegistrationMark { get; set; }

        [Column("previous_reg_mark", TypeName = "nvarchar(10)")]
        public string PreviousRegistrationMark { get; set; }

        //Navigation Properties
    }
}
