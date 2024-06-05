namespace VICSS.Infrastructure.DataAccess.Context
{
    using DataAccess.Entities.Inspection;
    using Microsoft.EntityFrameworkCore;

    public class InspectionDBContext : DbContext
    {
        public InspectionDBContext(DbContextOptions<InspectionDBContext> options) : base(options)
        {
        }
        public virtual DbSet<TestConfigHeight> TestConfigHeights { get; set; }
        public virtual DbSet<TestConfigHeadLamp> TestConfigHeadLamps { get; set; }
        public virtual DbSet<TestConfigBrake> TestConfigBrakes { get; set; }
        public virtual DbSet<TestConfigAxleWeight> TestConfigAxleWeights { get; set; }
        public virtual DbSet<TestConfigSpeedometer> TestConfigSpeedometers { get; set; }
        public virtual DbSet<TestConfigTaximeter> TestConfigTaximeters { get; set; }
        public virtual DbSet<TestConfigExhaust> TestConfigExhausts { get; set; }
        public virtual DbSet<TestResultHeight> TestResultHeights { get; set; }
        public virtual DbSet<TestResultHeadLamp> TestResultHeadLamps { get; set; }
        public virtual DbSet<TestResultVisual> TestResultVisuals { get; set; }
        public virtual DbSet<TestResultAxleWeight> TestResultAxleWeights { get; set; }
        public virtual DbSet<TestResultBrake> TestResultBrakes { get; set; }
        public virtual DbSet<TestResultSpeedometer> TestResultSpeedometers { get; set; }
        public virtual DbSet<TestResultTaximeter> TestResultTaximeters { get; set; }
        public virtual DbSet<TestResultUndercarriage> TestResultUndercarriages { get; set; }
        public virtual DbSet<TestResultExhaust> TestResultExhausts { get; set; }
        public virtual DbSet<TestResultTilting> TestResultTiltings { get; set; }
        public virtual DbSet<ExamCodeTestItems> ExamCodeTestItems { get; set; }
        public virtual DbSet<Test> Tests { get; set; }
        public virtual DbSet<TestItems> TestItems { get; set; }
        public virtual DbSet<SkipTestReason> SkipTestReasons { get; set; }
        public virtual DbSet<Station> Stations { get; set; }
        public virtual DbSet<Lane> Lanes { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Inspection> Inspections { get; set; }
        public virtual DbSet<InspectionExamCode> InspectionExamCodes { get; set; }
        public virtual DbSet<InspectionType> InspectionTypes { get; set; }
        public virtual DbSet<InspectionSchedule> InspectionSchedules { get; set; }
        public virtual DbSet<InspectionScheduleDetail> InspectionScheduleDetails { get; set; }
        public virtual DbSet<InspectionScheduleExamCode> InspectionScheduleExamCodes { get; set; }
        public virtual DbSet<InspectionScheduleVhclCls> InspectionScheduleVhclClss { get; set; }
        public virtual DbSet<AbortSuspendTestReason> AbortSuspendTestReasons { get; set; }
        public virtual DbSet<UnconfirmedList> UnconfirmedLists { get; set; }

        public virtual DbSet<Equipment> Equipment { get; set; }
        public virtual DbSet<EquipmentMaintenanceSchedule> EquipmentMaintenances { get; set; }
        


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Inspection>()
                .HasMany(i => i.InspectionExamCodes)
                .WithOne(i => i.Inspections)
                .HasForeignKey(i => i.InspectionId)
                ;

            modelBuilder.Entity<InspectionSchedule>()
                .HasMany(i => i.InspectionScheduleDetails)
                .WithOne(i => i.InspectionSchedules)
                .HasForeignKey(i => i.InspectionScheduleId)
                ;

            modelBuilder.Entity<InspectionScheduleDetail>()
                .HasMany(i => i.InspectionScheduleExamCodes)
                .WithOne(i => i.InspectionScheduleDetails)
                .HasForeignKey(i => i.InspectionScheduleDetailId)
                ;

            modelBuilder.Entity<InspectionScheduleDetail>()
               .HasMany(i => i.InspectionScheduleVhclCls)
               .WithOne(i => i.InspectionScheduleDetails)
               .HasForeignKey(i => i.InspectionScheduleDetailId)
               ;
            modelBuilder.Entity<TestItems>()
              .HasMany(i => i.Tests)
              .WithOne(i => i.TestItems)
              .HasForeignKey(i => i.TestItemsId)
              ;
            modelBuilder.Entity<Inspection>()
             .HasMany(i => i.Tests)
             .WithOne(i => i.Inspections)
             .HasForeignKey(i => i.InspectionId)
             ;
            modelBuilder.Entity<TestResultHeadLamp>()
             .HasOne(i => i.Tests)
             .WithMany(i => i.TestResultHeadLamps)
             .HasForeignKey(i => i.TestId)
             ;
            modelBuilder.Entity<TestResultHeadLamp>()
            .HasOne(i => i.SkipTestReason)
            .WithMany(i => i.TestResultHeadLamps)
            .HasForeignKey(i => i.SkiptTestReasonId)
            ;
            modelBuilder.Entity<TestResultHeight>()
             .HasOne(i => i.Tests)
             .WithMany(i => i.TestResultHeights)
             .HasForeignKey(i => i.TestId)
             ;
            modelBuilder.Entity<TestResultHeight>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultHeights)
            .HasForeignKey(i => i.SkiptTestReasonId)
            ;
            modelBuilder.Entity<TestResultVisual>()
             .HasOne(i => i.Tests)
             .WithMany(i => i.TestResultVisuals)
             .HasForeignKey(i => i.TestId)
             ;
            modelBuilder.Entity<TestResultVisual>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultVisuals)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultAxleWeight>()
             .HasOne(i => i.Tests)
             .WithMany(i => i.TestResultAxleWeights)
             .HasForeignKey(i => i.TestId)
             ;
            modelBuilder.Entity<TestResultAxleWeight>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultAxleWeights)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultBrake>()
            .HasOne(i => i.Tests)
            .WithMany(i => i.TestResultBrakes)
            .HasForeignKey(i => i.TestId)
            ;
            modelBuilder.Entity<TestResultBrake>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultBrakes)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultSpeedometer>()
            .HasOne(i => i.Tests)
            .WithMany(i => i.TestResultSpeedometers)
            .HasForeignKey(i => i.TestId)
            ;
            modelBuilder.Entity<TestResultSpeedometer>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultSpeedometers)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultTaximeter>()
            .HasOne(i => i.Tests)
            .WithMany(i => i.TestResultTaximeters)
            .HasForeignKey(i => i.TestId)
            ;
            modelBuilder.Entity<TestResultTaximeter>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultTaximeters)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultExhaust>()
            .HasOne(i => i.Tests)
            .WithMany(i => i.TestResultExhausts)
            .HasForeignKey(i => i.TestId)
            ;
            modelBuilder.Entity<TestResultTaximeter>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultTaximeters)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultUndercarriage>()
           .HasOne(i => i.Tests)
           .WithMany(i => i.TestResultUndercarriages)
           .HasForeignKey(i => i.TestId)
           ;
            modelBuilder.Entity<TestResultUndercarriage>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultUndercarriages)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<Station>()
            .HasOne(i => i.Lane)
            .WithMany(i => i.Stations)
            .HasForeignKey(i => i.LaneId)
            ;
            modelBuilder.Entity<TestResultBrake>()
             .HasOne(i => i.Tests)
             .WithMany(i => i.TestResultBrakes)
             .HasForeignKey(i => i.TestId)
             ;
            modelBuilder.Entity<TestResultBrake>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultBrakes)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultSpeedometer>()
             .HasOne(i => i.Tests)
             .WithMany(i => i.TestResultSpeedometers)
             .HasForeignKey(i => i.TestId)
             ;
            modelBuilder.Entity<TestResultSpeedometer>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultSpeedometers)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultUndercarriage>()
            .HasOne(i => i.Tests)
            .WithMany(i => i.TestResultUndercarriages)
            .HasForeignKey(i => i.TestId)
            ;
            modelBuilder.Entity<TestResultUndercarriage>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultUndercarriages)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultExhaust>()
            .HasOne(i => i.Tests)
            .WithMany(i => i.TestResultExhausts)
            .HasForeignKey(i => i.TestId)
            ;
            modelBuilder.Entity<TestResultExhaust>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultExhausts)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultTaximeter>()
            .HasOne(i => i.Tests)
            .WithMany(i => i.TestResultTaximeters)
            .HasForeignKey(i => i.TestId)
            ;
            modelBuilder.Entity<TestResultTaximeter>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultTaximeters)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<TestResultTilting>()
            .HasOne(i => i.Tests)
            .WithMany(i => i.TestResultTiltings)
            .HasForeignKey(i => i.TestId)
            ;
            modelBuilder.Entity<TestResultTilting>()
            .HasOne(i => i.SkipTestReasons)
            .WithMany(i => i.TestResultTiltings)
            .HasForeignKey(i => i.SkipTestReasonId)
            ;
            modelBuilder.Entity<InspectionType>()
                .HasMany(i => i.ExamCodeTestItems)
                .WithOne(i => i.InspectionTypes)
                .HasForeignKey(i => i.InspectionTypeId)
                ;
            modelBuilder.Entity<Equipment>()
                .HasOne(i => i.Station)
                .WithMany(i => i.Equipments)
                .HasForeignKey(i => i.StationId)
                ;
        }

    }
}
