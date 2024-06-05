using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class ExamCodes
    {
        [Key]
        public int Id { get; set; }
        [StringLength(10)]
        public string ExamCode { get; set; }
        [StringLength(50)]
        public string ExamName { get; set;}
        public bool IsPrimary { get; set;}
        public Double ExamFee { get; set; }
        public ICollection<Center> Centers { get; set;}
    }
}
