using SCS_Backend_API.Data;

namespace SCS_Backend_API.RepoInterfaces
{
    public interface IUnitOfWork
    {
        public Task<bool> SaveChanges();
    }
}
