using SCS_Backend_API;
using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.Models;
using System.Diagnostics.CodeAnalysis;

namespace VICSS_Backend_API.Data
{
    [ExcludeFromCodeCoverage]
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public virtual DbSet<Login> Logins { get; set; }
        public virtual DbSet<Center> Centers { get; set; }
        public virtual DbSet<VehicleInformation> VehicleInfo { get; set; }
        public virtual DbSet<Lane> lanes { get; set; }
        public virtual DbSet<ExamCodes> Exams { get; set; }
        public virtual DbSet<VehicleClass> VehicleClasses { get; set; }
        public virtual DbSet<Appointment> Appointments { get; set; }
        public virtual DbSet<VehicleMake> Make { get; set; }
        public virtual DbSet<ExamSlot> ExamSlotsInformation { get; set; }
        public virtual DbSet<SubClass> SubClasses { get; set; }
        public virtual DbSet<BookingChannel> BookingChannels { get; set; }
      



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<Center>()
                .HasMany(i => i.Logins)
                .WithOne(p => p.Centers)
                .HasForeignKey(i => i.CTR_Key)
                .IsRequired(true);

            modelBuilder.Entity<Center>()
                .HasIndex(i => i.CTR_Id).IsUnique();

            modelBuilder.Entity<ExamCodes>()
                .HasMany(e => e.Centers)
                .WithMany(c => c.Exams);

            modelBuilder.Entity<ExamCodes>()
                .HasIndex(i => i.ExamCode).IsUnique();

            modelBuilder.Entity<VehicleInformation>()
                .HasIndex(p => new { p.RegMark, p.ChassisNumber, p.VehicleClassId }).IsUnique();

            //A Vehicle has Many Appointments
            modelBuilder.Entity<VehicleInformation>()
                .HasMany(i => i.Appointments)
                .WithOne(p => p.VehicleInfo)
                .HasForeignKey(i => i.VehicleId);

            //Many vehicles can have same vehicle class
            modelBuilder.Entity<VehicleClass>()
                .HasMany(i => i.VehicleInfo)
                .WithOne(p => p.VehicleClasses)
                .HasForeignKey(i => i.VehicleClassId);

            //Many Subclasses can have same vehicle class
            modelBuilder.Entity<VehicleClass>()
                .HasMany(i => i.SubClasses)
                .WithOne(p => p.VehicleClass)
                .HasForeignKey(i => i.VehicleClassId);

            //Many Appointments can be booked from one booking channel
            modelBuilder.Entity<BookingChannel>()
                .HasMany(i => i.Appointments)
                .WithOne(p => p.BookingChannel)
                .HasPrincipalKey(x => x.Bk_Chnl_Id)
                .HasForeignKey(i => i.Bk_Chnl_Id);
            modelBuilder.Entity<BookingChannel>()
                 .HasIndex(i => i.Bk_Chnl_Id).IsUnique();

            base.OnModelCreating(modelBuilder);
        }
    }
}


