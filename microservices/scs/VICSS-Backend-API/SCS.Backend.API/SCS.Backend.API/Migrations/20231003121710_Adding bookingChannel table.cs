using Microsoft.EntityFrameworkCore.Migrations;
using System.Diagnostics.CodeAnalysis;

#nullable disable

namespace SCS_Backend_API.Migrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class AddingbookingChanneltable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Bk_Chnl_Id",
                table: "Appointments",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "BookingStatus",
                table: "Appointments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "BookingChannels",
                columns: table => new
                {
                    Bk_Chnl_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bk_Chnl_Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Bk_Chnl_Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingChannels", x => x.Bk_Chnl_Key);
                    table.UniqueConstraint("AK_BookingChannels_Bk_Chnl_Id", x => x.Bk_Chnl_Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_Bk_Chnl_Id",
                table: "Appointments",
                column: "Bk_Chnl_Id");

            migrationBuilder.CreateIndex(
                name: "IX_BookingChannels_Bk_Chnl_Id",
                table: "BookingChannels",
                column: "Bk_Chnl_Id",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_BookingChannels_Bk_Chnl_Id",
                table: "Appointments",
                column: "Bk_Chnl_Id",
                principalTable: "BookingChannels",
                principalColumn: "Bk_Chnl_Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_BookingChannels_Bk_Chnl_Id",
                table: "Appointments");

            migrationBuilder.DropTable(
                name: "BookingChannels");

            migrationBuilder.DropIndex(
                name: "IX_Appointments_Bk_Chnl_Id",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "Bk_Chnl_Id",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "BookingStatus",
                table: "Appointments");
        }
    }
}
