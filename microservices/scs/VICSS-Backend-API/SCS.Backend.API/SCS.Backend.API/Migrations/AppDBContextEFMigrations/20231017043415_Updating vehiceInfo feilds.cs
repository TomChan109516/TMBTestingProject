using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class UpdatingvehiceInfofeilds : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_SCS_VehicleInfo_RegMark",
                table: "SCS_VehicleInfo");

            migrationBuilder.AlterColumn<string>(
                name: "RegMarkDispText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "RegMark",
                table: "SCS_VehicleInfo",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10);

            migrationBuilder.AlterColumn<long>(
                name: "EngineNumber",
                table: "SCS_VehicleInfo",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleInfo_RegMark",
                table: "SCS_VehicleInfo",
                column: "RegMark",
                unique: true,
                filter: "[RegMark] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_SCS_VehicleInfo_RegMark",
                table: "SCS_VehicleInfo");

            migrationBuilder.AlterColumn<string>(
                name: "RegMarkDispText",
                table: "SCS_VehicleInfo",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "RegMark",
                table: "SCS_VehicleInfo",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10,
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "EngineNumber",
                table: "SCS_VehicleInfo",
                type: "int",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleInfo_RegMark",
                table: "SCS_VehicleInfo",
                column: "RegMark",
                unique: true);
        }
    }
}
