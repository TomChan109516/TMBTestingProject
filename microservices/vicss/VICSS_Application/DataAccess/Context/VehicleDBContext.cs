namespace VICSS.Infrastructure.DataAccess.Context
{
    using Microsoft.EntityFrameworkCore;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    public class VehicleDBContext : DbContext
    {
        public VehicleDBContext(DbContextOptions<VehicleDBContext> options) : base(options)
        {
        }

        //Only Vehicle related tables..
        public virtual DbSet<Vehicle> Vehicles { get; set; }

        public virtual DbSet<ValidVehicle> ValidVehicles { get; set; }
        public virtual DbSet<VehicleClass> VehicleClasses { get; set; }
        public virtual DbSet<VehicleAlert> VehicleAlerts { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<VehicleMake> VehicleMakes { get; set; }
        public virtual DbSet<VehicleStatus> VehicleStatuses { get; set; }
        public virtual DbSet<VehicleModel> VehicleModels { get; set; }
        public virtual DbSet<VehicleBodyType> VehicleBodyTypes { get; set; }
        public virtual DbSet<VehicleEngineType> VehicleEngineTypes { get; set; }
        public virtual DbSet<VehicleColor> VehicleColors { get; set; }
        public virtual DbSet<VehicleCancelReason> VehicleCancelReasons { get; set; }
        public virtual DbSet<VehicleInspectionOrder> VehicleInspectionOrders { get; set; }
        public virtual DbSet<WatchlistReason> WatchlistReasons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);

            //Vehicle table mappings

            //Many to one mapping between Vehicle class and Vehicle
            modelBuilder.Entity<Vehicle>()
                .HasOne(i => i.VehicleClass)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.VehicleClassId)
                ;

            //Many to one mapping between Vehicle Make and Vehicle
            modelBuilder.Entity<Vehicle>()
                .HasOne(i => i.VehicleMake)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.VehicleMakeId)
                ;

            //Many to one mapping between Vehicle Model and Vehicle
            modelBuilder.Entity<Vehicle>()
                .HasOne(i => i.VehicleModel)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.VehicleModelId)
                ;

            //Many to one mapping between Country and Vehicle
            modelBuilder.Entity<Vehicle>()
                .HasOne(i => i.Country)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.CountryId)
                ;

            //Many to one mapping between VehicleBodyType and Vehicle
            modelBuilder.Entity<Vehicle>()
                .HasOne(i => i.VehicleBodyType)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.CountryId)
                ;
            //Many to one mapping between VehicleEngineType and Vehicle
            modelBuilder.Entity<Vehicle>()
                .HasOne(i => i.VehicleEngineType)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.CountryId)
                ;
            //Many to one mapping between VehicleCancelReason and Vehicle
            modelBuilder.Entity<Vehicle>()
                .HasOne(i => i.VehicleCancelReason)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.VehicleCancelReasonId)
                ;

            //Many to one mapping between VehicleStatus and Vehicle
            modelBuilder.Entity<Vehicle>()
                .HasOne(i => i.VehicleStatus)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.VehicleStatusId)
                ;
            ////Many to one mapping between VehicleColor and Vehicle
            //modelBuilder.Entity<Vehicle>()
            //    .HasOne(i => i.PrimaryColor)
            //    .WithMany(i => i.Vehicles)
            //    .HasForeignKey(i => i.VehiclePrimaryColorId)
            //    ;

        }
    }

}
