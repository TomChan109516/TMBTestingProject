using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class ExaminationslotInformtion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExamSlotsInformation",
                columns: table => new
                {
                    ExamSlotKey = table.Column<int>(type: "int", nullable: false),
                    SlotName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Quota = table.Column<int>(type: "int", nullable: false),
                    Session = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExamSlotsInformation", x => x.ExamSlotKey);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExamSlotsInformation");
        }
    }
}
