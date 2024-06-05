namespace VICSS.Shared.Models.Common
{
    public static class CommonErrorMessage
    {
        public const string ErrorMessage = "Error Occured. Check Error Logs for more details";
        public const string IpAdressErrorMessage = "Ip Address Did Not Match";
        public const string CredentialsErrorMessage = "Invalid Username Or Password";
        public const string SuccessLoginMessage = "Login Successful";
        public const string LoginErrorMessage = "IP Address Not Found.";
        public const string InternalServerError = "Operation Unsuccessful Due To Internal Server Error";
        public const string ApplicationErrorFormat = "{0}: Service {1}:Method {2}:Message {3}";
        public const string NotConnected = "Client Disconnected";
        public const string ConnectionErrorMessage = "Server not Connected";
        public const string TcpClientError = "Client not connected, cannot send message";
        public const string InvalidData = "XML data is larger than the available space in commandString";
        public const string IDNotFound = "No ArtuConfigId found with LaneId and StationId";
        public const string BadRequest = "Bad Request, Invalid Input.";
    }
}
