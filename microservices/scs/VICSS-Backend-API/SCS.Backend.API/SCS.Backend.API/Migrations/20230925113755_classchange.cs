using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class classchange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "VehicleClassId",
                table: "SubClasses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_SubClasses_VehicleClassId",
                table: "SubClasses",
                column: "VehicleClassId");

            migrationBuilder.AddForeignKey(
                name: "FK_SubClasses_VehicleClasses_VehicleClassId",
                table: "SubClasses",
                column: "VehicleClassId",
                principalTable: "VehicleClasses",
                principalColumn: "VehicleClassId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubClasses_VehicleClasses_VehicleClassId",
                table: "SubClasses");

            migrationBuilder.DropIndex(
                name: "IX_SubClasses_VehicleClassId",
                table: "SubClasses");

            migrationBuilder.DropColumn(
                name: "VehicleClassId",
                table: "SubClasses");
        }
    }
}
