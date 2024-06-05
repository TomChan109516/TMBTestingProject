using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_Backend_API;
using SCS_Backend_API.Controllers;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static SCS_Backend_API.DTO.SearchExamScheduleDto;

namespace SCS_API_Unit_Tests.Controllers
{
    public class CenterControllerUnitTest
    {
        private readonly Mock<ICenterService> mockCenterService;
        private readonly Mock<ILogger<CenterController>> mockLogger;
        private readonly CenterController controller;
        public CenterControllerUnitTest()
        {
            mockCenterService = new Mock<ICenterService>();
            mockLogger = new Mock<ILogger<CenterController>>();
            controller = new CenterController(mockCenterService.Object, mockLogger.Object);
        }

        [Fact]
        public async Task SearchExamSchedule_Returns200Status()
        {
            var data = new SearchExamScheduleResponse
            {
                data = new List<SearchExamScheduleDto> { new SearchExamScheduleDto
                { CenterId = "TY1", ExamScheduleTypeCode = "test" } },
                StatusCode = 200,
                Message = "Succesfull"
            };

            mockCenterService.Setup(i => i.SearchExamSchedule(It.IsAny<SearchExamScheduleRequestDto>()))
                .ReturnsAsync(data);

            var result = await controller.SearchExamSchedule(It.IsAny<SearchExamScheduleRequestDto>());

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);

        }
        [Fact]
        public async Task SearchExamSchedule_ReturnsInternalServerError()
        {
            mockCenterService.Setup(x => x.SearchExamSchedule(It.IsAny<SearchExamScheduleRequestDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.SearchExamSchedule(It.IsAny<SearchExamScheduleRequestDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }

        //[Fact]
        //public async Task CreateExamSchedule_Returns200Status()
        //{
        //    var data = new CreateExamScheduleDetailsResponse
        //    {
        //        data =  new List<CreateExamScheduleDetailsDto>.List()
        //        { VisExamScheduleKey = "001", LaneId = "1" } ,
        //        StatusCode = 200,
        //        Message = "Succesfull"
        //    };

        //    mockCenterService.Setup(i => i.CreateExamSchedule(It.IsAny<CreateExamScheduleDetailsRequestDto>()))
        //        .ReturnsAsync(data);

        //    var result = await controller.CreateExamSchedule(It.IsAny<CreateExamScheduleDetailsRequestDto>());

        //    Assert.NotNull(result);
        //    var objectResult = Assert.IsType<OkObjectResult>(result);
        //    Assert.Equal(data, objectResult.Value);

        //}
        //[Fact]
        //public async Task CreateExamSchedule_ReturnsInternalServerError()
        //{
        //    mockCenterService.Setup(x => x.CreateExamSchedule(It.IsAny<CreateExamScheduleDetailsRequestDto>())).ThrowsAsync(new Exception("Simulated Error"));

        //    var result = await Assert.ThrowsAsync<Exception>(async () => await controller.CreateExamSchedule(It.IsAny<CreateExamScheduleDetailsRequestDto>()));
        //    Assert.Equal("Simulated Error", result.Message);
        //}


    } 
}
