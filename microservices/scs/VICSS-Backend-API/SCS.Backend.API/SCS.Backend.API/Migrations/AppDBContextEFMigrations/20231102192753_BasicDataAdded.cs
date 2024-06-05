using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class BasicDataAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "New_centre",
                columns: new[] { "id", "ctr_addr", "ctr_begin_date", "ctr_chi_addr", "ctr_chi_name", "ctr_end_date", "ctr_fri_oprt_time_end", "ctr_fri_oprt_time_start", "ctr_mon_oprt_time_end", "ctr_mon_oprt_time_start", "ctr_name", "ctr_phone1", "ctr_phone2", "ctr_sat_oprt_time_end", "ctr_sat_oprt_time_start", "ctr_sun_oprt_time_end", "ctr_sun_oprt_time_start", "ctr_thu_oprt_time_end", "ctr_thu_oprt_time_start", "ctr_tue_oprt_time_end", "ctr_tue_oprt_time_start", "ctr_wed_oprt_time_end", "ctr_wed_oprt_time_start", "last_rec_txn_datetime", "last_rec_txn_type_code", "last_rec_txn_user_id" },
                values: new object[,]
                {
                    { "CTB", "TBD", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(239), "TBD", "Cavin BAY VEHICLE EXAMINATION CENTRE", new DateTime(2024, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(240), "1700", "1000", "1700", "1000", "Cavin BAY VEHICLE EXAMINATION CENTRE", "123456789", "123456789", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(242), "I", "Test" },
                    { "SKC", "TBD", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(228), "TBD", "Haivan BAY VEHICLE EXAMINATION CENTRE", new DateTime(2024, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(228), "1700", "1000", "1700", "1000", "Haivan BAY VEHICLE EXAMINATION CENTRE", "123456789", "123456789", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(231), "I", "Test" },
                    { "TKW", "TBD", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(232), "TBD", "SK-Yuhan BAY VEHICLE EXAMINATION CENTRE", new DateTime(2024, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(233), "1700", "1000", "1700", "1000", "SK-Yuhan BAY VEHICLE EXAMINATION CENTRE", "123456789", "123456789", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(237), "I", "Test" },
                    { "TY1", "TBD", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(176), "TBD", "KOWLOON BAY VEHICLE EXAMINATION CENTRE", new DateTime(2024, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(194), "1700", "1000", "1700", "1000", "KOWLOON BAY VEHICLE EXAMINATION CENTRE", "123456789", "123456789", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(208), "I", "Test" },
                    { "TY2", "TBD", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(215), "TBD", "TSINGI-YI BAY VEHICLE EXAMINATION CENTRE", new DateTime(2024, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(216), "1700", "1000", "1700", "1000", "TSINGI-YI BAY VEHICLE EXAMINATION CENTRE", "123456789", "123456789", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(220), "I", "Test" },
                    { "TYG", "TBD", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(222), "TBD", "TSINGI-Yuhan BAY VEHICLE EXAMINATION CENTRE", new DateTime(2024, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(223), "1700", "1000", "1700", "1000", "TSINGI-Yuhan BAY VEHICLE EXAMINATION CENTRE", "123456789", "123456789", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", "1700", "1000", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(226), "I", "Test" }
                });

            migrationBuilder.InsertData(
                table: "centre_holiday",
                columns: new[] { "id", "all_day_hdy", "ctr_id", "hdy_chi_name", "hdy_date", "hdy_end_time", "hdy_name", "hdy_start_time", "last_rec_txn_datetime", "last_rec_txn_type_code", "last_rec_txn_user_id" },
                values: new object[,]
                {
                    { "384f9db6-0bd5-487c-afde-9299d0c5f70c", "Y", "TY1", "TBD", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1067), new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1068), "TBD", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1068), new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(1069), "I", "Test" },
                    { "9a9544c4-732c-4fec-bc83-981211ae1b42", "Y", "TY1", "TBD", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1057), new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1059), "TBD", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1058), new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(1060), "I", "Test" },
                    { "f795a9a0-511d-405b-aaba-78c7686eec93", "Y", "TY1", "TBD", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1090), new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1091), "TBD", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1091), new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(1092), "I", "Test" }
                });

            migrationBuilder.InsertData(
                table: "dyno_timeslot",
                columns: new[] { "id", "capacity", "dyno_room_id", "start", "end", "exam_schd_desp" },
                values: new object[,]
                {
                    { "0c3b16dc-1af2-4f1a-af0b-0f4329a6182b", 10, "DynoRoom2", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1013), new DateTime(2023, 11, 3, 3, 27, 52, 437, DateTimeKind.Utc).AddTicks(1013), "TBD" },
                    { "13d8b4f4-6710-4a5d-83c8-e08bc3180150", 10, "DynoRoom1", new DateTime(2023, 11, 2, 19, 27, 52, 437, DateTimeKind.Utc).AddTicks(1001), new DateTime(2023, 11, 3, 3, 27, 52, 437, DateTimeKind.Utc).AddTicks(1002), "TBD" }
                });

            migrationBuilder.InsertData(
                table: "user_privilege",
                columns: new[] { "id", "last_rec_txn_datetime", "last_rec_txn_type_code", "last_rec_txn_user_id", "privilege_desp", "privilege_level" },
                values: new object[,]
                {
                    { "APPT-AMND", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(690), "I", "Test", "Amend appointment", 1 },
                    { "APPT-AUTH-1", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(684), "I", "Test", "Authorize bypass of validation rule", 1 },
                    { "APPT-AUTH-2", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(688), "I", "Test", "Authorize bypass of validation rule", 2 },
                    { "APPT-BTCH-RSCHD", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(691), "I", "Test", "Batch reschedule appointment", 1 },
                    { "APPT-CNCL", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(693), "I", "Test", "Cancel appointment", 1 },
                    { "APPT-CNCL-FEE-WVE", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(811), "I", "Test", "Cancel Fee Waiver of Appointment", 1 },
                    { "APPT-CRE", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(694), "I", "Test", "Create appointment", 1 },
                    { "APPT-DEL", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(696), "I", "Test", "Delete appointment", 1 },
                    { "APPT-DRFT-DEL", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(698), "I", "Test", "Delete draft appointment to release temp-hold", 1 },
                    { "APPT-LANE-RALCT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(701), "I", "Test", "Lane reallocation", 1 },
                    { "APPT-RLS-TMSLT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(703), "I", "Test", "Release held timeslot for cancelled appointment", 1 },
                    { "APPT-RSCHD", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(704), "I", "Test", "Reschedule appointment", 1 },
                    { "APPT-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(714), "I", "Test", "Search and view appointment detail", 1 },
                    { "ASSIGN-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(858), "I", "Test", "ASSIGN-MNT", 1 },
                    { "CTR-BI-TMTBL-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(716), "I", "Test", "Maintain examination schedule for taxi BI", 1 },
                    { "CTR-EXAM-TMTBL-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(718), "I", "Test", "Maintain examination schedule", 1 },
                    { "CTR-EXAM-TMTBL-RSRV-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(719), "I", "Test", "Maintain reservations of exam schedule", 1 },
                    { "CTR-LANE-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(729), "I", "Test", "Maintain inspection lanes", 1 },
                    { "CTR-SPCL-EVNT-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(731), "I", "Test", "Maintain special event rescheduling arrangement", 1 },
                    { "GNRL-LGN-CTR", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(812), "I", "Test", "Login to Specific Centre", 1 },
                    { "INSP-ADHOC-AMND", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(814), "I", "Test", "Amend VV / MPV inspection", 1 },
                    { "INSP-ADHOC-CRE", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(739), "I", "Test", "Input VV / MPV inspection", 1 },
                    { "INSP-ADHOC-DEL", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(816), "I", "Test", "Delete VV / MPV inspection", 1 },
                    { "INSP-AMND", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(756), "I", "Test", "Amend inspection result", 1 },
                    { "INSP-BTCH-RSLT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(757), "I", "Test", "Batch input inspection overall result", 1 },
                    { "INSP-CERT-DSPCH", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(759), "I", "Test", "Dispatch certificate", 1 },
                    { "INSP-CERT-ISS", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(761), "I", "Test", "Issue certificates and documents to an inspection", 1 },
                    { "INSP-CRE", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(762), "I", "Test", "Input inspection result", 1 },
                    { "INSP-CRE-AMND-HIST", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(801), "I", "Test", "Create / amend history inspection result (over 7 days)", 1 },
                    { "INSP-FLR-MGT-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(849), "I", "Test", "View floor management", 1 },
                    { "INSP-RVRT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(803), "I", "Test", "Revert inspection result", 1 },
                    { "INSP-UPD-COF-EXP", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(764), "I", "Test", "Update COF Expiry Date", 1 },
                    { "INSP-VHCL-SYNC", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(850), "I", "Test", "Synchronize vehicle particulars to inspection result", 1 },
                    { "INSP-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(777), "I", "Test", "View workload list", 1 },
                    { "INSP-WL-EXTRC", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(780), "I", "Test", "Extract data", 1 },
                    { "INSP-WL-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(782), "I", "Test", "View workload list", 1 },
                    { "PAY-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(833), "I", "Test", "Manage payment", 1 },
                    { "PAY-RCNN-RPT-EXPT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(836), "I", "Test", "Export payment reconciliation report", 1 },
                    { "PAY-SMRY-RPT-EXPT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(834), "I", "Test", "Export payment summary report", 1 },
                    { "RC-DRAW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(840), "I", "Test", "Random check draw", 1 },
                    { "RC-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(838), "I", "Test", "Maintain random check configuration", 1 },
                    { "RC-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(829), "I", "Test", "View random check", 1 },
                    { "REPO-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(783), "I", "Test", "Maintain data repository", 1 },
                    { "REPO-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(785), "I", "Test", "Search and view data repository", 1 },
                    { "RPT-MGT-001", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(787), "I", "Test", "Daily New Appointment List", 1 },
                    { "RPT-MGT-002", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(789), "I", "Test", "Daily Registration Log", 1 },
                    { "RPT-MGT-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(817), "I", "Test", "Management Reports", 1 },
                    { "RPT-RSLT-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(819), "I", "Test", "Vehicle Exam Result Reports", 1 },
                    { "RPT-SMRY-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(821), "I", "Test", "Report Summary", 1 },
                    { "SYS-BJ-MMT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(842), "I", "Test", "Maintain batch job", 1 },
                    { "SYS-CFG-MMT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(843), "I", "Test", "Maintain system configuration", 1 },
                    { "SYS-INFO-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(823), "I", "Test", "System Information", 1 },
                    { "SYS-ROLE-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(860), "I", "Test", "Maintain roles", 1 },
                    { "SYS-UPD-HCP-VHCL", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(831), "I", "Test", "Upload HCP Vehicle", 1 },
                    { "SYS-USER-ACCT-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(791), "I", "Test", "Maintain user accounts", 1 },
                    { "VHCL-ALRTLST-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(805), "I", "Test", "Maintain vehicle alert list (for own centre)", 1 },
                    { "VHCL-APRV-AMND-CHG-EXAM-FEE", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(792), "I", "Test", "Approve vehicle amendment that will cause change of exam fee for any active appointment up to 7 days ago (exclude current or future appointments)", 1 },
                    { "VHCL-ATTRIBUTE-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(853), "I", "Test", "Maintain Vehicle Attribute ", 1 },
                    { "VHCL-MERGE", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(852), "I", "Test", "Merge vehicle", 1 },
                    { "VHCL-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(794), "I", "Test", "Maintain vehicle entry (non-VALID vehicle)", 1 },
                    { "VHCL-MNT-MPV", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(828), "I", "Test", "Maintain vehicle entry (MPV)", 1 },
                    { "VHCL-MNT-NV", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(825), "I", "Test", "Maintain vehicle entry (non-VALID vehicle)", 1 },
                    { "VHCL-MNT-VV", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(826), "I", "Test", "Maintain vehicle entry (VV)", 1 },
                    { "VHCL-MSG-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(855), "I", "Test", "Edit Vehicle Message", 1 },
                    { "VHCL-VALID-SYNC", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(796), "I", "Test", "Synchronize VALID vehicle particulars", 1 },
                    { "VHCL-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(797), "I", "Test", "View vehicle detail", 1 },
                    { "VHCL-WHLST-MNT", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(800), "I", "Test", "Maintain vehicle watch and alert lists", 1 },
                    { "VHCL-WHLST-VIEW", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(807), "I", "Test", "Shows whether vehicle is in alert list under current centre", 1 },
                    { "VHCL-WHLST-VIEW-ALL-CTR", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(808), "I", "Test", "Shows whether vehicle is in alert list for all centres", 1 },
                    { "VV-MPV", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(857), "I", "Test", "VV-MPV", 1 }
                });

            migrationBuilder.InsertData(
                table: "lane",
                columns: new[] { "id", "ctr_id", "default_capacity", "lane_description", "lane_actv_ind", "last_rec_txn_datetime", "last_rec_txn_type_code", "last_rec_txn_user_id", "lane_name" },
                values: new object[,]
                {
                    { "1", "TY1", 12, "Lane 1", "Y", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(909), "I", "Test", "01" },
                    { "2", "TY2", 12, "Lane 2", "Y", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(913), "I", "Test", "02" },
                    { "cc84ceef-4d61-4079-aa25-864af6198fde", "SKC", 12, "Lane 3", "Y", new DateTime(2023, 11, 3, 0, 57, 52, 437, DateTimeKind.Local).AddTicks(965), "I", "Test", "03" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "New_centre",
                keyColumn: "id",
                keyValue: "CTB");

            migrationBuilder.DeleteData(
                table: "New_centre",
                keyColumn: "id",
                keyValue: "TKW");

            migrationBuilder.DeleteData(
                table: "New_centre",
                keyColumn: "id",
                keyValue: "TYG");

            migrationBuilder.DeleteData(
                table: "centre_holiday",
                keyColumn: "id",
                keyValue: "384f9db6-0bd5-487c-afde-9299d0c5f70c");

            migrationBuilder.DeleteData(
                table: "centre_holiday",
                keyColumn: "id",
                keyValue: "9a9544c4-732c-4fec-bc83-981211ae1b42");

            migrationBuilder.DeleteData(
                table: "centre_holiday",
                keyColumn: "id",
                keyValue: "f795a9a0-511d-405b-aaba-78c7686eec93");

            migrationBuilder.DeleteData(
                table: "dyno_timeslot",
                keyColumn: "id",
                keyValue: "0c3b16dc-1af2-4f1a-af0b-0f4329a6182b");

            migrationBuilder.DeleteData(
                table: "dyno_timeslot",
                keyColumn: "id",
                keyValue: "13d8b4f4-6710-4a5d-83c8-e08bc3180150");

            migrationBuilder.DeleteData(
                table: "lane",
                keyColumn: "id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "lane",
                keyColumn: "id",
                keyValue: "2");

            migrationBuilder.DeleteData(
                table: "lane",
                keyColumn: "id",
                keyValue: "cc84ceef-4d61-4079-aa25-864af6198fde");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-AMND");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-AUTH-1");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-AUTH-2");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-BTCH-RSCHD");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-CNCL");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-CNCL-FEE-WVE");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-CRE");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-DEL");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-DRFT-DEL");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-LANE-RALCT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-RLS-TMSLT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-RSCHD");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "APPT-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "ASSIGN-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "CTR-BI-TMTBL-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "CTR-EXAM-TMTBL-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "CTR-EXAM-TMTBL-RSRV-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "CTR-LANE-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "CTR-SPCL-EVNT-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "GNRL-LGN-CTR");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-ADHOC-AMND");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-ADHOC-CRE");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-ADHOC-DEL");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-AMND");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-BTCH-RSLT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-CERT-DSPCH");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-CERT-ISS");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-CRE");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-CRE-AMND-HIST");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-FLR-MGT-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-RVRT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-UPD-COF-EXP");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-VHCL-SYNC");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-WL-EXTRC");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "INSP-WL-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "PAY-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "PAY-RCNN-RPT-EXPT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "PAY-SMRY-RPT-EXPT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "RC-DRAW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "RC-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "RC-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "REPO-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "REPO-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "RPT-MGT-001");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "RPT-MGT-002");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "RPT-MGT-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "RPT-RSLT-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "RPT-SMRY-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "SYS-BJ-MMT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "SYS-CFG-MMT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "SYS-INFO-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "SYS-ROLE-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "SYS-UPD-HCP-VHCL");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "SYS-USER-ACCT-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-ALRTLST-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-APRV-AMND-CHG-EXAM-FEE");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-ATTRIBUTE-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-MERGE");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-MNT-MPV");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-MNT-NV");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-MNT-VV");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-MSG-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-VALID-SYNC");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-WHLST-MNT");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-WHLST-VIEW");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VHCL-WHLST-VIEW-ALL-CTR");

            migrationBuilder.DeleteData(
                table: "user_privilege",
                keyColumn: "id",
                keyValue: "VV-MPV");

            migrationBuilder.DeleteData(
                table: "New_centre",
                keyColumn: "id",
                keyValue: "SKC");

            migrationBuilder.DeleteData(
                table: "New_centre",
                keyColumn: "id",
                keyValue: "TY1");

            migrationBuilder.DeleteData(
                table: "New_centre",
                keyColumn: "id",
                keyValue: "TY2");
        }
    }
}
