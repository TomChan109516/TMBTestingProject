using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using SCS_Backend_API.Data;
using SCS_Backend_API.Models1;
using SCS_Backend_API.RepoInterfaces;

namespace SCS_Backend_API.Repositories
{
    public class UserRepository : GenericRepository<UserAuth> , IUserRepository
    {
        private readonly AppDBContextEF _dbContext;
        public UserRepository(AppDBContextEF dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> CreateUser(UserAuth userAuth)
        {
            bool status = false;

            try
            {
                await _dbContext.UserAuths.AddAsync(userAuth);

                status = true;
            }
            catch (Exception ex) 
            { 
            }
            
            return status;
        }        

        public async Task<UserAuth> GetUserByIdOrUserName(string userId , string userName)
        {
            UserAuth userAuth = null;

            try
            {
                userAuth = _dbContext.UserAuths.AsNoTracking().FirstOrDefault(x => x.UserId == userId || x.UserName == userName);
            }
            catch(Exception ex)
            {

            }

            return userAuth;
        }

        public async Task<UserAuth> GetUserBasedOnID(string userId)
        {
            UserAuth userDetails = null;
            try
            {
                userDetails = _dbContext.UserAuths.AsNoTracking().FirstOrDefault(x => x.UserId == userId);
            }
            catch(Exception ex )
            {

            }

            return userDetails;
        }
    }
}
