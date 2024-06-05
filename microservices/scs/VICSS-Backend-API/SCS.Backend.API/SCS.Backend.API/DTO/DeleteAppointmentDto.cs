namespace SCS_Backend_API.DTO
{
    public class DeleteAppointmentDto
    {
        public long AppointmentNumber { get; set; }
       

    }

   
    public class AppointmentDeleteResponse : HttpStatusResponse
    {
        public DeleteAppointmentDto? data { get; set; }
    }
}

