namespace VICSS.Infrastructure.DataAccess.Context
{
    using VICSS.Infrastructure.DataAccess.Entities.Appointment;
    using Microsoft.EntityFrameworkCore;
    public class AppointmentDBContext : DbContext
    {
        public AppointmentDBContext(DbContextOptions<AppointmentDBContext> options) : base(options)
        {
        }

        //Only Appointment related tables..
        public virtual DbSet<Appointment> Appointments { get; set; }
        public virtual DbSet<AppointmentRescheduleHistory> AppointmentRescheduleHistories { get; set; }
        public virtual DbSet<Attachment> Attachments { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Appointment table mappings

            //One to One mapping between Appointment and Payment
            modelBuilder.Entity<Appointment>()
                .HasOne(i => i.Payment)
                .WithOne(i => i.Appointments)
                .HasForeignKey<Appointment>(i => i.PaymentId)
                ;
        }
    }

}
