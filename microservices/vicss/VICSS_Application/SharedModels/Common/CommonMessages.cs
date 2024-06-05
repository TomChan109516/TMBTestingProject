using System.Drawing;

namespace VICSS.Shared.Models.Common
{
    public class CommonMessages
    {
        public const string OperationSuccessful = "Operation Successful";
        public const string OperationUnsuccessful = "Operation Unsuccessful";
        public const string EmptyFields = "Fields cannot be empty";
        public const string DuplicateRecords = "A record with the same VeesIp, VeesPort already exists.";
        public const string EndPointNotFound = "End point not found.";
        public const string HeaderNotMatching = "Header not matching";
        public const string ReceivedBuffer = "Received buffer: ";
        public const string AcknowledgementReceived = "Acknowledgement: Successfully Received";
        public const string SuccessfullyUploadedToVICS = "Successfully Uploaded to VICS";
        public const string UploadedButVICSNotConnected = "Uploaded but VICS not connected";
        public const string UploadFailed = "Upload Failed";
        public const string BufferNotReceived = "Buffer Not received";
        public const string CommandNotMatched = "No Command received";
        public const string TestDataFound = "Test Data Fetched Successfully";
        public const string NoTestDataFound = "No Test Data Found";
        public const string DataSaved = "Data Saved Successfully";
        public const string DataNotSaved = "Unable To Save the Data";
        public const string IdNotFound = "Id did not match";
        public const string InvalidLength = "Invalid buffer Length";
        public const string BadRequest = "Bad Request, Please Provide Valid Input";
        public const string NoStationFound = "No Station Found";
        public const string ConnectionSuccessfull = "Connection Successful";
        public const string StationBusy = "Station is busy or Unavailable";
        public const string TestStarted = "Test Started";
        public const string TestCompleted = "Test Completed";
        public const string TestInProgress = "Test In Progress";
        public const string TestIDNotFound = "Test ID could not be determined from the provided XML";
        public const string ServerDisconnected = "Server Already disconnected";
        public const string NoTestFound = "No Test Data Found For this Inspection Id.";
        public const string NoTestsFound = "No test details found for the given InspectionId";
        public const string TestReasonNotFound = "Test Reason Not Found.";
        public const string NoUpdateRequired = "No update required, existing data matches the new data.";
        public const string SuccessMessage = "結果接收成功";//Result Received Successfully
        public const string PartialSuccessMessage = "結果接收成功但VICS未連接";//Result Received Successfully but VICS is not connected
        public const string ConnectionExist = "Connection already exists";
        public const string NoRecordFound = "No existing record found with the provided request.";
        public const string LaneStationNull = "LaneId and StationId cannot be null or empty";       
        public const string RecordAlredayExists = "CentreName Alreday Exists.";
        public const string InvalidRequest = "Invalid Request";        
        public const string NoWatchlistReasonFound = "Watchlist Reason not found.";
        public const string watchlistReasonAlreadyDisabledMessage = "Watchlist Reason is already disabled.";        
        public const string InvalidWatchlistReasonType = "Invalid Watchlist Reason Type. Watchlist Reason must be 'W' for Watch or 'A' for Alert. ";        
        public const string FetchError = "Error in fetching the record from the database.";
        public const string NoChangeDetected = "No changes detected in the Watchlist Reason.";
    }
}