namespace VICSS.Infrastructure.DataAccess.Entities.Centre
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    
    [Table("centre")]
    public class Centre : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string CentreId { get; set; }

        [Column("ctr_code", TypeName = "nvarchar(4)")]
        [Required]
        public string CentreCode { get; set; }

        [Column("ctr_name", TypeName = "nvarchar(50)")]
        [Required]
        public string CentreName { get; set; }

        [Column("ctr_chi_name", TypeName = "nvarchar(50)")]
        [Required]
        public string CentreChineseName { get; set; }

        [Column("ctr_addr", TypeName = "varchar(max)")]
        public string? CentreAddress { get; set; }

        [Column("ctr_chi_addr", TypeName = "varchar(max)")]
        public string? CentreChineseAddress { get; set; }

        [Column("ctr_phone1", TypeName = "nvarchar(15)")]
        public string? CentrePhone1 { get; set; }

        [Column("ctr_phone2", TypeName = "nvarchar(15)")]
        public string? CentrePhone2 { get; set; }

        [Column("ctr_begin_date", TypeName = "datetime")]
        public DateTime CentreBeginDate { get; set; }

        [Column("ctr_end_date", TypeName = "datetime")]
        public DateTime CentreEndDate { get; set; }

        [Column("ctr_mon_oprt_time_start", TypeName = "nvarchar(4)")]
        public string? CentreMondayOprtnTimeStart { get; set; }

        [Column("ctr_mon_oprt_time_end", TypeName = "nvarchar(4)")]
        public string? CentreMondayOprtnTimeEnd { get; set; }

        [Column("ctr_tue_oprt_time_start", TypeName = "nvarchar(4)")]
        public string? CentreTuesdayOprtnTimeStart { get; set; }

        [Column("ctr_tue_oprt_time_end", TypeName = "nvarchar(4)")]
        public string? CentreTuesdayOprtnTimeEnd { get; set; }

        [Column("ctr_wed_oprt_time_start", TypeName = "nvarchar(4)")]
        public string? CentreWednesdayOprtnTimeStart { get; set; }

        [Column("ctr_wed_oprt_time_end", TypeName = "nvarchar(4)")]
        public string? CentreWednesdayOprtnTimeEnd { get; set; }

        [Column("ctr_thu_oprt_time_start", TypeName = "nvarchar(4)")]
        public string? CentreThrusdayOprtnTimeStart { get; set; }

        [Column("ctr_thu_oprt_time_end", TypeName = "nvarchar(4)")]
        public string? CentreThrusdayOprtnTimeEnd { get; set; }

        [Column("ctr_fri_oprt_time_start", TypeName = "nvarchar(4)")]
        public string? CentreFridayOprtnTimeStart { get; set; }

        [Column("ctr_fri_oprt_time_end", TypeName = "nvarchar(4)")]
        public string? CentreFridayOprtnTimeEnd { get; set; }

        [Column("ctr_sat_oprt_time_start", TypeName = "nvarchar(4)")]
        public string? CentreSaturdayOprtnTimeStart { get; set; }

        [Column("ctr_sat_oprt_time_end", TypeName = "nvarchar(4)")]
        public string? CentreSaturdayOprtnTimeEnd { get; set; }

        [Column("ctr_sun_oprt_time_start", TypeName = "nvarchar(4)")]
        public string? CentreSundayOprtnTimeStart { get; set; }

        [Column("ctr_sun_oprt_time_end", TypeName = "nvarchar(4)")]
        public string? CentreSundayOprtnTimeEnd { get; set; }

        [Column("ctr_contact1", TypeName = "nvarchar(15)")]
        public string? CentreContact1 { get; set; }

        [Column("ctr_contact2", TypeName = "nvarchar(15)")]
        public string? CentreContact2 { get; set; }

        [Column("fax_no", TypeName = "nvarchar(15)")]
        public string? FaxNumber { get; set; }

        [Column("email", TypeName = "nvarchar(40)")]
        public string? Email { get; set; }

        [Column("ctr_mon_active_ind", TypeName = "boolean")]
        [Required]
        public bool CentreMondayActiveIndicator { get; set; }

        [Column("ctr_tue_active_ind", TypeName = "boolean")]
        [Required]
        public bool CentreTuesdayActiveIndicator { get; set; }

        [Column("ctr_wed_active_ind", TypeName = "boolean")]
        [Required]
        public bool CentreWednesdayActiveIndicator { get; set; }

        [Column("ctr_thu_active_ind", TypeName = "boolean")]
        [Required]
        public bool CentreThursdayActiveIndicator { get; set; }

        [Column("ctr_fri_active_ind", TypeName = "boolean")]
        [Required]
        public bool CentreFriayActiveIndicator { get; set; }

        [Column("ctr_sat_active_ind", TypeName = "boolean")]
        [Required]
        public bool CentreSaturdayActiveIndicator { get; set; }

        [Column("ctr_sun_active_ind", TypeName = "boolean")]
        [Required]
        public bool CentreSundayActiveIndicator { get; set; }

        //Navigation Properties
        public virtual ICollection<CentreHoliday> CentreHolidays { get; set; }
    }
}
