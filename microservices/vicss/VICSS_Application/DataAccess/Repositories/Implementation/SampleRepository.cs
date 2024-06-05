using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Domain;
using VICSS.Infrastructure.DataAccess.Entities;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;

namespace VICSS.Infrastructure.DataAccess.Repositories.Implementation
{
    public class SampleRepository : GenericRepository<DbContext, SampleEntityModel>, ISampleRepoInterface
    {
        private readonly DBContext _dbContext;
        public SampleRepository(DBContext context) : base(context)
        {
            _dbContext = context;
        }

        public Task<List<SampleModelClass>> GetAllData()
        {
            throw new NotImplementedException();
        }
    }
}
