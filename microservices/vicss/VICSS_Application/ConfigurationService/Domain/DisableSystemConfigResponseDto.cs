namespace VICSS.Service.ConfigurationService.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;
    public class DisableSystemConfigResponseDto : ApiErrorMessage
    {
        public DisableSystemConfigResponseDto() { }

        public string Message { get; set; }
    }

}