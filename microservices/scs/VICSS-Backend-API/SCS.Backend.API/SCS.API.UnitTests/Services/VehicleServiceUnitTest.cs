using AutoMapper;
using Azure.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_API_Unit_Tests.Helper;
using SCS_Backend_API.Data;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Helpers;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Models1;
using SCS_Backend_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCS_API_Unit_Tests.Services
{
    public class VehicleServiceUnitTest
    {

        private readonly Mock<ILogger<VehicleService>> mockLogger;
        private readonly Mock<IAttachmentService> mockAttachmentService;
        private readonly IMapper _mapper;
        public VehicleServiceUnitTest()
        {
            mockAttachmentService = new Mock<IAttachmentService>();
            mockLogger = new Mock<ILogger<VehicleService>>();
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
        public async Task SearchWatchList_ReturnsSuccesfullWatchList()
        {
            var data = MockData.WatchListData();
            var request = new WatchListRequestDto {Type= new string[1] { "watchList" }, Center_Key=1,Rsn_Key=0 };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "RescheduleDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCSWatchList.Add(data);
            context.SaveChanges();

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object,mockAttachmentService.Object);
            var result = await vehicleService.SearchWatchList(request);

            Assert.NotNull(result);
            Assert.Equal("WatchList Searched Successfully.", result.Message);


            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task SearchWatchList_ReturnsUnSuccesfull()
        {
            var data = MockData.WatchListData();
            var request = new WatchListRequestDto { Type = new string[1] {""}, Center_Key = 3, Rsn_Key = 0 };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "ReDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCSWatchList.Add(data);
            context.SaveChanges();

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.SearchWatchList(request);

            Assert.Equal("No watchList found.", result.Message);


            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CreateWatchList_ShouldAddWatchListToDbContext()
        {
            var watchListDto =MockData.CreateWatchListDtoData();

            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "WatchListDatabase")
                .Options;

            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.CreateWatchList(watchListDto);
            //Assert
            Assert.NotNull(result);

            // verify
            var retrievedWatchList = await context.SCSWatchList.FirstOrDefaultAsync(
                a => a.Type == watchListDto.Type);
            Assert.NotNull(retrievedWatchList);
            Assert.Equal(watchListDto.VehicleClassId, retrievedWatchList.VehicleClassId);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CancelWatchList_ReturnsSuccesfullyCancelWatchList()
        {
            var data = MockData.WatchListData();
            var request = new CancelWatchListDto { Vhcl_WhLst_Key=1 };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCSWatchList.Add(data);
            context.SaveChanges();

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.CancelWatchList(request);

            Assert.NotNull(result);
            Assert.Equal("Vehcile deleted from the WatchList", result.Message);


            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CancelWatchList_ReturnsUnsuccesfull()
        {
            var data = MockData.WatchListData();
            var request = new CancelWatchListDto { Vhcl_WhLst_Key = 2 };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "watchListDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCSWatchList.Add(data);
            context.SaveChanges();

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.CancelWatchList(request);

            Assert.Equal("Vehcile cannot be deleted from the WatchList", result.Message);
            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task CreateNewVillageVehicle_ShouldAddAppointmentToDbContext()
        {
            var vehicledto = new VillageAndMovementPermitVehicleDto
            {

                VehicleId = "001",
                VhclTypeCode = "NV",
                VehicleClassName = "TestName",
                VehicleSubClassId = "001",
                ChassisNumber = "TestChassisNumber",
                CountryCode = "40",   
                SeatCapacity = "2",

            };
            var vehicleClass = new VehicleClass
            {
                VehicleClass_Key = 1,
                VehicleClassId = "001",
                VehicleClassName = "TestName",
                IsActive = true,
                SubClasses = new List<SubClass> { new SubClass { VehicleSubClass_Key = 1, VehicleSubClassId = "001", VehicleSubClassName = "TestSubClass", VehicleClassId = "001", IsActive = true } }
            };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "DB")
                .Options;

            using var context = new AppDBContextEF(dbContextOptions);

            context.Database.EnsureCreated();
            context.SCS_VehicleClasses.Add(vehicleClass);
            context.SaveChanges();
            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.CreateNewVillageVehicle(vehicledto);
            //Assert
            Assert.NotNull(result);

            // verify
            var retrievedVehicle = await context.SCS_VehicleInfo.FirstOrDefaultAsync(
                a => a.VehicleId == vehicledto.VehicleId);
            Assert.NotNull(retrievedVehicle);
            Assert.Equal(vehicledto.VehicleId, retrievedVehicle.VehicleId);

            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task AmendNonValidVehicle_ReturnsSuccesfull()
        {
            var data = MockData.VehicleInformationData();
            var request = MockData.CreateNewNonValidVehicleDtoData();
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(data);
            context.SaveChanges();

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.AmendNonValidVehicle(request);

            Assert.NotNull(result);
            Assert.Equal("Non Valid Vehicle Amended Successfully.", result.Message);


            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task AmendNonValidVehicle_ReturnsUnSuccesfull()
        {
            var request = MockData.CreateNewNonValidVehicleDtoData();
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "Db")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
           

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.AmendNonValidVehicle(request);

            Assert.NotNull(result);
            Assert.Equal("No Such Non Valid Vehicle found.", result.Message);


            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task AmendVVandMPV_ReturnsSuccesfullAmendedVVAndMPV()
        {
            var data = MockData.VehicleInformationData();
                
            var request = new AmendVVandMPVRequestDto { FloatName = "Test", ChassisNumber = "TestChassisNumber", ManufactureYear = 2000, BodyType = "test" , EngineType ="TestType"};
            var chassisNumber = "TestChassisNumber";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "RescheduleDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(data);
            context.SaveChanges();

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.AmendVVandMPV(request,chassisNumber);

            Assert.NotNull(result);
            Assert.Equal("VVorMPV is Amended.", result.Message);


            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task AmendVVandMPV_ReturnsUnSuccesfullMessage()
        {
            var request = new AmendVVandMPVRequestDto { FloatName = "Test", ChassisNumber = "TestChassisNumber", ManufactureYear = 2000, BodyType = "test", EngineType = "TestType" };
            var chassisNumber = "TestChassisNumber";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "RescheduleDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
          
            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.AmendVVandMPV(request, chassisNumber);

            Assert.Equal("No Such VVorMPV found.", result.Message);

            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task VehicleOperationalRemark_ReturnsSuccesfullMessage()
        {
            var data = MockData.VehicleInformationData();
  
            var chassisNumber = "TestChassisNumber";
            var remark = "TestNewRemark";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "RescheduleDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(data);
            context.SaveChanges();

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.VehicleOperationalRemark(It.IsAny<AttachmentDto>(),remark, chassisNumber);

            Assert.NotNull(result);
            Assert.Equal("Vehicle Remark Saved Successfully", result.Message);


            context.Database.EnsureDeleted();

        }
        [Fact]
        public async Task VehicleOperationalRemark_ReturnsUnSuccesfullMessage()
        {
            var chassisNumber = "TestChassisNumber";
            var remark = "TestNewRemark";
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "RescheduleDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
          
            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.VehicleOperationalRemark(It.IsAny<AttachmentDto>(), remark, chassisNumber);

            Assert.NotNull(result);
            Assert.Equal("No such vehicle Details found", result.Message);


            context.Database.EnsureDeleted();

        }

        [Fact]
        public async Task VehicleMessage_ReturnsSuccesfullMessage()
        {
            var data = MockData.VehicleInformationData();

            var request = new VehicleMessagesDto
            {
                VehicleId = "001",
                MessageEn = "Test",
                MessageCh = "Test"
            };
            var dbContextOptions = new DbContextOptionsBuilder<AppDBContextEF>()
                .UseInMemoryDatabase(databaseName: "MessageDb")
                .Options;
            using var context = new AppDBContextEF(dbContextOptions);
            context.Database.EnsureCreated();
            context.SCS_VehicleInfo.Add(data);
            context.SaveChanges();

            var vehicleService = new VehicleService(context, _mapper, mockLogger.Object, mockAttachmentService.Object);
            var result = await vehicleService.VehicleMessage(request);

            Assert.NotNull(result);
            Assert.Equal("VehicleInformation Saved Successfully", result.Message);

            context.Database.EnsureDeleted();

        }

 
    }
}
