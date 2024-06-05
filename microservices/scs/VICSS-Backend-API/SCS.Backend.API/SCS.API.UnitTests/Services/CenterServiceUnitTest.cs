using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_Backend_API;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Helpers;
using SCS_Backend_API.Models1;
using SCS_Backend_API.Data;
using SCS_API_Unit_Tests.Helper;
using SCS_Backend_API.Services;
using SCS_Backend_API.Models;

namespace SCS_API_Unit_Tests.Services
{
    public class CenterServiceUnitTest
    {
        private Mock<ILogger<CenterService>> mockLogger;
        private IMapper _mapper;
        public CenterServiceUnitTest()
        {

            mockLogger = new Mock<ILogger<CenterService>>();
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
        public async Task GetAllCenters_ReturnsListOfCenters()
        {

            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "centredb").Options;

            var context = new AppDBContextEF(options);

            
                var data = MockData.CentreData();
                context.SCS_Centers.Add(data);
                context.SaveChanges();

                var centerService = new CenterService(context, _mapper, mockLogger.Object);

                var result = await centerService.GetAllCenters();

                Assert.IsType<CenterResponseDto>(result);
                Assert.NotNull(result);
                Assert.Equal("Tsingg Yi", result.data?.First().CenterName);
                Assert.Equal("TY1", result.data?.First().CenterId);

                context.Database.EnsureDeleted();

            
        }

        [Fact]
        public async Task GetAllCenters_ReturnsCenterNotFound()
        {
            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "centredb").Options;
            var context = new AppDBContextEF(options);
            
                var centerService = new CenterService(context, _mapper, mockLogger.Object);
                var result = await centerService.GetAllCenters();

                Assert.Equal("No centers found in database", result.Message);
                Assert.Equal(0, result.data?.Count);
                context.Database.EnsureDeleted();
            
        }
       

    }

}
