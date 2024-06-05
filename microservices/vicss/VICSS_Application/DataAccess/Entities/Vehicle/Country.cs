namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("country")]
    public class Country : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string CountryId { get; set; }

        //uk
        [Column("cntry_code", TypeName = "nvarchar(3)")]
        public string CountryCode { get; set; }

        [Column("cntry_name", TypeName = "nvarchar(30)")]
        [Required]
        public string CountryName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        //Navigation Property
        public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
