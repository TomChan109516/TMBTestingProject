using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_API_Unit_Tests.Helper;
using SCS_Backend_API.Data;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Helpers;
using SCS_Backend_API.Models1;
using SCS_Backend_API.Services;


namespace SCS_API_Unit_Tests.Services
{
    public class PaymentServiceUnitTest
    {
        private Mock<ILogger<PaymentService>> mockLogger;
        private IMapper _mapper;
        public PaymentServiceUnitTest()
        {

            mockLogger = new Mock<ILogger<PaymentService>>();
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
        public async Task DeletePayment_ReturnsSuccesfullMessage()
        {
            var response = MockData.PaymentVehicleInformationData();
            long request = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "paymentDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(response);
            context.SaveChanges();

            var paymentService = new PaymentService(context, _mapper, mockLogger.Object);
            var result = await paymentService.DeletePayment(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Payment Deleted Successfully", result.Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task DeletePayment_ReturnsUnSuccesfullMessage()
        {
          
            long request = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "paymentDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var paymentService = new PaymentService(context, _mapper, mockLogger.Object);
            var result = await paymentService.DeletePayment(request);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Appointment Number does not exist in Database.", result.Message);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task ConfirmPayment_ReturnsSuccesfullMessage()
        {
            var response = MockData.DeleteAppointmentData();
            var request = new List<ConfirmPayment> 
            { new ConfirmPayment 
            {
                AppointmentNumber=1,
                PaymentMethod="cash",
                PaymentRemark="123",
                PaymentStatus="test"
            } };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "paymentDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(response);
            context.SaveChanges();

            var paymentService = new PaymentService(context, _mapper, mockLogger.Object);
            var result = await paymentService.ConfirmPayment(request);

            Assert.Equal("Payment Completed Successfully", result[0].Message);

            context.Database.EnsureDeleted();
        }

        [Fact]
        public async Task ConfirmPayment_ReturnsUnSuccesfullMessage()
        {
            var request = new List<ConfirmPayment> { new ConfirmPayment { AppointmentNumber = 1 } };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "paymentDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
    

            var paymentService = new PaymentService(context, _mapper, mockLogger.Object);
            var result = await paymentService.ConfirmPayment(request);

            Assert.Null(result[0].data);
            Assert.Equal("Appointment Number does not exist in Database.", result[0].Message);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task SearchPayment_ReturnsSuccesfullMessage()
        {
            var response = MockData.DeleteAppointmentData();
            var request = new SearchPayment { AppointmentNumber=1,CreatedDate=DateTime.UtcNow,RegMark= "TestRegMark",Center= new string[] { "TY1" },Status=new string[] { "Pending"},Method= new string[] { } };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "paymentDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(response);
            context.SaveChanges();

            var paymentService = new PaymentService(context, _mapper, mockLogger.Object);
            var result = await paymentService.SearchPayment(request);

            Assert.NotNull(result);
            Assert.Equal("Payment Details Fetched Successfully", result.Message);


            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task SearchPayment_ReturnsUnSuccesfullMessage()
        {
           
            var request = new SearchPayment { AppointmentNumber = 1, CreatedDate = DateTime.UtcNow, RegMark = "TestRegMark", Center = new string[] { "TY1" }, Status = new string[] { "Pending" }, Method = new string[] { } };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "paymentDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
         
            var paymentService = new PaymentService(context, _mapper, mockLogger.Object);
            var result = await paymentService.SearchPayment(request);

            Assert.NotNull(result);
            Assert.Equal("No such payment Details found", result.Message);


            context.Database.EnsureDeleted();

        }

    }
}
