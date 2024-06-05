namespace VICSS.Infrastructure.DataAccess.Context
{
    using Microsoft.EntityFrameworkCore;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccesss.Entities.LaneConfiguration;

    public class LaneConfigurationDBContext : DbContext
    {
        public LaneConfigurationDBContext(DbContextOptions<LaneConfigurationDBContext> options) : base(options)
        {
        }
        public virtual DbSet<Lane> Lanes { get; set; }
        public virtual DbSet<LaneAvailInspType> LaneAvailInspTypes { get; set; }
        public virtual DbSet<LaneTimeslot> LaneTimeslots { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Lane>()
                .HasMany(i => i.LaneAvailInspTypes)
                .WithOne(i => i.Lanes)
                .HasForeignKey(i => i.LaneId)
                ;

            //Many to one between LaneTimeslot and Lane
            modelBuilder.Entity<Lane>()
                .HasMany(i => i.LaneTimeslot)
                .WithOne(i => i.Lane)
                .HasForeignKey(i => i.LaneId)                
                ;
        }

    }
}
