using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class vehiceInfoUpdation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DistrictCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DistrictLocation",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EngineMake",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LocationChinese",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ParkingBrake",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ServiceBreak",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DistrictCode",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "DistrictLocation",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "EngineMake",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "LocationChinese",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "ParkingBrake",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "ServiceBreak",
                table: "SCS_VehicleInfo");
        }
    }
}
