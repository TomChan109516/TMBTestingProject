using DataAccessService.Context;
using DataAccessService.Repositories.Interface;

namespace DataAccessService.Repositories.Implementation
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext _dbContext;

        public UnitOfWork(DataContext dbContext/*, IUserRepository userRepository*/)
        {
            _dbContext = dbContext;
            //UserRepository = userRepository;
        }

        public async Task<bool> SaveChanges()
        {
            int returnVal = await _dbContext.SaveChangesAsync();

            return returnVal > 0 ? true : false;
        }
    }
}
