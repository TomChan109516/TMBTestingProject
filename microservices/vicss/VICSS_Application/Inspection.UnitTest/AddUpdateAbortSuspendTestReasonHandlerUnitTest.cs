namespace VICSS.Test.Services.Inspection.UnitTest
{
    using AutoMapper;
    using Moq;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.EventHandlers;
    using VICSS.Shared.Models.Common;
    using Xunit;
    using System.Threading.Tasks;
    using System.Threading;
    using Microsoft.Extensions.Logging;

    public class AddUpdateAbortSuspendTestReasonHandlerUnitTest
    {
        [Fact]
        public async Task ShouldAddNewAbortSuspendTestReasonWhenIdIsEmptyUnitTest()
        {
            // Arrange
            var request = new AddUpdateAbortSuspendTestReasonRequestDto
            {
                ReasonType = "ReasonType1",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var mockLogger = new Mock<ILogger<AddUpdateAbortSuspendTestReasonHandler>>();

            AddUpdateAbortSuspendTestReasonHandler handler = new AddUpdateAbortSuspendTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.OperationSuccessful, returnedData.Message);
        }

        [Fact]
        public async Task ShouldUpdateExistingAbortSuspendTestReasonWhenIdIsNotEmptyUnitTest()
        {
            // Arrange
            var request = new AddUpdateAbortSuspendTestReasonRequestDto
            {
                Id = "ExistingId",
                ReasonType = "ReasonType1",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var existingAbortSuspendTestReason = new AbortSuspendTestReason
            {
                Id = request.Id,
                ReasonType = "ReasonType2",
                Code = "Code2",
                Description = "Description2",
                ActivateIndicator = false
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<AddUpdateAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(r => r.GetById(request.Id)).ReturnsAsync(existingAbortSuspendTestReason);

            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            AddUpdateAbortSuspendTestReasonHandler handler = new AddUpdateAbortSuspendTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.OperationSuccessful, returnedData.Message);
        }

        [Fact]
        public async Task ShouldReturnErrorMessageWhenExceptionIsThrownUnitTest()
        {
            // Arrange
            var request = new AddUpdateAbortSuspendTestReasonRequestDto
            {
                Id = "ExistingId",
                ReasonType = "ReasonType1",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<AddUpdateAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(r => r.GetById(request.Id)).Throws(new Exception("Test exception"));

            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            AddUpdateAbortSuspendTestReasonHandler handler = new AddUpdateAbortSuspendTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.OperationUnsuccessful, returnedData.Message);
        }

        [Fact]
        public async Task ShouldReturnNotFoundWhenUpdatingNonExistentAbortSuspendTestReasonUnitTest()
        {
            // Arrange
            var request = new AddUpdateAbortSuspendTestReasonRequestDto
            {
                Id = "NonExistentId",
                ReasonType = "ReasonType1",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<AddUpdateAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(r => r.GetById(request.Id)).ReturnsAsync((AbortSuspendTestReason)null);

            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            AddUpdateAbortSuspendTestReasonHandler handler = new AddUpdateAbortSuspendTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.TestReasonNotFound, returnedData.Message);
            Assert.Equal(HttpStatusCode.NotFound, returnedData.HttpStatusCode);
        }
        [Fact]
        public async Task ShouldReturnBadRequestWhenCodeOrDescriptionOrReasonTypeIsEmptyUnitTest()
        {
            // Arrange
            var request = new AddUpdateAbortSuspendTestReasonRequestDto
            {

                ReasonType = "", // Empty ReasonType
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<AddUpdateAbortSuspendTestReasonHandler>>();
            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            AddUpdateAbortSuspendTestReasonHandler handler = new AddUpdateAbortSuspendTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.BadRequest, returnedData.Message);
        }
    }
}