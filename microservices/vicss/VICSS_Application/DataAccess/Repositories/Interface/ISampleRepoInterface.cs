using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Domain;
using VICSS.Infrastructure.DataAccess.Entities;

namespace VICSS.Infrastructure.DataAccess.Repositories.Interface
{
    public interface ISampleRepoInterface : IGenericRepository<DbContext, SampleEntityModel>
    {
        public Task<List<SampleModelClass>> GetAllData();
    }
}
