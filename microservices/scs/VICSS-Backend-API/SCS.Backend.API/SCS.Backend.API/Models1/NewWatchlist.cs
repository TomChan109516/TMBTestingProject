using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("new_watchlist")]
    public class NewWatchlist : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string WatchListId { get; set; }

        [Column("watchlist_reason", TypeName = "text")]
        [Required]
        public string WatchReason { get; set; }

        [Column("trigger_action", TypeName = "nvarchar(32)")]
        [Required]
        public string TriggerAction { get; set; }

        //Navigation Property

        public virtual ICollection<WatchlistUserAccess> WatchlistUserAccesses { get; set; }

        public virtual ICollection<WatchlistVehicle> WatchlistVehicles { get; set; }
    }
}
