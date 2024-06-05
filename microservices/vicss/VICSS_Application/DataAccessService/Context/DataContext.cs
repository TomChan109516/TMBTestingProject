using DataAccessService.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccessService.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }


        public virtual DbSet<SampleEntityModel> Centres { get; set; }
    }
}
