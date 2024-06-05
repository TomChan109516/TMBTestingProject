

namespace VICSS.Test.Services.Inspection.UnitTest
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Logging;
    using VICSS.Service.Inspection.Mappers;
    using VICSS.Shared.Models.Inspection;

    public class AddUpdateMaintainExamCodesHandlerUnitTest
    {
        
        [Fact]
        public async Task Handle_ShouldReturnBadRequest_WhenRequestParametersAreInvalid()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<AddUpdateMaintainExamCodesHandler>>();
            var handler = new AddUpdateMaintainExamCodesHandler(mapperMock, repositoryMock.Object, unitOfWorkMock.Object, loggerMock.Object);
            var request = new AddUpdateMaintainExamCodesRequestDto(new ExamCodeDto { });

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert            
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_ShouldAddNewInspectionType_WhenInspectionTypeIdIsNull()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<AddUpdateMaintainExamCodesHandler>>();
            var handler = new AddUpdateMaintainExamCodesHandler(mapperMock, repositoryMock.Object, unitOfWorkMock.Object, loggerMock.Object);
            var request = new AddUpdateMaintainExamCodesRequestDto(new ExamCodeDto
            {
                ExamCode = "001",
                InspectionTypeDescription = "Exam Description",
                ExamClass = "Exam Class",
                InspectionTypeName = "Exam Name",
                UserId = "test"
            });
            repositoryMock.Setup(r => r.Add(It.IsAny<InspectionType>())).Returns(Task.CompletedTask);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert            
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_ShouldUpdateExistingInspectionType_WhenInspectionTypeIdIsNotNull()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<AddUpdateMaintainExamCodesHandler>>();
            var handler = new AddUpdateMaintainExamCodesHandler(mapperMock, repositoryMock.Object, unitOfWorkMock.Object, loggerMock.Object);
            var request = new AddUpdateMaintainExamCodesRequestDto(new ExamCodeDto
            {
                InspectionTypeId = "001",
                ExamCode = "001",
                InspectionTypeDescription = "Description",
                ExamClass = "ExamClass",
                InspectionTypeName = "ExamName",
                UserId = "UserId"
            });
            var existingInspectionType = new InspectionType { InspectionTypeId = request.examCodeDto.InspectionTypeId };
            repositoryMock.Setup(r => r.GetById(request.examCodeDto.InspectionTypeId)).ReturnsAsync(existingInspectionType);            

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert            
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_ShouldReturnNotFound_WhenUpdatingNonExistingInspectionType()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();            
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<AddUpdateMaintainExamCodesHandler>>();
            var handler = new AddUpdateMaintainExamCodesHandler(mapperMock, repositoryMock.Object, unitOfWorkMock.Object, loggerMock.Object);
            var request = new AddUpdateMaintainExamCodesRequestDto(new ExamCodeDto
            {
                InspectionTypeId = "001",
                ExamCode = "001",
                InspectionTypeDescription = "Description",
                ExamClass = "ExamClass",
                InspectionTypeName = "ExamName",
                UserId = "UserId"
            });
            repositoryMock.Setup(r => r.GetById(request.examCodeDto.InspectionTypeId)).ReturnsAsync((InspectionType)null);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert            
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_ShouldReturnBadRequest_WhenUpdateRequestDataIsInvalid()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<AddUpdateMaintainExamCodesHandler>>();
            var handler = new AddUpdateMaintainExamCodesHandler(mapperMock, repositoryMock.Object, unitOfWorkMock.Object, loggerMock.Object);
            var request = new AddUpdateMaintainExamCodesRequestDto(new ExamCodeDto
            {
                InspectionTypeId = "001",
                ExamCode = "",
                InspectionTypeDescription = "",
                ExamClass = "ExamClass",
                InspectionTypeName = "ExamName",
                UserId = "UserId"
            });
            var existingInspectionType = new InspectionType { InspectionTypeId = request.examCodeDto.InspectionTypeId };
            repositoryMock.Setup(r => r.GetById(request.examCodeDto.InspectionTypeId)).ReturnsAsync(existingInspectionType);
            //repositoryMock.Setup(r => r.Update(It.IsAny<InspectionType>())).Returns(true);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert            
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_ShouldReturnInternalServerError_OnException()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<AddUpdateMaintainExamCodesHandler>>();
            var handler = new AddUpdateMaintainExamCodesHandler(mapperMock, repositoryMock.Object, unitOfWorkMock.Object, loggerMock.Object);
            var request = new AddUpdateMaintainExamCodesRequestDto(new ExamCodeDto
            {
                InspectionTypeId = "001",
                ExamCode = "001",
                InspectionTypeDescription = "Description",
                ExamClass = "ExamClass",
                InspectionTypeName = "ExamName",
                UserId = "UserId"
            });
            var existingInspectionType = new InspectionType { InspectionTypeId = request.examCodeDto.InspectionTypeId };
            repositoryMock.Setup(r => r.GetById(request.examCodeDto.InspectionTypeId)).Throws(new Exception());
            //repositoryMock.Setup(r => r.Update(It.IsAny<InspectionType>())).Returns(true);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert            
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Equal("Operation Unsuccessful Due To Internal Server Error", result.ErrorMessage);
        }
    }
}
