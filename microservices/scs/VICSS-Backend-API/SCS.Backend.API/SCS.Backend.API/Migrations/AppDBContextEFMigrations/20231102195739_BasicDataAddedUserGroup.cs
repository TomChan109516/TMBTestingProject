using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class BasicDataAddedUserGroup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "LaneTimeslot",
                columns: new[] { "id", "capacity", "exam_schd_desp", "lane_id", "start", "end" },
                values: new object[,]
                {
                    { "1125dd71-cadd-41f7-95b7-4223e2c82863", 15, "", "2", new DateTime(2023, 11, 2, 19, 57, 38, 601, DateTimeKind.Utc).AddTicks(3634), new DateTime(2023, 11, 3, 3, 57, 38, 601, DateTimeKind.Utc).AddTicks(3634) },
                    { "2ef6eda2-ffc0-4944-b54a-b40b5c01c728", 15, "", "cc84ceef-4d61-4079-aa25-864af6198fde", new DateTime(2023, 11, 2, 19, 57, 38, 601, DateTimeKind.Utc).AddTicks(3649), new DateTime(2023, 11, 3, 3, 57, 38, 601, DateTimeKind.Utc).AddTicks(3649) },
                    { "918bc75e-bbba-4478-8a57-8c4ebc906260", 15, "", "2", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3644), new DateTime(2023, 11, 3, 9, 27, 38, 601, DateTimeKind.Local).AddTicks(3645) },
                    { "a8982657-332d-4a39-9a0e-f26c60a046bf", 15, "", "1", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3628), new DateTime(2023, 11, 3, 9, 27, 38, 601, DateTimeKind.Local).AddTicks(3629) },
                    { "afcfa0a6-617b-4c8b-9fd1-b08077c8c437", 15, "", "cc84ceef-4d61-4079-aa25-864af6198fde", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3691), new DateTime(2023, 11, 3, 9, 27, 38, 601, DateTimeKind.Local).AddTicks(3692) },
                    { "daba5645-22dd-471f-bb3f-876ff75ef98f", 15, "", "1", new DateTime(2023, 11, 2, 19, 57, 38, 601, DateTimeKind.Utc).AddTicks(3619), new DateTime(2023, 11, 3, 3, 57, 38, 601, DateTimeKind.Utc).AddTicks(3620) }
                });

            migrationBuilder.InsertData(
                table: "user_group",
                columns: new[] { "id", "last_rec_txn_datetime", "last_rec_txn_type_code", "last_rec_txn_user_id", "privilege_id" },
                values: new object[,]
                {
                    { "APPT-DEL", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3523), "I", "Test", "APPT-AUTH-2" },
                    { "BOOK-SPRV-LVL1", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3520), "I", "Test", "APPT-AUTH-2" },
                    { "BOOK-SPRV-LVL2", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3521), "I", "Test", "APPT-AUTH-2" },
                    { "CERT-DSPCH", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3514), "I", "Test", "APPT-AUTH-2" },
                    { "CNFG-ADMIN-CTR", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3519), "I", "Test", "APPT-AUTH-2" },
                    { "CNFG-ADMIN-SYS", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3518), "I", "Test", "APPT-AUTH-2" },
                    { "CTC-CNFG-ADMIN", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3529), "I", "Test", "APPT-AUTH-2" },
                    { "CTC-MVE", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3528), "I", "Test", "APPT-AUTH-2" },
                    { "MNT-ALERT-LIST", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3525), "I", "Test", "APPT-AUTH-2" },
                    { "MNT-WHLST", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3526), "I", "Test", "APPT-AUTH-2" },
                    { "MOM-CLERICAL-STF", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3515), "I", "Test", "APPT-AUTH-2" },
                    { "MOM-IC", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3516), "I", "Test", "APPT-AUTH-2" },
                    { "MVE", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3507), "I", "Test", "APPT-AUTH-2" },
                    { "MVE-II", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3508), "I", "Test", "APPT-AUTH-2" },
                    { "OFFC-CLERICAL-STF", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3510), "I", "Test", "APPT-AUTH-2" },
                    { "OFFC-IN-CHRG", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3512), "I", "Test", "APPT-AUTH-2" },
                    { "TD-USER", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3505), "I", "Test", "APPT-AUTH-2" },
                    { "VIEW-APPT-INSP", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3527), "I", "Test", "APPT-AUTH-2" },
                    { "VT", new DateTime(2023, 11, 3, 1, 27, 38, 601, DateTimeKind.Local).AddTicks(3513), "I", "Test", "APPT-AUTH-2" }
                });

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "LaneTimeslot",
                keyColumn: "id",
                keyValue: "1125dd71-cadd-41f7-95b7-4223e2c82863");

            migrationBuilder.DeleteData(
                table: "LaneTimeslot",
                keyColumn: "id",
                keyValue: "2ef6eda2-ffc0-4944-b54a-b40b5c01c728");

            migrationBuilder.DeleteData(
                table: "LaneTimeslot",
                keyColumn: "id",
                keyValue: "918bc75e-bbba-4478-8a57-8c4ebc906260");

            migrationBuilder.DeleteData(
                table: "LaneTimeslot",
                keyColumn: "id",
                keyValue: "a8982657-332d-4a39-9a0e-f26c60a046bf");

            migrationBuilder.DeleteData(
                table: "LaneTimeslot",
                keyColumn: "id",
                keyValue: "afcfa0a6-617b-4c8b-9fd1-b08077c8c437");

            migrationBuilder.DeleteData(
                table: "LaneTimeslot",
                keyColumn: "id",
                keyValue: "daba5645-22dd-471f-bb3f-876ff75ef98f");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "APPT-DEL");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "BOOK-SPRV-LVL1");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "BOOK-SPRV-LVL2");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "CERT-DSPCH");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "CNFG-ADMIN-CTR");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "CNFG-ADMIN-SYS");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "CTC-CNFG-ADMIN");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "CTC-MVE");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "MNT-ALERT-LIST");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "MNT-WHLST");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "MOM-CLERICAL-STF");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "MOM-IC");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "MVE");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "MVE-II");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "OFFC-CLERICAL-STF");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "OFFC-IN-CHRG");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "TD-USER");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "VIEW-APPT-INSP");

            migrationBuilder.DeleteData(
                table: "user_group",
                keyColumn: "id",
                keyValue: "VT");

        }
    }
}
