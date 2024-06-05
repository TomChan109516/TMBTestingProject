namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("watchlist_reason")]
    public class WatchlistReason : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("ctr_id", TypeName = "nvarchar(40)")]
        public string CentreId { get; set; }

        [Column("watchlist_reason_type", TypeName = "nvarchar(1)")]
        public char WatchlistReasonType { get; set; }

        [Column("reason_code", TypeName = "nvarchar(5)")]
        public string ReasonCode { get; set; }

        [Column("description", TypeName = "nvarchar(100)")]
        public string Description { get; set; }

        [Column("activate_ind", TypeName = "bit")]
        public bool ActiveIndicator { get; set; }

        [Column("system_record_indicator", TypeName = "nvarchar(2)")]
        public string SystemRecordIndicator { get; set; }


    }
}
