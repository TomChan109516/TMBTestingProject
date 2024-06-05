using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class Login
    {
        [Key]
        public int UserID { get; set; }
        [StringLength(20)]
        public string UserName { get; set; }
        [StringLength(20)]
        public string Password { get; set; }
        [ForeignKey("Centers")]
        [Column("CTR_Key")]
        public int CTR_Key { get; set; }
        public Center Centers { get; set; }
        //public string TDVECenter { get; set; }
        
    }
}