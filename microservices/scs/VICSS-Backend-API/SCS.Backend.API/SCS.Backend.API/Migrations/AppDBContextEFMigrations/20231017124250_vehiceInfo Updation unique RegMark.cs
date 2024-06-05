using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class vehiceInfoUpdationuniqueRegMark : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_SCS_VehicleInfo_RegMark",
                table: "SCS_VehicleInfo");

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

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleInfo_RegMark",
                table: "SCS_VehicleInfo",
                column: "RegMark",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_SCS_VehicleInfo_RegMark",
                table: "SCS_VehicleInfo");

            migrationBuilder.AlterColumn<string>(
                name: "RegMark",
                table: "SCS_VehicleInfo",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleInfo_RegMark",
                table: "SCS_VehicleInfo",
                column: "RegMark",
                unique: true,
                filter: "[RegMark] IS NOT NULL");
        }
    }
}
