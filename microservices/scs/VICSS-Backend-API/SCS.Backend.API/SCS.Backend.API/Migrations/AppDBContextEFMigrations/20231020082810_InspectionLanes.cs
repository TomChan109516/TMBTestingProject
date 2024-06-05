using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class InspectionLanes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SCS_InspectionLanes",
                columns: table => new
                {
                    Lane_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LaneId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Lane = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_InspectionLanes", x => x.Lane_Key);
                });

            migrationBuilder.CreateTable(
                name: "CenterInspectionLanes",
                columns: table => new
                {
                    CentersCtr_Key = table.Column<int>(type: "int", nullable: false),
                    InspectionLanesLane_Key = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterInspectionLanes", x => new { x.CentersCtr_Key, x.InspectionLanesLane_Key });
                    table.ForeignKey(
                        name: "FK_CenterInspectionLanes_SCS_Centers_CentersCtr_Key",
                        column: x => x.CentersCtr_Key,
                        principalTable: "SCS_Centers",
                        principalColumn: "Ctr_Key",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CenterInspectionLanes_SCS_InspectionLanes_InspectionLanesLane_Key",
                        column: x => x.InspectionLanesLane_Key,
                        principalTable: "SCS_InspectionLanes",
                        principalColumn: "Lane_Key",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CenterInspectionLanes_InspectionLanesLane_Key",
                table: "CenterInspectionLanes",
                column: "InspectionLanesLane_Key");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CenterInspectionLanes");

            migrationBuilder.DropTable(
                name: "SCS_InspectionLanes");
        }
    }
}
