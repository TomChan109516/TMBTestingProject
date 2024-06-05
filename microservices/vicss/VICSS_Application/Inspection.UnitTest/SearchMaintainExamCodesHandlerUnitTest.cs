namespace VICSS.Test.Services.Inspection.UnitTest
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Logging;
    using VICSS.Service.Inspection.Mappers;
    using VICSS.Shared.Models.Inspection;

    public class SearchMaintainExamCodesHandlerUnitTest
    {
      
        [Fact]
        public async Task Handle_ShouldReturnAllInspectionTypes_WhenRequestIsEmpty()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var loggerMock = new Mock<ILogger<SearchMaintainExamCodesHandler>>();            
            var request = new SearchMaintainExamCodesRequestDto (new SearchExamCodeRequestDto { ExamClass = string.Empty, ExamCode = string.Empty});
            var inspectionTypes = new List<InspectionType> { new InspectionType { InspectionTypeId = "001",ExamCode="001"}, new InspectionType { InspectionTypeId = "002", ExamCode = "002" } };
            repositoryMock.Setup(r => r.GetAll()).ReturnsAsync(inspectionTypes);

            var handler = new SearchMaintainExamCodesHandler(mapperMock, repositoryMock.Object, loggerMock.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(inspectionTypes.Count, result.ListMaintainExamCodes.Count);
            Assert.Equal(inspectionTypes[0].InspectionTypeId , result.ListMaintainExamCodes[0].InspectionTypeId);
        }

        [Fact]
        public async Task Handle_ShouldReturnFilteredInspectionTypes_WhenRequestIsNotEmpty()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var loggerMock = new Mock<ILogger<SearchMaintainExamCodesHandler>>();      
            var request = new SearchMaintainExamCodesRequestDto(new SearchExamCodeRequestDto {  ExamCode = "001", ExamClass = "001" } ) ;
            var inspectionTypes = new List<InspectionType> { new InspectionType { ExamCode = request.searchexamCodeDto.ExamCode, ExamClass = request.searchexamCodeDto.ExamClass } };
            repositoryMock.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<InspectionType, bool>>>())).ReturnsAsync(inspectionTypes);

            var handler = new SearchMaintainExamCodesHandler(mapperMock, repositoryMock.Object, loggerMock.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Single(result.ListMaintainExamCodes);
        }

        [Fact]
        public async Task Handle_ShouldReturnNotFound_WhenNoInspectionTypesMatchRequest()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var loggerMock = new Mock<ILogger<SearchMaintainExamCodesHandler>>();            
            var request = new SearchMaintainExamCodesRequestDto(new SearchExamCodeRequestDto { ExamCode = "NonExistingCode", ExamClass = "NonExistingClass" });
            repositoryMock.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<InspectionType, bool>>>())).ReturnsAsync(new List<InspectionType>());

            var handler = new SearchMaintainExamCodesHandler(mapperMock, repositoryMock.Object, loggerMock.Object);
            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Empty(result.ListMaintainExamCodes);
        }

        [Fact]
        public async Task Handle_ShouldReturnInternalServerError_WhenExceptionIsThrown()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            var mapperMock = mappingConfig.CreateMapper();
            var repositoryMock = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var loggerMock = new Mock<ILogger<SearchMaintainExamCodesHandler>>();            
            var request = new SearchMaintainExamCodesRequestDto(new SearchExamCodeRequestDto { ExamCode = "NonExistingCode", ExamClass = "NonExistingClass" });
            repositoryMock.Setup(r => r.GetAll()).ThrowsAsync(new Exception());

            var handler = new SearchMaintainExamCodesHandler(mapperMock, repositoryMock.Object, loggerMock.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Equal("Operation Unsuccessful Due To Internal Server Error", result.ErrorMessage);
        }
    }
}
