namespace SCS_Backend_API.Constants
{
    public class CommonMessages
    {
        
        public const string ValidCredentials = "Login Successful!";
        public const string CentersNotFound = "No centers found in database";
        public const string InvalidCenter = "User not Authorized for this Center";
        public const string InvalidCredentials = "Invalid Username or Password";
        public const string NoVehicleFound = "No such vehicle Details found";
        public const string NoInspectionLaneFound = "No such Inspection Details found";
        public const string NoPrimaryExamFound = "No primary exam is found";
        public const string NoSupplementaryExamFound = "No supplementary exam is found";
        public const string NoVehicleExamFound = "No vehicle exam is found";
        public const string NolaneFound = "No such Lane is found for this center";
        public const string NoVehicleClassFound = "No Vehicle class found";
        public const string InvalidVehicleDetails = "No such Vehicle details found";
        public const string NoVehicleMakeFound = "No such Vehicle Make details found";
        public const string NoAppointmentNumber = "No such Appointment is made";
        public const string LanesFetchSuccessfully = "Lanes Fetched Successfully";
        public const string VehiclesFetchSuccessfully = "Vehicle(s) Details Fetched Successfully";
        public const string InspectionDetailsFetchSuccessfully = "Inspection details Fetched Successfully";
        public const string VehicleClassesFetchSuccessfully = "Vehicles Classes Fetched Successfully";
        public const string VehicleMakeFetchSuccessfully = "Vehicles Make Details Fetched Successfully";
        public const string AppointmentCreatedSuccessfully = "Appointment Created Successfully";
        public const string VehicleCreatedSuccessfully = "VehicleInformation Saved Successfully";
        public const string AppointmentRescheduledSuccessfully = "Appointment Rescheduled Successfully";
        public const string ExamSlotsFetchedSuccessfully = "Exam Slots Fetched Successfully";
        public const string ExamDatesFetchedSuccessfully = "Exam Dates Fetched Successfully";
        public const string CentersFetchSuccessfully = "Centers Fetched Successfully";
        public const string NoExamDatesFound = "No Exam Dates is found";
        public const string NoExamSlotsFound = "No Exam Slots is found";
        public const string ExamsFetchSuccessfully = "Vehicle Exams Fetched Successfully";
        public const string NoVehicleSubClassFound = "No Sub-Class for this vehicle is found";
        public const string NoVehicleAdded = "No vehicle added";
        public const string NewVehicleCreatedSuccessfully = "New Vehicle Created Successfully";
        public const string VehicleSubClassFound = "Sub-Class for this vehicle is found";
        public const string AppointmentFetchedSuccessfully = "Appointment Fetched Successfully";
        public const string NoBookingChannelFound = "No Booking Channel Information is found";
        public const string BookingChannelFound = "Booking Channel Information is found";
        public const string DeleteAppointment = "Appointment Deleted Successfully.";
        public const string DeleteAppointmentFailure = "Appointment cannot be deleted.";
        
        public const string CancelAppointment = "Appointment Cancelled Successfully.";
        public const string CancelAppointmentFailure = "Appointment cannot be cancelled.";
        public const string AmendAppointment = "Appointment Amended Successfully.";
        public const string AmendAppointmentFailure = "Appointment is not Amended.";
        public const string RescheduledAppointment = "Appointment Rescheduled Successfully.";
        public const string ExamFee = "Exam Fee should be same as original appointment.";
        public const string AptNumNotExists = "Appointment Number does not exist in Database.";
        public const string AptGreaterThanZero = "Appointment Number should be greater than 0";
        public const string DeletePayment = "Payment Deleted Successfully";
        public const string PaymentStatus = "Payment should be completed to delete any Payment";
        public const string DeletePaymentFailure = "Payment is not Deleted.";
        public const string ConfirmPayment = "Payment Completed Successfully";
        public const string ConfirmPaymentFailure = "Payment is failed.";
        public const string PaymentAlreadyCompleted = "Payment already completed";
        public const string NoPaymentFound = "No such payment Details found";
        public const string PaymentsFetchSuccessfully = "Payment Details Fetched Successfully";
        public const string AmendNVVehicle = "Non Valid Vehicle Amended Successfully.";
        public const string NoAmendNVVehicle = "No Such Non Valid Vehicle found.";
        public const string AmendVVandMPV = "VVorMPV is Amended.";
        public const string NoAmendVVandMPV = "No Such VVorMPV found.";
        public const string CreateSpecialEventSuccessful = "Special Event Created Successfully";
        public const string SearchSpecialEventSuccessful = "Special Event Searched Successfully";

        public const string FileAlreadyExists = "File Already Exists with same name";
        public const string FileUploadedSuccesfully = "File Uploaded Successfully";
        public const string AttachmentDeletionFailed = "Error in deleting attachment.Please check logs";
        public const string ChassisNumberRequired = "Chassis Number is required";
        public const string FileNameRequired = "File Name is required";

        public const string NoExamScheduleFound = "No Examination Schedule Found";
        public const string ExamScheduleFound = "Examination Schedule Found";
        public const string ExamScheduleDeleted = "Examination Schedule Deleted Successfully";
        public const string NoExamScheduleDeleted = "No Examination Schedule Deleted";
        public const string ExamScheduleDetailsCreated= "Examination Schedule Details Created Successfully";
        public const string ExamScheduleDetailsNotCreated = "Examination Schedule Details Creation Unsuccessfull";
        public const string ExamScheduleEdit = "Examination Schedule Updated Successfully";
        public const string NoExamScheduleEdit = "Examination Schedule Update Failed";

        public const string CancelWatchList = "Vehcile deleted from the WatchList";
        public const string CancelWatchListFailure = "Vehcile cannot be deleted from the WatchList";
        public const string WatchListCreatedSuccessfully = "WatchList Completed Successfully.";
        public const string WatchListSearchedSuccessfully = "WatchList Searched Successfully.";
        public const string WatchListSearchFailed = "No watchList found.";
        public const string CountryCodeFetchSuccessfully = "Country Code Fetched Successfully";
        public const string NoCountryCodeFound = "No Such Country Code Is Found.";
        #region error logging
        public const string CommonErrorMessage = @"Error generated from method: {0} Class: {1} Error Message: {2}";
        #endregion

        #region User Message
        public const string ResponseSuccessMessage = "success";
        public const string CreateUserValidationfailed = "Validation failed.";
        public const string NewUserCreationfailed = "Error in creating user.Please check Logs";
        public const string userUpdationFailed = "Error in updating user. Please check logs";
        public const string userDeletionFailed = "Error in deleting user.Please check logs";

        #endregion
        public const string NoAppointmentHistoryFound = "No such Appointment History Details Found.";
        public const string AppHistoryFetchedSuccessfully = "Appointment History Fetched Successfully.";
        public const string NewNVVehicleCreatedSuccessfully = "New Non Valid Vehicle Created Successfully";
        public const string VehicleRemarkAddedSuccessfully = "Vehicle Remark Saved Successfully";
        public const string VehicleMessageAddedSuccessfully = "Vehicle Messages Saved Successfully";

    }
}
