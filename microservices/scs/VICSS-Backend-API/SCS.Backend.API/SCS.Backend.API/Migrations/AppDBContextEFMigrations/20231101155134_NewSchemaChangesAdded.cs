using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class NewSchemaChangesAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "centre_holiday",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    ctr_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    hdy_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    hdy_name = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    hdy_chi_name = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    all_day_hdy = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    hdy_start_time = table.Column<DateTime>(type: "datetime", nullable: false),
                    hdy_end_time = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_centre_holiday", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "dyno_timeslot",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    dyno_room_id = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    start = table.Column<DateTime>(type: "datetime", nullable: false),
                    end = table.Column<DateTime>(type: "datetime", nullable: false),
                    exam_schd_desp = table.Column<string>(type: "text", nullable: false),
                    capacity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dyno_timeslot", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "examination_schedule_details",
                columns: table => new
                {
                    vis_exam_schd_tslt_key = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    vis_exam_schd_key = table.Column<long>(type: "bigint", nullable: false),
                    lane_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
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

            migrationBuilder.CreateTable(
                name: "inspection_type",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    exam_code = table.Column<string>(type: "nvarchar(16)", nullable: false),
                    insp_type_name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    insp_type_description = table.Column<string>(type: "text", nullable: false),
                    lane_test_type_1 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    lane_test_type_2 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    lane_test_type_3 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    lane_test_type_4 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    lane_test_type_5 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    dyno_test_type_1 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    dyno_test_type_2 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    dyno_test_type_3 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    dyno_test_type_4 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    dyno_test_type_5 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inspection_type", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "lane_avail_insp_type",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    lane_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    insp_type_id = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lane_avail_insp_type", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "lane_avail_vehicle",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    lane_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vhcl_type_id = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lane_avail_vehicle", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "LaneTimeslot",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    lane_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    start = table.Column<DateTime>(type: "datetime", nullable: false),
                    end = table.Column<DateTime>(type: "datetime", nullable: false),
                    exam_schd_desp = table.Column<string>(type: "text", nullable: false),
                    capacity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LaneTimeslot", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "New_centre",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    ctr_name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    ctr_chi_name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    ctr_addr = table.Column<string>(type: "text", nullable: false),
                    ctr_chi_addr = table.Column<string>(type: "text", nullable: false),
                    ctr_phone1 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    ctr_phone2 = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    ctr_begin_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    ctr_end_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    ctr_mon_oprt_time_start = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_mon_oprt_time_end = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_tue_oprt_time_start = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_tue_oprt_time_end = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_wed_oprt_time_start = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_wed_oprt_time_end = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_thu_oprt_time_start = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_thu_oprt_time_end = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_fri_oprt_time_start = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_fri_oprt_time_end = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_sat_oprt_time_start = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_sat_oprt_time_end = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_sun_oprt_time_start = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    ctr_sun_oprt_time_end = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_New_centre", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "new_watchlist",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    watchlist_reason = table.Column<string>(type: "text", nullable: false),
                    trigger_action = table.Column<string>(type: "nvarchar(32)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_new_watchlist", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "station",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    lane_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    station_name = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    station_description = table.Column<string>(type: "text", nullable: false),
                    station_actv_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_station", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "test",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    inspection_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    station_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    test_type = table.Column<string>(type: "nvarchar(16)", nullable: false),
                    mode = table.Column<string>(type: "nvarchar(18)", nullable: false),
                    attempt = table.Column<int>(type: "int", nullable: false),
                    skip_reason = table.Column<string>(type: "text", nullable: false),
                    skip_approval = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    end_result = table.Column<string>(type: "nvarchar(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_test", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "user_privilege",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    privilege_level = table.Column<int>(type: "int", nullable: false),
                    privilege_desp = table.Column<string>(type: "text", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_privilege", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "vehicle_type",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vhcl_class = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    vhcl_subclass = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_vehicle_type", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "vehicle_type_for_insp_type",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    inspection_type_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vehicle_type_id = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_vehicle_type_for_insp_type", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "InspectionTypeLaneAvailInspType",
                columns: table => new
                {
                    InspectionTypesInspectionTypeId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    LaneAvailInspTypesLaneAvailInspTypeId = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InspectionTypeLaneAvailInspType", x => new { x.InspectionTypesInspectionTypeId, x.LaneAvailInspTypesLaneAvailInspTypeId });
                    table.ForeignKey(
                        name: "FK_InspectionTypeLaneAvailInspType_inspection_type_InspectionTypesInspectionTypeId",
                        column: x => x.InspectionTypesInspectionTypeId,
                        principalTable: "inspection_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InspectionTypeLaneAvailInspType_lane_avail_insp_type_LaneAvailInspTypesLaneAvailInspTypeId",
                        column: x => x.LaneAvailInspTypesLaneAvailInspTypeId,
                        principalTable: "lane_avail_insp_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CenterHolidayNew_Centre",
                columns: table => new
                {
                    CenterHolidaysCenterHolidayId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    CentersCenterId = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterHolidayNew_Centre", x => new { x.CenterHolidaysCenterHolidayId, x.CentersCenterId });
                    table.ForeignKey(
                        name: "FK_CenterHolidayNew_Centre_New_centre_CentersCenterId",
                        column: x => x.CentersCenterId,
                        principalTable: "New_centre",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CenterHolidayNew_Centre_centre_holiday_CenterHolidaysCenterHolidayId",
                        column: x => x.CenterHolidaysCenterHolidayId,
                        principalTable: "centre_holiday",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "examination_schedule",
                columns: table => new
                {
                    vis_exam_schd_key = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ctr_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    exam_schd_bgn_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    exam_schd_end_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    exam_schd_desp = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    exam_schd_last_upd_date_time = table.Column<DateTime>(type: "datetime", nullable: false),
                    bi_lvl_code = table.Column<string>(type: "nvarchar(5)", nullable: false),
                    rsrv_tslt_actv_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    exam_schd_type_code = table.Column<string>(type: "nvarchar(5)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_examination_schedule", x => x.vis_exam_schd_key);
                    table.ForeignKey(
                        name: "FK_examination_schedule_New_centre_ctr_id",
                        column: x => x.ctr_id,
                        principalTable: "New_centre",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "payment",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    pymt_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    pymt_txn_num = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    pymt_type_code = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    pymt_amt = table.Column<decimal>(type: "numeric(7,2)", nullable: false),
                    pymt_mthd_code = table.Column<string>(type: "nvarchar(2)", nullable: false),
                    fin_instt_code = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    fin_instt_pymt_ref_num = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    ctr_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    extl_ref_num = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payment", x => x.id);
                    table.ForeignKey(
                        name: "FK_payment_New_centre_ctr_id",
                        column: x => x.ctr_id,
                        principalTable: "New_centre",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "special_event",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    ctr_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    spcl_evnt_name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    spcl_evnt_description = table.Column<string>(type: "text", nullable: false),
                    spcl_evnt_start_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    spcl_evnt_start_time = table.Column<DateTime>(type: "datetime", nullable: false),
                    spcl_evnt_end_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    spcl_evnt_end_time = table.Column<DateTime>(type: "datetime", nullable: false),
                    appt_rschd_bgn_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    appt_rschd_end_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_special_event", x => x.id);
                    table.ForeignKey(
                        name: "FK_special_event_New_centre_ctr_id",
                        column: x => x.ctr_id,
                        principalTable: "New_centre",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "lane",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    ctr_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    lane_name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    lane_description = table.Column<string>(type: "text", nullable: false),
                    lane_actv_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    default_capacity = table.Column<int>(type: "int", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lane", x => x.id);
                    table.ForeignKey(
                        name: "FK_lane_New_centre_ctr_id",
                        column: x => x.ctr_id,
                        principalTable: "New_centre",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_lane_station_id",
                        column: x => x.id,
                        principalTable: "station",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    privilege_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    ctr_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_ctr_role_bgn_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    user_ctr_role_end_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    user_ctr_role_rmk_text = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.id);
                    table.ForeignKey(
                        name: "FK_user_New_centre_ctr_id",
                        column: x => x.ctr_id,
                        principalTable: "New_centre",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_user_user_privilege_privilege_id",
                        column: x => x.privilege_id,
                        principalTable: "user_privilege",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_group",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    privilege_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_group", x => x.id);
                    table.ForeignKey(
                        name: "FK_user_group_user_privilege_privilege_id",
                        column: x => x.privilege_id,
                        principalTable: "user_privilege",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LaneAvailVehicleVehicleType",
                columns: table => new
                {
                    LaneAvailVehiclesLaneAvailVehicleId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    VehicleTypesVehicleTypeId = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LaneAvailVehicleVehicleType", x => new { x.LaneAvailVehiclesLaneAvailVehicleId, x.VehicleTypesVehicleTypeId });
                    table.ForeignKey(
                        name: "FK_LaneAvailVehicleVehicleType_lane_avail_vehicle_LaneAvailVehiclesLaneAvailVehicleId",
                        column: x => x.LaneAvailVehiclesLaneAvailVehicleId,
                        principalTable: "lane_avail_vehicle",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LaneAvailVehicleVehicleType_vehicle_type_VehicleTypesVehicleTypeId",
                        column: x => x.VehicleTypesVehicleTypeId,
                        principalTable: "vehicle_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "new_vehicle",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vhcl_rec_type_code = table.Column<string>(type: "nvarchar(5)", nullable: false),
                    vhcl_valid_id = table.Column<string>(type: "nvarchar(9)", nullable: false),
                    vhcl_type_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vhcl_upd_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    valid_vhcl_num = table.Column<long>(type: "bigint", nullable: false),
                    vhcl_reg_mark_num = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    vhcl_reg_mark_disp_text = table.Column<string>(type: "text", nullable: false),
                    vhcl_clss_code = table.Column<string>(type: "nvarchar(3)", nullable: false),
                    vhcl_sbclss_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_chsss_num = table.Column<string>(type: "nvarchar(25)", nullable: false),
                    vhcl_chsss_num_trim_text = table.Column<string>(type: "nvarchar(25)", nullable: false),
                    vhcl_doc_num = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    cntry_code = table.Column<string>(type: "nvarchar(3)", nullable: false),
                    vhcl_make_id = table.Column<string>(type: "nvarchar(3)", nullable: false),
                    vhcl_mfc_year = table.Column<int>(type: "int", nullable: false),
                    vhcl_axle_1_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_axle_2_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_axle_3_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_axle_4_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_axle_5_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_axle_6_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_axle_7_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_wght_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_pgv_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_grs_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_lug_wght = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_ownr_name = table.Column<string>(type: "nvarchar(150)", nullable: false),
                    vhcl_ownr_chi_name = table.Column<string>(type: "nvarchar(150)", nullable: false),
                    vhcl_sts_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_model_num = table.Column<string>(type: "nvarchar(80)", nullable: false),
                    vhcl_model_rmk_text = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    vhcl_body_type_code = table.Column<string>(type: "nvarchar(2)", nullable: false),
                    vhcl_lwr_seat_cap_qty = table.Column<int>(type: "int", nullable: false),
                    vhcl_upr_seat_cap_qty = table.Column<int>(type: "int", nullable: false),
                    vhcl_stnd_cap_qty = table.Column<int>(type: "int", nullable: false),
                    vhcl_lic_end_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    vhcl_frst_reg_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    vhcl_engn_num = table.Column<string>(type: "nvarchar(25)", nullable: false),
                    vhcl_engn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_engn_size_qty = table.Column<decimal>(type: "numeric(5,0)", nullable: false),
                    vhcl_left_hand_strg_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_type_aprv_num = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vhcl_prmy_color_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_scnd_color_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_cncl_rsn_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_insp_ord_code = table.Column<string>(type: "nvarchar(2)", nullable: false),
                    vhcl_insp_ord_code_list = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    lantau_vhcl_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    prvt_road_vhcl_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_pvrm_trim_text = table.Column<string>(type: "nvarchar(8)", nullable: false),
                    vhcl_pvrm_dbl_line_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    vhcl_pvrm_line_1_text = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    vhcl_pvrm_line_2_text = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    vhcl_rate_pwr = table.Column<decimal>(type: "numeric(9,2)", nullable: false),
                    vhcl_vico_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    adv_aprv_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    vhcl_cur_rnw_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    vhcl_srvc_annot_text = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    vhcl_srvc_rstr_text = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    vhcl_rmk_text = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    intf_rec_hash_text = table.Column<string>(type: "nvarchar(128)", nullable: false),
                    hybd_vhcl_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    ce_ref_num = table.Column<string>(type: "nvarchar(14)", nullable: false),
                    vhcl_reg_doc_txn_num = table.Column<string>(type: "nvarchar(8)", nullable: false),
                    vhcl_psl_list = table.Column<string>(type: "nvarchar(500)", nullable: false),
                    vhcl_prm_list = table.Column<string>(type: "nvarchar(600)", nullable: false),
                    vhcl_last_alw_exam_date = table.Column<DateTime>(type: "datetime", nullable: false),
                    vhcl_last_alw_exam_grp_name = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    vhcl_make_name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    vhcl_lng = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_wdth = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    vhcl_hgt = table.Column<decimal>(type: "numeric(6,2)", nullable: false),
                    frnt_tyre_size_text = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    rear_tyre_size_text = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_new_vehicle", x => x.id);
                    table.ForeignKey(
                        name: "FK_new_vehicle_vehicle_type_vhcl_type_id",
                        column: x => x.vhcl_type_id,
                        principalTable: "vehicle_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "InspectionTypeForVehicleTypeVehicleType",
                columns: table => new
                {
                    InspectionTypeForVehicleTypesInspectionTypeToVehicleTypeMappingId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    VehicleTypesVehicleTypeId = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InspectionTypeForVehicleTypeVehicleType", x => new { x.InspectionTypeForVehicleTypesInspectionTypeToVehicleTypeMappingId, x.VehicleTypesVehicleTypeId });
                    table.ForeignKey(
                        name: "FK_InspectionTypeForVehicleTypeVehicleType_vehicle_type_VehicleTypesVehicleTypeId",
                        column: x => x.VehicleTypesVehicleTypeId,
                        principalTable: "vehicle_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InspectionTypeForVehicleTypeVehicleType_vehicle_type_for_insp_type_InspectionTypeForVehicleTypesInspectionTypeToVehicleTypeM~",
                        column: x => x.InspectionTypeForVehicleTypesInspectionTypeToVehicleTypeMappingId,
                        principalTable: "vehicle_type_for_insp_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "InspectionTypeInspectionTypeForVehicleType",
                columns: table => new
                {
                    InspectionTypeForVehicleTypesInspectionTypeToVehicleTypeMappingId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    InspectionTypesInspectionTypeId = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InspectionTypeInspectionTypeForVehicleType", x => new { x.InspectionTypeForVehicleTypesInspectionTypeToVehicleTypeMappingId, x.InspectionTypesInspectionTypeId });
                    table.ForeignKey(
                        name: "FK_InspectionTypeInspectionTypeForVehicleType_inspection_type_InspectionTypesInspectionTypeId",
                        column: x => x.InspectionTypesInspectionTypeId,
                        principalTable: "inspection_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InspectionTypeInspectionTypeForVehicleType_vehicle_type_for_insp_type_InspectionTypeForVehicleTypesInspectionTypeToVehicleTy~",
                        column: x => x.InspectionTypeForVehicleTypesInspectionTypeToVehicleTypeMappingId,
                        principalTable: "vehicle_type_for_insp_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LaneAvailInspTypeNew_Lane",
                columns: table => new
                {
                    LaneAvailInspTypesLaneAvailInspTypeId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    LanesLaneId = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LaneAvailInspTypeNew_Lane", x => new { x.LaneAvailInspTypesLaneAvailInspTypeId, x.LanesLaneId });
                    table.ForeignKey(
                        name: "FK_LaneAvailInspTypeNew_Lane_lane_LanesLaneId",
                        column: x => x.LanesLaneId,
                        principalTable: "lane",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LaneAvailInspTypeNew_Lane_lane_avail_insp_type_LaneAvailInspTypesLaneAvailInspTypeId",
                        column: x => x.LaneAvailInspTypesLaneAvailInspTypeId,
                        principalTable: "lane_avail_insp_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LaneAvailVehicleNew_Lane",
                columns: table => new
                {
                    LaneAvailVehiclesLaneAvailVehicleId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    LanesLaneId = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LaneAvailVehicleNew_Lane", x => new { x.LaneAvailVehiclesLaneAvailVehicleId, x.LanesLaneId });
                    table.ForeignKey(
                        name: "FK_LaneAvailVehicleNew_Lane_lane_LanesLaneId",
                        column: x => x.LanesLaneId,
                        principalTable: "lane",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LaneAvailVehicleNew_Lane_lane_avail_vehicle_LaneAvailVehiclesLaneAvailVehicleId",
                        column: x => x.LaneAvailVehiclesLaneAvailVehicleId,
                        principalTable: "lane_avail_vehicle",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_auth",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_name = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    pwd_hash_text = table.Column<string>(type: "text", nullable: false),
                    acct_sts_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_auth", x => x.id);
                    table.ForeignKey(
                        name: "FK_user_auth_user_user_id",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_workday",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_duty_start_time_mon = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_end_time_mon = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_start_time_tue = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_end_time_tue = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_start_time_wed = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_end_time_wed = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_start_time_thu = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_end_time_thu = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_start_time_fri = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_end_time_fri = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_start_time_sat = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_end_time_sat = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_start_time_sun = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    user_duty_end_time_sun = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_workday", x => x.id);
                    table.ForeignKey(
                        name: "FK_user_workday_user_user_id",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "watchlist_user_access",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    watchlist_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    alert_target = table.Column<string>(type: "nvarchar(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_watchlist_user_access", x => x.id);
                    table.ForeignKey(
                        name: "FK_watchlist_user_access_new_watchlist_watchlist_id",
                        column: x => x.watchlist_id,
                        principalTable: "new_watchlist",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_watchlist_user_access_user_user_id",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_in_user_group",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_grp_id = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_in_user_group", x => x.id);
                    table.ForeignKey(
                        name: "FK_user_in_user_group_user_group_user_grp_id",
                        column: x => x.user_grp_id,
                        principalTable: "user_group",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_user_in_user_group_user_user_id",
                        column: x => x.user_id,
                        principalTable: "user",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "inspection",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    insp_type_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vhcl_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    lane_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    second_lane_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    dyno_room_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    insp_add_info_text = table.Column<string>(type: "text", nullable: false),
                    insp_contact_name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    insp_contact_num = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    insp_start_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    insp_end_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    insp_end_result = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    TestId = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inspection", x => x.id);
                    table.ForeignKey(
                        name: "FK_inspection_inspection_type_insp_type_id",
                        column: x => x.insp_type_id,
                        principalTable: "inspection_type",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inspection_lane_lane_id",
                        column: x => x.lane_id,
                        principalTable: "lane",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inspection_new_vehicle_vhcl_id",
                        column: x => x.vhcl_id,
                        principalTable: "new_vehicle",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_inspection_test_TestId",
                        column: x => x.TestId,
                        principalTable: "test",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "watchlist_vehicle",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    watchlist_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vehicle_id = table.Column<string>(type: "nvarchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_watchlist_vehicle", x => x.id);
                    table.ForeignKey(
                        name: "FK_watchlist_vehicle_new_vehicle_vehicle_id",
                        column: x => x.vehicle_id,
                        principalTable: "new_vehicle",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_watchlist_vehicle_new_watchlist_watchlist_id",
                        column: x => x.watchlist_id,
                        principalTable: "new_watchlist",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "New_Appointment",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    user_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    ctr_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    vhcl_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    lane_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    lane_timeslot_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    insp_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    payment_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    appt_add_info_text = table.Column<string>(type: "text", nullable: false),
                    appt_bill_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    appt_confirm_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    appt_contact_name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    appt_contact_num = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    appt_create_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    appt_create_sys_id = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    appt_remark_text = table.Column<string>(type: "nvarchar(256)", nullable: false),
                    appt_timeslot_seq_num = table.Column<int>(type: "int", nullable: false),
                    day_ssn_code = table.Column<string>(type: "nvarchar(5)", nullable: false),
                    exact_schd_insp_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    insp_type_id = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    insp_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    insp_fee_amt = table.Column<decimal>(type: "numeric(7,2)", nullable: false),
                    insp_fee_wave_id = table.Column<int>(type: "int", nullable: false),
                    wave_actv_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    wave_insp_fee_amt = table.Column<decimal>(type: "numeric(7,2)", nullable: false),
                    no_fee_appt_ind = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    orig_insp_fee_amt = table.Column<decimal>(type: "numeric(7,2)", nullable: false),
                    orig_vis_appt_key = table.Column<long>(type: "bigint", nullable: false),
                    last_rec_txn_datetime = table.Column<DateTime>(type: "datetime", nullable: false),
                    last_rec_txn_type_code = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    last_rec_txn_user_id = table.Column<string>(type: "nvarchar(32)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_New_Appointment", x => x.id);
                    table.ForeignKey(
                        name: "FK_New_Appointment_LaneTimeslot_lane_timeslot_id",
                        column: x => x.lane_timeslot_id,
                        principalTable: "LaneTimeslot",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_New_Appointment_New_centre_ctr_id",
                        column: x => x.ctr_id,
                        principalTable: "New_centre",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_New_Appointment_inspection_insp_id",
                        column: x => x.insp_id,
                        principalTable: "inspection",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_New_Appointment_lane_lane_id",
                        column: x => x.lane_id,
                        principalTable: "lane",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_New_Appointment_new_vehicle_vhcl_id",
                        column: x => x.vhcl_id,
                        principalTable: "new_vehicle",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_New_Appointment_payment_payment_id",
                        column: x => x.payment_id,
                        principalTable: "payment",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_New_Appointment_user_auth_user_id",
                        column: x => x.user_id,
                        principalTable: "user_auth",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CenterHolidayNew_Centre_CentersCenterId",
                table: "CenterHolidayNew_Centre",
                column: "CentersCenterId");

            migrationBuilder.CreateIndex(
                name: "IX_examination_schedule_ctr_id",
                table: "examination_schedule",
                column: "ctr_id");

            migrationBuilder.CreateIndex(
                name: "IX_inspection_insp_type_id",
                table: "inspection",
                column: "insp_type_id");

            migrationBuilder.CreateIndex(
                name: "IX_inspection_lane_id",
                table: "inspection",
                column: "lane_id");

            migrationBuilder.CreateIndex(
                name: "IX_inspection_TestId",
                table: "inspection",
                column: "TestId");

            migrationBuilder.CreateIndex(
                name: "IX_inspection_vhcl_id",
                table: "inspection",
                column: "vhcl_id");

            migrationBuilder.CreateIndex(
                name: "IX_InspectionTypeForVehicleTypeVehicleType_VehicleTypesVehicleTypeId",
                table: "InspectionTypeForVehicleTypeVehicleType",
                column: "VehicleTypesVehicleTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_InspectionTypeInspectionTypeForVehicleType_InspectionTypesInspectionTypeId",
                table: "InspectionTypeInspectionTypeForVehicleType",
                column: "InspectionTypesInspectionTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_InspectionTypeLaneAvailInspType_LaneAvailInspTypesLaneAvailInspTypeId",
                table: "InspectionTypeLaneAvailInspType",
                column: "LaneAvailInspTypesLaneAvailInspTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_lane_ctr_id",
                table: "lane",
                column: "ctr_id");

            migrationBuilder.CreateIndex(
                name: "IX_LaneAvailInspTypeNew_Lane_LanesLaneId",
                table: "LaneAvailInspTypeNew_Lane",
                column: "LanesLaneId");

            migrationBuilder.CreateIndex(
                name: "IX_LaneAvailVehicleNew_Lane_LanesLaneId",
                table: "LaneAvailVehicleNew_Lane",
                column: "LanesLaneId");

            migrationBuilder.CreateIndex(
                name: "IX_LaneAvailVehicleVehicleType_VehicleTypesVehicleTypeId",
                table: "LaneAvailVehicleVehicleType",
                column: "VehicleTypesVehicleTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_New_Appointment_ctr_id",
                table: "New_Appointment",
                column: "ctr_id");

            migrationBuilder.CreateIndex(
                name: "IX_New_Appointment_insp_id",
                table: "New_Appointment",
                column: "insp_id");

            migrationBuilder.CreateIndex(
                name: "IX_New_Appointment_lane_id",
                table: "New_Appointment",
                column: "lane_id");

            migrationBuilder.CreateIndex(
                name: "IX_New_Appointment_lane_timeslot_id",
                table: "New_Appointment",
                column: "lane_timeslot_id");

            migrationBuilder.CreateIndex(
                name: "IX_New_Appointment_payment_id",
                table: "New_Appointment",
                column: "payment_id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_New_Appointment_user_id",
                table: "New_Appointment",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_New_Appointment_vhcl_id",
                table: "New_Appointment",
                column: "vhcl_id");

            migrationBuilder.CreateIndex(
                name: "IX_new_vehicle_vhcl_type_id",
                table: "new_vehicle",
                column: "vhcl_type_id");

            migrationBuilder.CreateIndex(
                name: "IX_payment_ctr_id",
                table: "payment",
                column: "ctr_id");

            migrationBuilder.CreateIndex(
                name: "IX_special_event_ctr_id",
                table: "special_event",
                column: "ctr_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_ctr_id",
                table: "user",
                column: "ctr_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_privilege_id",
                table: "user",
                column: "privilege_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_auth_user_id",
                table: "user_auth",
                column: "user_id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_user_group_privilege_id",
                table: "user_group",
                column: "privilege_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_in_user_group_user_grp_id",
                table: "user_in_user_group",
                column: "user_grp_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_in_user_group_user_id",
                table: "user_in_user_group",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_workday_user_id",
                table: "user_workday",
                column: "user_id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_watchlist_user_access_user_id",
                table: "watchlist_user_access",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_watchlist_user_access_watchlist_id",
                table: "watchlist_user_access",
                column: "watchlist_id");

            migrationBuilder.CreateIndex(
                name: "IX_watchlist_vehicle_vehicle_id",
                table: "watchlist_vehicle",
                column: "vehicle_id");

            migrationBuilder.CreateIndex(
                name: "IX_watchlist_vehicle_watchlist_id",
                table: "watchlist_vehicle",
                column: "watchlist_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CenterHolidayNew_Centre");

            migrationBuilder.DropTable(
                name: "dyno_timeslot");

            migrationBuilder.DropTable(
                name: "examination_schedule");

            migrationBuilder.DropTable(
                name: "examination_schedule_details");

            migrationBuilder.DropTable(
                name: "InspectionTypeForVehicleTypeVehicleType");

            migrationBuilder.DropTable(
                name: "InspectionTypeInspectionTypeForVehicleType");

            migrationBuilder.DropTable(
                name: "InspectionTypeLaneAvailInspType");

            migrationBuilder.DropTable(
                name: "LaneAvailInspTypeNew_Lane");

            migrationBuilder.DropTable(
                name: "LaneAvailVehicleNew_Lane");

            migrationBuilder.DropTable(
                name: "LaneAvailVehicleVehicleType");

            migrationBuilder.DropTable(
                name: "New_Appointment");

            migrationBuilder.DropTable(
                name: "special_event");

            migrationBuilder.DropTable(
                name: "user_in_user_group");

            migrationBuilder.DropTable(
                name: "user_workday");

            migrationBuilder.DropTable(
                name: "watchlist_user_access");

            migrationBuilder.DropTable(
                name: "watchlist_vehicle");

            migrationBuilder.DropTable(
                name: "centre_holiday");

            migrationBuilder.DropTable(
                name: "vehicle_type_for_insp_type");

            migrationBuilder.DropTable(
                name: "lane_avail_insp_type");

            migrationBuilder.DropTable(
                name: "lane_avail_vehicle");

            migrationBuilder.DropTable(
                name: "LaneTimeslot");

            migrationBuilder.DropTable(
                name: "inspection");

            migrationBuilder.DropTable(
                name: "payment");

            migrationBuilder.DropTable(
                name: "user_auth");

            migrationBuilder.DropTable(
                name: "user_group");

            migrationBuilder.DropTable(
                name: "new_watchlist");

            migrationBuilder.DropTable(
                name: "inspection_type");

            migrationBuilder.DropTable(
                name: "lane");

            migrationBuilder.DropTable(
                name: "new_vehicle");

            migrationBuilder.DropTable(
                name: "test");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropTable(
                name: "station");

            migrationBuilder.DropTable(
                name: "vehicle_type");

            migrationBuilder.DropTable(
                name: "New_centre");

            migrationBuilder.DropTable(
                name: "user_privilege");
        }
    }
}
