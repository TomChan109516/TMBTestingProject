using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class LaneStationMappingFixed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_lane_station_id",
                table: "lane");

            migrationBuilder.CreateIndex(
                name: "IX_station_lane_id",
                table: "station",
                column: "lane_id");

            migrationBuilder.AddForeignKey(
                name: "FK_station_lane_lane_id",
                table: "station",
                column: "lane_id",
                principalTable: "lane",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_station_lane_lane_id",
                table: "station");

            migrationBuilder.DropIndex(
                name: "IX_station_lane_id",
                table: "station");

            migrationBuilder.AddForeignKey(
                name: "FK_lane_station_id",
                table: "lane",
                column: "id",
                principalTable: "station",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
