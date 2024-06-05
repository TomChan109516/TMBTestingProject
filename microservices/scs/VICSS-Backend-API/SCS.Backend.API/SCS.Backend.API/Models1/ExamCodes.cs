using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
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

        public bool IsActive { get; set; } = true;
        public ICollection<Center> Centers { get; set; }
    }
}
