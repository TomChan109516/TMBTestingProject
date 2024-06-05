using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Contracts;

namespace SCS_Backend_API.Models1
{
    public class Center
    {
        [Key]
        public int Ctr_Key { get; set; }
        [StringLength(10)]
        public string Ctr_Id { get; set; }
        [StringLength(50)]
        public string Ctr_Name { get; set; }
        public bool IsActive { get; set; } = true;
        public ICollection<Login> Logins { get; set; }
        public ICollection<ExamCodes> Exams { get; set; }
        public ICollection<SpecialEvents> SpecialEvent { get; set; }
        public ICollection<WatchList> Wathclist { get; set; }
        public ICollection<InspectionLanes> InspectionLanes { get; set; }
        
    }
}