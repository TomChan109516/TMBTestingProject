namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("test_result_headlamp")]
    public class TestResultHeadLamp
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("left_main_intensity", TypeName = "nvarchar(12)")]
        public string? LeftMainIntensity { get; set; }

        [Column("right_main_intensity", TypeName = "nvarchar(12)")]
        public string? RightMainIntensity { get; set; }

        [Column("left_main_height", TypeName = "nvarchar(12)")]
        public string? LeftMainHeight { get; set; }

        [Column("right_main_height", TypeName = "nvarchar(12)")]
        public string? RightMainHeight { get; set; }

        [Column("left_dipped_height", TypeName = "nvarchar(12)")]
        public string? LeftDippedHeight { get; set; }

        [Column("right_dipped_height", TypeName = "nvarchar(12)")]
        public string? RightDippedHeight { get; set; }

        [Column("left_main_v_offset", TypeName = "nvarchar(12)")]
        public string? LeftMainVOffset { get; set; }

        [Column("left_main_h_offset", TypeName = "nvarchar(12)")]
        public string? LeftMainHOffset { get; set; }

        [Column("right_main_v_offset", TypeName = "nvarchar(12)")]
        public string? RightMainVOffset { get; set; }

        [Column("right_main_h_offset", TypeName = "nvarchar(12)")]
        public string? RightMainHOffset { get; set; }

        [Column("left_dipped_v_offset", TypeName = "nvarchar(12)")]
        public string? LeftDippedVOffset { get; set; }

        [Column("left_dipped_h_offset", TypeName = "nvarchar(12)")]
        public string? LeftDippedHOffset { get; set; }

        [Column("right_dipped_v_offset", TypeName = "nvarchar(12)")]
        public string? RightDippedVOffset { get; set; }

        [Column("right_dipped_h_offset", TypeName = "nvarchar(12)")]
        public string? RightDippedHOffset { get; set; }

        [Column("left_dipped_upward_angle", TypeName = "nvarchar(30)")]
        public string? LeftDippedUpwardAngle { get; set; }

        [Column("right_dipped_upward_angle", TypeName = "nvarchar(30)")]
        public string? RightDippedUpwardAngle { get; set; }

        [Column("left_dipped_horizont_alangle", TypeName = "nvarchar(30)")]
        public string? LeftDippedHorizontAngle { get; set; }

        [Column("right_dipped_horizont_alangle", TypeName = "nvarchar(30)")]
        public string? RightDippedHorizontAngle { get; set; }

        [Column("left_main_v_offset_h", TypeName = "nvarchar(30)")]
        public string? LeftMainVOffsetH { get; set; }

        [Column("right_main_v_offset_h", TypeName = "nvarchar(30)")]
        public string? RightMainVOffsetH { get; set; }

        [Column("left_dipped_v_offset_h", TypeName = "nvarchar(30)")]
        public string? LeftDippedVOffsetH { get; set; }

        [Column("right_dipped_v_offset_h", TypeName = "nvarchar(30)")]
        public string? RightDippedVOffsetH { get; set; }

        [Column("left_total_adj", TypeName = "nvarchar(2)")]
        public string? LeftTotalAdj { get; set; }

        [Column("right_total_adj", TypeName = "nvarchar(2)")]
        public string? RightTotalAdj { get; set; }

        [Column("left_is_cap_angle_ind", TypeName = "nvarchar(1)")]
        public string? LeftIsCapAngleIndicator { get; set; }

        [Column("right_is_cap_angle_ind", TypeName = "nvarchar(1)")]
        public string? RightIsCapAngleIndicator { get; set; }

        [Column("result", TypeName = "nvarchar(1)")]
        public string Result { get; set; }

        //FK
        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkiptTestReasonId { get; set; }

        //Navigation
        public virtual Test Tests { get; set; }
        public virtual SkipTestReason SkipTestReason { get; set; }


    }
}
