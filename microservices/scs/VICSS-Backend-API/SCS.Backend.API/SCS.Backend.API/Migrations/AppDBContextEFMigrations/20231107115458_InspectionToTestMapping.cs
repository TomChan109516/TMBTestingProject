using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    /// <inheritdoc />
    public partial class InspectionToTestMapping : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_inspection_test_TestId",
                table: "inspection");

            migrationBuilder.DropIndex(
                name: "IX_inspection_TestId",
                table: "inspection");

            migrationBuilder.DropColumn(
                name: "TestId",
                table: "inspection");

            migrationBuilder.AddForeignKey(
                name: "FK_inspection_test_id",
                table: "inspection",
                column: "id",
                principalTable: "test",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_inspection_test_id",
                table: "inspection");

            migrationBuilder.AddColumn<string>(
                name: "TestId",
                table: "inspection",
                type: "nvarchar(40)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_inspection_TestId",
                table: "inspection",
                column: "TestId");

            migrationBuilder.AddForeignKey(
                name: "FK_inspection_test_TestId",
                table: "inspection",
                column: "TestId",
                principalTable: "test",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
