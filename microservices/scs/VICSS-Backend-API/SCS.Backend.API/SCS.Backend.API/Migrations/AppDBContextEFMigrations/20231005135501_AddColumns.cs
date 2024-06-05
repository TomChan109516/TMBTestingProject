using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class AddColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Appointment_Status",
                table: "SCS_AppointmentHistory",
                newName: "Reason");

            migrationBuilder.AddColumn<string>(
                name: "HoldTimeSlot",
                table: "SCS_Appointments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NumberOfReschedules",
                table: "SCS_Appointments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "SecurityCode",
                table: "SCS_Appointments",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<DateTime>(
                name: "AppointmentDate",
                table: "SCS_AppointmentHistory",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HoldTimeSlot",
                table: "SCS_Appointments");

            migrationBuilder.DropColumn(
                name: "NumberOfReschedules",
                table: "SCS_Appointments");

            migrationBuilder.DropColumn(
                name: "SecurityCode",
                table: "SCS_Appointments");

            migrationBuilder.DropColumn(
                name: "AppointmentDate",
                table: "SCS_AppointmentHistory");

            migrationBuilder.RenameColumn(
                name: "Reason",
                table: "SCS_AppointmentHistory",
                newName: "Appointment_Status");
        }
    }
}
