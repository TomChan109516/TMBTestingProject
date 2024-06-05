namespace SCS_Backend_API.DTO
{
   
        public class CancelAppointmentDto
        {
            public long AppointmentNumber { get; set; }
        }

        public class AppointmentCancelResponse : HttpStatusResponse
        {
            public long? data { get; set; }
        }
    
}
