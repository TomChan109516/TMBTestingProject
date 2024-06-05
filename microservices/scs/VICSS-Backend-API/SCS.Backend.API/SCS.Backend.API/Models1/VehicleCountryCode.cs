using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    public class VehicleCountryCode
    {
        [Key]
        public int CountryCodekey { get; set; }
        public string CountryCode { get; set; }
        public string CountryName { get; set; }

        public ICollection<VehicleInformation> VehicleInfo { get; set; }
    }
}
