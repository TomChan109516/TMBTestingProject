namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vhcl_body_type")]
    public class VehicleBodyType : EntryLog
    {

        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string VehicleBodyTypeId { get; set; }

        //uk
        [Column("vhcl_body_type_code", TypeName = "nvarchar(2)")]
        public string VehicleBodyTypeCode { get; set; }

        [Column("vhcl_body_type_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleBodyTypeName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        //Navigation Property
        public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
