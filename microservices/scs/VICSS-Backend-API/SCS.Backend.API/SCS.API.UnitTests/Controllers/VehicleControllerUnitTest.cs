using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_API_Unit_Tests.Helper;
using SCS_Backend_API.Controllers;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCS_API_Unit_Tests.Controllers
{
    public class VehicleControllerUnitTest
    {
        private Mock<IVehicleService> mockVehicleService;
        private Mock<IExamService> mockExamService;
        private Mock<ILogger<VehicleController>> mockLogger;
        private VehicleController controller;
        public VehicleControllerUnitTest()
        {
            mockVehicleService = new Mock<IVehicleService>();
            mockExamService = new Mock<IExamService>();
            mockLogger = new Mock<ILogger<VehicleController>>();
            controller = new VehicleController(mockVehicleService.Object, mockExamService.Object, mockLogger.Object);
        }

        [Fact]
        public async Task SearchWatchList_Returns200Status()
        {
            var data= new SearchWatchListResponseDto { 
                data= new List<WatchListDto> { new WatchListDto { ChassisNumber="testChassisNumber",Center_Key=1} } ,
                StatusCode= 200,
                Message="Succesfull"};
           
            mockVehicleService.Setup(i => i.SearchWatchList(It.IsAny<WatchListRequestDto>()))
                .ReturnsAsync(data);

            var result = await controller.SearchWatchList(It.IsAny<WatchListRequestDto>());

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);

        }
        [Fact]
        public async Task SearchWatchList_ReturnsInternalServerError()
        {
            mockVehicleService.Setup(x => x.SearchWatchList(It.IsAny<WatchListRequestDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.SearchWatchList(It.IsAny<WatchListRequestDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task CreateWatchList_Returns200Status()
        {
            var data = new CreateWatchListDtoResponse
            {
                data =  new CreateWatchListDto { ChassisNumber = "testChassisNumber",RegMark="TestRegMark"} ,
                StatusCode = 200,
                Message = "Succesfull"
            };

            mockVehicleService.Setup(i => i.CreateWatchList(It.IsAny<CreateWatchListDto>()))
                .ReturnsAsync(data);

            var result = await controller.CreateWatchList(It.IsAny<CreateWatchListDto>());

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);

        }
        [Fact]
        public async Task CreateWatchList_ReturnsInternalServerError()
        {
            mockVehicleService.Setup(x => x.CreateWatchList(It.IsAny<CreateWatchListDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.CreateWatchList(It.IsAny<CreateWatchListDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task CancelWatchList_Returns200Status()
        {
            var data = new WatchListCancelResponse
            {
                data = new CancelWatchListDto {Status="true",Vhcl_WhLst_Key=1},
                StatusCode = 200,
                Message = "Succesfull"
            };

            mockVehicleService.Setup(i => i.CancelWatchList(It.IsAny<CancelWatchListDto>()))
                .ReturnsAsync(data);

            var result = await controller.CancelWatchList(It.IsAny<CancelWatchListDto>());

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);
        }

        [Fact]
        public async Task CancelWatchList_ReturnsInternalServerError()
        {
            mockVehicleService.Setup(x => x.CancelWatchList(It.IsAny<CancelWatchListDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.CancelWatchList(It.IsAny<CancelWatchListDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task CreateNewVillageVehicle_Returns200Status()
        {
            var data = new VVandMPVResponseDTO
            {
                data = new VVandMPVResponse { ChassisNumber="test",VehicleId="001"},
                StatusCode = 200,
                Message = "Succesfull"
            };

            mockVehicleService.Setup(i => i.CreateNewVillageVehicle(It.IsAny<VillageAndMovementPermitVehicleDto>()))
                .ReturnsAsync(data);

            var result = await controller.CreateNewVillageVehicle(It.IsAny<VillageAndMovementPermitVehicleDto>());

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);
        }

        [Fact]
        public async Task CreateNewVillageVehicle_ReturnsInternalServerError()
        {
            mockVehicleService.Setup(x => x.CreateNewVillageVehicle(It.IsAny<VillageAndMovementPermitVehicleDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.CreateNewVillageVehicle(It.IsAny<VillageAndMovementPermitVehicleDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task AmendNonValidVehicle_Returns200Status()
        {
            var data = new CreateNewNonValidVehicleDtoResponse
            {
                data = new CreateNewNonValidVehicleDto { ChassisNumber = "test", VhclTypeCode="NV",RegMark="Test"},
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request= new CreateNewNonValidVehicleDto { RegMark= "Test",ChassisNumber="test" };

            mockVehicleService.Setup(i => i.AmendNonValidVehicle(request))
                .ReturnsAsync(data);

            var result = await controller.AmendNonValidVehicle(request);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task AmendNonValidVehicle_ReturnsBadRequestForInvalidChassisNumber()
        {
            var data = new CreateNewNonValidVehicleDtoResponse
            {
                data = new CreateNewNonValidVehicleDto { ChassisNumber = "test", VhclTypeCode = "NV", RegMark = "Test" },
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = new CreateNewNonValidVehicleDto { RegMark = "Test"};
            mockVehicleService.Setup(i => i.AmendNonValidVehicle(request)).ReturnsAsync(data);
            var result = await controller.AmendNonValidVehicle(request) as BadRequestObjectResult;
            Assert.Equal("Appointment Number should be greater than 0", result?.Value);
            Assert.Equal(400, result?.StatusCode);


        }
        [Fact]
        public async Task AmendVVandMPV_Returns200Status()
        {
            var data = new AmendVVandMPVResponseDto
            {
                data = new AmendVVandMPVDto { VehicleId="001",ChassisNumber = "test", VhclTypeCode = "NV", RegMark = "Test",VehicleClassId="VV",Make="testMake", },
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = new AmendVVandMPVRequestDto { FloatName = "Test", ChassisNumber = "test",ManufactureYear=2000,BodyType="test",EngineSize=2,EngineType="testType" };
            var chassisNumber = "testChassisNumber";
            mockVehicleService.Setup(i => i.AmendVVandMPV(request,chassisNumber))
                .ReturnsAsync(data);

            var result = await controller.AmendVVandMPV(request,chassisNumber);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);
        }

        [Fact]
        public async Task AmendVVandMPV_ReturnsBadRequestForInvalidInput()
        {
            var data = new AmendVVandMPVResponseDto
            {
                data = new AmendVVandMPVDto { VehicleId = "001", ChassisNumber = "test", VhclTypeCode = "NV", RegMark = "Test", VehicleClassId = "VV", Make = "testMake", },
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = (AmendVVandMPVRequestDto)null!;
            var chassisNumber = "testChassisNumber";
            mockVehicleService.Setup(i => i.AmendVVandMPV(request,chassisNumber)).ReturnsAsync(data);
            var result = await controller.AmendVVandMPV(request,chassisNumber) as BadRequestObjectResult;
            Assert.Equal("No Such VVorMPV found.", result?.Value);
            Assert.Equal(400, result?.StatusCode);


        }

        [Fact]
        public async Task VehicleOperationalRemark_Returns200Status()
        {
            var data = new VehicleOperationRemarkResponse
            {
                data = "",
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = new AttachmentDto { AdditionalMessage = "Test", ChassisNumber = "test",AppointmentNumber=1};
            var chassisNumber = "testChassisNumber";
            var remarks = "TestRemark";
            mockVehicleService.Setup(i => i.VehicleOperationalRemark(request, remarks,chassisNumber))
                .ReturnsAsync(data);

            var result = await controller.VehicleOperationalRemark(request,remarks, chassisNumber);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task VehicleOperationalRemark_ReturnsBadRequestForInvalidInput()
        {
            var data = new VehicleOperationRemarkResponse
            {
                data = "",
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = new AttachmentDto { AdditionalMessage = "Test", ChassisNumber = "test", AppointmentNumber = 1 };
            var chassisNumber = "testChassisNumber";
            var remarks = "";
            mockVehicleService.Setup(i => i.VehicleOperationalRemark(request, remarks, chassisNumber))
                .ReturnsAsync(data);

            var result = await controller.VehicleOperationalRemark(request, remarks, chassisNumber) as BadRequestObjectResult;

            Assert.Equal("Appointment Number should be greater than 0", result?.Value);
            Assert.Equal(400, result?.StatusCode);
        }
        [Fact]
        public async Task VehicleMessage_Returns200Status()
        {
            var data = new VehicleMessagesResponse
            {
                data = new VehicleMessagesDto
                {
                    VehicleId="001",
                    MessageEn="Test",
                    MessageCh="Test"
                },
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = new VehicleMessagesDto
            {
                VehicleId = "001",
                MessageEn = "Test",
                MessageCh = "Test"
            };
           
            mockVehicleService.Setup(i => i.VehicleMessage(request))
                .ReturnsAsync(data);

            var result = await controller.VehicleMessage(request);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task VehicleMessage_ReturnsBadRequestForInvalidInput()
        {
            var data = new VehicleMessagesResponse
            {
                data = new VehicleMessagesDto
                {
                    VehicleId = "001",
                    MessageEn = "Test",
                    MessageCh = "Test"
                },
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = new VehicleMessagesDto
            {
                VehicleId = "001",
                MessageEn = "",
                MessageCh = ""
            };

            mockVehicleService.Setup(i => i.VehicleMessage(request))
                .ReturnsAsync(data);

            var result = await controller.VehicleMessage(request) as BadRequestObjectResult;

            Assert.Equal("Appointment Number should be greater than 0", result?.Value);
            Assert.Equal(400, result?.StatusCode);
        }

    }
}
