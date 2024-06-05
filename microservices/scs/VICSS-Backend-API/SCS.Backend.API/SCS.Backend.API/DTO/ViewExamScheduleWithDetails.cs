namespace SCS_Backend_API.DTO
{
    public class ViewExamScheduleWithDetails
    {
        public virtual ViewExamScheduleDto ViewExamScheduleDto { get; set; }
        public virtual List<CreateExamScheduleDetailsDto> CreateExamScheduleDetailsDto { get;set; }

        
    }

    public class ViewExamScheduleWithDetailsResponse : HttpStatusResponse
    {
        public ViewExamScheduleWithDetails? data { get; set; }
    }
}
