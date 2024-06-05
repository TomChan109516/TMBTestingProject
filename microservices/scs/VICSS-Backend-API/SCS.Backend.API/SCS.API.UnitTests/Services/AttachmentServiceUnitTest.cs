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
    public class AttachmentServiceUnitTest
    {
        private readonly Mock<ILogger<AttachmentService>> mockLogger;
        private readonly IMapper _mapper;
        public AttachmentServiceUnitTest()
        {

            mockLogger = new Mock<ILogger<AttachmentService>>();
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
        public async Task GetAppointmentsHistory_ReturnsSuccesfullListOfAppointmentHistory()
        {
            var data = MockData.RescheduleAppointmentData();
            var request = "TestChassisNumber";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "RescheduleDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Appointments.Add(data);
            context.SaveChanges();

            var attachmentService = new AttachmentService(context, _mapper, mockLogger.Object);
            var result = await attachmentService.GetAppointmentHistory(request);

            Assert.NotNull(result);
            Assert.Equal(data.AppointmentNumber, result[0].AppointmentNumber);

            context.Database.EnsureDeleted();
        }

        [Fact]
        public async Task GetAppointmentsHistory_UnSuccesfulReturnsEmptytList()
        {
            string request = "test";

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            
            var attachmentService = new AttachmentService(context, _mapper, mockLogger.Object);
            var result = await attachmentService.GetAppointmentHistory(request);
           
            Assert.Empty(result!);
            context.Database.EnsureDeleted();
        }


        [Fact]
        public async Task SearchAttachment_ReturnsSuccesfullListOfAppointmentHistory()
        {
            var data = MockData.AttachmentData();
            var request = "TestChassisNumber";
            long num = 1;
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "AppointmentDatabase")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_Attachment.Add(data);
            context.SaveChanges();

            var attachmentService = new AttachmentService(context, _mapper, mockLogger.Object);
            var result = await attachmentService.SearchAttachment(request,num);

            Assert.NotNull(result);
            Assert.Equal(data.AppointmentNumber, result[0].AppointmentNumber);


            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task SearchAttachment_UnSuccesfulReturnsEmptytList()
        {
            string request = "test";
            long num = 1;

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "AttachmentDB")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();

            var attachmentService = new AttachmentService(context, _mapper, mockLogger.Object);
            var result = await attachmentService.SearchAttachment(request,num);

            Assert.Empty(result!);

            context.Database.EnsureDeleted();
        }


    }
}
