
using PdfSharpCore.Drawing.BarCodes;
using SCS_Backend_API.Constants;
using SCS_Backend_API.DTO;

using SCS_Backend_API.Models1;

namespace SCS_API_Unit_Tests.Helper
{
    public class MockData
    {
        public static VehicleSearchDto VehicleSearchDtoData()
        {
            return new VehicleSearchDto
            {
                VehicleId = "001"
            };
        }
        public static VehicleAppointmentResponse VehicleAppointmentResponseData()
        {
            return new VehicleAppointmentResponse
            {
                data = new VehicleAppointmentDto
                {
                    VehicleInfo = new List<VehicleInfoDto>
                    { new VehicleInfoDto {
                        VehicleId = "001",
                        LastUpdated = DateTime.UtcNow,
                        RegMark = "Gh16",
                        ChassisNumber = "sxsdxd",
                        VehicleClassId = "001",
                        Make = "Ford",
                        ModelCode = "Test Code"
                    }
                    },
                    RecentAppointments = new List<CreateAppointmentDto>
                    { new CreateAppointmentDto
                    {
                        CentreCode = "TY1",
                        PrimaryExamCode = "001",
                        AppointmentDate = new DateTime(2020, 2, 2, 10, 00, 00),
                        ExamFee = 850,
                        FeeWaiver = "TestWaiver",
                        FreeOfCharge = "No",
                        IsOverBooked = 'N',
                        VehicleId = "001",
                        LaneId = "2",
                        AppointmentNumber = 2
                    }

                    },
                    NotesAndAlerts = { "Test Alert" }
                },
                StatusCode = 200,
                Message = "Vehicles Details Fetched Succesfully"
            };
        }
        public static AppointmentResponse AppointmentResponseData()
        {
            return new AppointmentResponse
            {
                data = new CreateAppointmentDto
                {
                    AppointmentNumber = 1,
                    CentreCode = "Ty1",
                    PrimaryExamCode = "001",
                    AppointmentDate = DateTime.Now,
                    FreeOfCharge = "no",
                    ExamFee = 122,
                    LaneId = "2",
                    VehicleId = "001",
                    FeeWaiver = "yes",
                    ContactPerson = "test",
                    Remarks = "test response",
                    SupplementaryExamCode = "004",
                    ContactNumber = 987989000,
                    IsOverBooked = 'N'
                },
                StatusCode = 200,
                Message = "Succesful"
            };
        }
        public static ExamResponseDto ExamResponseDtoData()
        {
            return new ExamResponseDto
            {
                data = new ExamCombinedResponseDto
                {
                    Primary = new List<ExamCodeDto> { new ExamCodeDto { ExamCode = "004", ExamName = "primary" } },
                    Supplementary = new List<ExamCodeDto> { new ExamCodeDto { ExamCode = "008", ExamName = "Supplementary" } }

                },
                StatusCode = 200,
                Message = "Test Message"
            };
        }
        public static GetAllLanesResponse GetAllLanesResponseData()
        {
            return new GetAllLanesResponse
            {
                data = new List<GetAllLanesDto>
                {
                    new GetAllLanesDto { LaneId = "1", LaneType = "TestType", Floor = "2" }
                },
                StatusCode = 200,
                Message = "Succesful"
            };
        }
        public static VehicleClassResponse VehicleClassResponseData()
        {
            return new VehicleClassResponse
            {
                data = new List<VehicleClassesDto> { new VehicleClassesDto { VehicleClassId = "001", VehicleClassName = "Test class" } }
                ,
                StatusCode = 200,
                Message = "test message"
            };
        }
        public static SubClassResponse SubClassResponseData()
        {
            return new SubClassResponse
            {
                data = new List<SubClassDto>
                {
                    new SubClassDto
                    {
                        VehicleSubClassId = "1", VehicleSubClassName = "Test SubClass"
                    }
                },
                StatusCode = 200,
                Message = "test Message"
            };
        }
        public static ExamSlotResponse ExamSlotResponseData()
        {
            return new ExamSlotResponse
            {
                data = new ExamSlotDto { Weekends = new List<DateTime> { new DateTime(2023, 08, 06) } },
                StatusCode = 200,
                Message = "Test Message"
            };
        }
        public static VehicleInfoResponse VehicleInfoResponseData()
        {
            return new VehicleInfoResponse
            {
                data = new VehicleInfoDto
                {
                    VehicleId = "001",
                    VehicleClassId = "001",
                    RegMark = "TestRegMark",
                    ChassisNumber = "TestChassisNyumber",
                    LastUpdated = DateTime.Now,

                },
                StatusCode = 200,
                Message = " Successful"
            };
        }
        public static CreateVehicleInfoDto CreateVehicleInfoDtoData()
        {
            return new CreateVehicleInfoDto()
            {
                VehicleClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                LastUpdated = DateTime.Now,
            };
        }
        public static VehicleMakeResponse VehicleMakeResponseData()
        {
            return new VehicleMakeResponse
            {
                data = new List<VehicleMakeDto>
                {
                    new VehicleMakeDto{ MakeId="TestId",MakeName="TestName"}

                },
                StatusCode = 200,
                Message = "Test Mesaage"
            };
        }
        public static AppointmentEnquiryResponse AppointmentEnquiryResponseData()
        {
            return new AppointmentEnquiryResponse
            {
                data = new List<AppointmentEnquiryResponseDto>
                { new AppointmentEnquiryResponseDto
                {
                    AppointmentNumber=1,
                    CenterCode="TY1",
                    ChassisNumber="TestChassisNumber",
                    PrimaryExamCode="001",
                    VehicleClassId="001",
                    RegMark="TestRegMark",
                    LaneId="1",
                    VehicleId="2",
                    ExamDate = new DateTime(2023,5,5,10,00,00,00)

                } },
                Message = "Successfull ",
                StatusCode = 200
            };
        }
        public static BookingChannelResponse BookingChannelResponseData()
        {
            return new BookingChannelResponse
            {
                data = new List<BookingChannelDto>
            {
                    new BookingChannelDto
            {
                        Bk_Chnl_Id="001",
                        Bk_Chnl_Name="SCS"
                    }
                },
                StatusCode = 200,
                Message = "Succesfull"
            };
        }
        public static AppointmentDeleteResponse AppointmentDeleteResponseData()
        {
            return new AppointmentDeleteResponse
            {
                data = new DeleteAppointmentDto { AppointmentNumber = 1 },
                Message = "Successfull ",
                StatusCode = 200
            };
        }
        public static AppointmentCancelResponse AppointmentCancelResponseData()
        {
            return new AppointmentCancelResponse
            {
                data = 1,
                Message = "Successfull ",
                StatusCode = 200
            };
        }
        public static AmendAptResponse AmendAptResponseData()
        {
            return new AmendAptResponse
            {
                data = new AmendAptRequest { AppointmentNumber = 1, PrimaryExamCode = "001", SupplementaryExamCode = "008", ExamFee = 585 },
                Message = "Successfull ",
                StatusCode = 200
            };
        }
        public static AmendAptRequest AmendAptRequestData()
        {
            return new AmendAptRequest
            {
                AppointmentNumber = 1,
                PrimaryExamCode = "001",
                SupplementaryExamCode = "008",
                ExamFee = 585
            };
        }
        public static VehicleEnquiryResponseDto VehicleEnquiryResponseDtoData()
        {
            return new VehicleEnquiryResponseDto
            {
                data = new List<VehicleEnquiryDto>
                { new VehicleEnquiryDto
            {
             VehicleId="001",
             CENumber="TestCeNumber",
             ChassisNumber="TEST23456",
             VehicleClass="TestClass",
             Make="TOYOTA",
             RegMark="TestRegMark",
             PGVWeight=10.00,
             ManufactureYear=2023,
             Model="testModel",
             LicenceExpiry= new DateTime(2030,11,11)

            } }
                ,
                StatusCode = 200,
                Message = "Succesfull"
            };
        }
        public static AppointmentRescheduleResponseDto AppointmentRescheduleResponseDtoData()
        {
            return new AppointmentRescheduleResponseDto
            {
                data = new AppointmentRescheduleDto
                {

                    AppointmentNumber = 1,
                    CentreCode = "TY1",
                    PrimaryExamCode = "001",
                    FeeWaiver = "NA",
                    Remarks = "NA",
                    AppointmentDate = new DateTime(2030, 3, 4),
                    FreeOfCharge = "No",
                    ExamFee = 585,
                    LaneId = "2",
                    ContactPerson = "Abhiram",
                    SupplementaryExamCode = "008",
                    IsOverBooked = 'N',
                    VehicleId = "001",
                    RegMark = "TestRegMark",
                    ChassisNumber = "TestChassisNumber",
                    VehicleClassId = "001",
                    Appointment_Status = "Booked",
                    Bk_Chnl_Id = "001",
                    Last_Txn_UserId = "Abhiram",
                    Result = "Pass",
                    PaymentStatus = "Completed",
                    Bk_Chnl_Name = "SCS"
                },
                Message = "Successfull ",
                StatusCode = 200
            };
        }
        public static AppointmentRescheduleRequestDto AppointmentRescheduleRequestDtoData()
        {
            return new AppointmentRescheduleRequestDto
            {
                AppointmentNumber = 1,
                AppointmentDate = DateTime.Now,
                LaneId = "2",
                IsOverBooked = 'N'
            };
        }
        public static AppointmentDto AppointmentDtoData()
        {
            return new AppointmentDto
            {
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                AppointmentDate = DateTime.Now,
                FreeOfCharge = "no",
                ExamFee = 122,
                LaneId = "2",
                VehicleId = "001",
                FeeWaiver = "yes",
                ContactPerson = "test",
                Remarks = "test response",
                SupplementaryExamCode = "004",
                ContactNumber = 987989000,
                IsOverBooked = 'N',

            };
        }
        public static Lane LaneData()
        {
            return new Lane
            {
                LaneId = "4",
                LaneType = "TestType",
                Floor = "G"
            };
        }
        public static BookingChannel BookingChannelData()
        {
            return new BookingChannel
            {
                Bk_Chnl_Key = 1,
                Bk_Chnl_Id = "001",
                Bk_Chnl_Name = "SCS",

            };
        }
        public static VehicleClass VehicleClassData()
        {
            return new VehicleClass
            {
                VehicleClassId = "002",
                VehicleClassName = "testClass"
            };
        }
        public static VehicleMake VehicleMakeData()
        {
            return new VehicleMake
            {
                MakeId = "test",
                Make_Key = 1,
                MakeName = "testName"
            };
        }
        public static VehicleInformation VehicleInformationData()
        {
            return new VehicleInformation()
            {
                Vhcl_Key = 1,
                VehicleId = "001",
                VhclTypeCode = "Valid",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                BodyType = "test",
                ChassisNumber = "TestChassisNumber",
                EngineType = "TestType",
                ChassisTrimText = "TestTrim",
                IsActive = true,
                InterfaceRecordHashText = "testHash",
                LastRecordedTranscDate = DateTime.UtcNow,
                LastRecordedTranscTypeCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
                ManufactureYear = 2000,
                FloatName = "Test",
                Appointments = new List<Appointment>{ new Appointment
                {
                    Appointment_Key =1,
                    AppointmentNumber = 1,
                    CentreCode = "TY1",
                    PrimaryExamCode = "001",
                    CreatedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow,
                    AppointmentDate = DateTime.UtcNow,
                    FreeOfCharge = "No",
                    ExamFee = 122,
                    LaneId = "2",
                    Time = "",
                    SupplementaryExamCode = "008",
                    IsOverBooked='N',
                    VehicleId = "001",
                    RegMark ="TestRegMark",
                    ChassisNumber = "TestChassisNumber",
                    VehicleClassId = "001",
                    Appointment_Status="Booked",
                    Bk_Chnl_Id="001",
                    Last_Txn_Type_Code = "Insert",
                    Last_Txn_UserId ="Abhiram",
                    Result ="Pass",
                    PaymentStatus ="Booked",

                } }
            };
        }
        public static VehicleInformation PaymentVehicleInformationData()
        {
            return new VehicleInformation()
            {
                Vhcl_Key = 1,
                VehicleId = "001",
                VhclTypeCode = "Valid",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                ChassisTrimText = "TestTrim",
                IsActive = true,
                InterfaceRecordHashText = "testHash",
                LastRecordedTranscDate = DateTime.UtcNow,
                LastRecordedTranscTypeCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
                Appointments = new List<Appointment>
                {
                    new Appointment
                {
                    Appointment_Key = 1,
                    AppointmentNumber = 1,
                    CentreCode = "TY1",
                    PrimaryExamCode = "001",
                    CreatedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow,
                    AppointmentDate = DateTime.UtcNow,
                    FreeOfCharge = "No",
                    ExamFee = 122,
                    LaneId = "2",
                    Time = "",
                    SupplementaryExamCode = "008",
                    IsOverBooked = 'N',
                    VehicleId = "001",
                    RegMark = "TestRegMark",
                    ChassisNumber = "TestChassisNumber",
                    VehicleClassId = "001",
                    Appointment_Status = "Booked",
                    Bk_Chnl_Id = "001",
                    Last_Txn_Type_Code = "Reschedule",
                    Last_Txn_UserId = "Abhiram",
                    Result = "Pass",
                    PaymentStatus = "Completed",
                    History= new List<AppointmentHistory> { new AppointmentHistory { Id=1,AppointmentNumber=1,AppointmentDate=DateTime.Now,Last_Txn_UserId="Abhiram",Reason="NA",CreatedDate=DateTime.Now,TransactionDate=DateTime.Now} }

                }

               }
            };
        }

        public static SubClass SubClassData()
        {
            return new SubClass
            {
                VehicleSubClass_Key = 1,
                VehicleSubClassId = "Test Class",
                VehicleSubClassName = "Test Class Name",
                VehicleClassId = "001"
            };
        }
        public static Appointment AppointmentExamDateData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = new DateTime(2022, 2, 2, 10, 00, 00),
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Booked",
            };
        }
        public static Appointment AppointmentExamSlotData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "Ty1",
                PrimaryExamCode = "001",
                CreatedDate = new DateTime(2022, 2, 2, 10, 00, 00),
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = new DateTime(2022, 2, 2, 10, 00, 00),
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "10:00",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Booked",
            };
        }
        public static ExamSlot ExamSlotData()
        {
            return new ExamSlot
            {
                ExamSlotKey = 2,
                Quota = 5,
                SlotName = "10:00",
                Session = "AM"
            };
        }
        public static Appointment AppointmentData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = DateTime.UtcNow,
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Booked",
            };
        }
        public static VehicleInformation VehicleInformationEnquiryData()
        {
            return new VehicleInformation
            {
                Vhcl_Key = 1,
                VehicleId = "001",
                VhclTypeCode = "Valid",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                ChassisTrimText = "TestTrim",
                IsActive = true,
                InterfaceRecordHashText = "testHash",
                LastRecordedTranscDate = DateTime.UtcNow,
                LastRecordedTranscTypeCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
            };
        }
        public static Appointment GetAppointmentData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = DateTime.UtcNow,
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Booked",
            };
        }
        public static Appointment DeleteAppointmentData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = DateTime.UtcNow,
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Pending",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Pending",
            };
        }
        public static Appointment AppointmentGenerateCertificateData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = DateTime.UtcNow,
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "11:20",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Booked",
                SecurityCode = 1,
                HoldTimeSlot = "test",
                FeeWaiver = "no",
                Remarks = "NA",
                VehicleInfo = new VehicleInformation
                {
                    Vhcl_Key = 1,
                    VehicleId = "001",
                    VhclTypeCode = "Valid",
                    VehicleClassId = "001",
                    VehicleSubClassId = "001",
                    RegMark = "TestRegMark",
                    ChassisNumber = "TestChassisNumber",
                    ChassisTrimText = "TestTrim",
                    IsActive = true,
                    InterfaceRecordHashText = "testHash",
                    LastRecordedTranscDate = DateTime.UtcNow,
                    LastRecordedTranscTypeCode = "001",
                    CreatedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow,
                    LastUpdated = DateTime.UtcNow,

                }

            };
        }
        public static Appointment DeleteAppointmentUData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = DateTime.UtcNow,
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Pending",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Booked",
            };
        }
        public static Appointment DeleteAppointment_UData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = new DateTime(2022, 3, 4),
                ModifiedDate = new DateTime(2022, 3, 4),
                AppointmentDate = new DateTime(2022, 3, 4),
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Pending",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Pending",
            };
        }
        public static Appointment CancelAppointmentData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = new DateTime(2022, 3, 4),
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = new DateTime(2030, 3, 4),
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Completed",
            };
        }
        public static Appointment CancelAppointmentUData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = new DateTime(2024, 3, 4),
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Completed",
            };
        }
        public static Appointment CancelAppointment_UData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = new DateTime(2022, 3, 4),
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = DateTime.UtcNow,
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Completed",
            };
        }
        public static Appointment AmendAppointmentData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = new DateTime(2022, 3, 4),
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = new DateTime(2030, 3, 4),
                FreeOfCharge = "No",
                ExamFee = 585,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Completed",
            };
        }
        public static Appointment AmendAppointmentUData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = new DateTime(2022, 3, 4),
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = new DateTime(2030, 3, 4),
                FreeOfCharge = "No",
                ExamFee = 122,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Completed",
            };
        }
        public static Appointment RescheduleAppointmentData()
        {
            return new Appointment
            {
                Appointment_Key = 1,
                AppointmentNumber = 1,
                CentreCode = "TY1",
                PrimaryExamCode = "001",
                CreatedDate = new DateTime(2022, 3, 4),
                ModifiedDate = DateTime.UtcNow,
                AppointmentDate = new DateTime(2030, 3, 4),
                FreeOfCharge = "No",
                ExamFee = 585,
                LaneId = "2",
                Time = "",
                SupplementaryExamCode = "008",
                IsOverBooked = 'N',
                VehicleId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                VehicleClassId = "001",
                Appointment_Status = "Booked",
                Bk_Chnl_Id = "001",
                Last_Txn_Type_Code = "Insert",
                Last_Txn_UserId = "Abhiram",
                Result = "Pass",
                PaymentStatus = "Completed",
            };
        }
        public static VehicleInformation GetAppointmentVehicleData()
        {
            return new VehicleInformation
            {
                Vhcl_Key = 1,
                VehicleId = "001",
                VhclTypeCode = "Valid",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                ChassisTrimText = "TestTrim",
                IsActive = true,
                InterfaceRecordHashText = "testHash",
                LastRecordedTranscDate = DateTime.UtcNow,
                LastRecordedTranscTypeCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
            };
        }
        public static VehicleInformation VehicleEnquiryData()
        {
            return new VehicleInformation
            {
                Vhcl_Key = 1,
                VehicleId = "001",
                VhclTypeCode = "Valid",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                ChassisTrimText = "TestTrim",
                IsActive = true,
                InterfaceRecordHashText = "testHash",
                LastRecordedTranscDate = DateTime.UtcNow,
                LastRecordedTranscTypeCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
                VehicleClasses = new VehicleClass
                {
                    VehicleClass_Key = 1,
                    VehicleClassId = "001",
                    VehicleClassName = "TestName",
                    IsActive = true,
                    SubClasses = new List<SubClass> { new SubClass { VehicleSubClass_Key = 1, VehicleSubClassId = "001", VehicleSubClassName = "TestSubClass", VehicleClassId = "001", IsActive = true } }
                }
            };
        }
        public static VehicleInformation VehicleAppointmentHistoryData()
        {
            return new VehicleInformation()
            {
                Vhcl_Key = 1,
                VehicleId = "001",
                VhclTypeCode = "Valid",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                ChassisTrimText = "TestTrim",
                IsActive = true,
                InterfaceRecordHashText = "testHash",
                LastRecordedTranscDate = DateTime.UtcNow,
                LastRecordedTranscTypeCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
                Appointments = new List<Appointment>{ new Appointment
                {
                    Appointment_Key =1,
                    AppointmentNumber = 1,
                    CentreCode = "TY1",
                    PrimaryExamCode = "001",
                    CreatedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow,
                    AppointmentDate = DateTime.UtcNow,
                    FreeOfCharge = "No",
                    ExamFee = 122,
                    LaneId = "2",
                    Time = "",
                    SupplementaryExamCode = "008",
                    IsOverBooked='N',
                    VehicleId = "001",
                    RegMark ="TestRegMark",
                    ChassisNumber = "TestChassisNumber",
                    VehicleClassId = "001",
                    Appointment_Status="Booked",
                    Bk_Chnl_Id="001",
                    Last_Txn_Type_Code = "Reschedule",
                    Last_Txn_UserId ="Abhiram",
                    Result ="Pass",
                    PaymentStatus ="Booked",
                    History= new List<AppointmentHistory> { new AppointmentHistory { Id=1,AppointmentNumber=1,AppointmentDate=DateTime.Now,Last_Txn_UserId="Abhiram",Reason="NA",CreatedDate=DateTime.Now,TransactionDate=DateTime.Now} }

                } }
            };
        }
        public static VehicleInformation VehicleAppointmentHistoryUData()
        {
            return new VehicleInformation()
            {
                Vhcl_Key = 1,
                VehicleId = "001",
                VhclTypeCode = "Valid",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                ChassisTrimText = "TestTrim",
                IsActive = true,
                InterfaceRecordHashText = "testHash",
                LastRecordedTranscDate = DateTime.UtcNow,
                LastRecordedTranscTypeCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
                Appointments = new List<Appointment>{ new Appointment
                {
                    Appointment_Key =1,
                    AppointmentNumber = 1,
                    CentreCode = "TY1",
                    PrimaryExamCode = "001",
                    CreatedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow,
                    AppointmentDate = DateTime.UtcNow,
                    FreeOfCharge = "No",
                    ExamFee = 122,
                    LaneId = "2",
                    Time = "",
                    SupplementaryExamCode = "008",
                    IsOverBooked='N',
                    VehicleId = "001",
                    RegMark ="TestRegMark",
                    ChassisNumber = "TestChassisNumber",
                    VehicleClassId = "001",
                    Appointment_Status="Booked",
                    Bk_Chnl_Id="001",
                    Last_Txn_Type_Code = "Reschedule",
                    Last_Txn_UserId ="Abhiram",
                    Result ="Pass",
                    PaymentStatus ="Booked",


                } }
            };
        }
        public static VehicleInformation GetVehicleInformationData()
        {
            return new VehicleInformation()
            {
                Vhcl_Key = 1,
                VehicleId = "001",
                VhclTypeCode = "Valid",
                VehicleClassId = "001",
                VehicleSubClassId = "001",
                RegMark = "TestRegMark",
                ChassisNumber = "TestChassisNumber",
                ChassisTrimText = "TestTrim",
                IsActive = true,
                InterfaceRecordHashText = "testHash",
                LastRecordedTranscDate = DateTime.UtcNow,
                LastRecordedTranscTypeCode = "001",
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                LastUpdated = DateTime.UtcNow,
                Appointments = new List<Appointment>{ new Appointment
                {
                    Appointment_Key =1,
                    AppointmentNumber = 1,
                    CentreCode = "TY1",
                    PrimaryExamCode = "001",
                    CreatedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow,
                    AppointmentDate = DateTime.UtcNow,
                    FreeOfCharge = "No",
                    ExamFee = 122,
                    LaneId = "2",
                    Time = "",
                    SupplementaryExamCode = "008",
                    IsOverBooked='N',
                    VehicleId = "001",
                    RegMark ="TestRegMark",
                    ChassisNumber = "TestChassisNumber",
                    VehicleClassId = "001",
                    Appointment_Status="Booked",
                    Bk_Chnl_Id="001",
                    Last_Txn_Type_Code = "Reschedule",
                    Last_Txn_UserId ="Abhiram",
                    Result ="Pass",
                    PaymentStatus ="Booked",

                }
               }
            };
        }
        public static Attachment AttachmentData()
        {
            return new Attachment
            {
                Attachment_Key = 1,
                AppointmentNumber = 1,
                AdditionalMessage = "test Message",
                IsActive = true,
                CentreCode = "TY1",
                ChassisNumber = "TestChassisNumber",
                CreatedDate = new DateTime(),
                Description = "NA",
                File = "a",
                FileExtension = "txt",
                ModifiedDate = new DateTime(),
                SubmissionDateTime = new DateTime(),
                SubmittedBy = "Abhiram"
            };
        }
        public static CreateUserDto CreateUserDtoData()
        {
            return new CreateUserDto { UserId = "4", Password = "password", UserName = "testuser" };
        }
        public static Login LoginData()
        {
            return new Login { UserID = 4, UserName = "testuser", Password = "testpassword", Ctr_Id = "TY1", LastRecordDeletedate = new DateTime(2022, 3, 3), LastRecordTransactionCode = "001", LastRecordTransactiondate = DateTime.Now, LastRecordTransactionUserID = "001" };
        }

        public static Center CentreData()
        {
            return new Center { Ctr_Id = "TY1", Ctr_Name = "Tsingg Yi", Ctr_Key = 5, IsActive = true };
        }
        public static SearchUserRequestDto SearchUserRequestDtoData()
        {
            return new SearchUserRequestDto { UserId = "4", UserName = "testuser", AssignedCenter = "TY1", AccountStatus = true };
        }
        public static SearchUserDto SearchUserDtoData()
        {
            return new SearchUserDto { UserId = "4", UserName = "testuser", Status = true };
        }
        public static EditUserDto EditUserDtoData()
        {
            return new EditUserDto { UserId = "1", UserName = "NewUser", Status = false };
        }
        public static EditUserDto EditUserDtoSData()
        {
            return new EditUserDto { UserId = "4", UserName = "testuser", Status = false };
        }
        public static List<ExamCodes> ExamCodeListData()
        {
            return new List<ExamCodes>
            {
                new ExamCodes
                {
                    Id = 1,
                    ExamCode = "testCode",
                    ExamName = "testExam",
                    IsPrimary = false,
                    ExamFee= 0,
                }, new ExamCodes
                {
                    Id = 2,
                    ExamCode = "testCode2",
                    ExamName = "testExam2",
                    IsPrimary = true,
                    ExamFee= 0
                }
            };
        }
        public static DeletePaymentResponse DeletePaymentResponseData()
        {
            return new DeletePaymentResponse
            {
                data = new DeletePayment { AppointmentNumber = 1, PaymentStatus = "Deleted" },
                Message = "Successfull ",
                StatusCode = 200
            };
        }
        public static LoginDto LoginDtoData()
        {
            return new LoginDto()
            {
                UserName = "test",
                Password = "password",
                CenterId = "TY1"
            };
        }
        public static WatchList WatchListData()
        {
            return new WatchList
            {
                Vhcl_WhLst_Key = 1,
                VehicleClassId = "001",
                PGVWeight = 1,
                BodyType = 2,
                Cancelled_Date = DateTime.Now,
                Status = "TestStatus",
                FirstRegDate = new DateTime(2020, 2, 2, 10, 00, 00),
                ChassisNumber = "TestChassisNumber",
                CreatedDate = new DateTime(2020, 2, 2, 10, 00, 00),
                Type = "watchList",
                WhLst_Rsn_Key = 1,
                ManufactureYear = 2020,
                Ctr_Key = 1,

                Last_Txn_UserId = "Abhiram",
                Last_Rec_Txn_Date = DateTime.Now,
                Last_Txn_Type_Code = "I"

            };
        }
        public static CreateWatchListDto CreateWatchListDtoData()
        {
            return new CreateWatchListDto
            {
                Type = "watchList",
                VehicleClassId = "001",
                RegMark = "testReg",
                ChassisNumber = "TestChassis",
                Model = "testModel",
                WhLst_Rsn_Key = 1,
                Remarks = "NA",
                CreatedDate = DateTime.Now,
                Status = "I",
                ManufactureYear = 2016,
                FirstRegDate = DateTime.Now,
                Ctr_Key = 1,
                Last_Rec_Txn_Date = DateTime.Now,
                Last_Txn_Type_Code = "I",
                Last_Txn_UserId = "test"
            };
        }
        public static CreateNewNonValidVehicleDto CreateNewNonValidVehicleDtoData()
        {
            return new CreateNewNonValidVehicleDto
            {
                ChassisNumber = "TestChassisNumber",
                ADApprovalDate = DateTime.UtcNow,
                DocNumber = "Test",
                FloatName = "Test",
                VehicleClassId = "002",
                VehicleSubClassId = "B",
                CENumber = "Test",
                TANumber = "Test",
                RegMark = "regmarknew",
                CountryCode = "2",
                Make = "Test",
                Model = "Test",
                ModelCode = "001",
                BodyType = "Test",
                ManufactureYear = 2010,
                SeatCapacity = "Test",
                EngineSize = 4,
                PSL = "Test",
                Permit = "Test",
                FirstRegDate = new DateTime(2010, 2, 3, 0, 0, 0, DateTimeKind.Utc),
                LicenceExpiry = new DateTime(2030, 2, 3, 0, 0, 0, DateTimeKind.Utc),
                VICO = new DateTime(2010, 2, 3, 0, 0, 0, DateTimeKind.Utc),
                RenewalDate = new DateTime(2020, 2, 3, 0, 0, 0, DateTimeKind.Utc),
                LastUpdated = DateTime.UtcNow,
                CancelReason = "NA",
                InspectionOrder = "Test",
                StatusCode = 'A',
                RatedPower = 200,
                WeightCode = 'A',
                PGVWeight = 1,
                LUGWeight = 1,
                Axle1Weight = 1,
                Axle2Weight = 1,
                Axle3Weight = 1,
                Axle4Weight = 1,
                Axle5Weight = 1,
                Axle6Weight = 1,
                Axle7Weight = 1,
                LantauVehicle = true,
                Attribute = "Test",
                CreatedDate = new DateTime(2010, 2, 3, 0, 0, 0, DateTimeKind.Utc),
                ModifiedDate = DateTime.UtcNow,
                OwnerName = "Test",
                HybridVehicle = 'A',
                PVRMTrimText = "Test",
                PVRMDoubleLineIndicator = 'A',
                PVRMLine1Text = "Test",
                PVRMLine2Text = "Test",
                PrimaryColor = "Test",
                SecondaryColor = "Test",
                FrontTireSize = "Test",
                RearTireSize = "Test",
                leftHandSteering = "Test",
                LastRecordedTranscTypeCode = "Test",
                VhclTypeCode = "NV"



            };
        }


    }
}
