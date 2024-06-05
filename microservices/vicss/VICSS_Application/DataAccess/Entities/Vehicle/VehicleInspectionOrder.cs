namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_inspection_order")]
    public class VehicleInspectionOrder : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        [Required]
        public string VehicleInspectionOrderId { get; set; }

        //uk
        [Column("vhcl_insp_ord_code", TypeName = "nvarchar(2)")]
        public string VehicleInspectionOrderCode { get; set; }

        [Column("vhcl_insp_ord_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleInspectionOrderName { get; set; }

        [Column("description", TypeName = "text")]
        public string Description { get; set; }

        //Navigation Property
    }
}
