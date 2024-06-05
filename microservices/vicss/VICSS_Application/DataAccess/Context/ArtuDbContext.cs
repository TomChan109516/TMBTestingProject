namespace VICSS.Infrastructure.DataAccess.Context
{
    using Microsoft.EntityFrameworkCore;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;

    public class ArtuDbContext : DbContext
    {
        public ArtuDbContext(DbContextOptions<ArtuDbContext> options) : base(options)
        {
        }

        public virtual DbSet<ArtuConfig> ArtuConfigs { get; set; }
        public virtual DbSet<Artu> Artu { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {        

        }
    }
}