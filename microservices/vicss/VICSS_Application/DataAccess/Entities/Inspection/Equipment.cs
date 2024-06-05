namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("equipment")]
    public class Equipment : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("equipment_no", TypeName = "nvarchar(10)")]
        [Required]
        public string EquipmentNumber { get; set; }

        [Column("equipment_name", TypeName = "nvarchar(80)")]
        public string? EquipmentName { get; set; }

        [Column("chi_desc", TypeName = "nvarchar(80)")]
        public string? ChineseDescription { get; set; }

        [Column("dyno_room_no_lane_no", TypeName = "nvarchar(2)")]
        [Required]
        public string DynoRoomNoLaneNo { get; set; }

        [Column("station_id", TypeName = "nvarchar(40)")]
        [Required]
        public string StationId { get; set; }

        [Column("type", TypeName = "nvarchar(1)")]
        [Required]
        public string Type { get; set; }

        [Column("make", TypeName = "nvarchar(32)")]
        public string? Make { get; set; }

        [Column("model", TypeName = "nvarchar(32)")]
        public string? Model { get; set; }

        [Column("rating", TypeName = "nvarchar(32)")]
        public string? Rating { get; set; }

        [Column("with_without_ART", TypeName = "nvarchar(32)")]
        public string? WithOrWithoutARTU { get; set; }

        [Column("equipment_SN", TypeName = "nvarchar(32)")]
        public string? EquipmentSerialNumber { get; set; }

        [Column("manufacture_factory", TypeName = "nvarchar(32)")]
        public string? ManufactureFactory { get; set; }

        [Column("manufacture_cycle", TypeName = "nvarchar(1)")]
        public string? ManufactureCycle { get; set; }

        [Column("scheduled_maintenence_from", TypeName = "datetime")]
        public DateTime? ScheduledMaintenenceFrom { get; set; }

        [Column("scheduled_maintenence_to", TypeName = "datetime")]
        public DateTime? ScheduledMaintenenceTo { get; set; }

        [Column("status", TypeName = "nvarchar(1)")]
        [Required]
        public string Status { get; set; }

        [Column("activate_ind", TypeName = "boolean")]
        [Required]
        public bool ActivateInd { get; set; }

        [Column("remark", TypeName = "varchar(max)")]
        public string? Remark { get; set; }

        //Navigation
        public virtual Station Station { get; set; }
    }
}