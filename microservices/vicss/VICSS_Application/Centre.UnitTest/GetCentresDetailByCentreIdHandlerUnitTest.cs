namespace VICSS.Test.Servics.Centres.UnitTest
{
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;
    public class GetCentresDetailByCentreIdHandlerUnitTest
    {
        [Fact]
        public void GetCentresDetailByCentreIdHandlerErrorTestCase()
        {
            //To Do
            // Exception Block
            // Arrange
            var mapperMock = new Mock<IMapper>();
            var repositoryMock = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var logger = new Mock<ILogger<GetCentresDetailByCentreIdHandler>>();
            ILogger<GetCentresDetailByCentreIdHandler> mockLogger = logger.Object;
            GetCentresDetailByCentreIdHandler handler = new GetCentresDetailByCentreIdHandler(mapperMock.Object, repositoryMock.Object, mockLogger);
            var request = new GetCentresDetailByCentreIdRequestDto(new List<string> { "TY129867" });
            repositoryMock.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>(), It.IsAny<Expression<Func<Centre, object>>>())).ThrowsAsync(new Exception());

            // Act
            var result = handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.Result.HttpStatusCode);
            Assert.Equal(CommonErrorMessage.ErrorMessage, result.Result.ErrorMessage);
        }

       [Fact]
        public void GetCentresDetailByCentreIdHandlerDataNotFoundTestCase()
        {
            //To Do
            //404 Data Not Found
            // Arrange
            var mapperMock = new Mock<IMapper>();
            var repositoryMock = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var logger = new Mock<ILogger<GetCentresDetailByCentreIdHandler>>();
            ILogger<GetCentresDetailByCentreIdHandler> mockLogger = logger.Object;
            GetCentresDetailByCentreIdHandler handler = new GetCentresDetailByCentreIdHandler(mapperMock.Object, repositoryMock.Object, mockLogger);
            var request = new GetCentresDetailByCentreIdRequestDto(new List<string> { "TY129867" });
            repositoryMock.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>(), It.IsAny<Expression<Func<Centre, object>>>())).ReturnsAsync(new List<Centre>());

            // Act
            var result = handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.Result.HttpStatusCode);
        }

        [Fact]
        public void GetCentresDetailByCentreIdHandlerBadRequestTestCase()
        {
            //To Do
            //400 BadRequest
            // Arrange
            var mapperMock = new Mock<IMapper>();
            var repositoryMock = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var logger = new Mock<ILogger<GetCentresDetailByCentreIdHandler>>();
            ILogger<GetCentresDetailByCentreIdHandler> mockLogger = logger.Object;
            GetCentresDetailByCentreIdHandler handler = new GetCentresDetailByCentreIdHandler(mapperMock.Object, repositoryMock.Object, mockLogger);

            var request = new GetCentresDetailByCentreIdRequestDto(new List<string> ());


            repositoryMock.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>(), It.IsAny<Expression<Func<Centre, object>>>()))
                .ReturnsAsync(new List<Centre>());
            mapperMock.Setup(m => m.Map<List<CentresDto>>(It.IsAny<List<Centre>>()))
            .Returns(new List<CentresDto>());

            // Act
            var result = handler.Handle(request, CancellationToken.None);
            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.Result.HttpStatusCode);

        }

        [Fact]
        public void GetCentresDetailByCentreIdHandlerDataFoundTestCase()
        {
            //To Do
            //200 ok

            // Arrange
            var mapperMock = new Mock<IMapper>();
            var repositoryMock = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var logger = new Mock<ILogger<GetCentresDetailByCentreIdHandler>>();
            ILogger<GetCentresDetailByCentreIdHandler> mockLogger = logger.Object;
            GetCentresDetailByCentreIdHandler handler = new GetCentresDetailByCentreIdHandler(mapperMock.Object, repositoryMock.Object, mockLogger);
            var request = new GetCentresDetailByCentreIdRequestDto(new List<string> { "TY129867" });
            var centre = new Centre { CentreId = "TY129867" };
            repositoryMock.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>(), It.IsAny<Expression<Func<Centre, object>>>()))
                .ReturnsAsync(new List<Centre> { centre });
            mapperMock.Setup(m => m.Map<List<CentresDto>>(It.IsAny<List<Centre>>()))
               .Returns(new List<CentresDto> { new CentresDto { CentreId = "TY129867" } });
            // Act
            var result = handler.Handle(request, CancellationToken.None);
            // Assert
            Assert.Equal(HttpStatusCode.OK, result.Result.HttpStatusCode);
           

        }
    }
}
