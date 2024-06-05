namespace VICSS.Infrastructure.DataAccess.Context
{
    using Microsoft.EntityFrameworkCore;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;
    public class CentreDBContext : DbContext
    {
        public CentreDBContext(DbContextOptions<CentreDBContext> options) : base(options)
        {
        }

        //Only Centre related tables
        public virtual DbSet<Centre> Centres { get; set; }
        public virtual DbSet<CentreHoliday> CentreHolidays { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //Centre table mappings

            //One to Many mapping between Center and center holiday            
            modelBuilder.Entity<CentreHoliday>()
                .HasOne(i => i.Centres)
                .WithMany(i => i.CentreHolidays)
                .HasForeignKey(i => i.CentreId)
                ;
        }
    }
}
