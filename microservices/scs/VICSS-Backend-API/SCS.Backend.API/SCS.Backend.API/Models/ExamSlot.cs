using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class ExamSlot
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ExamSlotKey { get; set; }
        public string SlotName { get; set; }
        public int Quota { get; set; }
        public string Session { get; set; }
    }
}
