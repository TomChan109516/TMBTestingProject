namespace VICSS.Test.Services.Vehicle.UnitTest
{
    using Microsoft.Extensions.Logging;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    public class SearchRegMarkHandlerUnitTest
    {
        [Fact]
        public void Handle_NullRequest_ReturnsBadRequest()
        {
            // Arrange
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            var logger = new Mock<ILogger<SearchRegMarkHandler>>();
            var handler = new SearchRegMarkHandler(genericRepo.Object, logger.Object);

            // Act
            var result = handler.Handle(null, CancellationToken.None).Result;

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public void Handle_EmptyVehicleRegMarkNumber_ReturnsBadRequest()
        {
            // Arrange
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            var logger = new Mock<ILogger<SearchRegMarkHandler>>();
            var handler = new SearchRegMarkHandler(genericRepo.Object, logger.Object);

            // Act
            var result = handler.Handle(new SearchRegMarkRequestDto { VehicleRegMarkNumber = "" }, CancellationToken.None).Result;

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }
              
        [Fact]
        public void Handle_ValidVehicleRegMarkNumber_ReturnsOk()
        {
            // Arrange
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>())).ReturnsAsync(new List<Vehicle> { new Vehicle { VehicleRegMarkNumber = "ABC" } });
            var logger = new Mock<ILogger<SearchRegMarkHandler>>();
            var handler = new SearchRegMarkHandler(genericRepo.Object, logger.Object);

            // Act
            var result = handler.Handle(new SearchRegMarkRequestDto { VehicleRegMarkNumber = "ABC" }, CancellationToken.None).Result;

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public void Handle_ValidVehicleRegMarkNumberNoVehiclesFound_ReturnsNotFound()
        {
            // Arrange
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>())).ReturnsAsync(new List<Vehicle>());
            var logger = new Mock<ILogger<SearchRegMarkHandler>>();
            var handler = new SearchRegMarkHandler(genericRepo.Object, logger.Object);

            // Act
            var result = handler.Handle(new SearchRegMarkRequestDto { VehicleRegMarkNumber = "XYZ" }, CancellationToken.None).Result;

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
        }

        [Fact]
        public void Handle_ExceptionThrown_ReturnsInternalServerError()
        {
            // Arrange
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>())).Throws(new Exception());
            var logger = new Mock<ILogger<SearchRegMarkHandler>>();
            var handler = new SearchRegMarkHandler(genericRepo.Object, logger.Object);

            // Act
            var result = handler.Handle(new SearchRegMarkRequestDto { VehicleRegMarkNumber = "EXC" }, CancellationToken.None).Result;

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }
    }
}
