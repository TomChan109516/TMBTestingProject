namespace VICSS.Test.Services.Inspection.UnitTest
{
    using Microsoft.Extensions.Logging;
    using Moq;
    using System;
    using System.Net;
    using System.Threading.Tasks;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.EventHandlers;
    using VICSS.Shared.Models.Common;
    using Xunit;

    public class ActivateDeactivateSkipTestReasonHandlerUnitTest
    {
        [Fact]
        public async Task ShouldActivateSkipTestReasonWhenIdIsNotEmptyAndActivateIndicatorIsTrueUnitTest()
        {
            // Arrange
            var request = new ActivateDeactivateSkipTestReasonRequestDto
            {
                Id = "ExistingId",
                ActivateIndicator = true
            };

            var existingSkipTestReason = new SkipTestReason
            {
                Id = request.Id,
                ActivateIndicator = false
            };

            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<ActivateDeactivateSkipTestReasonHandler>>();
            genericRepo.Setup(r => r.GetById(request.Id)).ReturnsAsync(existingSkipTestReason);

            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            ActivateDeactivateSkipTestReasonHandler handler = new ActivateDeactivateSkipTestReasonHandler(genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.OperationSuccessful, returnedData.Message);
            Assert.Equal(HttpStatusCode.OK, returnedData.HttpStatusCode);
        }

        [Fact]
        public async Task ShouldReturnErrorMessageWhenIdIsEmptyUnitTest()
        {
            // Arrange
            var request = new ActivateDeactivateSkipTestReasonRequestDto
            {
                Id = "",
                ActivateIndicator = true
            };

            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var mockLogger = new Mock<ILogger<ActivateDeactivateSkipTestReasonHandler>>();


            ActivateDeactivateSkipTestReasonHandler handler = new ActivateDeactivateSkipTestReasonHandler(genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.TestReasonNotFound, returnedData.Message);
            Assert.Equal(HttpStatusCode.BadRequest, returnedData.HttpStatusCode);
        }

        [Fact]
        public async Task ShouldReturnErrorMessageWhenExceptionIsThrownUnitTest()
        {
            // Arrange
            var request = new ActivateDeactivateSkipTestReasonRequestDto
            {
                Id = "ExistingId",
                ActivateIndicator = true
            };

            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            genericRepo.Setup(r => r.GetById(request.Id)).Throws(new Exception("Test exception"));
            var mockLogger = new Mock<ILogger<ActivateDeactivateSkipTestReasonHandler>>();


            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            ActivateDeactivateSkipTestReasonHandler handler = new ActivateDeactivateSkipTestReasonHandler(genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.OperationUnsuccessful, returnedData.Message);
            Assert.Equal(HttpStatusCode.InternalServerError, returnedData.HttpStatusCode);
        }
        [Fact]
        public async Task ShouldReturnNotFoundWhenSkipTestReasonDoesNotExistUnitTest()
        {
            // Arrange
            var request = new ActivateDeactivateSkipTestReasonRequestDto
            {
                Id = "NonExistingId",
                ActivateIndicator = true
            };

            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            genericRepo.Setup(r => r.GetById(request.Id)).ReturnsAsync((SkipTestReason)null);
            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var mockLogger = new Mock<ILogger<ActivateDeactivateSkipTestReasonHandler>>();

            ActivateDeactivateSkipTestReasonHandler handler = new ActivateDeactivateSkipTestReasonHandler(genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.TestReasonNotFound, returnedData.Message);
            Assert.Equal(HttpStatusCode.NotFound, returnedData.HttpStatusCode);
        }

        [Fact]
        public async Task ShouldReturnNoUpdateRequiredWhenActivateIndicatorIsSameUnitTest()
        {
            // Arrange
            var request = new ActivateDeactivateSkipTestReasonRequestDto
            {
                Id = "ExistingId",
                ActivateIndicator = true
            };

            var existingSkipTestReason = new SkipTestReason
            {
                Id = request.Id,
                ActivateIndicator = true
            };

            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            genericRepo.Setup(r => r.GetById(request.Id)).ReturnsAsync(existingSkipTestReason);
            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var mockLogger = new Mock<ILogger<ActivateDeactivateSkipTestReasonHandler>>();

            ActivateDeactivateSkipTestReasonHandler handler = new ActivateDeactivateSkipTestReasonHandler(genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.NoUpdateRequired, returnedData.Message);
            Assert.Equal(HttpStatusCode.OK, returnedData.HttpStatusCode);
        }
    }
}