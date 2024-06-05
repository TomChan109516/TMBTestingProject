using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    /// <inheritdoc />
    public partial class UpdateExaminationSchedule : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "lane_id",
                table: "examination_schedule_details",
                type: "nvarchar(40)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)");

            migrationBuilder.CreateIndex(
                name: "IX_examination_schedule_details_vis_exam_schd_key",
                table: "examination_schedule_details",
                column: "vis_exam_schd_key");

            migrationBuilder.AddForeignKey(
                name: "FK_examination_schedule_details_examination_schedule_vis_exam_schd_key",
                table: "examination_schedule_details",
                column: "vis_exam_schd_key",
                principalTable: "examination_schedule",
                principalColumn: "vis_exam_schd_key",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_examination_schedule_details_examination_schedule_vis_exam_schd_key",
                table: "examination_schedule_details");

            migrationBuilder.DropIndex(
                name: "IX_examination_schedule_details_vis_exam_schd_key",
                table: "examination_schedule_details");

            migrationBuilder.AlterColumn<string>(
                name: "lane_id",
                table: "examination_schedule_details",
                type: "nvarchar(10)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(40)");
        }
    }
}
