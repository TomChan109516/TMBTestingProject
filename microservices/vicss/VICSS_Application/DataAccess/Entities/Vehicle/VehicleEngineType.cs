namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_engine_type")]
    public class VehicleEngineType : EntryLog
    {

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        [Required]
        public string VehicleEngineTypeId { get; set; }

        //uk
        [Column("vhcl_engine_type_code", TypeName = "nvarchar(2)")]

        public string VehicleEngineTypeCode { get; set; }

        [Column("vhcl_engine_type_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleEngineTypeName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        //Navigation Property
        public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
