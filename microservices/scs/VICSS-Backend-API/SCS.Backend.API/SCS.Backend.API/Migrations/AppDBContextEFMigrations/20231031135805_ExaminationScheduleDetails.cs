using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    /// <inheritdoc />
    public partial class ExaminationScheduleDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "examination_schedule_details",
                columns: table => new
                {
                    vis_exam_schd_tslt_key = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    vis_exam_schd_key = table.Column<long>(type: "bigint", nullable: false),
                    lane_id = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    week_ssn_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    day_ssn_code = table.Column<string>(type: "nvarchar(5)", nullable: false),
                    tslt_bgn_time = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    tslt_end_time = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    tslt_qty = table.Column<int>(type: "int", nullable: false),
                    tslt_qty_reserve = table.Column<int>(type: "int", nullable: false),
                    tslt_chnl_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    inactv_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_examination_schedule_details", x => x.vis_exam_schd_tslt_key);
                });

           
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "examination_schedule_details");

            
        }
    }
}
