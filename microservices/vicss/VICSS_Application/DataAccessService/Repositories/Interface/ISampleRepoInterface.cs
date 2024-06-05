using DataAccessService.Domain;

namespace DataAccessService.Repositories.Interface
{
    public interface ISampleRepoInterface : IGenericRepository<SampleModelClass>
    {
        public Task<List<SampleModelClass>> GetAllData();
    }
}
