using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class VehicleInfoupdateorder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Permit",
                table: "SCS_VehicleInfo",
                newName: "VehiclePermitNumber");

            migrationBuilder.AlterColumn<string>(
                name: "WeightCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(1)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 22);

            migrationBuilder.AlterColumn<string>(
                name: "VhclTypeCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(5)",
                maxLength: 5,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(5)",
                oldMaxLength: 5)
                .Annotation("Relational:ColumnOrder", 1);

            migrationBuilder.AlterColumn<string>(
                name: "VehicleSubClassId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)")
                .Annotation("Relational:ColumnOrder", 8);

            migrationBuilder.AlterColumn<string>(
                name: "VehicleId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(25)",
                oldMaxLength: 25)
                .Annotation("Relational:ColumnOrder", 4);

            migrationBuilder.AlterColumn<string>(
                name: "VehicleClassId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)")
                .Annotation("Relational:ColumnOrder", 7);

            migrationBuilder.AlterColumn<string>(
                name: "UpperSeatCapacity",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 33);

            migrationBuilder.AlterColumn<string>(
                name: "TANumber",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 41);

            migrationBuilder.AlterColumn<string>(
                name: "StatusCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(1)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 28);

            migrationBuilder.AlterColumn<string>(
                name: "StandSeatCapacity",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 34);

            migrationBuilder.AlterColumn<string>(
                name: "SecondaryColor",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 43);

            migrationBuilder.AlterColumn<string>(
                name: "RegMarkDispText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)")
                .Annotation("Relational:ColumnOrder", 6);

            migrationBuilder.AlterColumn<string>(
                name: "RegMark",
                table: "SCS_VehicleInfo",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10)
                .Annotation("Relational:ColumnOrder", 5);

            migrationBuilder.AlterColumn<string>(
                name: "PrimaryColor",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 42);

            migrationBuilder.AlterColumn<double>(
                name: "PGVWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 23);

            migrationBuilder.AlterColumn<string>(
                name: "OwnerNameChinese",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 27);

            migrationBuilder.AlterColumn<string>(
                name: "OwnerName",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 26);

            migrationBuilder.AlterColumn<string>(
                name: "ModelCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 30);

            migrationBuilder.AlterColumn<string>(
                name: "Model",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 29);

            migrationBuilder.AlterColumn<int>(
                name: "ManufactureYear",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 14);

            migrationBuilder.AlterColumn<string>(
                name: "MakeId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 13);

            migrationBuilder.AlterColumn<string>(
                name: "LowerSeatCapacity",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 32);

            migrationBuilder.AlterColumn<DateTime>(
                name: "LicenceExpiry",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 35);

            migrationBuilder.AlterColumn<DateTime>(
                name: "LastUpdated",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 3);

            migrationBuilder.AlterColumn<double>(
                name: "LUGWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 25);

            migrationBuilder.AlterColumn<string>(
                name: "InspectionOrderCodeList",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 46);

            migrationBuilder.AlterColumn<string>(
                name: "InspectionOrder",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 45);

            migrationBuilder.AlterColumn<double>(
                name: "GRSWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 24);

            migrationBuilder.AlterColumn<string>(
                name: "EngineType",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 39);

            migrationBuilder.AlterColumn<int>(
                name: "EngineSize",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 38);

            migrationBuilder.AlterColumn<int>(
                name: "EngineNumber",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 37);

            migrationBuilder.AlterColumn<string>(
                name: "DocNumber",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 11);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2")
                .Annotation("Relational:ColumnOrder", 36);

            migrationBuilder.AlterColumn<string>(
                name: "CountryCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 12);

            migrationBuilder.AlterColumn<string>(
                name: "ChassisTrimText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)")
                .Annotation("Relational:ColumnOrder", 10);

            migrationBuilder.AlterColumn<string>(
                name: "ChassisNumber",
                table: "SCS_VehicleInfo",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(25)",
                oldMaxLength: 25)
                .Annotation("Relational:ColumnOrder", 9);

            migrationBuilder.AlterColumn<string>(
                name: "CancelReason",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 44);

            migrationBuilder.AlterColumn<string>(
                name: "BodyType",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 31);

            migrationBuilder.AlterColumn<double>(
                name: "Axle7Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 21);

            migrationBuilder.AlterColumn<double>(
                name: "Axle6Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 20);

            migrationBuilder.AlterColumn<double>(
                name: "Axle5Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 19);

            migrationBuilder.AlterColumn<double>(
                name: "Axle4Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 18);

            migrationBuilder.AlterColumn<double>(
                name: "Axle3Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 17);

            migrationBuilder.AlterColumn<double>(
                name: "Axle2Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 16);

            migrationBuilder.AlterColumn<double>(
                name: "Axle1Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .Annotation("Relational:ColumnOrder", 15);

            migrationBuilder.AlterColumn<int>(
                name: "Vhcl_Key",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("Relational:ColumnOrder", 0)
                .Annotation("SqlServer:Identity", "1, 1")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "ContactPerson",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "PhoneNumber",
                table: "SCS_VehicleInfo",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "leftHandSteeringIndicator",
                table: "SCS_VehicleInfo",
                type: "bit",
                nullable: true)
                .Annotation("Relational:ColumnOrder", 40);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContactPerson",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropColumn(
                name: "leftHandSteeringIndicator",
                table: "SCS_VehicleInfo");

            migrationBuilder.RenameColumn(
                name: "VehiclePermitNumber",
                table: "SCS_VehicleInfo",
                newName: "Permit");

            migrationBuilder.AlterColumn<string>(
                name: "WeightCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(1)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 22);

            migrationBuilder.AlterColumn<string>(
                name: "VhclTypeCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(5)",
                maxLength: 5,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(5)",
                oldMaxLength: 5)
                .OldAnnotation("Relational:ColumnOrder", 1);

            migrationBuilder.AlterColumn<string>(
                name: "VehicleSubClassId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)")
                .OldAnnotation("Relational:ColumnOrder", 8);

            migrationBuilder.AlterColumn<string>(
                name: "VehicleId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(25)",
                oldMaxLength: 25)
                .OldAnnotation("Relational:ColumnOrder", 4);

            migrationBuilder.AlterColumn<string>(
                name: "VehicleClassId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)")
                .OldAnnotation("Relational:ColumnOrder", 7);

            migrationBuilder.AlterColumn<string>(
                name: "UpperSeatCapacity",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 33);

            migrationBuilder.AlterColumn<string>(
                name: "TANumber",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 41);

            migrationBuilder.AlterColumn<string>(
                name: "StatusCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(1)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 28);

            migrationBuilder.AlterColumn<string>(
                name: "StandSeatCapacity",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 34);

            migrationBuilder.AlterColumn<string>(
                name: "SecondaryColor",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 43);

            migrationBuilder.AlterColumn<string>(
                name: "RegMarkDispText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)")
                .OldAnnotation("Relational:ColumnOrder", 6);

            migrationBuilder.AlterColumn<string>(
                name: "RegMark",
                table: "SCS_VehicleInfo",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10)
                .OldAnnotation("Relational:ColumnOrder", 5);

            migrationBuilder.AlterColumn<string>(
                name: "PrimaryColor",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 42);

            migrationBuilder.AlterColumn<double>(
                name: "PGVWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 23);

            migrationBuilder.AlterColumn<string>(
                name: "OwnerNameChinese",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 27);

            migrationBuilder.AlterColumn<string>(
                name: "OwnerName",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 26);

            migrationBuilder.AlterColumn<string>(
                name: "ModelCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 30);

            migrationBuilder.AlterColumn<string>(
                name: "Model",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 29);

            migrationBuilder.AlterColumn<int>(
                name: "ManufactureYear",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 14);

            migrationBuilder.AlterColumn<string>(
                name: "MakeId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 13);

            migrationBuilder.AlterColumn<string>(
                name: "LowerSeatCapacity",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 32);

            migrationBuilder.AlterColumn<DateTime>(
                name: "LicenceExpiry",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 35);

            migrationBuilder.AlterColumn<DateTime>(
                name: "LastUpdated",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 3);

            migrationBuilder.AlterColumn<double>(
                name: "LUGWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 25);

            migrationBuilder.AlterColumn<string>(
                name: "InspectionOrderCodeList",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 46);

            migrationBuilder.AlterColumn<string>(
                name: "InspectionOrder",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 45);

            migrationBuilder.AlterColumn<double>(
                name: "GRSWeight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 24);

            migrationBuilder.AlterColumn<string>(
                name: "EngineType",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 39);

            migrationBuilder.AlterColumn<int>(
                name: "EngineSize",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 38);

            migrationBuilder.AlterColumn<int>(
                name: "EngineNumber",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 37);

            migrationBuilder.AlterColumn<string>(
                name: "DocNumber",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 11);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "SCS_VehicleInfo",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2")
                .OldAnnotation("Relational:ColumnOrder", 36);

            migrationBuilder.AlterColumn<string>(
                name: "CountryCode",
                table: "SCS_VehicleInfo",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 12);

            migrationBuilder.AlterColumn<string>(
                name: "ChassisTrimText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)")
                .OldAnnotation("Relational:ColumnOrder", 10);

            migrationBuilder.AlterColumn<string>(
                name: "ChassisNumber",
                table: "SCS_VehicleInfo",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(25)",
                oldMaxLength: 25)
                .OldAnnotation("Relational:ColumnOrder", 9);

            migrationBuilder.AlterColumn<string>(
                name: "CancelReason",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 44);

            migrationBuilder.AlterColumn<string>(
                name: "BodyType",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 31);

            migrationBuilder.AlterColumn<double>(
                name: "Axle7Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 21);

            migrationBuilder.AlterColumn<double>(
                name: "Axle6Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 20);

            migrationBuilder.AlterColumn<double>(
                name: "Axle5Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 19);

            migrationBuilder.AlterColumn<double>(
                name: "Axle4Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 18);

            migrationBuilder.AlterColumn<double>(
                name: "Axle3Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 17);

            migrationBuilder.AlterColumn<double>(
                name: "Axle2Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 16);

            migrationBuilder.AlterColumn<double>(
                name: "Axle1Weight",
                table: "SCS_VehicleInfo",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true)
                .OldAnnotation("Relational:ColumnOrder", 15);

            migrationBuilder.AlterColumn<int>(
                name: "Vhcl_Key",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1")
                .OldAnnotation("Relational:ColumnOrder", 0)
                .OldAnnotation("SqlServer:Identity", "1, 1");
        }
    }
}
