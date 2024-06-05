namespace VICSS.Test.Servics.Centre.UnitTest
{
    using System.Linq.Expressions;
    using Microsoft.Extensions.Logging;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;

    public class GetCentreHandlerUnitTest
    {
        [Fact]
        public void CentreHandlerGetAllDataUnitTest()
        {
            //Arrange

            List<Centre> data = new List<Centre>();
            data.Add(new Centre { CentreId = "23321883-2885-463B-80B0-3D23450E8EF1", CentreName = "KOWLOON BAY VEHICLE EXAMINATION CENTRE", CentreCode = "TY1" });
            data.Add(new Centre { CentreId = "9242E680-CDE1-4683-A2F1-484C70F8A158", CentreName = "TSINGI-Yuhan BAY VEHICLE EXAMINATION CENTRE", CentreCode = "TYG" });

            GetCentresRequestDto getCentresRequestDto = new GetCentresRequestDto("All");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetCentresMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var logger = new Mock<ILogger<GetCentresHandler>>();
            ILogger<GetCentresHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetAll()).ReturnsAsync(data);
            GetCentresHandler handler = new GetCentresHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getCentresRequestDto, CancellationToken.None);

            //Assert
            Assert.Equal(data.Count, returnedData.Result.centres.Count);
            Assert.Equal(data[0].CentreId, returnedData.Result.centres[0].CentreId);
        }

        [Fact]
        public void CentreHandlerGetActiveDataUnitTest()
        {
            //Arrange

            List<Centre> data = new List<Centre>();
            data.Add(new Centre { CentreId = "23321883-2885-463B-80B0-3D23450E8EF1", CentreName = "KOWLOON BAY VEHICLE EXAMINATION CENTRE", CentreCode = "TY1", LastRecordTransactionTypeCode = 'I' });

            GetCentresRequestDto getCentresRequestDto = new GetCentresRequestDto("Active");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetCentresMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var logger = new Mock<ILogger<GetCentresHandler>>();
            ILogger<GetCentresHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>())).ReturnsAsync(data);
            GetCentresHandler handler = new GetCentresHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getCentresRequestDto, CancellationToken.None);

            //Assert
            Assert.Equal(data.Count, returnedData.Result.centres.Count);
            Assert.Equal(data[0].CentreId, returnedData.Result.centres[0].CentreId);
        }


        [Fact]
        public void CentreHandlerGetInActiveDataUnitTest()
        {
            //Arrange

            List<Centre> data = new List<Centre>();
            data.Add(new Centre { CentreId = "9242E680-CDE1-4683-A2F1-484C70F8A158", CentreName = "TSINGI-Yuhan BAY VEHICLE EXAMINATION CENTRE", CentreCode = "TYG", LastRecordTransactionTypeCode = 'D' });

            GetCentresRequestDto getCentresRequestDto = new GetCentresRequestDto("Inactive");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetCentresMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<CentreDBContext, Centre>>();
            var logger = new Mock<ILogger<GetCentresHandler>>();
            ILogger<GetCentresHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Centre, bool>>>())).ReturnsAsync(data);
            GetCentresHandler handler = new GetCentresHandler(mapper, genericRepo.Object,mockLogger);

            //Act
            var returnedData = handler.Handle(getCentresRequestDto, CancellationToken.None);

            //Assert
            Assert.Equal(data.Count, returnedData.Result.centres.Count);
            Assert.Equal(data[0].CentreId, returnedData.Result.centres[0].CentreId);
        }
    }
}