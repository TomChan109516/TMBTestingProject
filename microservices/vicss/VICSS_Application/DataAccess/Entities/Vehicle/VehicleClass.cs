namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_class")]
    public class VehicleClass : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string VehicleClassId { get; set; }

        [Column("vhcl_clss_code", TypeName = "nvarchar(4)")]
        [Required]
        public string VehicleClassCode { get; set; }

        [Column("vhcl_sbclss_code", TypeName = "nvarchar(1)")]
        [Required]
        public string VehicleSubClass { get; set; }

        [Column("vhcl_clss_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleClassName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        [Column("vhcl_min_pgv_weight", TypeName = "numeric(6,2)")]
        [Required]
        public float VehicleMinPermittedGrossWeight { get; set; }

        [Column("vhcl_max_pgv_weight", TypeName = "numeric(6,2)")]
        [Required]
        public float VehicleMaxPermittedGrossWeight { get; set; }

        [Column("vhcl_body_type_code", TypeName = "nvarchar(2)")]
        public string? VehicleBodyTypeCode { get; set; }

        //Navigation Property
        public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
