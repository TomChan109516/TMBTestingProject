namespace VICSS.Test.Service.Inspection.UnitTest
{
    using AutoMapper;
    using Microsoft.Extensions.Logging;
    using Moq;
    using System.Linq.Expressions;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.EventHandlers;
    using VICSS.Service.Inspection.Mappers;
    public class GetExamCodeHandlerUnitTest
    {
        [Fact]
        public void ExamCodeHandlerGetAllDataUnitTest()
        {
            //Arrange

            List<InspectionType> data = new List<InspectionType>();
            data.Add(new InspectionType
            {
                InspectionTypeId = "FE7B5EAC-9409-480F-B6AE-F7226598E944",
                InspectionTypeName = "Annual Inspection",
                ExamClass = "Primary",
                ExamCode = "008",
                InspectionTypeDescription = "Annual Inspection",
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionTypeCode = 'I',
                LastRecordTransactionUserId = "Admin"
            });
            data.Add(new InspectionType
            {
                InspectionTypeId = "FE637C33-679B-40F4-AE09-D62B53A22E9A",
                InspectionTypeName = "Stamping Chassis Number",
                ExamClass = "Supplementary",
                ExamCode = "006",
                InspectionTypeDescription = "Stamping Chassis Number",
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionTypeCode = 'I',
                LastRecordTransactionUserId = "Admin"
            });

            GetExamCodeRequestDto getExamCodeRequestDto = new GetExamCodeRequestDto("All");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var logger = new Mock<ILogger<GetExamCodeHandler>>();
            ILogger<GetExamCodeHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetAll()).ReturnsAsync(data);
            GetExamCodeHandler handler = new GetExamCodeHandler(mapper, genericRepo.Object,mockLogger);

            //Act
            var returnedData = handler.Handle(getExamCodeRequestDto, CancellationToken.None);

            //Assert
            Assert.Equal(data.Count, returnedData.Result.ExamCodeDtos.Count);
            Assert.Equal(data[0].InspectionTypeId, returnedData.Result.ExamCodeDtos[0].InspectionTypeId);
        }

        [Fact]
        public void ExamCodeHandlerGetActiveDataUnitTest()
        {
            //Arrange
            List<InspectionType> data = new List<InspectionType>();
            data.Add(new InspectionType
            {
                InspectionTypeId = "FE7B5EAC-9409-480F-B6AE-F7226598E944",
                InspectionTypeName = "Annual Inspection",
                ExamClass = "Primary",
                ExamCode = "008",
                InspectionTypeDescription = "Annual Inspection",
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionTypeCode = 'I',
                LastRecordTransactionUserId = "Admin"
            });

            GetExamCodeRequestDto getExamCodeRequestDto = new GetExamCodeRequestDto("Active");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var logger = new Mock<ILogger<GetExamCodeHandler>>();
            ILogger<GetExamCodeHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<InspectionType, bool>>>())).ReturnsAsync(data);
            GetExamCodeHandler handler = new GetExamCodeHandler(mapper, genericRepo.Object,mockLogger);

            //Act
            var returnedData = handler.Handle(getExamCodeRequestDto, CancellationToken.None);

            //Assert
            Assert.Equal(data.Count, returnedData.Result.ExamCodeDtos.Count);
            Assert.Equal(data[0].InspectionTypeId, returnedData.Result.ExamCodeDtos[0].InspectionTypeId);
        }


        [Fact]
        public void ExamCodeHandlerGetInActiveDataUnitTest()
        {
            //Arrange
            List<InspectionType> data = new List<InspectionType>();
            data.Add(new InspectionType
            {
                InspectionTypeId = "FE637C33-679B-40F4-AE09-D62B53A22E9A",
                InspectionTypeName = "Stamping Chassis Number",
                ExamClass = "Supplementary",
                ExamCode = "006",
                InspectionTypeDescription = "Stamping Chassis Number",
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionTypeCode = 'I',
                LastRecordTransactionUserId = "Admin"
            });

            GetExamCodeRequestDto getExamCodeRequestDto = new GetExamCodeRequestDto("Inactive");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new ExamCodeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, InspectionType>>();
            var logger = new Mock<ILogger<GetExamCodeHandler>>();
            ILogger<GetExamCodeHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<InspectionType, bool>>>())).ReturnsAsync(data);
            GetExamCodeHandler handler = new GetExamCodeHandler(mapper, genericRepo.Object, mockLogger);


            //Act
            var returnedData = handler.Handle(getExamCodeRequestDto, CancellationToken.None);

            //Assert
            Assert.Equal(data.Count, returnedData.Result.ExamCodeDtos.Count);
            Assert.Equal(data[0].InspectionTypeId, returnedData.Result.ExamCodeDtos[0].InspectionTypeId);
        }
    }
}
