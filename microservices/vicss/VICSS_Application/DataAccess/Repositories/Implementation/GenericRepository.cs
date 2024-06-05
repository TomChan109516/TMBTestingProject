namespace VICSS.Infrastructure.DataAccess.Repositories.Implementation
{
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using Microsoft.EntityFrameworkCore;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;

    public class GenericRepository<TContext, TEntity> : IGenericRepository<TContext, TEntity> where TContext : DbContext where TEntity : class
    {
        protected readonly TContext _dbContext;

        public GenericRepository(TContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Add(TEntity entity)
        {
            await _dbContext.Set<TEntity>().AddAsync(entity);
        }

        public void Delete(TEntity entity)
        {
            _dbContext.Set<TEntity>().Remove(entity);
        }

        public async Task<IEnumerable<TEntity>> GetAll(Func<object, object> value)
        {
            return await _dbContext.Set<TEntity>().AsNoTracking().ToListAsync();
        }

        public async Task<TEntity> GetById(string id)
        {
            return await _dbContext.Set<TEntity>().FindAsync(id);
        }

        public void Update(TEntity entity)
        {
            _dbContext.Set<TEntity>().Update(entity);
        }

        public async Task<IEnumerable<TEntity>> GetAll(params Expression<Func<TEntity, object>>[] navigationProperties)
        {
            IEnumerable<TEntity> list;

            using (var context = _dbContext)
            {
                IQueryable<TEntity> dbQuery = context.Set<TEntity>();

                //Apply eager loading
                foreach (Expression<Func<TEntity, object>> navigationProperty in navigationProperties)
                    dbQuery = dbQuery.Include<TEntity, object>(navigationProperty);

                list = await dbQuery
                    .AsNoTracking()
                    .ToListAsync<TEntity>();
            }

            return list;
        }

        public async Task<IEnumerable<TEntity>> GetByQuery(Expression<Func<TEntity, bool>> selector)
        {
            return await _dbContext.Set<TEntity>().Where(selector).AsNoTracking().ToListAsync();
        }

        public async Task<IEnumerable<TEntity>> GetByQuery(Expression<Func<TEntity, bool>> selector , params Expression<Func<TEntity, object>>[] navigationProperties)
        {
            IEnumerable<TEntity> list;
        
                      IQueryable<TEntity> dbQuery = this._dbContext.Set<TEntity>().Where(selector);

                //Apply eager loading
                foreach (Expression<Func<TEntity, object>> navigationProperty in navigationProperties)
                    dbQuery = dbQuery.Include<TEntity, object>(navigationProperty);

                list = await dbQuery
                    .AsNoTracking()
                    .ToListAsync<TEntity>();
            
            return list;
        }

        public async Task<TEntity> GetByQueryFirstOrDefault(Expression<Func<TEntity, bool>> selector)
        {
            return await _dbContext.Set<TEntity>().FirstOrDefaultAsync(selector);
        }
    }
}
