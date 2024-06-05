namespace SCS_Backend_API.DTO
{
    public class CreateUserDto
    {
        public string UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
