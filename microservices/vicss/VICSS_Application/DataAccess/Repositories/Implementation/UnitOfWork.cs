using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;

namespace VICSS.Infrastructure.DataAccess.Repositories.Implementation
{
    public class UnitOfWork<TContext> : IUnitOfWork<TContext> where TContext : DbContext
    {
        private readonly TContext _dbContext;

        public UnitOfWork(TContext dbContext/*, IUserRepository userRepository*/)
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
