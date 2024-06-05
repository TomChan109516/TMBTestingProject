namespace VICSS.Infrastructure.DataAccess.Repositories.Interface
{
    using System.Linq.Expressions;
    using Microsoft.EntityFrameworkCore;

    public interface IGenericRepository<TContext , TEntity> where TContext : DbContext where TEntity : class
    {
        public Task<TEntity> GetById(string id);
        public Task<IEnumerable<TEntity>> GetAll(Func<object, object> value);
        public Task Add(TEntity entity);
        public void Delete(TEntity entity);
        public void Update(TEntity entity);
        public Task<IEnumerable<TEntity>> GetByQuery(Expression<Func<TEntity, bool>> selector);

        public Task<IEnumerable<TEntity>> GetAll(params Expression<Func<TEntity, object>>[] navigationProperties);

        public Task<IEnumerable<TEntity>> GetByQuery(Expression<Func<TEntity, bool>> selector , params Expression<Func<TEntity, object>>[] navigationProperties);

        public Task<TEntity> GetByQueryFirstOrDefault(Expression<Func<TEntity, bool>> selector);
    }
}
