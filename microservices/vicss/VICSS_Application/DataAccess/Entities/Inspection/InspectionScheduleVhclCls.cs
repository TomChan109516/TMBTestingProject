namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("inspection_schedule_vhcl_cls")]
    public class InspectionScheduleVhclCls
    {

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionScheduleVehicleClassId { get; set; }

        [Column("insp_schedule_detail_id", TypeName = "nvarchar(40)")]
        public string InspectionScheduleDetailId { get; set; }

        [Column("vhcl_class_id", TypeName = "nvarchar(40)")]
        public string VehicleClassId { get; set; }

        //Navigation Properties

        public virtual InspectionScheduleDetail InspectionScheduleDetails { get; set; }
    }
}
