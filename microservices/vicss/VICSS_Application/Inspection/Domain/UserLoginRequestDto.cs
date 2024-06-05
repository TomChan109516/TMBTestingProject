namespace VICSS.Service.Inspection.Domain
{
    using MediatR;

    public class UserLoginRequestDto : IRequest<UserLoginResponseDto>
    {
        public UserLoginRequestDto() { }
        public string UserID { get; set; }
        public string Password { get; set; }
        public string? IpAddress { get; set; }
    }
}
