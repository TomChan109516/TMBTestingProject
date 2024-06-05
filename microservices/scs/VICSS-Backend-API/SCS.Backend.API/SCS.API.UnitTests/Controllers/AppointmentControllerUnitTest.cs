using Moq;
using SCS_Backend_API.Controllers;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SCS_API_Unit_Tests.Helper;

namespace SCS_API_Unit_Tests.Controllers
{
    public class AppointmentControllerUnitTest
    {
        private Mock<IAppointmentService> mockAppointmentService;
        private Mock<IExamService> mockExamService;
        private Mock<ILogger<AppointmentController>> mockLogger;
        private AppointmentController controller;
        public AppointmentControllerUnitTest()
        {
            mockAppointmentService = new Mock<IAppointmentService>();
            mockExamService = new Mock<IExamService>();
            mockLogger = new Mock<ILogger<AppointmentController>>();
            controller = new AppointmentController(mockAppointmentService.Object, mockExamService.Object, mockLogger.Object);
        }

        [Fact]
        public async Task SearchVehicle_Returns200Status()
        {
            var testData = MockData.VehicleSearchDtoData();
            var response = MockData.VehicleAppointmentResponseData();

            mockAppointmentService.Setup(i => i.SearchValidVehicle(It.IsAny<VehicleSearchDto>()))
                .ReturnsAsync(response);

            var result = await controller.SearchVehicle(testData);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(response, objectResult.Value);

        }
        [Fact]
        public async Task SearchVehicle_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.SearchValidVehicle(It.IsAny<VehicleSearchDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.SearchVehicle(It.IsAny<VehicleSearchDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task CreateAppointment_Returns200Status()
        {
            var data = MockData.AppointmentResponseData();

            mockAppointmentService.Setup(i => i.CreateAppointment(It.IsAny<AppointmentDto>())).ReturnsAsync(data);
            var result = await controller.CreateAppointment(It.IsAny<AppointmentDto>());

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }

        [Fact]
        public async Task CreateAppointment_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.CreateAppointment(It.IsAny<AppointmentDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.CreateAppointment(It.IsAny<AppointmentDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }


        [Fact]
        public async Task GetExamList_Returns200Status()
        {
            var data = MockData.ExamResponseDtoData();

            mockExamService.Setup(i => i.GetVehicleExamList(It.IsAny<string>())).ReturnsAsync(data);
            var result = await controller.GetExamList(It.IsAny<string>());
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }

        [Fact]
        public async Task GetExamList_ReturnsInternalServerError()
        {
            mockExamService.Setup(x => x.GetVehicleExamList(It.IsAny<string>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetExamList(It.IsAny<string>()));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task GetAllLanes_Returns200Status()
        {
            var data = MockData.GetAllLanesResponseData();

            mockAppointmentService.Setup(i => i.GetAllLanes()).ReturnsAsync(data);
            var result = await controller.GetAllLanes();

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }


        [Fact]
        public async Task GetAllLanes_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.GetAllLanes()).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetAllLanes());
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task GetVehicleClassDetails_Returns200Status()
        {
            var data = MockData.VehicleClassResponseData();

            mockAppointmentService.Setup(i => i.GetVehicleClassDetails()).ReturnsAsync(data);
            var result = await controller.GetVehicleClassDetails();

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }


        [Fact]
        public async Task GetVehicleClassDetails_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.GetVehicleClassDetails()).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetVehicleClassDetails());
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task GetVehicleSubClass_Returns200Status()
        {
            string vehicleClassId = "001";
            var data = MockData.SubClassResponseData();
            mockAppointmentService.Setup(i => i.GetVehicleSubClass(vehicleClassId)).ReturnsAsync(data);
            var result = await controller.GetVehicleSubClass(vehicleClassId);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);
        }

        [Fact]
        public async Task GenerateCertificate_ReturnsFileResult()
        {
            long number = 1;

            mockAppointmentService.Setup(i => i.GenerateCertificate(number)).ReturnsAsync(new byte[] { 1, 2, 3 });
            var result = await controller.GenerateCertificate(number);
            Assert.NotNull(result);
            Assert.IsType<FileContentResult>(result);
            var fileResult = (FileContentResult)result;
            Assert.Equal("application/pdf", fileResult.ContentType);
            Assert.Equal("Appointment Letter1.pdf", fileResult.FileDownloadName);

        }

        [Fact]
        public async Task GenerateCertificate_ReturnsBadRequest()
        {
            long number = 1;

            mockAppointmentService.Setup(i => i.GenerateCertificate(number)).ReturnsAsync((byte[])null);
            var result = await controller.GenerateCertificate(number);
            Assert.IsType<BadRequestObjectResult>(result);

        }
        [Fact]
        public async Task GenerateCertificate_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.GenerateCertificate(1)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GenerateCertificate(1));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task GetExaminationDates_Returns200Status()
        {
            var data = MockData.ExamSlotResponseData();
            var month = new DateTime(2023, 08, 29);
            mockAppointmentService.Setup(i => i.GetExaminationDates(month)).ReturnsAsync(data);
            var result = await controller.GetExaminationDates(month);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);

        }


        [Fact]
        public async Task GetExaminationDates_ReturnsInternalServerError()
        {
            var month = new DateTime(2023, 08, 29);
            mockAppointmentService.Setup(x => x.GetExaminationDates(month)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetExaminationDates(month));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task GetExaminationSlots_Returns200Status()
        {
            var month = new DateTime(2023, 08, 29, 10, 00, 00);

            Dictionary<string, int> slot = new Dictionary<string, int>();
            slot.Add("09:00", 5);
            slot.Add("10:00", 5);
            var data = new ExamDateResponse { data = slot, StatusCode = 200, Message = "test Message" };


            mockAppointmentService.Setup(i => i.GetExaminationSlots(month)).ReturnsAsync(data);
            var result = await controller.GetExaminationSlots(month);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(data, objectResult.Value);

        }

        [Fact]
        public async Task GetExaminationSlots_ReturnsInternalServerError()
        {
            var month = new DateTime(2023, 08, 29);
            mockAppointmentService.Setup(x => x.GetExaminationSlots(month)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetExaminationSlots(month));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task CreateNewVehicle_Returns200Status()
        {
            var response = MockData.VehicleInfoResponseData();

            var data = MockData.CreateVehicleInfoDtoData();
            mockAppointmentService.Setup(i => i.CreateNewVehicleInfo(data)).ReturnsAsync(response);
            var result = await controller.CreateNewVehicleInfo(data);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(response, objectResult.Value);

        }

        [Fact]
        public async Task GetVehicleMakeDetails_Returns200Status()
        {
            var data = MockData.VehicleMakeResponseData();

            mockAppointmentService.Setup(i => i.GetVehicleMakeDetails()).ReturnsAsync(data);
            var result = await controller.GetVehicleMakeDetails();
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }

        [Fact]
        public async Task GetVehicleMakeDetails_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.GetVehicleMakeDetails()).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetVehicleMakeDetails());
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task AppointmentEnquiry_Returns200Status()
        {
            var data = MockData.AppointmentEnquiryResponseData();
            mockAppointmentService.Setup(i => i.AppointmentEnquiry(It.IsAny<AppointmentEnquiryRequestDto>())).ReturnsAsync(data);
            var result = await controller.AppointmentEnquiry(It.IsAny<AppointmentEnquiryRequestDto>());
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);
        }

        [Fact]
        public async Task AppointmentEnquiry_ReturnsInternalServerError()
        {

            mockAppointmentService.Setup(x => x.AppointmentEnquiry(It.IsAny<AppointmentEnquiryRequestDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.AppointmentEnquiry(It.IsAny<AppointmentEnquiryRequestDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task GetAppointment_Returns200Status()
        {
            var data = MockData.VehicleAppointmentResponseData();
            long appointmentNumber = 1;
            mockAppointmentService.Setup(i => i.GetAppointment(appointmentNumber)).ReturnsAsync(data);
            var result = await controller.GetAppointment(appointmentNumber);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task GetAppointment_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.GetAppointment(It.IsAny<long>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetAppointment(It.IsAny<long>()));
            Assert.Equal("Simulated Error", result.Message);
        }


        [Fact]
        public async Task BookingChannelList_Returns200Status()
        {
            var data = MockData.BookingChannelResponseData();

            mockAppointmentService.Setup(i => i.BookingChannelList()).ReturnsAsync(data);
            var result = await controller.BookingChannelList();
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }

        [Fact]
        public async Task BookingChannelList_ReturnsInternalServerError()
        {

            mockAppointmentService.Setup(x => x.BookingChannelList()).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.BookingChannelList());
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task DeleteAppointment_Returns200Status()
        {
            var data = MockData.AppointmentDeleteResponseData();
            mockAppointmentService.Setup(i => i.DeleteAppointment(It.IsAny<long>())).ReturnsAsync(data);
            var result = await controller.DeleteAppointment(It.IsAny<long>());
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task DeleteAppointment_ReturnsInternalServerError()
        {

            mockAppointmentService.Setup(x => x.DeleteAppointment(It.IsAny<long>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.DeleteAppointment(It.IsAny<long>()));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task CancelAppointment_Returns200Status()
        {
            var data = MockData.AppointmentCancelResponseData();
            mockAppointmentService.Setup(i => i.CancelAppointment(It.IsAny<long>())).ReturnsAsync(data);
            var result = await controller.CancelAppointment(It.IsAny<long>());
 
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task CancelAppointment_ReturnsInternalServerError()
        {

            mockAppointmentService.Setup(x => x.CancelAppointment(It.IsAny<long>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.CancelAppointment(It.IsAny<long>()));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task AmendAppointment_Returns200Status()
        {
            var data = MockData.AmendAptResponseData();
            var request = MockData.AmendAptRequestData();
            mockAppointmentService.Setup(i => i.AmendAppointment(It.IsAny<AmendAptRequest>())).ReturnsAsync(data);

            var result = await controller.AmendAppointment(request);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task AmendAppointment_ReturnsBadRequestForInvalidAppointNumber()
        {
            var data =MockData.AmendAptResponseData();
           var request = new AmendAptRequest
           {
               AppointmentNumber = 0,
               PrimaryExamCode = "001",
               SupplementaryExamCode = "008",
               ExamFee = 585
           }; ;
            mockAppointmentService.Setup(i => i.AmendAppointment(It.IsAny<AmendAptRequest>())).ReturnsAsync(data);
            var result = await controller.AmendAppointment(request) as ObjectResult;
            Assert.Equal("Appointment Number should be greater than 0", result?.Value);
            Assert.Equal(400, result?.StatusCode);


        }
        [Fact]
        public async Task AmendAppointment_ReturnsInternalServerError()
        {
            var request = MockData.AmendAptRequestData();

            mockAppointmentService.Setup(x => x.AmendAppointment(request)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.AmendAppointment(request));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task VehicleEnquiry_Returns200Status()
        {
            var data =MockData.VehicleEnquiryResponseDtoData();
            var request = new VehicleEnquiryRequestDto { VehicleId = "001" };

            mockAppointmentService.Setup(i => i.VehicleEnquiry(request)).ReturnsAsync(data);
            var result = await controller.VehicleEnquiry(request);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }
        [Fact]
        public async Task VehicleEnquiry_ReturnsInternalServerError()
        {
 
            mockAppointmentService.Setup(x => x.VehicleEnquiry(It.IsAny<VehicleEnquiryRequestDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.VehicleEnquiry(It.IsAny<VehicleEnquiryRequestDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task RescheduleAppointment_Returns200Status()
        {
            var data = MockData.AppointmentRescheduleResponseDtoData();
            AppointmentRescheduleRequestDto request = MockData.AppointmentRescheduleRequestDtoData();
            mockAppointmentService.Setup(i => i.RescheduleAppointment(request)).ReturnsAsync(data);

            var result = await controller.RescheduleAppointment(request);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);
        }
        
        [Fact]
        public async Task AppointmentReschedule_ReturnsInternalServerError()
        {
            AppointmentRescheduleRequestDto request =MockData.AppointmentRescheduleRequestDtoData();
            mockAppointmentService.Setup(x => x.RescheduleAppointment(request)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.RescheduleAppointment(request));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task GenerateReprintCertificate_ReturnsFileResult()
        {
            long number = 1;

            mockAppointmentService.Setup(i => i.GenerateReprintCertificate(number)).ReturnsAsync(new byte[] { 1, 2, 3 });
            var result = await controller.GenerateReprintCertificate(number);
            Assert.NotNull(result);
            Assert.IsType<FileContentResult>(result);
            var fileResult = (FileContentResult)result;
            Assert.Equal("application/pdf", fileResult.ContentType);
            Assert.Equal("Reprint Appointment Letter1.pdf", fileResult.FileDownloadName);

        }

        [Fact]
        public async Task GenerateReprintCertificate_ReturnsBadRequest()
        {
            long number = 1;

            mockAppointmentService.Setup(i => i.GenerateReprintCertificate(number)).ReturnsAsync((byte[])null!);
            var result = await controller.GenerateReprintCertificate(number);
            Assert.IsType<BadRequestObjectResult>(result);

        }
        [Fact]
        public async Task GenerateReprintCertificate_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.GenerateReprintCertificate(1)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GenerateReprintCertificate(1));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task GetVehicleInformation_ReturnsStatus200()
        {
            var data = new CompleteVehicleInfoResponse
            { 
                data = new CompleteVehicleInfoDto 
                {
                    VehicleId = "001",
                    VhclTypeCode = "Valid",
                    VehicleClassId = "001",
                    RegMark = "TestRegMark",
                    ChassisNumber = "TestChassisNumber",
                    IsActive = true,
                    CreatedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow,
                    LastUpdated = DateTime.UtcNow,
                },
                StatusCode = 200, 
                Message = "Succesful" 
            };
            string vehicleId = "001";

            mockAppointmentService.Setup(i => i.GetVehicleInformation(vehicleId)).ReturnsAsync(data);
            var result = await controller.GetVehicleInformation(vehicleId);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }
        [Fact]
        public async Task GetVehicleInformation_ReturnsInternalServerError()
        {
            string vehicleId = "001";
            mockAppointmentService.Setup(x => x.GetVehicleInformation(vehicleId)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetVehicleInformation(vehicleId));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task CreateSpecialEvent_Returns200Status()
        {
            var data = new CreateSpecialEventResponseDto { data= new List<CreateSpecialEventDto> { new CreateSpecialEventDto 
            { LaneId="1",AppointmentNumber=1,ChassisNumber="testChassis",VehicleClassId="001",RegMark="testRegMark",Result="pass"} 
            },
                StatusCode= 200,Message="Succesfull"};
            var request = new CreateSpecialEventRequestDto { CTR_Id="TY1",EventId="1" };

            mockAppointmentService.Setup(i => i.CreateSpecialEvent(request)).ReturnsAsync(data);
            var result = await controller.CreateSpecialEvent(request);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }
        [Fact]
        public async Task CreateSpecialEvent_ReturnsInternalServerError()
        {
            var request = new CreateSpecialEventRequestDto { CTR_Id = "TY1", EventId = "1" };
            mockAppointmentService.Setup(x => x.CreateSpecialEvent(request)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.CreateSpecialEvent(request));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task SearchSpecialEvent_Returns200Status()
        {
            var data = new SearchSpecialEventResponseDto
            {
                data = new List<SearchSpecialEventDto> { new SearchSpecialEventDto
            { Ctr_Id="TY1",EventId="1"}
            },
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = new SearchSpecialEventRequestDto {  EventId = "1",Ctr_Id="TY1" };

            mockAppointmentService.Setup(i => i.SearchSpecialEvent(request)).ReturnsAsync(data);
            var result = await controller.SearchSpecialEvent(request);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }

        [Fact]
        public async Task SearchSpecialEvent_ReturnsInternalServerError()
        {
            var request = new SearchSpecialEventRequestDto { Ctr_Id = "TY1", EventId = "1" };
            mockAppointmentService.Setup(x => x.SearchSpecialEvent(request)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.SearchSpecialEvent(request));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task CreateNewNonValidVehicle_Returns200Status()
        {
            mockAppointmentService.Setup(i => i.CreateNewNonValidVehicle(It.IsAny<CreateNewNonValidVehicleDto>())).ReturnsAsync(It.IsAny<CreateNewNonValidVehicleDtoResponse>());
            var result = await controller.CreateNewNonValidVehicle(It.IsAny<CreateNewNonValidVehicleDto>());
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
       
        }
        [Fact]
        public async Task RefreshVehicle_Returns200Status()
        {
            var data = new CompleteVehicleInfoResponse
            {
                data =  new CompleteVehicleInfoDto { VehicleId="001",VhclTypeCode="Vali"},
                StatusCode = 200,
                Message = "Succesfull"
            };
            var request = "test";

            mockAppointmentService.Setup(i => i.RefreshVehicle(request)).ReturnsAsync(data);
            var result = await controller.RefreshVehicle(request);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }
        [Fact]
        public async Task RefreshVehicle_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.RefreshVehicle(It.IsAny<string>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.RefreshVehicle(It.IsAny<string>()));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task GetAppointmentStatusList_Returns200Status()
        {
            mockAppointmentService.Setup(i => i.GetAppointmentStatusList()).ReturnsAsync(It.IsAny<string[]>());
            var result = await controller.GetAppointmentStatusList();
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task SearchInspectionLane_Returns200Status()
        {
            mockAppointmentService.Setup(i => i.SearchInspectionLane(It.IsAny<SearchLaneRequestDto>())).ReturnsAsync(It.IsAny<SearchLaneResponseDto>());
            var result = await controller.SearchInspectionLane(It.IsAny<SearchLaneRequestDto>());
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task SearchInspectionLane_ReturnsInternalServerError()
        {
            mockAppointmentService.Setup(x => x.SearchInspectionLane(It.IsAny<SearchLaneRequestDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.SearchInspectionLane(It.IsAny<SearchLaneRequestDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }
        
    }
}
