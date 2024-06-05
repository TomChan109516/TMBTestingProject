using SCS_Backend_API.Models;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class Center
    {
        [Key]
        public int CTR_Key { get; set; }
        [StringLength(10)]
        public string CTR_Id { get; set; }
        [StringLength(50)]
        public string CTR_Name { get; set; }
        public ICollection<Login> Logins { get; set; }
        public ICollection<ExamCodes> Exams { get; set; }
    }
}