using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("watchlist_vehicle")]
    public class WatchlistVehicle
    {

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string WatchListVehicleId { get; set; }

        //fk
        [Column("watchlist_id", TypeName = "nvarchar(40)")]
        [Required]
        public string WatchListId { get; set; }

        //fk
        [Column("vehicle_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleId { get; set; }

        //Navigation Property

        public virtual NewWatchlist Watchlist { get; set; }

        public virtual NewVehicle NewVehicle { get; set; }
    }
}
