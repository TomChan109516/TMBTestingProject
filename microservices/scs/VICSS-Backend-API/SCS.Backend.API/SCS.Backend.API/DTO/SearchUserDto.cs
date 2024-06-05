namespace SCS_Backend_API.DTO
{
    public class SearchUserDto
    {
        public string UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string LoginMethod { get; set; } = string.Empty;
        public bool Status { get; set; }
        public string LastRecordTransactiondate { get; set; } = string.Empty;
    }
}
