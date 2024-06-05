namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_items")]
    public class TestItems : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("test_items", TypeName = "nvarchar(50)")]
        [Required]
        public string TestItem { get; set; }

        //Navigation Properties
        public virtual ICollection<Test> Tests { get; set; }

    }
}
