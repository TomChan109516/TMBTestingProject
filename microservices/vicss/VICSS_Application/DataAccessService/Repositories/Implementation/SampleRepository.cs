using DataAccessService.Context;
using DataAccessService.Domain;
using DataAccessService.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace DataAccessService.Repositories.Implementation
{
    public class SampleRepository : GenericRepository<SampleModelClass> , ISampleRepoInterface
    {
        private readonly DataContext _dbContext;
        public SampleRepository(DataContext context) : base(context)
        {
            _dbContext = context;
        }

        public Task<List<SampleModelClass>> GetAllData()
        {
            throw new NotImplementedException();
        }
    }
}
