﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VICSS.Infrastructure.DataAccess.Entities
{
    [Table("New_centre")]
    public class SampleEntityModel
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string CenterId { get; set; }

        [Column("ctr_name", TypeName = "nvarchar(50)")]
        [Required]
        public string CenterName { get; set; }

        [Column("ctr_chi_name", TypeName = "nvarchar(50)")]
        [Required]
        public string CenterChineseName { get; set; }

        [Column("ctr_addr", TypeName = "text")]
        public string CenterAddress { get; set; }

        [Column("ctr_chi_addr", TypeName = "text")]
        public string CenterChineseAddress { get; set; }

        [Column("ctr_phone1", TypeName = "nvarchar(15)")]
        public string CenterPhone1 { get; set; }

        [Column("ctr_phone2", TypeName = "nvarchar(15)")]
        public string CenterPhone2 { get; set; }

        [Column("ctr_begin_date", TypeName = "datetime")]
        [Required]
        public DateTime CenterBeginDate { get; set; }

        [Column("ctr_end_date", TypeName = "datetime")]
        [Required]
        public DateTime CenterEndDate { get; set; }

        [Column("ctr_mon_oprt_time_start", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterMondayOprtnTimeStart { get; set; }

        [Column("ctr_mon_oprt_time_end", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterMondayOprtnTimeEnd { get; set; }

        [Column("ctr_tue_oprt_time_start", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterTuesdayOprtnTimeStart { get; set; }

        [Column("ctr_tue_oprt_time_end", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterTuesdayOprtnTimeEnd { get; set; }

        [Column("ctr_wed_oprt_time_start", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterWednesdayOprtnTimeStart { get; set; }

        [Column("ctr_wed_oprt_time_end", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterWednesdayOprtnTimeEnd { get; set; }

        [Column("ctr_thu_oprt_time_start", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterThrusdayOprtnTimeStart { get; set; }

        [Column("ctr_thu_oprt_time_end", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterThrusdayOprtnTimeEnd { get; set; }

        [Column("ctr_fri_oprt_time_start", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterFridayOprtnTimeStart { get; set; }

        [Column("ctr_fri_oprt_time_end", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterFridayOprtnTimeEnd { get; set; }

        [Column("ctr_sat_oprt_time_start", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterSaturdayOprtnTimeStart { get; set; }

        [Column("ctr_sat_oprt_time_end", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterSaturdayOprtnTimeEnd { get; set; }

        [Column("ctr_sun_oprt_time_start", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterSundayOprtnTimeStart { get; set; }

        [Column("ctr_sun_oprt_time_end", TypeName = "nvarchar(4)")]
        [Required]
        public string CenterSundayOprtnTimeEnd { get; set; }

    }
}
