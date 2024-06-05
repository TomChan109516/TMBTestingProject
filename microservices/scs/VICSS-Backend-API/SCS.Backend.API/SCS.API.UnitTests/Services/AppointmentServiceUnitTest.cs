using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Helpers;
using SCS_Backend_API.Models1;
using SCS_Backend_API.Services;
using SCS_Backend_API.Data;
using SCS_Backend_API.Interfaces;
using SCS_API_Unit_Tests.Helper;
using Azure.Core;
using Microsoft.AspNetCore.Mvc;

namespace SCS_API_Unit_Tests.Services
{
    public class AppointmentServiceUnitTest
    {

        private Mock<ILogger<AppointmentService>> mockLogger;
        private IMapper _mapper;
        public AppointmentServiceUnitTest()
        {

            mockLogger = new Mock<ILogger<AppointmentService>>();
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new MapperConfig());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
        }
        [Fact]
        public async Task CreateAppointment_ShouldAddAppointmentToDbContext()
        {
            var appointmentDto = MockData.AppointmentDtoData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;

            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            //Act
            var createdAppointment = await appointmentService.CreateAppointment(appointmentDto);
            //Assert
            Assert.NotNull(createdAppointment);

            // verify
            var retrievedAppointment = await context.SCS_Appointments.FirstOrDefaultAsync(
                a => a.VehicleId == appointmentDto.VehicleId);
            Assert.NotNull(retrievedAppointment);
            Assert.Equal(appointmentDto.VehicleId, retrievedAppointment.VehicleId);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task GetAllLanes_ReturnsListOfLanes()
        {
            var data = MockData.LaneData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase").Options;

            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            

            context.SCS_Lanes.Add(data);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetAllLanes();

            Assert.NotNull(result);
            Assert.Equal("Lanes Fetched Successfully", result.Message);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("4", result!.data[0].LaneId);
            Assert.Equal("TestType", result!.data[0].LaneType);
            Assert.Equal("G", result!.data[0].Floor);

            context.Database.EnsureDeleted();

        }


        [Fact]
        public async Task GetAllLanes_ReturnsEmptyList()
        {

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase").Options;
            using var context = new AppDBContextEF(dbContextOptions);
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetAllLanes();
            Assert.Equal("No such Lane is found for this center", result.Message);
            Assert.Empty(result.data);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task GetVehicleClassDetails_ReturnsListOfVehicleClassDetails()
        {
            var data = MockData.VehicleClassData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;

            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            

            context.SCS_VehicleClasses.Add(data);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetVehicleClassDetails();
            Assert.NotNull(result);
            Assert.Equal("Vehicles Classes Fetched Successfully", result.Message);
            Assert.Equal(200, result.StatusCode);
            Assert.Single(result.data);


            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task GetVehicleClassDetails_ReturnsEmptyList()
        {

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "AppointmentDatabase")
                .Options;

            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();


            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetVehicleClassDetails();
            Assert.Equal("No Vehicle class found", result.Message);
            Assert.Empty(result!.data);

            context.Database.EnsureDeleted();

        }


        [Fact]
        public async Task GetVehicleMakeDetails_ReturnsListOfVehicleMakeDetails()
        {
            var data = MockData.VehicleMakeData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            
            context.SCS_VehicleMake.Add(data);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetVehicleMakeDetails();
            Assert.Equal("Vehicles Make Details Fetched Successfully", result.Message);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("testName", result.data[0].MakeName);
            Assert.Equal("test", result!.data[0].MakeId);

            context.Database.EnsureDeleted();
        }

        [Fact]
        public async Task GetVehicleMakeDetails_ReturnsEmptyListOfVehicleMakeDetails()
        {
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetVehicleMakeDetails();
            Assert.Equal("No such Vehicle Make details found", result.Message);
            Assert.Empty(result.data);

            context.Database.EnsureDeleted();
        }

        [Fact]
        public async Task SearchValidVehicle_ReturnsVehicleDetails()
        {
            var response = MockData.VehicleInformationData();
            VehicleSearchDto data = new VehicleSearchDto { VehicleId = "001" };

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            context.SCS_VehicleInfo.Add(response);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.SearchValidVehicle(data);
            Assert.NotNull(result);
            Assert.Equal("Vehicle(s) Details Fetched Successfully", result.Message);
            Assert.Equal(200, result.StatusCode);

            Assert.Equal("001", result!.data!.RecentAppointments[0].PrimaryExamCode);
            Assert.Equal("TY1", result!.data.RecentAppointments[0].CentreCode);


            context.Database.EnsureDeleted();
        }

        [Fact]
        public async Task SearchValidVehicle_ReturnsNull()
        {
            VehicleSearchDto data = new VehicleSearchDto { VehicleId = "001" };

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.SearchValidVehicle(data);
           

            Assert.Equal("No such vehicle Details found", result.Message);
            Assert.Null(result.data);

            context.Database.EnsureDeleted();
        }

        //[Fact]
        //public async Task GenerateCertificate_ReturnsCertificate()
        //{
        //    var appointment = MockData.AppointmentGenerateCertificateData();
          
        //    var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
        //        .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
        //        .Options;
        //    using var context = new AppDBContextEF(dbContextOptions);
        //    context.Database.EnsureCreated();
        //    context.SCS_Appointments.Add(appointment);

        //    context.SaveChanges();
        //    var appNumber = 1;

        //    var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
        //    var result = await appointmentService.GenerateCertificate(appNumber);

        //    Assert.NotNull(result);
        //    Assert.True(result.Length > 0);

        //    context.Database.EnsureDeleted();

        //}

        //[Fact]
        //public async Task GenerateCertificate_ReturnsNull()
        //{
        //    //var appointment = new Appointment
        //    //{
        //    //    Appointment_Key = 1,
        //    //    AppointmentNumber = 1,
        //    //    CentreCode = "TY1",
        //    //    PrimaryExamCode = "001",
        //    //    CreatedDate = DateTime.UtcNow,
        //    //    ModifiedDate = DateTime.UtcNow,
        //    //    AppointmentDate = DateTime.UtcNow,
        //    //    FreeOfCharge = "No",
        //    //    ExamFee = 122,
        //    //    LaneId = "2",
        //    //    Time = "",
        //    //    SupplementaryExamCode = "008",
        //    //    IsOverBooked = 'N',
        //    //    VehicleId = "001",
        //    //    RegMark = "TestRegMark",
        //    //    ChassisNumber = "TestChassisNumber",
        //    //    VehicleClassId = "001",
        //    //    Appointment_Status = "Booked",
        //    //    Bk_Chnl_Id = "001",
        //    //    Last_Txn_Type_Code = "Insert",
        //    //    Last_Txn_UserId = "Abhiram",
        //    //    Result = "Pass",
        //    //    PaymentStatus = "Booked",
        //    //};
        //    //var VehicleInfo = new VehicleInformation
        //    //{
        //    //    Vhcl_Key = 1,
        //    //    VehicleId = "001",
        //    //    VhclTypeCode = "Valid",
        //    //    VehicleClassId = "001",
        //    //    RegMark = "TestRegMark",
        //    //    ChassisNumber = "TestChassisNumber",
        //    //    IsActive = true,
        //    //    CreatedDate = DateTime.UtcNow,
        //    //    ModifiedDate = DateTime.UtcNow,
        //    //    LastUpdated = DateTime.UtcNow,
        //    //};

        //    var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
        //        .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
        //        .Options;
        //    using var context = new AppDBContextEF(dbContextOptions);
        //    context.Database.EnsureCreated();
        //    //context.SCS_Appointments.Add(appointment);

        //    //context.SCS_VehicleInfo.Add(VehicleInfo);
        //    // context.SaveChanges();
        //    var appNumber = 2;

        //    var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
        //    var result = await appointmentService.GenerateCertificate(appNumber);

        //    Assert.Null(result);


        //    context.Database.EnsureDeleted();
       // }


        [Fact]
        public async Task GetVehicleSubClass_ReturnsListOfVehicleSubClass()
        {
            var subClass = MockData.SubClassData();
            string VehicleClassId = "001";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_SubClasses.Add(subClass);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetVehicleSubClass(VehicleClassId);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal(subClass.VehicleSubClassId, result!.data[0].VehicleSubClassId);
            Assert.Equal(subClass.VehicleSubClassName, result!.data[0].VehicleSubClassName);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task GetVehicleSubClass_ReturnsEmptyList()
        {
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
              .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDB")
              .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetVehicleSubClass("001");

            Assert.Equal("No Sub-Class for this vehicle is found", result.Message);
            Assert.Empty(result.data);
            context.Database.EnsureDeleted();
        }


        [Fact]
        public async Task GetExaminationDates_ReturnWeekendsAndNoQuotaDays()
        {
            var appointment = MockData.AppointmentExamDateData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();
            var date = new DateTime(2022, 2, 2, 10, 00, 00,DateTimeKind.Utc);

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetExaminationDates(date);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal(4, result.data?.Weekends?.Count);

        }

        [Fact]
        public async Task GetExaminationSlots_SlotInformation()
        {
            var appointment = MockData.AppointmentExamSlotData();
            var examSlot = MockData.ExamSlotData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SCS_ExamSlotsInformation.Add(examSlot);
            context.SaveChanges();
            var AppointmentDate = new DateTime(2022, 2, 2, 10, 00, 00, DateTimeKind.Utc);

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetExaminationSlots(AppointmentDate);

            Assert.IsType<Dictionary<string, int>>(result.data);
            Assert.Equal(4, result.data["10:00"]);

        }

        //[Fact]
        //public async Task CreateNewVehicle_ReturnsShouldAddVehicleInformationToDb()
        //{
        //    var data = new CreateVehicleInfoDto()
        //    {
        //        VehicleClassId = "001",
        //        VhclTypeCode = "Valid",
        //        RegMark = "TestRegMark",
        //        ChassisNumber = "TestChassisNyumber",
        //        LastUpdated = DateTime.Now,
        //        ModifiedDate = DateTime.Now,
        //        CreatedDate = DateTime.Now,
        //        IsActive = true

        //    };

        //    var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
        //        .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
        //        .Options;
        //    using var context = new AppDBContextEF(dbContextOptions);
        //    context.Database.EnsureCreated();

        //    var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
        //    var result = await appointmentService.CreateNewVehicleInfo(data);

        //    Assert.NotNull(result);

        //    var retrievedVehicleInfo = await context.SCS_VehicleInfo.FirstOrDefaultAsync(
        //         a => a.ChassisNumber == data.ChassisNumber);
        //    Assert.NotNull(retrievedVehicleInfo);
        //    Assert.Equal(data.ChassisNumber, retrievedVehicleInfo.ChassisNumber);
        //    Assert.Equal("New Vehicle Created Successfully", result.Message);
        //    Assert.Equal(200, result.StatusCode);

        //    context.Database.EnsureDeleted();
        //}

        [Fact]
        public async Task AppointmentEnquiry_ReturnsListOfAppointments()
        {
            var appointment = MockData.AppointmentData();
            var VehicleInfo = MockData.VehicleInformationEnquiryData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "EnquireAppointmentDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            context.SCS_Appointments.Add(appointment);
            context.SCS_VehicleInfo.Add(VehicleInfo);
            context.SaveChanges();
            var data = new AppointmentEnquiryRequestDto
            {
                VehicleId = "001",

            };

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.AppointmentEnquiry(data);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Appointment Created Successfully", result.Message); 
            Assert.Equal("2", result!.data[0].LaneId);
            Assert.Equal("001", result!.data[0].VehicleId);
            Assert.Equal("TY1", result!.data[0].CenterCode);


            context.Database.EnsureDeleted();
        }

        [Fact]
        public async Task AppointmentEnquiry_ReturnsNoAppointment()
        {
            
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "EnquireAppointmentNDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

          
            var data = new AppointmentEnquiryRequestDto
            {
                VehicleId = "001",
            };

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.AppointmentEnquiry(data);

            Assert.Empty(result.data);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("No such Appointment is made", result.Message);
            


            context.Database.EnsureDeleted();
        }
        [Fact]
        public async Task GetAppointment_ReturnsListOfAppointments()
        {
            var appointment = MockData.GetAppointmentData();
            var VehicleInfo = MockData.GetAppointmentVehicleData();
            var booking = MockData.BookingChannelData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "EnquireAppointmentDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            context.SCS_Appointments.Add(appointment);
            context.SCS_VehicleInfo.Add(VehicleInfo);
            context.SCS_BookingChannel.Add(booking);
            context.SaveChanges();
            long data = 1; 

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetAppointment(data);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Appointment Fetched Successfully", result.Message);
            Assert.Equal("001", result!.data.VehicleInfo[0].VehicleId);

            context.Database.EnsureDeleted();
        }
        [Fact]
        public async Task GetAppointment_ReturnsNoAppointment()
        {

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "EnquireAppointmentDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            long data = 1;

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetAppointment(data);

            Assert.Equal(200, result.StatusCode);
            Assert.Equal("No such vehicle Details found", result.Message);


            context.Database.EnsureDeleted();
        }

        [Fact]
        public async Task BookingChannelList_ReturnsListOfBookingChannel()
        {
            var bookingChannel = MockData.BookingChannelData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_BookingChannel.Add(bookingChannel);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.BookingChannelList();

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Booking Channel Information is found", result.Message);
            Assert.Equal("001", result!.data[0].Bk_Chnl_Id);
            Assert.Equal("SCS", result!.data[0].Bk_Chnl_Name);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task BookingChannelList_ReturnsEmptyList()
        {
           
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
           

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.BookingChannelList();

            Assert.Empty(result!.data);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("No Booking Channel Information is found", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task DeleteAppointment_ReturnsSuccesfullAppointmentNumberOfDeletedAppoitnment()
        {
            var appointment = MockData.DeleteAppointmentData();
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.DeleteAppointment(appointmentNumber);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Appointment Deleted Successfully.", result.Message);
 
            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task DeleteAppointment_ReturnsUnsuccesfullForPaymentStatusIsBooked()
        {
            var appointment = MockData.DeleteAppointmentUData();
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "testdb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.DeleteAppointment(appointmentNumber);
            
            Assert.Equal("Appointment cannot be deleted.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task DeleteAppointment_ReturnsUnsuccesfullForAppointmentDateNotToday()
        {
            var appointment = MockData.DeleteAppointment_UData();
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.DeleteAppointment(appointmentNumber);
         
            Assert.Equal("Appointment cannot be deleted.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task DeleteAppointment_ReturnsUnsuccesfullForNoAppointmentFound()
        {
           
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
           
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.DeleteAppointment(appointmentNumber);

            Assert.Equal("Appointment cannot be deleted.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CancelAppointment_ReturnsSuccesfullAppointmentNumberOfCancelledAppoitnment()
        {
            var appointment = MockData.CancelAppointmentData();
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.CancelAppointment(appointmentNumber);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Appointment Cancelled Successfully.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CancelAppointment_ReturnsUnsuccesfullForNoAppointmentFound()
        {

            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.CancelAppointment(appointmentNumber);

            Assert.Equal("Appointment cannot be cancelled.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CancelAppointment_ReturnsUnsuccesfullForCreatedDateToday()
        {
            var appointment = MockData.CancelAppointmentUData();
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.CancelAppointment(appointmentNumber);

            Assert.Equal("Appointment cannot be cancelled.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CancelAppointment_ReturnsUnsuccesfullForAppointmentLessThan14Days()
        {
            var appointment = MockData.CancelAppointment_UData();
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.CancelAppointment(appointmentNumber);

            Assert.Equal("", result.Message);
            Assert.NotEqual(200, result.StatusCode);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task AmendAppointment_ReturnsSuccesfullAppointmentNumberOfAmmendedAppoitnment()
        {
            var appointment = MockData.AmendAppointmentData();
            var request = new AmendAptRequest { AppointmentNumber = 1, PrimaryExamCode = "001", SupplementaryExamCode = "008", ExamFee = 585 };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.AmendAppointment(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Appointment Amended Successfully.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task AmendAppointment_ReturnsUnsuccesfullForNoAppointmentNumberExistInDB()
        {
       var request = new AmendAptRequest { AppointmentNumber = 1, PrimaryExamCode = "001", SupplementaryExamCode = "008", ExamFee = 585 };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.AmendAppointment(request);

            Assert.Equal("Appointment Number does not exist in Database.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task AmendAppointment_ReturnsUnSuccesfullForExamFeeNotSame()
        {
            var appointment = MockData.AmendAppointmentUData();
            var request = new AmendAptRequest { AppointmentNumber = 1, PrimaryExamCode = "001", SupplementaryExamCode = "008", ExamFee = 585 };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.AmendAppointment(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Exam Fee should be same as original appointment.", result.Message);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task VehicleEnquiry_ReturnsSuccesfullListOfVehicleList()
        {
            var vehicleInfo = MockData.VehicleEnquiryData();
            var request = new VehicleEnquiryRequestDto { VehicleId = "001" };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "VehicleDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(vehicleInfo);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.VehicleEnquiry(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Vehicle(s) Details Fetched Successfully", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task VehicleEnquiry_ReturnsUnSuccesfull()
        {
            var request = new VehicleEnquiryRequestDto { VehicleId = "001" };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.VehicleEnquiry(request);

            Assert.Equal(200, result.StatusCode);
            Assert.Equal("No such vehicle Details found", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task GetAppointmentHistory_ReturnsSuccesfullListOfAppoitnmentHistory()
        {
            var response = MockData.VehicleAppointmentHistoryData();
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(response);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetAppointmentHistory(appointmentNumber);
   
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Appointment History Fetched Successfully.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task GetAppointmentHistory_ReturnsUnSuccesfullNoAppointmentHistory()
        {
            var response = MockData.VehicleAppointmentHistoryUData();
            long appointmentNumber = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryAppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(response);
            context.SaveChanges();
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetAppointmentHistory(appointmentNumber);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("No such Appointment History Details Found.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task RescheduleAppointment_ReturnsSuccesfullMessage()
        {
            var appointment = MockData.RescheduleAppointmentData();
            var request = new AppointmentRescheduleRequestDto { AppointmentNumber = 1, AppointmentDate = DateTime.Now, LaneId = "2", IsOverBooked = 'N' };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "RescheduleDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointment);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.RescheduleAppointment(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Appointment Rescheduled Successfully.", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task RescheduleAppointment_ReturnsUnSuccesfullMessage()
        {
            var request = new AppointmentRescheduleRequestDto { AppointmentNumber = 1, AppointmentDate = DateTime.Now, LaneId = "2", IsOverBooked = 'N' };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "RescheduleDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.RescheduleAppointment(request);

            Assert.Null(result.data);
            Assert.Equal("Appointment Number does not exist in Database.", result.Message);

            context.Database.EnsureDeleted();

        }
        //[Fact]
        //public async Task GenerateReprintCertificate_ReturnsCertificate()
        //{
        //    var appointment = MockData.AppointmentGenerateCertificateData();


        //    var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
        //        .UseInMemoryDatabase(databaseName: "GenerateCertificateDB")
        //        .Options;
        //    using var context = new AppDBContextEF(dbContextOptions);
        //    context.Database.EnsureCreated();
        //    context.SCS_Appointments.Add(appointment);

        //    context.SaveChanges();
        //    var appNumber = 1;

        //    var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
        //    var result = await appointmentService.GenerateReprintCertificate(appNumber);

        //    Assert.NotNull(result);
        //    Assert.True(result.Length > 0);

        //    context.Database.EnsureDeleted();

        //}

        [Fact]
        public async Task GetVehicleInformation_ReturnsSuccesfullVehicleInformation()
        {
            var response = MockData.GetVehicleInformationData();
            string vehicleId = "001";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "vehicleDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(response);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetVehicleInformation(vehicleId);


            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Vehicle(s) Details Fetched Successfully", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task GetVehicleInformation_ReturnsUnSuccesfull()
        {
            var request = "001";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "VehicleDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.GetVehicleInformation(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("No such vehicle Details found", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CreateSpecialEvent_ReturnsSuccesfull()
        {
            var data = new CreateSpecialEventRequestDto
            {
                EventId = "1",
                CTR_Id="TY1",
                spcl_event_description="NA",
                spcl_event_start_date= new DateTime(2020, 1, 1,00,00,00,DateTimeKind.Utc),
                spcl_event_end_date=new DateTime(2030,2,2, 00, 00, 00, DateTimeKind.Utc),
            };
            var appointmentData = MockData.AppointmentData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "SpecialEventDB")
                .Options;
            var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(appointmentData);
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            //Act
            var createdAppointment = await appointmentService.CreateSpecialEvent(data);
            //Assert
            Assert.NotNull(createdAppointment);

            // verify
            var retrievedAppointment = await context.SCS_SpecialEvents.FirstOrDefaultAsync(
                a => a.EventId == data.EventId);
            Assert.NotNull(retrievedAppointment);
            Assert.Equal(data.EventId, retrievedAppointment.EventId);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task SearchSpecialEvent_ReturnsListOfSpecialEvents()
        {
            var data = new SpecialEvents
            {
                EventKey=1,
                EventId="1",
                Ctr_Id="TY1",
                spcl_event_name="TestSpecialEvent",
                spcl_event_description="NA",
                spcl_event_start_date= new DateTime(2022,2,1, 00, 00, 00, DateTimeKind.Utc),
                spcl_event_end_date = new DateTime(2022,2,3, 00, 00, 00, DateTimeKind.Utc),

            };
            var request = new SearchSpecialEventRequestDto { Ctr_Id = "TY1", EventId = "1", spcl_event_start_date = new DateTime(2020, 2, 1, 00, 00, 00, DateTimeKind.Utc), spcl_event_end_date = new DateTime(2024, 2, 1) };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "specialevendb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_SpecialEvents.Add(data);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.SearchSpecialEvent(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Special Event Searched Successfully",result.Message);
            Assert.Equal(data.EventId, result.data[0].EventId);
          

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task CreateNewNonValidVehicle_ShouldAddNewNonValidVehicleToDbContext()
        {
            var nvehicle =  new CreateNewNonValidVehicleDto
            {
               
                
                VhclTypeCode = "NV",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber", 
                IsActive = true,
                LastRecordedTranscTypeCode = "Insert",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
            };

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "NonValidDB")
                .Options;

            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            //Act
            var createdAppointment = await appointmentService.CreateNewNonValidVehicle(nvehicle);
            //Assert
            Assert.NotNull(createdAppointment);

            // verify
            var retrievedAppointment = await context.SCS_VehicleInfo.FirstOrDefaultAsync(
                a => a.VhclTypeCode == nvehicle.VhclTypeCode);
            Assert.NotNull(retrievedAppointment);
            Assert.Equal(nvehicle.VhclTypeCode, retrievedAppointment.VhclTypeCode);

            context.Database.EnsureDeleted();

        }
       
        [Fact]
        public async Task RefreshVehicle_ReturnsSuccesfullVehicleInformation()
        {
            var data = MockData.VehicleInformationData();
            var request = "TestRegMark";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "testdb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(data);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.RefreshVehicle(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Vehicle(s) Details Fetched Successfully", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task RefreshVehicle_ReturnsUnSuccesfull()
        {
            var request = "test";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "DBInMemory")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.RefreshVehicle(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("No such vehicle Details found", result.Message);

            context.Database.EnsureDeleted();

        }


        [Fact]
        public async Task SearchInspectionLane_ReturnsSuccesfullVehicleInformation()
        {
            var data = new InspectionLanes
            {
                Lane_Key=1,
                LaneId="1",
                Lane="Physical",
                Type="testType",
                Description="NA",
                Centers = new List<Center> { new Center 
                {
                    Ctr_Id="TY1",
                    Ctr_Key=1,
                    Ctr_Name="TY1",
                    IsActive=true
                
                } }  
            };
            var request = new SearchLaneRequestDto { Ctr_Id="TY1",Lane="Physical",LaneId="1"};
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Database")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_InspectionLanes.Add(data);
            context.SaveChanges();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.SearchInspectionLane(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Inspection details Fetched Successfully", result.Message);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task SearchInspectionLane_ReturnsUnSuccesfull()
        {
            var request = new SearchLaneRequestDto { Ctr_Id = "TY1", Lane = "Physical", LaneId = "1" };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "DBInspection")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var appointmentService = new AppointmentService(context, _mapper, mockLogger.Object);
            var result = await appointmentService.SearchInspectionLane(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("No such Inspection Details found", result.Message);

            context.Database.EnsureDeleted();

        }
    }
}
