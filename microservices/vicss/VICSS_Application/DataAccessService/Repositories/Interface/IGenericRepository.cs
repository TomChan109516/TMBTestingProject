namespace DataAccessService.Repositories.Interface
{
    public interface IGenericRepository<T> where T : class
    {
        public Task<T> GetById(int id);
        public Task<IEnumerable<T>> GetAll();
        public Task Add(T entity);
        public void Delete(T entity);
        public void Update(T entity);
    }
}
