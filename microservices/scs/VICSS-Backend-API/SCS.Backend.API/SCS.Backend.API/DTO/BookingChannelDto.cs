using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class BookingChannelDto
    {
        public string Bk_Chnl_Id { get; set; }
        public string Bk_Chnl_Name { get; set; }
    }

    public class BookingChannelResponse : HttpStatusResponse
    {
        public List<BookingChannelDto>? data { get; set; }
    }
}