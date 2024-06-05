namespace VICSS.Service.CentreManagement.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Centre;

    public class AddUpdateCentreRequestDto : IRequest<AddUpdateCentreResponseDto>
    {
        public AddUpdateCentreRequestDto(AddUpdateCentreDto addUpdateCentre) 
        {
            this.addUpdateCentreDto = addUpdateCentre;
        }

        [JsonPropertyName("addUpdateCentreDto")]
        public AddUpdateCentreDto addUpdateCentreDto { get; set; }

    }
}
