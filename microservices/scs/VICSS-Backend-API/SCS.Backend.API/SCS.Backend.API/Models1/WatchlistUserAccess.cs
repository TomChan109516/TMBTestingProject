using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("watchlist_user_access")]
    public class WatchlistUserAccess
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string WatchListUserAccessId { get; set; }

        //fk
        [Column("watchlist_id", TypeName = "nvarchar(40)")]
        [Required]
        public string WatchListId { get; set; }

        //fk
        [Column("user_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserId { get; set; }

        [Column("alert_target", TypeName = "nvarchar(1)")]
        [Required]
        public string AlertTarget { get; set; }

        //Navigation Property

        public virtual NewWatchlist Watchlist { get; set; }

        public virtual Users Users { get; set; }
    }
}
