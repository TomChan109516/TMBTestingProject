using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SCS_Backend_API.Models1;

namespace SCS_Backend_API.Data
{
    public class AppDBContextEF : DbContext
    {
        public AppDBContextEF(DbContextOptions<AppDBContextEF> options) : base(options)
        {
        }
        public virtual DbSet<Login> SCS_Logins { get; set; }
        public virtual DbSet<Center> SCS_Centers { get; set; }
        public virtual DbSet<VehicleInformation> SCS_VehicleInfo { get; set; }
        public virtual DbSet<Lane> SCS_Lanes { get; set; }
        public virtual DbSet<ExamCodes> SCS_ExamCodes { get; set; }
        public virtual DbSet<VehicleClass> SCS_VehicleClasses { get; set; }
        public virtual DbSet<Appointment> SCS_Appointments { get; set; }
        public virtual DbSet<VehicleMake> SCS_VehicleMake { get; set; }
        public virtual DbSet<ExamSlot> SCS_ExamSlotsInformation { get; set; }
        public virtual DbSet<SubClass> SCS_SubClasses { get; set; }
        public virtual DbSet<AppointmentHistory> SCS_AppointmentHistory { get; set; }
        public virtual DbSet<BookingChannel> SCS_BookingChannel { get; set; }
        public virtual DbSet<VehicleCountryCode> SCS_VehicleCountryCodes { get; set; }
        public virtual DbSet<SpecialEvents> SCS_SpecialEvents { get; set; }
        public virtual DbSet<InspectionLanes> SCS_InspectionLanes { get; set; }
        public virtual DbSet<Attachment> SCS_Attachment { get; set; }

        public virtual DbSet<WatchList> SCSWatchList { get; set; }
        public virtual DbSet<WatchListReason> SCS_WatchListReason { get; set; }

        //New tables : start 

        //Login and User Auth tables
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<UserWorkday> UsersWorkday { get; set; }
        public virtual DbSet<UserPrivilege> UserPrivileges { get; set; }
        public virtual DbSet<UserAuth> UserAuths { get; set; }
        public virtual DbSet<UserGroup> UserGroups { get; set; }
        public virtual DbSet<UserInUserGroups> UserInUserGroups { get; set; }
        public virtual DbSet<UserWorkday> UserWorkdays { get; set; }
        //--

        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<NewAppointment> Appointments { get; set; }
        public virtual DbSet<LaneTimeslot> LaneTimeslots { get; set; }
        public virtual DbSet<DynoTimeslot> DynoTimeslots { get; set; }
        public virtual DbSet<NewVehicle> Vehicles { get; set; }
        public virtual DbSet<VehicleType> VehicleTypes { get; set; }
        public virtual DbSet<Inspection> Inspections { get; set; }
        public virtual DbSet<InspectionType> InspectionTypes { get; set; }
        public virtual DbSet<InspectionTypeForVehicleType> InspectionTypeForVehicleTypes { get; set; }
        public virtual DbSet<Test> Tests { get; set; }
        public virtual DbSet<New_Centre> NewCentres { get; set; }
        public virtual DbSet<CenterHoliday> CenterHolidays { get; set; }
        public virtual DbSet<New_Lane> Lanes { get; set; }
        public virtual DbSet<LaneAvailVehicle> LaneAvailVehicles { get; set; }
        public virtual DbSet<LaneAvailInspType> LaneAvailInspTypes { get; set; }
        public virtual DbSet<SpecialEvent> SpecialEvents { get; set; }
        public virtual DbSet<ExaminationSchedule> ExaminationSchedules { get; set; }
        public virtual DbSet<ExaminationScheduleDetails> ExaminationScheduleDetails { get; set; }
        public virtual DbSet<NewWatchlist> WatchLists { get; set; }
        public virtual DbSet<WatchlistUserAccess> WatchlistUserAccesses { get; set; }
        public virtual DbSet<VehicleMessages> SCS_VehicleMessages { get; set; }

        public virtual DbSet<WatchlistVehicle> WatchlistVehicles { get; set; }

        public virtual DbSet<Station> Stations { get; set; }


        //New Tables : end


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Center>()
                .HasIndex(i => i.Ctr_Id).IsUnique();


            modelBuilder.Entity<ExamCodes>()
                   .HasMany(e => e.Centers)
                   .WithMany(c => c.Exams);


            modelBuilder.Entity<Center>()
                .HasMany(i => i.Logins)
                .WithOne(p => p.Centers)
                .HasPrincipalKey(x => x.Ctr_Id)
                .HasForeignKey(i => i.Ctr_Id);


            modelBuilder.Entity<ExamCodes>()
                .HasIndex(i => i.ExamCode).IsUnique();

            //A Vehicle has Many Appointments
            modelBuilder.Entity<VehicleInformation>()
                .HasMany(i => i.Appointments)
                .WithOne(p => p.VehicleInfo)
                .HasPrincipalKey(x => x.VehicleId)
                .HasForeignKey(i => i.VehicleId);

            //A Vehicle has one VehicleMessage
            modelBuilder.Entity<VehicleInformation>()
                .HasOne(i => i.VehicleMessage)
                .WithOne(p => p.VehicleInfo)
                .HasPrincipalKey<VehicleInformation>(x => x.VehicleId)
                .HasForeignKey<VehicleMessages>(i => i.VehicleId);

            modelBuilder.Entity<Appointment>()
                .HasIndex(i => i.AppointmentNumber).IsUnique();

            //Many vehicles can have same vehicle class
            modelBuilder.Entity<VehicleClass>()
                .HasMany(i => i.VehicleInfo)
                .WithOne(p => p.VehicleClasses)
                .HasPrincipalKey(x => x.VehicleClassId)
                .HasForeignKey(i => i.VehicleClassId);

            modelBuilder.Entity<VehicleClass>()
                .HasMany(i => i.SubClasses)
                .WithOne(p => p.VehicleClasses)
                .HasPrincipalKey(x => x.VehicleClassId)
                .HasForeignKey(i => i.VehicleClassId);

            modelBuilder.Entity<VehicleInformation>()
                .HasIndex(i => i.VehicleId).IsUnique();

            modelBuilder.Entity<VehicleInformation>()
                .HasIndex(i => i.ChassisNumber).IsUnique();

            modelBuilder.Entity<VehicleInformation>()
                .HasIndex(i => i.RegMark).IsUnique();

            modelBuilder.Entity<VehicleClass>()
                .HasIndex(i => i.VehicleClassId).IsUnique();

            modelBuilder.Entity<Lane>()
                .HasMany(i => i.Appointments)
                .WithOne(p => p.Lanes)
                .HasPrincipalKey(x => x.LaneId)
                .HasForeignKey(i => i.LaneId);

            modelBuilder.Entity<InspectionLanes>()
                .HasMany(i => i.Centers)
                .WithMany(p => p.InspectionLanes);

            modelBuilder.Entity<Lane>()
                .HasIndex(i => i.LaneId).IsUnique();

            modelBuilder.Entity<VehicleMake>()
                .HasIndex(i => i.MakeId).IsUnique();

            modelBuilder.Entity<SubClass>()
                .HasIndex(i => i.VehicleSubClassId).IsUnique();

            modelBuilder.Entity<Appointment>()
                .HasMany(i => i.History)
                .WithOne(p => p.Appointment)
                .HasPrincipalKey(x => x.AppointmentNumber)
                .HasForeignKey(i => i.AppointmentNumber);


            modelBuilder.Entity<BookingChannel>()
                .HasMany(i => i.Appointments)
                .WithOne(p => p.BookingChannel)
                .HasPrincipalKey(x => x.Bk_Chnl_Id)
                .HasForeignKey(i => i.Bk_Chnl_Id);
            modelBuilder.Entity<BookingChannel>()
                 .HasIndex(i => i.Bk_Chnl_Id).IsUnique();

            modelBuilder.Entity<VehicleCountryCode>()
               .HasMany(i => i.VehicleInfo)
               .WithOne(p => p.VehicleCountryCode)
               .HasPrincipalKey(x => x.CountryCode)
               .HasForeignKey(i => i.CountryCode);

            //New mapping starts

            //One to One between UserAuth and Users

            modelBuilder.Entity<Users>()
                .HasOne(e => e.UserWorkday)
                .WithOne(e => e.Users)
                .HasForeignKey<UserWorkday>(e=> e.UserId)
                ;

            modelBuilder.Entity<Users>()
                .HasOne(e => e.UserAuth)
                .WithOne(e => e.Users)
                .HasForeignKey<UserAuth>(e => e.UserId)
                ;

            //modelBuilder.Entity<UserAuth>()
            //    .HasOne(e => e.Users)
            //    .WithOne(e => e.UserAuth)
            //    .HasForeignKey<Users>(e => e.UserId);

            //One to Many between UserPrivilege and Users 
            modelBuilder.Entity<UserPrivilege>()
                .HasMany(e => e.Users)
                .WithOne(e => e.UserPrivilege)
                .HasForeignKey(e => e.PrivilegeId);

            // One to Many between UserPrivilege and UserGroup
            modelBuilder.Entity<UserPrivilege>()
                .HasMany(e => e.UserGroups)
                .WithOne(i => i.Privilege)
                .HasForeignKey(e => e.PrivilegeId);


            //Many to One between UserinUserGroup and Users            
            modelBuilder.Entity<Users>()
                .HasMany(e => e.InUserGroups)
                .WithOne(i => i.Users)
                .HasForeignKey(i => i.UserId);

            //Many to One between UserinUserGroup and UserGroup
            object willCascadeOnDelete = modelBuilder.Entity<UserGroup>()
                .HasMany(e => e.UserInUserGroup)
                .WithOne(i => i.UserGroupforUser)
                .HasForeignKey(i => i.UserGroupId)
                .OnDelete(DeleteBehavior.Restrict)
                ;

            //Many to One with Centers and Users
            modelBuilder.Entity<New_Centre>()
                .HasMany(i => i.Users)
                .WithOne(i => i.NewCentre)
                .HasForeignKey(i => i.CenterId)
                ;

            //One to One mapping with Appointments and Payments
            modelBuilder.Entity<NewAppointment>()
                .HasOne(i => i.Payment)
                .WithOne(e => e.NewAppointments)
                .HasForeignKey<NewAppointment>(i => i.PaymentId)
                ;

            //Many to One mapping between Center and Payment
            modelBuilder.Entity<Payment>()
                .HasOne(i => i.Centre)
                .WithMany(i => i.Payments)
                .HasForeignKey(i => i.CenterId)
                .OnDelete(DeleteBehavior.Restrict);
            ;

            //Many to one between Appointments and center
            modelBuilder.Entity<NewAppointment>()
                .HasOne(i => i.Centre)
                .WithMany(i => i.NewAppointments)
                .HasForeignKey(i => i.CenterId)
                ;

            //Many to One between Appointment and Vehicle
            modelBuilder.Entity<NewAppointment>()
                .HasOne(i => i.Vehicle)
                .WithMany(i => i.Appointments)
                .HasForeignKey(i => i.VehicleId)
                ;

            //Many to One between Appointment and Lane
            modelBuilder.Entity<NewAppointment>()
                .HasOne(i => i.Lane)
                .WithMany(i => i.Appointments)
                .HasForeignKey(i => i.LaneId)
                .OnDelete(DeleteBehavior.Restrict)
                ;

            //Many to One between Appointment and LaneTimeSlot
            modelBuilder.Entity<NewAppointment>()
                .HasOne(i => i.LaneTimeslot)
                .WithMany(i => i.Appointments)
                .HasForeignKey(i => i.LaneTimeSlotId)
                ;

            //Many to one between LaneTimeslot and Lane
            modelBuilder.Entity<New_Lane>()
                .HasMany(i => i.LaneTimeslot)
                .WithOne(i => i.Lane)
                .HasForeignKey(i => i.LaneId)
                .OnDelete(DeleteBehavior.Restrict)
                ;
            //Many to One between Appointment and Inspection
            modelBuilder.Entity<NewAppointment>()
                .HasOne(i => i.Inspection)
                .WithMany(i => i.Appointments)
                .HasForeignKey(i => i.VehicleInspectionId)
                .OnDelete(DeleteBehavior.Restrict)
                ;

            //Many to One between Appointment and UserAuth
            modelBuilder.Entity<NewAppointment>()
                .HasOne(i => i.UserAuth)
                .WithMany(i => i.Appointments)
                .HasForeignKey(i => i.UserId)
                .OnDelete(DeleteBehavior.Restrict)
                ;

            //Many to Many mapping between Center and center holiday
            //to be checked
            modelBuilder.Entity<New_Centre>()
                .HasMany(i => i.CenterHolidays)
                .WithMany(i => i.Centers)
                ;

            //Many to one mapping between Center and Lane
            modelBuilder.Entity<New_Centre>()
                .HasMany(i => i.Lanes)
                .WithOne(i => i.Center)
                .HasForeignKey(i => i.CenterId)
                ;

            //Many to one mapping between Center and ExaminationSchedule
            modelBuilder.Entity<New_Centre>()
                .HasMany(i => i.ExaminationSchedules)
                .WithOne(i => i.Center)
                .HasForeignKey(i => i.CenterId)
                ;

            //Many to one mapping between ExaminationSchedule and ExaminationScheduleDetails
            modelBuilder.Entity<ExaminationSchedule>()
                .HasMany(i => i.ExaminationScheduleDetails)
                .WithOne(i => i.ExaminationSchedule)
                .HasForeignKey(i => i.VisExamScheduleKey)
                ;

            //Many to one mapping between Special event and Center
            modelBuilder.Entity<New_Centre>()
                .HasMany(i => i.SpecialEvents)
                .WithOne(i => i.Centre)
                .HasForeignKey(i => i.CenterId)
                ;

            //Many to one mapping between VehicleType and Vehicle
            modelBuilder.Entity<NewVehicle>()
                .HasOne(i => i.VehicleType)
                .WithMany(i => i.Vehicles)
                .HasForeignKey(i => i.VehicleTypeId)
                ;


            //Many to Many mapping between VehicleType and LaneAvailVehicle
            //To be checked
            modelBuilder.Entity<VehicleType>()
                .HasMany(i => i.LaneAvailVehicles)
                .WithMany(i => i.VehicleTypes)
                ;

            //Many to Many mapping between Lane and LaneAvailVehicle
            //To be checked
            modelBuilder.Entity<New_Lane>()
                .HasMany(i => i.LaneAvailVehicles)
                .WithMany(i => i.Lanes)
                ;

            //Many to Many mapping between Lane and LaneAvailInspTypes
            //To be checked
            modelBuilder.Entity<New_Lane>()
                .HasMany(i => i.LaneAvailInspTypes)
                .WithMany(i => i.Lanes)
                ;

            //Many to Many mapping between InspectionTypes and LaneAvailInspTypes
            //To be checked
            modelBuilder.Entity<InspectionType>()
                .HasMany(i => i.LaneAvailInspTypes)
                .WithMany(i => i.InspectionTypes)
                ;
            //Many to one mapping between Test and Inspection
            modelBuilder.Entity<Test>()
                .HasMany(i => i.Inspections)
                .WithOne(i => i.Test)
                .HasForeignKey(i => i.InspectionId)
                ;

            //Many to One mapping between Inspection and Inspection Type
            modelBuilder.Entity<Inspection>()
                .HasOne(i => i.InspectionType)
                .WithMany(i => i.Inspections)
                .HasForeignKey(i => i.InspectionTypeId)
                ;

            //Many to One mapping between Inspection and vehicle
            modelBuilder.Entity<Inspection>()
                .HasOne(i => i.NewVehicle)
                .WithMany(i => i.Inspections)
                .HasForeignKey(i => i.VehicleId)
                ;

            //One to Many mapping between Lanes and Inspection
            modelBuilder.Entity<Inspection>()
                .HasOne(i => i.Lane)
                .WithMany(i => i.Inspections)
                .HasForeignKey(i => i.LaneId)
                ;

            //To be checked
            //Many to Many mapping between vehicle type and InspectionTypeForVehicleType
            modelBuilder.Entity<VehicleType>()
                .HasMany(i => i.InspectionTypeForVehicleTypes)
                .WithMany(i => i.VehicleTypes)
                ;

            //To be checked
            //Many to Many mapping between inspection type and InspectionTypeForVehicleType
            modelBuilder.Entity<InspectionType>()
                .HasMany(i => i.InspectionTypeForVehicleTypes)
                .WithMany(i => i.InspectionTypes)
                ;

            //To be checked
            //One to Many mapping between watchlist and watchlistUserAccess
            modelBuilder.Entity<NewWatchlist>()
                .HasMany(e => e.WatchlistUserAccesses)
                .WithOne(e => e.Watchlist)
                .HasForeignKey(e => e.WatchListId)
                ;

            //To be checked
            //One to Many mapping between User and WatchlistUserAccess
            modelBuilder.Entity<Users>()
                .HasMany(e => e.WatchlistUserAccesses)
                .WithOne(e => e.Users)
                .HasForeignKey(e => e.UserId)
                ;

            //To be checked
            //One to Many mapping between User and WatchListVehicle
            modelBuilder.Entity<NewVehicle>()
                .HasMany(e => e.WatchlistVehicles)
                .WithOne(e => e.NewVehicle)
                .HasForeignKey(e => e.VehicleId)
                ;

            //To be checked
            //One to Many mapping between WatchList and WatchListVehicle
            modelBuilder.Entity<NewWatchlist>()
                .HasMany(e => e.WatchlistVehicles)
                .WithOne(e => e.Watchlist)
                .HasForeignKey(e => e.WatchListId)
                ;

            //Many to one mapping between Lane and Station
            modelBuilder.Entity<New_Lane>()
                .HasMany(e => e.Stations)
                .WithOne(e => e.Lanes)
                .HasForeignKey(e => e.LaneId)
                ;

            //New mapping Ends

            base.OnModelCreating(modelBuilder);

            //DB Seed
            //new DbInitializer(modelBuilder).Seed();
        }
    }
}