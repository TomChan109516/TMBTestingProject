using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Helpers;
using SCS_Backend_API.Models1;
using SCS_Backend_API.Services;
using SCS_Backend_API.Data;
using SCS_API_Unit_Tests.Helper;

namespace SCS_API_Unit_Tests.Services
{
    public class ExamServiceUnitTest
    {
        private Mock<ILogger<ExamService>> mockLogger;
        private IMapper _mapper;
        public ExamServiceUnitTest()
        {

            mockLogger = new Mock<ILogger<ExamService>>();
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new MapperConfig());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
        }

        [Fact]
        public async Task GetPrimaryExamList_ReturnsListOfPrimaryExams()
        {
            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "ExamDb").Options;
            using (var context = new AppDBContextEF(options))
            {
                var data = new ExamCodes { Id = 1, ExamCode = "testCode", ExamName = "testExam", IsPrimary = true, ExamFee = 0, Centers = new List<Center> { new Center { Ctr_Id = "TY1", Ctr_Name = "Tsingg Yi", Ctr_Key = 5, IsActive = true } } };
                context.SCS_ExamCodes.Add(data);
                context.SaveChanges();

                string centreId = "TY1";
                var examService = new ExamService(context, _mapper, mockLogger.Object);
                var result = await examService.GetPrimaryExamList(centreId);

                Assert.NotNull(result);
                Assert.IsType<List<ExamCodeDto>>(result);
                Assert.Single(result);
                Assert.Equal("testCode", result?.First().ExamCode);
                Assert.Equal("testExam", result?.First().ExamName);

                context.Database.EnsureDeleted();
            }
        }

        [Fact]
        public async Task GetSupplementaryExamList_ReturnsListOfSupplementaryExams()
        {
            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "ExamDb2").Options;

            using (var context = new AppDBContextEF(options))
            {
                var data = new ExamCodes { Id = 1, ExamCode = "testCode", ExamName = "testExam", IsPrimary = false, ExamFee = 0, Centers = new List<Center> { new Center { Ctr_Id = "TY1", Ctr_Name = "Tsingg Yi", Ctr_Key = 5, IsActive = true } } };

                context.SCS_ExamCodes.Add(data);
                context.SaveChanges();
                string centreId = "TY1";
                var examService = new ExamService(context, _mapper, mockLogger.Object);
                var result = await examService.GetSupplementaryExamList(centreId);

                Assert.IsType<List<ExamCodeDto>>(result);
                Assert.NotNull(result);
                Assert.IsType<List<ExamCodeDto>>(result);
                Assert.Single(result);
                Assert.Equal("testCode", result?.First().ExamCode);
                Assert.Equal("testExam", result?.First().ExamName);

                context.Database.EnsureDeleted();
            }
        }

        [Fact]
        public async Task GetExamList_ReturnsListOfExams()
        {
            var ExamList = MockData.ExamCodeListData();

            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "ExamDb3").Options;

            using (var context = new AppDBContextEF(options))

            {
                var data = new Center { Ctr_Key = 5, Ctr_Id = "TY1", Ctr_Name = "Test1", IsActive = true, Exams = ExamList };

                context.SCS_Centers.Add(data);
                context.SaveChanges();


                string centreId = "TY1";
                var examService = new ExamService(context, _mapper, mockLogger.Object);
                var result = await examService.GetVehicleExamList(centreId);
                Assert.NotNull(result);
                //Assert.Single(result.data?.Primary);
                //Assert.Single(result?.data?.Supplementary);
                Assert.Equal(200, result.StatusCode);
                Assert.Equal("Vehicle Exams Fetched Successfully", result.Message);
                Assert.Equal("testExam", result.data?.Supplementary?.First().ExamName);
                Assert.Equal("testCode", result.data?.Supplementary?.First().ExamCode);
                Assert.Equal("testCode2", result.data?.Primary?.First().ExamCode);
                Assert.Equal("testExam2", result.data?.Primary?.First().ExamName);

                context.Database.EnsureDeleted();
            }
        }


        [Fact]
        public async Task GetExamList_ReturnsEmptyList()
        {
            var ExamList = MockData.ExamCodeListData();

            var options = new DbContextOptionsBuilder<AppDBContextEF>().UseInMemoryDatabase(databaseName: "ExamDb3").Options;

            using (var context = new AppDBContextEF(options))
            {
                var data = new Center { Ctr_Key = 5, Ctr_Id = "TY1", Ctr_Name = "Test1", IsActive = true, Exams = ExamList };
                context.SCS_Centers.Add(data);
                context.SaveChanges();
                string centreId = "TYG";
                var examService = new ExamService(context, _mapper, mockLogger.Object);
                var result = await examService.GetVehicleExamList(centreId);

                Assert.Null(result.data);
                Assert.Equal("No vehicle exam is found", result.Message);

                context.Database.EnsureDeleted();
            }
        }


    }

}
