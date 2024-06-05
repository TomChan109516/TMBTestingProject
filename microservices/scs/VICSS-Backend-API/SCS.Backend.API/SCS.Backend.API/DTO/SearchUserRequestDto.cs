namespace SCS_Backend_API.DTO
{
    public class SearchUserRequestDto
    {
        public string UserId { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string AssignedCenter { get; set; } = string.Empty;
        public string AssignedRole { get; set; } = string.Empty;
        public bool AccountStatus { get; set; }
        public string LoginType { get; set; } = string.Empty;
    }
}
