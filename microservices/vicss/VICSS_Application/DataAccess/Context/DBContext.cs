using Microsoft.EntityFrameworkCore;
using VICSS.Infrastructure.DataAccess.Entities;

namespace VICSS.Infrastructure.DataAccess.Context
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
        }


        public virtual DbSet<SampleEntityModel> Centres { get; set; }
    }
}
