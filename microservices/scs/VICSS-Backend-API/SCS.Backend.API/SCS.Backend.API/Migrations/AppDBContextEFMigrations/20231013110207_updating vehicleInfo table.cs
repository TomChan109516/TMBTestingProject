using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class updatingvehicleInfotable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "ADApprovalDate",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Axle1Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Axle2Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Axle3Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Axle4Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Axle5Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Axle6Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Axle7Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BodyType",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CountryCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DisplayRegMark",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EngineSize",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EngineType",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "FirstRegDate",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FrontTireSize",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HybridVehicle",
                table: "SCS_VehicleInfo",
                type: "nvarchar(1)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "LUGWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ManufactureYear",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OwnerName",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "PCVWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PSL",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PVRMDoubleLineIndicator",
                table: "SCS_VehicleInfo",
                type: "nvarchar(1)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PVRMLine1Text",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PVRMLine2Text",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PVRMTrimText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Permit",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PrimaryColor",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PrivateRoadVehicle",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "RatedPower",
                table: "SCS_VehicleInfo",
                type: "real",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RearTireSize",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReferenceNumber",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "RenewalDate",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecondaryColor",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StatusCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(1)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WeightCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(1)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "leftHandSteering",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "SCS_VehicleCountryCodes",
                columns: table => new
                {
                    CountryCodekey = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CountryCode = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CountryName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_VehicleCountryCodes", x => x.CountryCodekey);
                    table.UniqueConstraint("AK_SCS_VehicleCountryCodes_CountryCode", x => x.CountryCode);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleInfo_CountryCode",
                table: "SCS_VehicleInfo",
                column: "CountryCode");

            migrationBuilder.AddForeignKey(
                name: "FK_SCS_VehicleInfo_SCS_VehicleCountryCodes_CountryCode",
                table: "SCS_VehicleInfo",
                column: "CountryCode",
                principalTable: "SCS_VehicleCountryCodes",
                principalColumn: "CountryCode");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SCS_VehicleInfo_SCS_VehicleCountryCodes_CountryCode",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropTable(
                name: "SCS_VehicleCountryCodes");

            migrationBuilder.DropIndex(
                name: "IX_SCS_VehicleInfo_CountryCode",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "ADApprovalDate",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Axle1Weight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Axle2Weight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Axle3Weight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Axle4Weight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Axle5Weight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Axle6Weight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Axle7Weight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "BodyType",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "CountryCode",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "DisplayRegMark",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "EngineSize",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "EngineType",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "FirstRegDate",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "FrontTireSize",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "HybridVehicle",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "LUGWeight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "ManufactureYear",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "OwnerName",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PCVWeight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PSL",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PVRMDoubleLineIndicator",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PVRMLine1Text",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PVRMLine2Text",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PVRMTrimText",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "Permit",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PrimaryColor",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PrivateRoadVehicle",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "RatedPower",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "RearTireSize",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "ReferenceNumber",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "RenewalDate",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "SecondaryColor",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "StatusCode",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "WeightCode",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "leftHandSteering",
                table: "SCS_VehicleInfo");
        }
    }
}
