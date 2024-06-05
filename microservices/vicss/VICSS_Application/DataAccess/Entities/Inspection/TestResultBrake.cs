namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_brake")]
    public class TestResultBrake
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        public string Id { get; set; }

        //FK
        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("weight_l_axle1", TypeName = "nvarchar(50)")]
        public string? WeightLAxle1 { get; set; }

        [Column("weight_l_axle2", TypeName = "nvarchar(50)")]
        public string? WeightLAxle2 { get; set; }

        [Column("weight_l_axle3", TypeName = "nvarchar(50)")]
        public string? WeightLAxle3 { get; set; }

        [Column("weight_l_axle4", TypeName = "nvarchar(50)")]
        public string? WeightLAxle4 { get; set; }

        [Column("weight_l_axle5", TypeName = "nvarchar(50)")]
        public string? WeightLAxle5 { get; set; }

        [Column("weight_l_axle6", TypeName = "nvarchar(50)")]
        public string? WeightLAxle6 { get; set; }

        [Column("weight_l_axle7", TypeName = "nvarchar(50)")]
        public string? WeightLAxle7 { get; set; }

        [Column("weight_l_axle8", TypeName = "nvarchar(50)")]
        public string? WeightLAxle8 { get; set; }

        [Column("weight_r_axle1", TypeName = "nvarchar(50)")]
        public string? WeightRAxle1 { get; set; }

        [Column("weight_r_axle2", TypeName = "nvarchar(50)")]
        public string? WeightRAxle2 { get; set; }

        [Column("weight_r_axle3", TypeName = "nvarchar(50)")]
        public string? WeightRAxle3 { get; set; }

        [Column("weight_r_axle4", TypeName = "nvarchar(50)")]
        public string? WeightRAxle4 { get; set; }

        [Column("weight_r_axle5", TypeName = "nvarchar(50)")]
        public string? WeightRAxle5 { get; set; }

        [Column("weight_r_axle6", TypeName = "nvarchar(50)")]
        public string? WeightRAxle6 { get; set; }

        [Column("weight_r_axle7", TypeName = "nvarchar(50)")]
        public string? WeightRAxle7 { get; set; }

        [Column("weight_r_axle8", TypeName = "nvarchar(50)")]
        public string? WeightRAxle8 { get; set; }

        [Column("brake_l_axle1", TypeName = "nvarchar(50)")]
        public string? BrakeLAxle1 { get; set; }

        [Column("brake_l_axle2", TypeName = "nvarchar(50)")]
        public string? BrakeLAxle2 { get; set; }

        [Column("brake_l_axle3", TypeName = "nvarchar(50)")]
        public string? BrakeLAxle3 { get; set; }

        [Column("brake_l_axle4", TypeName = "nvarchar(50)")]
        public string? BrakeLAxle4 { get; set; }

        [Column("brake_l_axle5", TypeName = "nvarchar(50)")]
        public string? BrakeLAxle5 { get; set; }

        [Column("brake_l_axle6", TypeName = "nvarchar(50)")]
        public string? BrakeLAxle6 { get; set; }

        [Column("brake_l_axle7", TypeName = "nvarchar(50)")]
        public string? BrakeLAxle7 { get; set; }

        [Column("brake_l_axle8", TypeName = "nvarchar(50)")]
        public string? BrakeLAxle8 { get; set; }

        [Column("brake_r_axle1", TypeName = "nvarchar(50)")]
        public string? BrakeRAxle1 { get; set; }

        [Column("brake_r_axle2", TypeName = "nvarchar(50)")]
        public string? BrakeRAxle2 { get; set; }

        [Column("brake_r_axle3", TypeName = "nvarchar(50)")]
        public string? BrakeRAxle3 { get; set; }

        [Column("brake_r_axle4", TypeName = "nvarchar(50)")]
        public string? BrakeRAxle4 { get; set; }

        [Column("brake_r_axle5", TypeName = "nvarchar(50)")]
        public string? BrakeRAxle5 { get; set; }

        [Column("brake_r_axle6", TypeName = "nvarchar(50)")]
        public string? BrakeRAxle6 { get; set; }

        [Column("brake_r_axle7", TypeName = "nvarchar(50)")]
        public string? BrakeRAxle7 { get; set; }

        [Column("brake_r_axle8", TypeName = "nvarchar(50)")]
        public string? BrakeRAxle8 { get; set; }

        [Column("brake_imb_axle1", TypeName = "nvarchar(50)")]
        public string? BrakeImbAxle1 { get; set; }

        [Column("brake_imb_axle2", TypeName = "nvarchar(50)")]
        public string? BrakeImbAxle2 { get; set; }

        [Column("brake_imb_axle3", TypeName = "nvarchar(50)")]
        public string? BrakeImbAxle3 { get; set; }

        [Column("brake_imb_axle4", TypeName = "nvarchar(50)")]
        public string? BrakeImbAxle4 { get; set; }

        [Column("brake_imb_axle5", TypeName = "nvarchar(50)")]
        public string? BrakeImbAxle5 { get; set; }

        [Column("brake_imb_axle6", TypeName = "nvarchar(50)")]
        public string? BrakeImbAxle6 { get; set; }

        [Column("brake_imb_axle7", TypeName = "nvarchar(50)")]
        public string? BrakeImbAxle7 { get; set; }

        [Column("brake_imb_axle8", TypeName = "nvarchar(50)")]
        public string? BrakeImbAxle8 { get; set; }

        [Column("second_brake_l_axle1", TypeName = "nvarchar(50)")]
        public string? SecondBrakeLAxle1 { get; set; }

        [Column("second_brake_l_axle2", TypeName = "nvarchar(50)")]
        public string? SecondBrakeLAxle2 { get; set; }

        [Column("second_brake_l_axle3", TypeName = "nvarchar(50)")]
        public string? SecondBrakeLAxle3 { get; set; }

        [Column("second_brake_l_axle4", TypeName = "nvarchar(50)")]
        public string? SecondBrakeLAxle4 { get; set; }

        [Column("second_brake_l_axle5", TypeName = "nvarchar(50)")]
        public string? SecondBrakeLAxle5 { get; set; }

        [Column("second_brake_l_axle6", TypeName = "nvarchar(50)")]
        public string? SecondBrakeLAxle6 { get; set; }

        [Column("second_brake_l_axle7", TypeName = "nvarchar(50)")]
        public string? SecondBrakeLAxle7 { get; set; }

        [Column("second_brake_l_axle8", TypeName = "nvarchar(50)")]
        public string? SecondBrakeLAxle8 { get; set; }

        [Column("second_brake_r_axle1", TypeName = "nvarchar(50)")]
        public string? SecondBrakeRAxle1 { get; set; }

        [Column("second_brake_r_axle2", TypeName = "nvarchar(50)")]
        public string? SecondBrakeRAxle2 { get; set; }

        [Column("second_brake_r_axle3", TypeName = "nvarchar(50)")]
        public string? SecondBrakeRAxle3 { get; set; }

        [Column("second_brake_r_axle4", TypeName = "nvarchar(50)")]
        public string? SecondBrakeRAxle4 { get; set; }

        [Column("second_brake_r_axle5", TypeName = "nvarchar(50)")]
        public string? SecondBrakeRAxle5 { get; set; }

        [Column("second_brake_r_axle6", TypeName = "nvarchar(50)")]
        public string? SecondBrakeRAxle6 { get; set; }

        [Column("second_brake_r_axle7", TypeName = "nvarchar(50)")]
        public string? SecondBrakeRAxle7 { get; set; }

        [Column("second_brake_r_axle8", TypeName = "nvarchar(50)")]
        public string? SecondBrakeRAxle8 { get; set; }
        [Column("parking_brake_l_axle1", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeLAxle1 { get; set; }

        [Column("parking_brake_l_axle2", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeLAxle2 { get; set; }

        [Column("parking_brake_l_axle3", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeLAxle3 { get; set; }

        [Column("parking_brake_l_axle4", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeLAxle4 { get; set; }

        [Column("parking_brake_l_axle5", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeLAxle5 { get; set; }

        [Column("parking_brake_l_axle6", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeLAxle6 { get; set; }

        [Column("parking_brake_l_axle7", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeLAxle7 { get; set; }

        [Column("parking_brake_l_axle8", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeLAxle8 { get; set; }

        [Column("parking_brake_r_axle1", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeRAxle1 { get; set; }

        [Column("parking_brake_r_axle2", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeRAxle2 { get; set; }

        [Column("parking_brake_r_axle3", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeRAxle3 { get; set; }

        [Column("parking_brake_r_axle4", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeRAxle4 { get; set; }

        [Column("parking_brake_r_axle5", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeRAxle5 { get; set; }

        [Column("parking_brake_r_axle6", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeRAxle6 { get; set; }

        [Column("parking_brake_r_axle7", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeRAxle7 { get; set; }

        [Column("parking_brake_r_axle8", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeRAxle8 { get; set; }

        [Column("parking_brake_imb_axle1", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeImbAxle1 { get; set; }

        [Column("parking_brake_imb_axle2", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeImbAxle2 { get; set; }

        [Column("parking_brake_imb_axle3", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeImbAxle3 { get; set; }

        [Column("parking_brake_imb_axle4", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeImbAxle4 { get; set; }

        [Column("parking_brake_imb_axle5", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeImbAxle5 { get; set; }

        [Column("parking_brake_imb_axle6", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeImbAxle6 { get; set; }

        [Column("parking_brake_imb_axle7", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeImbAxle7 { get; set; }

        [Column("parking_brake_imb_axle8", TypeName = "nvarchar(50)")]
        public string? ParkingBrakeImbAxle8 { get; set; }

        [Column("service_brake", TypeName = "numeric(4,2)")]
        [Required]
        public float ServiceBrake { get; set; }

        [Column("service_brake_efficiency", TypeName = "numeric(4,2)")]
        [Required]
        public float ServiceBrakeEfficiency { get; set; }

        [Column("secondary_brake", TypeName = "numeric(4,2)")]
        [Required]
        public decimal SecondaryBrake { get; set; } = default(decimal);

        [Column("secondary_brake_efficiency", TypeName = "numeric(4,2)")]
        [Required]
        public decimal? SecondaryBrakeEfficiency { get; set; } = default(decimal?);

        [Column("parking_brake", TypeName = "numeric(4,2)")]
        [Required]
        public float ParkingBrake { get; set; }

        [Column("parking_brake_efficiency", TypeName = "numeric(4,2)")]
        [Required]
        public float ParkingBrakeEfficiency { get; set; }

        [Column("result", TypeName = "nvarchar(1)")]
        [Required]
        public string Result { get; set; }

        //FK
        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkipTestReasonId { get; set; }

        //Navigation Properties
        public virtual Test Tests { get; set; }
        public virtual SkipTestReason SkipTestReasons { get; set; }
    }
}