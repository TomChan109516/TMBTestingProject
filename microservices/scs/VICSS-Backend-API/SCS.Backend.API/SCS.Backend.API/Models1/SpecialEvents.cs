using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class SpecialEvents
    {
        [Key]
        public int EventKey { get; set; }
        public string EventId { get; set; }
        public string Ctr_Id { get; set; }
        public string? spcl_event_name { get; set; }
        public string? spcl_event_description { get; set; }
        public DateTime? spcl_event_start_date { get; set; }
        public DateTime? spcl_event_start_time { get; set; }
        public DateTime? spcl_event_end_date { get; set; }
        public DateTime? spcl_event_end_time { get; set; }
        public DateTime? appt_rschd_bgn_date { get; set; }
        public DateTime? appt_rschd_end_date { get; set; }
        public DateTime? last_rec_txn_datetime { get; set; }
        public DateTime? last_rec_txn_type_code { get; set; }
        public DateTime? last_rec_txn_user_id { get; set; }

        public ICollection<Center> Centers { get; set; }
    }
}
