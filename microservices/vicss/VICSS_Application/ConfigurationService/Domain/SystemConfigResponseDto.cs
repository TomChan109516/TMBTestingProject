namespace VICSS.Service.ConfigurationService.Domain
{
    using VICSS.Shared.Models.Common;
    public class SystemConfigResponseDto : ApiErrorMessage
    {
        public SystemConfigResponseDto() { }

        public string? Message { get; set; }
    }

}