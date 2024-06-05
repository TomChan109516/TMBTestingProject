using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class ExamSlot
    {
        [Key]
        public int ExamSlotKey { get; set; }
        public string SlotName { get; set; }
        public int Quota { get; set; }
        public string Session { get; set; }

        public bool IsActive { get; set; } = true;
    }
}
