namespace VICSS.Service.Inspection.Domain
{
    public class OhmMeasuringMethodResponseDto
    {
        public OhmMeasuringMethodResponseDto()
        {
            List<OhmMeasuringMethodDto> OhmMeasuringMethods= new List<OhmMeasuringMethodDto>();


        }
        public List<OhmMeasuringMethodDto> OhmMeasuringMethods { get; set; }
    }
    public class OhmMeasuringMethodDto
    {
        public int Id { get; set; }
        public string OhmMethod { get; set; }
        public int Status { get; set; }
    }
}
