using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class AddvehicleIDforeignkeyinappointmenttable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
        }
    }
}
