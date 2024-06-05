using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class LaneToLaneTimeSlotMapping : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_LaneTimeslot_lane_id",
                table: "LaneTimeslot",
                column: "lane_id");

            migrationBuilder.AddForeignKey(
                name: "FK_LaneTimeslot_lane_lane_id",
                table: "LaneTimeslot",
                column: "lane_id",
                principalTable: "lane",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LaneTimeslot_lane_lane_id",
                table: "LaneTimeslot");

            migrationBuilder.DropIndex(
                name: "IX_LaneTimeslot_lane_id",
                table: "LaneTimeslot");
        }
    }
}
