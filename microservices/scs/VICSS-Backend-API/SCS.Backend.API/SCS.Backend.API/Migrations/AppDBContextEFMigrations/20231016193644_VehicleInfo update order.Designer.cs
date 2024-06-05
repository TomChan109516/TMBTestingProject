﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SCS_Backend_API.Data;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [DbContext(typeof(AppDBContextEF))]
    [Migration("20231016193644_VehicleInfo update order")]
    partial class VehicleInfoupdateorder
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
                    b.Property<int>("CentersCtr_Key")
                        .HasColumnType("int");

                    b.Property<int>("ExamsId")
                        .HasColumnType("int");

                    b.HasKey("CentersCtr_Key", "ExamsId");

                    b.HasIndex("ExamsId");

                    b.ToTable("CenterExamCodes");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Appointment", b =>
                {
                    b.Property<int>("Appointment_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Appointment_Key"));

                    b.Property<DateTime>("AppointmentDate")
                        .HasColumnType("datetime2");

                    b.Property<long>("AppointmentNumber")
                        .HasColumnType("bigint");

                    b.Property<string>("Appointment_Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Bk_Chnl_Id")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CentreCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ChassisNumber")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<long?>("ContactNumber")
                        .HasColumnType("bigint");

                    b.Property<string>("ContactPerson")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<double>("ExamFee")
                        .HasColumnType("float");

                    b.Property<string>("FeeWaiver")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FreeOfCharge")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HoldTimeSlot")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IsOverBooked")
                        .IsRequired()
                        .HasColumnType("nvarchar(1)");

                    b.Property<string>("LaneId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Last_Txn_Type_Code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Last_Txn_UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ModifiedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("NumberOfReschedules")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentMethod")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentRemark")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PrimaryExamCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RegMark")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Remarks")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Result")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("SecurityCode")
                        .HasColumnType("bigint");

                    b.Property<string>("SupplementaryExamCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Time")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VehicleClassId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VehicleId")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.HasKey("Appointment_Key");

                    b.HasIndex("AppointmentNumber")
                        .IsUnique();

                    b.HasIndex("Bk_Chnl_Id");

                    b.HasIndex("LaneId");

                    b.HasIndex("VehicleId");

                    b.ToTable("SCS_Appointments");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.AppointmentHistory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("AppointmentDate")
                        .HasColumnType("datetime2");

                    b.Property<long>("AppointmentNumber")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Last_Txn_UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Reason")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("TransactionDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("AppointmentNumber");

                    b.ToTable("SCS_AppointmentHistory");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.BookingChannel", b =>
                {
                    b.Property<int>("Bk_Chnl_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Bk_Chnl_Key"));

                    b.Property<string>("Bk_Chnl_Id")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Bk_Chnl_Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Bk_Chnl_Key");

                    b.HasIndex("Bk_Chnl_Id")
                        .IsUnique();

                    b.ToTable("SCS_BookingChannel");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Center", b =>
                {
                    b.Property<int>("Ctr_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Ctr_Key"));

                    b.Property<string>("Ctr_Id")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Ctr_Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.HasKey("Ctr_Key");

                    b.HasIndex("Ctr_Id")
                        .IsUnique();

                    b.ToTable("SCS_Centers");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.ExamCodes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ExamCode")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<double>("ExamFee")
                        .HasColumnType("float");

                    b.Property<string>("ExamName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsPrimary")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("ExamCode")
                        .IsUnique();

                    b.ToTable("SCS_ExamCodes");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.ExamSlot", b =>
                {
                    b.Property<int>("ExamSlotKey")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ExamSlotKey"));

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int>("Quota")
                        .HasColumnType("int");

                    b.Property<string>("Session")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SlotName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ExamSlotKey");

                    b.ToTable("SCS_ExamSlotsInformation");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Lane", b =>
                {
                    b.Property<int>("Lane_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Lane_Key"));

                    b.Property<string>("Floor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("LaneId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LaneType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Lane_Key");

                    b.HasIndex("LaneId")
                        .IsUnique();

                    b.ToTable("SCS_Lanes");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Login", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserID"));

                    b.Property<string>("Ctr_Id")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<DateTime>("LastRecordDeletedate")
                        .HasColumnType("datetime2")
                        .HasColumnName("LAST_REC_DEL_DATE");

                    b.Property<string>("LastRecordTransactionCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("LAST_REC_TXN_TYPE_CODE");

                    b.Property<string>("LastRecordTransactionUserID")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("LAST_REC_TXN_USER_ID");

                    b.Property<DateTime>("LastRecordTransactiondate")
                        .HasColumnType("datetime2")
                        .HasColumnName("LAST_REC_TXN_DATE");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("UserID");

                    b.HasIndex("Ctr_Id");

                    b.ToTable("SCS_Logins");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.SubClass", b =>
                {
                    b.Property<int>("VehicleSubClass_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("VehicleSubClass_Key"));

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("VehicleClassId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("VehicleSubClassId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("VehicleSubClassName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("VehicleSubClass_Key");

                    b.HasIndex("VehicleClassId");

                    b.HasIndex("VehicleSubClassId")
                        .IsUnique();

                    b.ToTable("SCS_SubClasses");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.VehicleClass", b =>
                {
                    b.Property<int>("VehicleClass_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("VehicleClass_Key"));

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("VehicleClassId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("VehicleClassName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("VehicleClass_Key");

                    b.HasIndex("VehicleClassId")
                        .IsUnique();

                    b.ToTable("SCS_VehicleClasses");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.VehicleCountryCode", b =>
                {
                    b.Property<int>("CountryCodekey")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CountryCodekey"));

                    b.Property<string>("CountryCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CountryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CountryCodekey");

                    b.ToTable("SCS_VehicleCountryCodes");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.VehicleInformation", b =>
                {
                    b.Property<int>("Vhcl_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Vhcl_Key")
                        .HasColumnOrder(0);

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Vhcl_Key"));

                    b.Property<DateTime?>("ADApprovalDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Attribute")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double?>("Axle1Weight")
                        .HasColumnType("float")
                        .HasColumnName("Axle1Weight")
                        .HasColumnOrder(15);

                    b.Property<double?>("Axle2Weight")
                        .HasColumnType("float")
                        .HasColumnName("Axle2Weight")
                        .HasColumnOrder(16);

                    b.Property<double?>("Axle3Weight")
                        .HasColumnType("float")
                        .HasColumnName("Axle3Weight")
                        .HasColumnOrder(17);

                    b.Property<double?>("Axle4Weight")
                        .HasColumnType("float")
                        .HasColumnName("Axle4Weight")
                        .HasColumnOrder(18);

                    b.Property<double?>("Axle5Weight")
                        .HasColumnType("float")
                        .HasColumnName("Axle5Weight")
                        .HasColumnOrder(19);

                    b.Property<double?>("Axle6Weight")
                        .HasColumnType("float")
                        .HasColumnName("Axle6Weight")
                        .HasColumnOrder(20);

                    b.Property<double?>("Axle7Weight")
                        .HasColumnType("float")
                        .HasColumnName("Axle7Weight")
                        .HasColumnOrder(21);

                    b.Property<string>("BodyType")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("BodyType")
                        .HasColumnOrder(31);

                    b.Property<string>("CENumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CancelReason")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("CancelReason")
                        .HasColumnOrder(44);

                    b.Property<string>("ChassisNumber")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)")
                        .HasColumnName("ChassisNumber")
                        .HasColumnOrder(9);

                    b.Property<string>("ChassisTrimText")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("ChassisTrimText")
                        .HasColumnOrder(10);

                    b.Property<string>("ContactPerson")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CountryCode")
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("CountryCode")
                        .HasColumnOrder(12);

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("CreatedDate")
                        .HasColumnOrder(36);

                    b.Property<string>("DisplayRegMark")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocNumber")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("DocNumber")
                        .HasColumnOrder(11);

                    b.Property<int?>("EngineNumber")
                        .HasColumnType("int")
                        .HasColumnName("EngineNumber")
                        .HasColumnOrder(37);

                    b.Property<int?>("EngineSize")
                        .HasColumnType("int")
                        .HasColumnName("EngineSize")
                        .HasColumnOrder(38);

                    b.Property<string>("EngineType")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("EngineType")
                        .HasColumnOrder(39);

                    b.Property<DateTime?>("FirstRegDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FloatName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FrontTireSize")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double?>("GRSWeight")
                        .HasColumnType("float")
                        .HasColumnName("GRSWeight")
                        .HasColumnOrder(24);

                    b.Property<string>("HybridVehicle")
                        .HasColumnType("nvarchar(1)");

                    b.Property<string>("InspectionOrder")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("InspectionOrder")
                        .HasColumnOrder(45);

                    b.Property<string>("InspectionOrderCodeList")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("InspectionOrderCodeList")
                        .HasColumnOrder(46);

                    b.Property<string>("InterfaceRecordHashText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<double?>("LUGWeight")
                        .HasColumnType("float")
                        .HasColumnName("LUGWeight")
                        .HasColumnOrder(25);

                    b.Property<bool?>("LantauVehicle")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("LastAllowExamDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("LastRecordedTranscDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("LastRecordedTranscTypeCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastRecordedTranscUserId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("LastUpdated")
                        .HasColumnType("datetime2")
                        .HasColumnName("LastUpdated")
                        .HasColumnOrder(3);

                    b.Property<DateTime?>("LicenceExpiry")
                        .HasColumnType("datetime2")
                        .HasColumnName("LicenceExpiry")
                        .HasColumnOrder(35);

                    b.Property<string>("Make")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MakeId")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("MakeId")
                        .HasColumnOrder(13);

                    b.Property<int?>("ManufactureYear")
                        .HasColumnType("int")
                        .HasColumnName("ManufactureYear")
                        .HasColumnOrder(14);

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Model")
                        .HasColumnOrder(29);

                    b.Property<string>("ModelCode")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("ModelCode")
                        .HasColumnOrder(30);

                    b.Property<DateTime>("ModifiedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("OwnerName")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("OwnerName")
                        .HasColumnOrder(26);

                    b.Property<string>("OwnerNameChinese")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("OwnerNameChinese")
                        .HasColumnOrder(27);

                    b.Property<double?>("PCVWeight")
                        .HasColumnType("float");

                    b.Property<double?>("PGVWeight")
                        .HasColumnType("float")
                        .HasColumnName("PGVWeight")
                        .HasColumnOrder(23);

                    b.Property<string>("PSL")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PVRMDoubleLineIndicator")
                        .HasColumnType("nvarchar(1)");

                    b.Property<string>("PVRMLine1Text")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PVRMLine2Text")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PVRMTrimText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Permit")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("VehiclePermitNumber");

                    b.Property<long?>("PhoneNumber")
                        .HasColumnType("bigint");

                    b.Property<string>("PrimaryColor")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("PrimaryColor")
                        .HasColumnOrder(42);

                    b.Property<bool?>("PrivateRoadVehicleInd")
                        .HasColumnType("bit");

                    b.Property<float?>("RatedPower")
                        .HasColumnType("real");

                    b.Property<string>("RearTireSize")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReferenceNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RegMark")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)")
                        .HasColumnName("RegMark")
                        .HasColumnOrder(5);

                    b.Property<string>("RegMarkDispText")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("RegMarkDispText")
                        .HasColumnOrder(6);

                    b.Property<DateTime?>("RenewalDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("SeatCapacity")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("LowerSeatCapacity")
                        .HasColumnOrder(32);

                    b.Property<string>("SecondaryColor")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("SecondaryColor")
                        .HasColumnOrder(43);

                    b.Property<string>("ServiceAnnotationText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("ServiceRestrictionDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("StandSeatCapacity")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("StandSeatCapacity")
                        .HasColumnOrder(34);

                    b.Property<string>("StatusCode")
                        .HasColumnType("nvarchar(1)")
                        .HasColumnName("StatusCode")
                        .HasColumnOrder(28);

                    b.Property<string>("TANumber")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("TANumber")
                        .HasColumnOrder(41);

                    b.Property<string>("UpperSeatCapacity")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("UpperSeatCapacity")
                        .HasColumnOrder(33);

                    b.Property<DateTime?>("VICO")
                        .HasColumnType("datetime2");

                    b.Property<string>("VehRegistractionDocTransNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VehicleClassId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)")
                        .HasColumnName("VehicleClassId")
                        .HasColumnOrder(7);

                    b.Property<double?>("VehicleHeight")
                        .HasColumnType("float");

                    b.Property<string>("VehicleId")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)")
                        .HasColumnName("VehicleId")
                        .HasColumnOrder(4);

                    b.Property<double?>("VehicleLength")
                        .HasColumnType("float");

                    b.Property<string>("VehicleRemarkText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VehicleSubClassId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("VehicleSubClassId")
                        .HasColumnOrder(8);

                    b.Property<double?>("VehicleWidth")
                        .HasColumnType("float");

                    b.Property<string>("VhclTypeCode")
                        .IsRequired()
                        .HasMaxLength(5)
                        .HasColumnType("nvarchar(5)")
                        .HasColumnName("VhclTypeCode")
                        .HasColumnOrder(1);

                    b.Property<string>("WeightCode")
                        .HasColumnType("nvarchar(1)")
                        .HasColumnName("WeightCode")
                        .HasColumnOrder(22);

                    b.Property<string>("leftHandSteering")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("leftHandSteeringIndicator")
                        .HasColumnType("bit")
                        .HasColumnName("leftHandSteeringIndicator")
                        .HasColumnOrder(40);

                    b.HasKey("Vhcl_Key");

                    b.HasIndex("ChassisNumber")
                        .IsUnique();

                    b.HasIndex("CountryCode");

                    b.HasIndex("RegMark")
                        .IsUnique();

                    b.HasIndex("VehicleClassId");

                    b.HasIndex("VehicleId")
                        .IsUnique();

                    b.ToTable("SCS_VehicleInfo");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.VehicleMake", b =>
                {
                    b.Property<int>("Make_Key")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Make_Key"));

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("MakeId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("MakeName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Make_Key");

                    b.HasIndex("MakeId")
                        .IsUnique();

                    b.ToTable("SCS_VehicleMake");
                });

            modelBuilder.Entity("CenterExamCodes", b =>
                {
                    b.HasOne("SCS_Backend_API.Models1.Center", null)
                        .WithMany()
                        .HasForeignKey("CentersCtr_Key")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SCS_Backend_API.Models1.ExamCodes", null)
                        .WithMany()
                        .HasForeignKey("ExamsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Appointment", b =>
                {
                    b.HasOne("SCS_Backend_API.Models1.BookingChannel", "BookingChannel")
                        .WithMany("Appointments")
                        .HasForeignKey("Bk_Chnl_Id")
                        .HasPrincipalKey("Bk_Chnl_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SCS_Backend_API.Models1.Lane", "Lanes")
                        .WithMany("Appointments")
                        .HasForeignKey("LaneId")
                        .HasPrincipalKey("LaneId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SCS_Backend_API.Models1.VehicleInformation", "VehicleInfo")
                        .WithMany("Appointments")
                        .HasForeignKey("VehicleId")
                        .HasPrincipalKey("VehicleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BookingChannel");

                    b.Navigation("Lanes");

                    b.Navigation("VehicleInfo");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.AppointmentHistory", b =>
                {
                    b.HasOne("SCS_Backend_API.Models1.Appointment", "Appointment")
                        .WithMany("History")
                        .HasForeignKey("AppointmentNumber")
                        .HasPrincipalKey("AppointmentNumber")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Appointment");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Login", b =>
                {
                    b.HasOne("SCS_Backend_API.Models1.Center", "Centers")
                        .WithMany("Logins")
                        .HasForeignKey("Ctr_Id")
                        .HasPrincipalKey("Ctr_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Centers");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.SubClass", b =>
                {
                    b.HasOne("SCS_Backend_API.Models1.VehicleClass", "VehicleClasses")
                        .WithMany("SubClasses")
                        .HasForeignKey("VehicleClassId")
                        .HasPrincipalKey("VehicleClassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("VehicleClasses");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.VehicleInformation", b =>
                {
                    b.HasOne("SCS_Backend_API.Models1.VehicleCountryCode", "VehicleCountryCode")
                        .WithMany("VehicleInfo")
                        .HasForeignKey("CountryCode")
                        .HasPrincipalKey("CountryCode");

                    b.HasOne("SCS_Backend_API.Models1.VehicleClass", "VehicleClasses")
                        .WithMany("VehicleInfo")
                        .HasForeignKey("VehicleClassId")
                        .HasPrincipalKey("VehicleClassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("VehicleClasses");

                    b.Navigation("VehicleCountryCode");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Appointment", b =>
                {
                    b.Navigation("History");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.BookingChannel", b =>
                {
                    b.Navigation("Appointments");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Center", b =>
                {
                    b.Navigation("Logins");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.Lane", b =>
                {
                    b.Navigation("Appointments");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.VehicleClass", b =>
                {
                    b.Navigation("SubClasses");

                    b.Navigation("VehicleInfo");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.VehicleCountryCode", b =>
                {
                    b.Navigation("VehicleInfo");
                });

            modelBuilder.Entity("SCS_Backend_API.Models1.VehicleInformation", b =>
                {
                    b.Navigation("Appointments");
                });
#pragma warning restore 612, 618
        }
    }
}
