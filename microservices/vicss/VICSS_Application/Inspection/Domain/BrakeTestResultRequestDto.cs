namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    using VICSS.Service.Inspection.Domain;

    public class BrakeTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public SaveBrakeTestResultDto saveBrakeTestResultDto { get; set; }
    }

    public class SaveBrakeTestResultDto
    {
        public string? WeightLAxle1 { get; set; }
        public string? WeightLAxle2 { get; set; }
        public string? WeightLAxle3 { get; set; }
        public string? WeightLAxle4 { get; set; }
        public string? WeightLAxle5 { get; set; }
        public string? WeightLAxle6 { get; set; }
        public string? WeightLAxle7 { get; set; }
        public string? WeightLAxle8 { get; set; }
        public string? WeightRAxle1 { get; set; }
        public string? WeightRAxle2 { get; set; }
        public string? WeightRAxle3 { get; set; }
        public string? WeightRAxle4 { get; set; }
        public string? WeightRAxle5 { get; set; }
        public string? WeightRAxle6 { get; set; }
        public string? WeightRAxle7 { get; set; }
        public string? WeightRAxle8 { get; set; }
        public string? BrakeLAxle1 { get; set; }
        public string? BrakeLAxle2 { get; set; }
        public string? BrakeLAxle3 { get; set; }
        public string? BrakeLAxle4 { get; set; }
        public string? BrakeLAxle5 { get; set; }
        public string? BrakeLAxle6 { get; set; }
        public string? BrakeLAxle7 { get; set; }
        public string? BrakeLAxle8 { get; set; }
        public string? BrakeRAxle1 { get; set; }
        public string? BrakeRAxle2 { get; set; }
        public string? BrakeRAxle3 { get; set; }
        public string? BrakeRAxle4 { get; set; }
        public string? BrakeRAxle5 { get; set; }
        public string? BrakeRAxle6 { get; set; }
        public string? BrakeRAxle7 { get; set; }
        public string? BrakeRAxle8 { get; set; }
        public string? BrakeImbAxle1 { get; set; }
        public string? BrakeImbAxle2 { get; set; }
        public string? BrakeImbAxle3 { get; set; }
        public string? BrakeImbAxle4 { get; set; }
        public string? BrakeImbAxle5 { get; set; }
        public string? BrakeImbAxle6 { get; set; }
        public string? BrakeImbAxle7 { get; set; }
        public string? BrakeImbAxle8 { get; set; }
        public string? SecondBrakeLAxle1 { get; set; }
        public string? SecondBrakeLAxle2 { get; set; }
        public string? SecondBrakeLAxle3 { get; set; }
        public string? SecondBrakeLAxle4 { get; set; }
        public string? SecondBrakeLAxle5 { get; set; }
        public string? SecondBrakeLAxle6 { get; set; }
        public string? SecondBrakeLAxle7 { get; set; }
        public string? SecondBrakeLAxle8 { get; set; }
        public string? SecondBrakeRAxle1 { get; set; }
        public string? SecondBrakeRAxle2 { get; set; }
        public string? SecondBrakeRAxle3 { get; set; }
        public string? SecondBrakeRAxle4 { get; set; }
        public string? SecondBrakeRAxle5 { get; set; }
        public string? SecondBrakeRAxle6 { get; set; }
        public string? SecondBrakeRAxle7 { get; set; }
        public string? SecondBrakeRAxle8 { get; set; }
        public string? ParkingBrakeLAxle1 { get; set; }
        public string? ParkingBrakeLAxle2 { get; set; }
        public string? ParkingBrakeLAxle3 { get; set; }
        public string? ParkingBrakeLAxle4 { get; set; }
        public string? ParkingBrakeLAxle5 { get; set; }
        public string? ParkingBrakeLAxle6 { get; set; }
        public string? ParkingBrakeLAxle7 { get; set; }
        public string? ParkingBrakeLAxle8 { get; set; }
        public string? ParkingBrakeRAxle1 { get; set; }
        public string? ParkingBrakeRAxle2 { get; set; }
        public string? ParkingBrakeRAxle3 { get; set; }
        public string? ParkingBrakeRAxle4 { get; set; }
        public string? ParkingBrakeRAxle5 { get; set; }
        public string? ParkingBrakeRAxle6 { get; set; }
        public string? ParkingBrakeRAxle7 { get; set; }
        public string? ParkingBrakeRAxle8 { get; set; }
        public string? ParkingBrakeImbAxle1 { get; set; }
        public string? ParkingBrakeImbAxle2 { get; set; }
        public string? ParkingBrakeImbAxle3 { get; set; }
        public string? ParkingBrakeImbAxle4 { get; set; }
        public string? ParkingBrakeImbAxle5 { get; set; }
        public string? ParkingBrakeImbAxle6 { get; set; }
        public string? ParkingBrakeImbAxle7 { get; set; }
        public string? ParkingBrakeImbAxle8 { get; set; }
        public float ServiceBrake { get; set; }
        public float ServiceBrakeEfficiency { get; set; }
        public float SecondaryBrake { get; set; }
        public float SecondaryBrakeEfficiency { get; set; }
        public float ParkingBrake { get; set; }
        public float ParkingBrakeEfficiency { get; set; }
        public string? SkipTestReasonId { get; set; }
        public string Result { get; set; }
    }
}
