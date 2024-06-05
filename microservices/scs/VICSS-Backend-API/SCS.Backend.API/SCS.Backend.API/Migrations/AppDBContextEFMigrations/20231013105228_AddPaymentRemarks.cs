using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class AddPaymentRemarks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PaymentRemark",
                table: "SCS_Appointments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaymentRemark",
                table: "SCS_Appointments");
        }
    }
}
