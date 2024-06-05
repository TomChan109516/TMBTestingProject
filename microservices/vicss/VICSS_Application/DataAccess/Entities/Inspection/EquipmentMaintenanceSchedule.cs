namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("equipment_maintenance_schedule")]
    public class EquipmentMaintenanceSchedule : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("equipment_id", TypeName = "nvarchar(40)")]
        [Required]
        public string EquipmentId { get; set; }

        [Column("maintenance_datetime", TypeName = "datetime")]
        [Required]
        public DateTime MaintenanceDatetime { get; set; }

        [Column("maintenance_reason", TypeName = "varchar(max)")]
        public string? MaintenanceReason { get; set; }

        //Navigation
        public virtual Equipment Equipment { get; set; }
    }
}