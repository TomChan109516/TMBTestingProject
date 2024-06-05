namespace SCS_Backend_API.Interfaces
{
    using SCS_Backend_API.DTO;

    public interface IUserAccountService
    {
        public Task<string> CreateUser(CreateUserDto createUserDto);

        public Task<string> UpdateUser(EditUserDto editUserDto);

        public Task<SearchUserDto> GetUserDetails(string userId);

        public Task<string> DeleteUser(string userId);

        public Task<List<SearchUserDto>> SearchUsers(SearchUserRequestDto searchUserRequestDto);
    }
}
