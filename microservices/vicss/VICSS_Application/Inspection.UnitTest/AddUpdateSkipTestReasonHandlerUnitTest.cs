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

    public class AddUpdateSkipTestReasonHandlerUnitTest
    {
        [Fact]
        public async Task ShouldAddNewSkipTestReasonWhenIdIsEmptyUnitTest()
        {
            // Arrange
            var request = new AddUpdateSkipTestReasonRequestDto
            {
                TestType = "For DYNO Tests",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var mockLogger = new Mock<ILogger<AddUpdateSkipTestReasonHandler>>();

            AddUpdateSkipTestReasonHandler handler = new AddUpdateSkipTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.OperationSuccessful, returnedData.Message);
            Assert.Equal(HttpStatusCode.Created, returnedData.HttpStatusCode);
        }

        [Fact]
        public async Task ShouldUpdateExistingSkipTestReasonWhenIdIsNotEmptyUnitTest()
        {
            // Arrange
            var request = new AddUpdateSkipTestReasonRequestDto
            {
                Id = "ExistingId",
                TestType = "For DYNO Tests",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var existingSkipTestReason = new SkipTestReason
            {
                Id = request.Id,
                TestType = "For DYNO Tests",
                Code = "Code2",
                Description = "Description2",
                ActivateIndicator = false
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<AddUpdateSkipTestReasonHandler>>();
            genericRepo.Setup(r => r.GetById(request.Id)).ReturnsAsync(existingSkipTestReason);

            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            AddUpdateSkipTestReasonHandler handler = new AddUpdateSkipTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

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
            var request = new AddUpdateSkipTestReasonRequestDto
            {
                Id = "ExistingId",
                TestType = "TestType1",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<AddUpdateSkipTestReasonHandler>>();
            genericRepo.Setup(r => r.GetById(request.Id)).Throws(new Exception("Test exception"));

            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            AddUpdateSkipTestReasonHandler handler = new AddUpdateSkipTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.OperationUnsuccessful, returnedData.Message);
        }

        [Fact]
        public async Task ShouldReturnNotFoundWhenUpdatingNonExistentSkipTestReasonUnitTest()
        {
            // Arrange
            var request = new AddUpdateSkipTestReasonRequestDto
            {
                Id = "NonExistentId",
                TestType = "TestType1",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<AddUpdateSkipTestReasonHandler>>();
            genericRepo.Setup(r => r.GetById(request.Id)).ReturnsAsync((SkipTestReason)null);

            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            AddUpdateSkipTestReasonHandler handler = new AddUpdateSkipTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.TestReasonNotFound, returnedData.Message);
            Assert.Equal(HttpStatusCode.NotFound, returnedData.HttpStatusCode);
        }
        [Fact]
        public async Task ShouldReturnBadRequestWhenAddingNewSkipTestReasonWithInvalidTestTypeUnitTest()
        {
            // Arrange
            var request = new AddUpdateSkipTestReasonRequestDto
            {
                TestType = "InvalidTestType",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var mockLogger = new Mock<ILogger<AddUpdateSkipTestReasonHandler>>();

            AddUpdateSkipTestReasonHandler handler = new AddUpdateSkipTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.BadRequest, returnedData.Message);
            Assert.Equal(HttpStatusCode.BadRequest, returnedData.HttpStatusCode);
        }

        [Fact]
        public async Task ShouldReturnBadRequestWhenUpdatingExistingSkipTestReasonWithInvalidTestTypeUnitTest()
        {
            // Arrange
            var request = new AddUpdateSkipTestReasonRequestDto
            {
                Id = "ExistingId",
                TestType = "InvalidTestType",
                Code = "Code1",
                Description = "Description1",
                ActiveIndicator = true,
                UserId = "UserId1"
            };

            var existingSkipTestReason = new SkipTestReason
            {
                Id = request.Id,
                TestType = "TestType2",
                Code = "Code2",
                Description = "Description2",
                ActivateIndicator = false
            };

            var mapper = new Mock<IMapper>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<AddUpdateSkipTestReasonHandler>>();
            genericRepo.Setup(r => r.GetById(request.Id)).ReturnsAsync(existingSkipTestReason);

            var unitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            AddUpdateSkipTestReasonHandler handler = new AddUpdateSkipTestReasonHandler(mapper.Object, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(returnedData.IsSuccess);
            Assert.Equal(CommonMessages.BadRequest, returnedData.Message);
            Assert.Equal(HttpStatusCode.BadRequest, returnedData.HttpStatusCode);
        }
    }
}