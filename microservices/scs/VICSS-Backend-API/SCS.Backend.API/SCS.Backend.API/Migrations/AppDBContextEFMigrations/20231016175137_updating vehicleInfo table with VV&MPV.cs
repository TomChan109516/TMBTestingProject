using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class updatingvehicleInfotablewithVVMPV : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SeatCapacity",
                table: "SCS_VehicleInfo",
                newName: "LowerSeatCapacity");

            migrationBuilder.RenameColumn(
                name: "PrivateRoadVehicle",
                table: "SCS_VehicleInfo",
                newName: "VehicleRemarkText");

            migrationBuilder.AddColumn<string>(
                name: "ChassisTrimText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "GRSWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InspectionOrderCodeList",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InterfaceRecordHashText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastAllowExamDate",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastRecordedTranscDate",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastRecordedTranscTypeCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastRecordedTranscUserId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MakeId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OwnerNameChinese",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RegMarkDispText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ServiceAnnotationText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ServiceRestrictionDate",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StandSeatCapacity",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UpperSeatCapacity",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "VehRegistractionDocTransNumber",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "VehicleHeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "VehicleLength",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "VehicleSubClassId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "VehicleWidth",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ChassisTrimText",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "GRSWeight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "InspectionOrderCodeList",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "InterfaceRecordHashText",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "LastAllowExamDate",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "LastRecordedTranscDate",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "LastRecordedTranscTypeCode",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "LastRecordedTranscUserId",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "MakeId",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "OwnerNameChinese",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "RegMarkDispText",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "ServiceAnnotationText",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "ServiceRestrictionDate",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "StandSeatCapacity",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "UpperSeatCapacity",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "VehRegistractionDocTransNumber",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "VehicleHeight",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "VehicleLength",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "VehicleSubClassId",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "VehicleWidth",
                table: "SCS_VehicleInfo");

            migrationBuilder.RenameColumn(
                name: "LowerSeatCapacity",
                table: "SCS_VehicleInfo",
                newName: "SeatCapacity");

            migrationBuilder.RenameColumn(
                name: "VehicleRemarkText",
                table: "SCS_VehicleInfo",
                newName: "PrivateRoadVehicle");
        }
    }
}
