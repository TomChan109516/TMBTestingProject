using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class MigrationforSpecialEvent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SCS_SpecialEvents",
                columns: table => new
                {
                    EventKey = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EventId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ctr_Id = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    spcl_event_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    spcl_event_description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    spcl_event_start_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    spcl_event_start_time = table.Column<DateTime>(type: "datetime2", nullable: true),
                    spcl_event_end_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    spcl_event_end_time = table.Column<DateTime>(type: "datetime2", nullable: true),
                    appt_rschd_bgn_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    appt_rschd_end_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    last_rec_txn_type_code = table.Column<DateTime>(type: "datetime2", nullable: true),
                    last_rec_txn_user_id = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_SpecialEvents", x => x.EventKey);
                });

            migrationBuilder.CreateTable(
                name: "CenterSpecialEvents",
                columns: table => new
                {
                    CentersCtr_Key = table.Column<int>(type: "int", nullable: false),
                    SpecialEventEventKey = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterSpecialEvents", x => new { x.CentersCtr_Key, x.SpecialEventEventKey });
                    table.ForeignKey(
                        name: "FK_CenterSpecialEvents_SCS_Centers_CentersCtr_Key",
                        column: x => x.CentersCtr_Key,
                        principalTable: "SCS_Centers",
                        principalColumn: "Ctr_Key",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CenterSpecialEvents_SCS_SpecialEvents_SpecialEventEventKey",
                        column: x => x.SpecialEventEventKey,
                        principalTable: "SCS_SpecialEvents",
                        principalColumn: "EventKey",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CenterSpecialEvents_SpecialEventEventKey",
                table: "CenterSpecialEvents",
                column: "SpecialEventEventKey");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CenterSpecialEvents");

            migrationBuilder.DropTable(
                name: "SCS_SpecialEvents");
        }
    }
}
