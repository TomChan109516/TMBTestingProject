namespace VICSS.Test.Services.LaneConfiguration.UnitTest
{
    using AutoMapper;
    using Microsoft.Extensions.Logging;
    using Moq;
    using System.Linq.Expressions;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Service.LaneConfiguration.EventHandlers;
    using VICSS.Service.LaneConfiguration.Mappers;
    public class LanesByCentreIdHandlerUnitTest
    {

        [Fact]
        public void Handle_ValidCentreId_ReturnsLanes()
        {
            // Arrange
            List<Lane> data = new List<Lane>();
            data.Add(new Lane { CentreId = "9242E680-CDE1-4683-A2F1-484C70F8A158", LaneId = "A8F9AA4B-0313-45C9-9C66-DD76B54ED602", LaneName = "11", LaneType = "physical", LastRecordTransactionTypeCode = 'I' });

            GetLanesByCentreIdRequestDto getCentresRequestDto = new GetLanesByCentreIdRequestDto(new List<string> { "9242E680-CDE1-4683-A2F1-484C70F8A158" });

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new LanesByCentreIdMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var logger = new Mock<ILogger<LanesByCentreIdHandler>>();
            ILogger<LanesByCentreIdHandler> mockLogger = logger.Object;


            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>())).ReturnsAsync(data);
            LanesByCentreIdHandler handler = new LanesByCentreIdHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getCentresRequestDto, CancellationToken.None);

            //Assert
            Assert.Equal(data.Count, returnedData.Result.LanesDto.Count);
            Assert.Equal(data[0].LaneId, returnedData.Result.LanesDto[0].LaneId);
        }

        [Fact]
        public void Handle_InvalidCentreId_ReturnsEmptyLanes()
        {
            // Arrange
            GetLanesByCentreIdRequestDto getCentresRequestDto = new GetLanesByCentreIdRequestDto(new List<string> { "invalid" });

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new LanesByCentreIdMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var logger = new Mock<ILogger<LanesByCentreIdHandler>>();
            ILogger<LanesByCentreIdHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>())).ReturnsAsync(new List<Lane>());
            LanesByCentreIdHandler handler = new LanesByCentreIdHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getCentresRequestDto, CancellationToken.None);

            //Assert
            Assert.NotNull(returnedData.Result);
            Assert.Empty(returnedData.Result.LanesDto);
        }

        [Fact]
        public void Handle_EmptyCentreId_ReturnsEmptyLanes()
        { 
            // Arrange
            GetLanesByCentreIdRequestDto getCentresRequestDto = new GetLanesByCentreIdRequestDto(new List<string> {});

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new LanesByCentreIdMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var logger = new Mock<ILogger<LanesByCentreIdHandler>>();
            ILogger<LanesByCentreIdHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>())).ReturnsAsync(new List<Lane>());
            LanesByCentreIdHandler handler = new LanesByCentreIdHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getCentresRequestDto, CancellationToken.None);

            //Assert
            Assert.NotNull(returnedData.Result);
            Assert.Empty(returnedData.Result.LanesDto);
        }

        [Fact]
        public void Handle_Exception()
        {
            //To Do
            Assert.True(true);
        }

    }
}
