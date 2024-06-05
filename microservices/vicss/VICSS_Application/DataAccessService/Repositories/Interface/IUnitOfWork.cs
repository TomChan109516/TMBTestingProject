namespace DataAccessService.Repositories.Interface
{
    public interface IUnitOfWork
    {
        public Task<bool> SaveChanges();
    }
}
