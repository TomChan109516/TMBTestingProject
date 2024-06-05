using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("centre_holiday")]
    public class CenterHoliday : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("id", TypeName = "bigint")]
        //[Key]
        //public Int64 CenterHolidayId { get; set; }


        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string CenterHolidayId { get; set; }

        //Foriegn key
        [Column("ctr_id", TypeName = "nvarchar(40)")]        
        public string CenterId { get; set; }

        [Column("hdy_date", TypeName = "datetime")]
        [Required]
        public DateTime HolidayDate { get; set; }

        [Column("hdy_name", TypeName = "nvarchar(100)")]
        [Required]
        public string HolidayName { get; set; }

        [Column("hdy_chi_name", TypeName = "nvarchar(100)")]
        public string HolidayChineseName { get; set; }

        [Column("all_day_hdy", TypeName = "nvarchar(1)")]
        [Required]
        public char AllDayHoliday { get; set; }

        [Column("hdy_start_time", TypeName = "datetime")]
        public DateTime HolidayStartTime { get; set; }

        [Column("hdy_end_time", TypeName = "datetime")]
        public DateTime HolidayEndTime { get; set; }

        //Navigation Property
        public virtual ICollection<New_Centre> Centers { get; set; }
    }
}
