using SCS_Backend_API.Models1;

namespace SCS_Backend_API.RepoInterfaces
{
    public interface IUserRepository : IGenericRepository<UserAuth>
    {
        public Task<bool> CreateUser(UserAuth userAuth);

        public Task<UserAuth> GetUserByIdOrUserName(string userId , string userName);

        public Task<UserAuth> GetUserBasedOnID(string userId);
    }
}
