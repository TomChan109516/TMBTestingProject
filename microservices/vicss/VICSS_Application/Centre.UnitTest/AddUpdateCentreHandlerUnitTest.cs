namespace VICSS.Test.Servics.Centre.UnitTest
{
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System.Net;
    using System.Threading.Tasks;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;

    public class AddUpdateCentreHandlerUnitTest
    {
        [Fact]
        public async Task ReturnsBadRequestWhenRequestIsNull()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateCentreMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateCentreHandler>>();
            var mockRepo = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<CentreDBContext>>();
            var addUpdateCentreDto = new AddUpdateCentreDto { };
            var centre = new Centre { };
            var handler = new AddUpdateCentreHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            var request = (AddUpdateCentreRequestDto)null;

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
            Assert.Equal(CommonMessages.BadRequest, result.Message);
        }

        [Fact]
        public async Task ReturnsInternalServerErrorWhenExceptionIsThrown()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateCentreMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateCentreHandler>>();
            var mockRepo = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<CentreDBContext>>();
            var addUpdateCentreDto = new AddUpdateCentreDto { CentreId = "1234", CentreName = "ABC" };
            var centre = new Centre { };
            var handler = new AddUpdateCentreHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            var request = new AddUpdateCentreRequestDto(addUpdateCentreDto);
            mockRepo.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>())).Throws(new Exception());
            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Equal(CommonErrorMessage.ErrorMessage, result.ErrorMessage);
        }

        [Fact]
        public async Task ReturnsOkWhenAddingNewCentre()
        {
            // Arrange
            var addUpdateCentreDto = new AddUpdateCentreDto
            {
                CentreId = "",
                CentreName = "ABC",
                LastRecordTransactionUserId = "Admin",
                CentreCode = "TY1"
            };
            var request = new AddUpdateCentreRequestDto(addUpdateCentreDto);

            var centreData = new Centre
            {
                CentreId = Guid.NewGuid().ToString(),
                CentreCode = addUpdateCentreDto.CentreCode,
                CentreName = addUpdateCentreDto.CentreName,
                CentreChineseName = addUpdateCentreDto.CentreName,
                CentreBeginDate = DateTime.UtcNow,
                CentreEndDate = DateTime.UtcNow,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode
            };

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateCentreMapper());
            });
            var mapper = mappingConfig.CreateMapper();

            var mockRepo = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            mockRepo.Setup(r => r.Add(centreData)).Returns(Task.FromResult(true));

            var mockUnitOfWork = new Mock<IUnitOfWork<CentreDBContext>>();
            mockUnitOfWork.Setup(u => u.SaveChanges()).Returns(Task.FromResult(true));

            var mockLogger = new Mock<ILogger<AddUpdateCentreHandler>>();

            var handler = new AddUpdateCentreHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            mockRepo.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>())).ReturnsAsync(new List<Centre>());
            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>()), Times.Once);
            mockRepo.Verify(x => x.Add(It.IsAny<Centre>()), Times.Once);
            mockUnitOfWork.Verify(x => x.SaveChanges(), Times.Once);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationSuccessful, result.Message);
        }

        [Fact]
        public async Task ReturnsNotFoundWhenUpdatingNonExistingCentre()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateCentreMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateCentreHandler>>();
            var mockRepo = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<CentreDBContext>>();
            var addUpdateCentreDto = new AddUpdateCentreDto { CentreId = "ABCD", CentreCode = "TY1", CentreName = "ABC", LastRecordTransactionUserId = "Admin" };
            var centre = new Centre { CentreId = "NonExistingId", CentreCode = "TY1" };
            var handler = new AddUpdateCentreHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            mockRepo.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>())).ReturnsAsync(new List<Centre>());
            var request = new AddUpdateCentreRequestDto(addUpdateCentreDto);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Equal(CommonMessages.NoRecordFound, result.Message);
        }

        [Fact]
        public async Task ReturnsOkWhenUpdatingExistingCentre()
        {
            // Arrange
            var addUpdateCentreDto = new AddUpdateCentreDto
            {
                CentreId = "ExistingId",
                CentreName = "Test",
                LastRecordTransactionUserId = "Admin",
                CentreCode = "TY1"
            };
            var request = new AddUpdateCentreRequestDto(addUpdateCentreDto);

            List<Centre> data = new List<Centre>();
            data.Add(new Centre
            {
                CentreId = "ExistingId",
                CentreName = "ABC",
                CentreChineseName = "ABC",
                CentreBeginDate = DateTime.UtcNow,
                CentreEndDate = DateTime.UtcNow,
                LastRecordTransactionUserId = "Admin",
                CentreCode = "TY1"
            });

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateCentreMapper());
            });
            var mapper = mappingConfig.CreateMapper();

            var mockRepo = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            mockRepo.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>())).ReturnsAsync(data);
            mockRepo.Setup(r => r.Update(It.IsAny<Centre>())).Verifiable();

            var mockUnitOfWork = new Mock<IUnitOfWork<CentreDBContext>>();
            mockUnitOfWork.Setup(u => u.SaveChanges()).Returns(Task.FromResult(true));

            var mockLogger = new Mock<ILogger<AddUpdateCentreHandler>>();

            var handler = new AddUpdateCentreHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>()), Times.Once);
            mockRepo.Verify(x => x.Update(It.IsAny<Centre>()), Times.Once);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationSuccessful, result.Message);
        }
    }
}
