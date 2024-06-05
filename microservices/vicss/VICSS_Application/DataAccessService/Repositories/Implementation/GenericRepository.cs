using DataAccessService.Context;
using DataAccessService.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace DataAccessService.Repositories.Implementation
{
    public abstract class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly DataContext _dbContext;

        public GenericRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Add(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
        }

        public void Delete(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }

        public void Update(T entity)
        {
            _dbContext.Set<T>().Update(entity);
        }

    }
}
