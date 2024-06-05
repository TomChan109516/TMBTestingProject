using SCS_Backend_API.Models;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class BookingChannel
    {
        [Key]
        public int Bk_Chnl_Key { get; set; }
        public string Bk_Chnl_Id { get; set; }
        [Required]
        public string Bk_Chnl_Name { get; set; } = string.Empty;
        public ICollection<Appointment> Appointments { get; set; }
    }
}