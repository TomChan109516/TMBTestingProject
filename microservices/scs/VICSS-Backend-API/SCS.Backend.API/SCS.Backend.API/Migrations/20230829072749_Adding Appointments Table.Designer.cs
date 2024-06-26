﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VICSS_Backend_API.Data;

#nullable disable

namespace SCS_Backend_API.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230829072749_Adding Appointments Table")]
    partial class AddingAppointmentsTable
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CenterExamCodes", b =>
                {
                    b.Property<int>("CentersCTR_Key")
                        .HasColumnType("int");

                    b.Property<int>("ExamsId")
                        .HasColumnType("int");

                    b.HasKey("CentersCTR_Key", "ExamsId");

                    b.HasIndex("ExamsId");

                    b.ToTable("CenterExamCodes");
                });

            modelBuilder.Entity("SCS_Backend_API.Center", b =>
                {
                    b.Property<int>("CTR_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CTR_Key"));

                    b.Property<string>("CTR_Id")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("CTR_Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("CTR_Key");

                    b.HasIndex("CTR_Id")
                        .IsUnique();

                    b.ToTable("Centers");
                });

            modelBuilder.Entity("SCS_Backend_API.Login", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserID"));

                    b.Property<int>("CTR_Key")
                        .HasColumnType("int")
                        .HasColumnName("CTR_Key");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("UserID");

                    b.HasIndex("CTR_Key");

                    b.ToTable("Logins");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.Appointment", b =>
                {
                    b.Property<long>("AppointmentNumber")
                        .HasColumnType("bigint");

                    b.Property<string>("CentreCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("ContactNumber")
                        .HasColumnType("bigint");

                    b.Property<string>("ContactPerson")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<double>("ExamFee")
                        .HasColumnType("float");

                    b.Property<string>("FeeWaiver")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FreeOfCharge")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Lane")
                        .HasColumnType("int");

                    b.Property<int>("PrimaryExamCode")
                        .HasColumnType("int");

                    b.Property<string>("Remarks")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SupplementaryExamCode")
                        .HasColumnType("int");

                    b.Property<string>("Time")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("VehicleId")
                        .HasColumnType("int");

                    b.HasKey("AppointmentNumber");

                    b.HasIndex("VehicleId");

                    b.ToTable("Appointments");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.ExamCodes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ExamCode")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("ExamName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<bool>("IsPrimary")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("ExamCode")
                        .IsUnique();

                    b.ToTable("Exams");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.Lane", b =>
                {
                    b.Property<int>("LaneId")
                        .HasColumnType("int");

                    b.Property<string>("Floor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("laneType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("LaneId");

                    b.ToTable("lanes");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.VehicleClass", b =>
                {
                    b.Property<int>("VehicleClassId")
                        .HasColumnType("int");

                    b.Property<string>("VehicleClassName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("VehicleClassId");

                    b.ToTable("VehicleClasses");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.VehicleInformation", b =>
                {
                    b.Property<int>("VehicleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("VehicleId"));

                    b.Property<long?>("AppointmentNumber")
                        .HasColumnType("bigint");

                    b.Property<string>("Attribute")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CENumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CancelReason")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ChassisNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("DocNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("EngineNumber")
                        .HasColumnType("int");

                    b.Property<string>("FloatName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InspectionOrder")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("LantauVehicle")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("LastUpdated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("LicenceExpiry")
                        .HasColumnType("datetime2");

                    b.Property<string>("Make")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ModelCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double?>("PGVWeight")
                        .HasColumnType("float");

                    b.Property<string>("RegMark")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("SeatCapacity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TANumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("VICO")
                        .HasColumnType("datetime2");

                    b.Property<int>("VehicleClassId")
                        .HasColumnType("int");

                    b.HasKey("VehicleId");

                    b.HasIndex("VehicleClassId");

                    b.HasIndex("RegMark", "ChassisNumber", "VehicleClassId")
                        .IsUnique();

                    b.ToTable("VehicleInfo");
                });

            modelBuilder.Entity("CenterExamCodes", b =>
                {
                    b.HasOne("SCS_Backend_API.Center", null)
                        .WithMany()
                        .HasForeignKey("CentersCTR_Key")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SCS_Backend_API.Models.ExamCodes", null)
                        .WithMany()
                        .HasForeignKey("ExamsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SCS_Backend_API.Login", b =>
                {
                    b.HasOne("SCS_Backend_API.Center", "Centers")
                        .WithMany("Logins")
                        .HasForeignKey("CTR_Key")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Centers");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.Appointment", b =>
                {
                    b.HasOne("SCS_Backend_API.Models.VehicleInformation", "VehicleInfo")
                        .WithMany("Appointments")
                        .HasForeignKey("VehicleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("VehicleInfo");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.VehicleInformation", b =>
                {
                    b.HasOne("SCS_Backend_API.Models.VehicleClass", "VehicleClasses")
                        .WithMany("VehicleInfo")
                        .HasForeignKey("VehicleClassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("VehicleClasses");
                });

            modelBuilder.Entity("SCS_Backend_API.Center", b =>
                {
                    b.Navigation("Logins");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.VehicleClass", b =>
                {
                    b.Navigation("VehicleInfo");
                });

            modelBuilder.Entity("SCS_Backend_API.Models.VehicleInformation", b =>
                {
                    b.Navigation("Appointments");
                });
#pragma warning restore 612, 618
        }
    }
}
