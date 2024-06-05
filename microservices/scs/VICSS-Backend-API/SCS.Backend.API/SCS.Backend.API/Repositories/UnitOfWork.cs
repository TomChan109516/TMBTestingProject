using SCS_Backend_API.Data;
using SCS_Backend_API.RepoInterfaces;

namespace SCS_Backend_API.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDBContextEF _dbContext;
        public IUserRepository UserRepository { get; set; }

        public UnitOfWork(AppDBContextEF dbContext, IUserRepository userRepository)
        {
            _dbContext = dbContext;
            UserRepository = userRepository;
        }

        public async Task<bool> SaveChanges()
        {
            int returnVal = await _dbContext.SaveChangesAsync();

            return returnVal > 0 ? true : false ;
        }
    }
}
