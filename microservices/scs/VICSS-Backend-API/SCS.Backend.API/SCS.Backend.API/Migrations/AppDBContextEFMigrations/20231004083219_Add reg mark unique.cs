using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class Addregmarkunique : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SCS_Appointments_SCS_VehicleInfo_VehicleId",
                table: "SCS_Appointments");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_SCS_VehicleInfo_VehicleId",
                table: "SCS_VehicleInfo");

            migrationBuilder.DropIndex(
                name: "IX_SCS_Appointments_VehicleId",
                table: "SCS_Appointments");

            migrationBuilder.AlterColumn<string>(
                name: "VehicleId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10);

            migrationBuilder.AlterColumn<string>(
                name: "VehicleId",
                table: "SCS_Appointments",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)");

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
                name: "VehicleId",
                table: "SCS_VehicleInfo",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(25)",
                oldMaxLength: 25);

            migrationBuilder.AlterColumn<string>(
                name: "VehicleId",
                table: "SCS_Appointments",
                type: "nvarchar(10)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(25)",
                oldMaxLength: 25);

            migrationBuilder.AddUniqueConstraint(
                name: "AK_SCS_VehicleInfo_VehicleId",
                table: "SCS_VehicleInfo",
                column: "VehicleId");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_Appointments_VehicleId",
                table: "SCS_Appointments",
                column: "VehicleId");

            migrationBuilder.AddForeignKey(
                name: "FK_SCS_Appointments_SCS_VehicleInfo_VehicleId",
                table: "SCS_Appointments",
                column: "VehicleId",
                principalTable: "SCS_VehicleInfo",
                principalColumn: "VehicleId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
