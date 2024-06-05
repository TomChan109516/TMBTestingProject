namespace VICSS.Infrastructure.DataAccess.Context
{
    using Microsoft.EntityFrameworkCore;
    using VICSS.Infrastructure.DataAccess.Entities.Configuration;


    public class ConfigurationServiceDBContext : DbContext
    {
        public ConfigurationServiceDBContext(DbContextOptions<ConfigurationServiceDBContext> options) : base(options) 
        { }

        public virtual DbSet<SystemConfig> SystemConfigs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
