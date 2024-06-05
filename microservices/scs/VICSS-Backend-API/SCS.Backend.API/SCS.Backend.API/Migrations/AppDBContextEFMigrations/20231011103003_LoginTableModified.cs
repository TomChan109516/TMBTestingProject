using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class LoginTableModified : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "LAST_REC_DEL_DATE",
                table: "SCS_Logins",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LAST_REC_TXN_DATE",
                table: "SCS_Logins",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "LAST_REC_TXN_TYPE_CODE",
                table: "SCS_Logins",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LAST_REC_TXN_USER_ID",
                table: "SCS_Logins",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LAST_REC_DEL_DATE",
                table: "SCS_Logins");

            migrationBuilder.DropColumn(
                name: "LAST_REC_TXN_DATE",
                table: "SCS_Logins");

            migrationBuilder.DropColumn(
                name: "LAST_REC_TXN_TYPE_CODE",
                table: "SCS_Logins");

            migrationBuilder.DropColumn(
                name: "LAST_REC_TXN_USER_ID",
                table: "SCS_Logins");
        }
    }
}
