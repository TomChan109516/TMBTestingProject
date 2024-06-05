namespace VICSS.Test.Services.LaneConfiguration.UnitTest
{
    using AutoMapper;
    using Microsoft.Extensions.Logging;
    using Moq;
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Service.LaneConfiguration.EventHandlers;
    using VICSS.Service.LaneConfiguration.Mappers;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;

    public class SearchLaneHandlerUnitTest
    {

        [Fact]
        public void SearchLaneHandlerErrorTestCase()
        {

            // Arrange
            var mapperMock = new Mock<IMapper>();
            var repositoryMock = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var logger = new Mock<ILogger<SearchLaneHandler>>();
            ILogger<SearchLaneHandler> mockLogger = logger.Object;
            SearchLaneHandler handler = new SearchLaneHandler(mapperMock.Object, repositoryMock.Object, mockLogger);
            var request = new Service.LaneConfiguration.Domain.SearchLaneRequestDto(new Shared.Models.LaneConfiguration.SearchLaneRequestDto { CentreId = "TY2356", LaneId = "11A" });
            repositoryMock.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>(), It.IsAny<Expression<Func<Lane, object>>>())).ThrowsAsync(new Exception());

            // Act
            var result = handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.Result.HttpStatusCode);
            Assert.Equal(CommonErrorMessage.ErrorMessage, result.Result.ErrorMessage);
        }

        [Fact]
        public void SearchLaneHandlerBadRequestTestCase()
        {
            
            // Arrange
            var mapperMock = new Mock<IMapper>();
            var repositoryMock = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var logger = new Mock<ILogger<SearchLaneHandler>>();
            ILogger<SearchLaneHandler> mockLogger = logger.Object;
            SearchLaneHandler handler = new SearchLaneHandler(mapperMock.Object, repositoryMock.Object, mockLogger);

            var request = new Service.LaneConfiguration.Domain.SearchLaneRequestDto(new Shared.Models.LaneConfiguration.SearchLaneRequestDto { CentreId = "", LaneId = "LN4757" });

            repositoryMock.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>(), It.IsAny<Expression<Func<Lane, object>>>()))
                .ReturnsAsync(new List<Lane>());
            mapperMock.Setup(m => m.Map<List<SearchLaneDto>>(It.IsAny<List<Lane>>()))
            .Returns(new List<SearchLaneDto>());

            // Act
            var result = handler.Handle(request, CancellationToken.None);
            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.Result.HttpStatusCode);

        }

        [Fact]
        public void  SearchLaneDataFoundTestCase()
        { 
            // Arrange
            List<Lane> data = new List<Lane>();
            data.Add(new Lane { CentreId = "001", LaneId = "Lane1" });

            var request = new Service.LaneConfiguration.Domain.SearchLaneRequestDto(new Shared.Models.LaneConfiguration.SearchLaneRequestDto { CentreId = "001", LaneId = "Lane1" });            

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new LanesByCentreIdMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mockLogger = new Mock<ILogger<SearchLaneHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>())).ReturnsAsync(data);

            SearchLaneHandler searchLaneHandler = new SearchLaneHandler(mapper, genericRepo.Object, mockLogger.Object);

            // Act
            var returnedData =  searchLaneHandler.Handle(request, CancellationToken.None);

            // Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>()), Times.Once);
            Assert.Equal(HttpStatusCode.OK, returnedData.Result. HttpStatusCode);
        }



        [Fact]
        public void SearchLaneDataNotFoundTestCase()
        {
            // Arrange
            List<Lane> data = new List<Lane>();

            var request = new Service.LaneConfiguration.Domain.SearchLaneRequestDto(new Shared.Models.LaneConfiguration.SearchLaneRequestDto { CentreId = "001", LaneId = "Lane1" });

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new LanesByCentreIdMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<LaneConfigurationDBContext, Lane>>();
            var mockLogger = new Mock<ILogger<SearchLaneHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>())).ReturnsAsync(data);

            SearchLaneHandler searchLaneHandler = new SearchLaneHandler(mapper, genericRepo.Object, mockLogger.Object);

            // Act
            var returnedData = searchLaneHandler.Handle(request, CancellationToken.None);

            // Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Lane, bool>>>()), Times.Once);
            Assert.Equal(HttpStatusCode.NotFound, returnedData.Result.HttpStatusCode);
        }

    }
}
