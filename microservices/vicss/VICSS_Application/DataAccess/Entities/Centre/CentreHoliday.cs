namespace VICSS.Infrastructure.DataAccess.Entities.Centre
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("centre_holiday")]
    public class CentreHoliday : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string CentreHolidayId { get; set; }

        //Foreign key
        [Column("ctr_id", TypeName = "nvarchar(40)")]
        public string CentreId { get; set; }

        [Column("hdy_date", TypeName = "datetime")]
        [Required]
        public DateTime HolidayDate { get; set; }

        [Column("hdy_name", TypeName = "nvarchar(100)")]
        [Required]
        public string HolidayName { get; set; }

        [Column("hdy_chi_name", TypeName = "nvarchar(100)")]
        public string? HolidayChineseName { get; set; }

        [Column("all_day_hdy", TypeName = "nvarchar(1)")]
        [Required]
        public string AllDayHoliday { get; set; }

        [Column("hdy_start_time", TypeName = "datetime")]
        public DateTime? HolidayStartTime { get; set; }

        [Column("hdy_end_time", TypeName = "datetime")]
        public DateTime? HolidayEndTime { get; set; }

        //Navigation Properties
        public virtual Centre Centres { get; set; }
    }
}
