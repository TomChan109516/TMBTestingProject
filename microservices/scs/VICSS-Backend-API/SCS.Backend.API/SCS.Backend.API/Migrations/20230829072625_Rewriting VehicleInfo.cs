using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class RewritingVehicleInfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Centers",
                columns: table => new
                {
                    CTR_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CTR_Id = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    CTR_Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Centers", x => x.CTR_Key);
                });

            migrationBuilder.CreateTable(
                name: "Exams",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExamCode = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    ExamName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IsPrimary = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exams", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "lanes",
                columns: table => new
                {
                    LaneId = table.Column<int>(type: "int", nullable: false),
                    laneType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Floor = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lanes", x => x.LaneId);
                });

            migrationBuilder.CreateTable(
                name: "VehicleClasses",
                columns: table => new
                {
                    VehicleClassId = table.Column<int>(type: "int", nullable: false),
                    VehicleClassName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicleClasses", x => x.VehicleClassId);
                });

            migrationBuilder.CreateTable(
                name: "Logins",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    CTR_Key = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logins", x => x.UserID);
                    table.ForeignKey(
                        name: "FK_Logins_Centers_CTR_Key",
                        column: x => x.CTR_Key,
                        principalTable: "Centers",
                        principalColumn: "CTR_Key",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CenterExamCodes",
                columns: table => new
                {
                    CentersCTR_Key = table.Column<int>(type: "int", nullable: false),
                    ExamsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterExamCodes", x => new { x.CentersCTR_Key, x.ExamsId });
                    table.ForeignKey(
                        name: "FK_CenterExamCodes_Centers_CentersCTR_Key",
                        column: x => x.CentersCTR_Key,
                        principalTable: "Centers",
                        principalColumn: "CTR_Key",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CenterExamCodes_Exams_ExamsId",
                        column: x => x.ExamsId,
                        principalTable: "Exams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VehicleInfo",
                columns: table => new
                {
                    VehicleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppointmentNumber = table.Column<long>(type: "bigint", nullable: true),
                    RegMark = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ChassisNumber = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PGVWeight = table.Column<double>(type: "float", nullable: true),
                    Make = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SeatCapacity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EngineNumber = table.Column<int>(type: "int", nullable: true),
                    VICO = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ModelCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LicenceExpiry = table.Column<DateTime>(type: "datetime2", nullable: true),
                    TANumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FloatName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InspectionOrder = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CENumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LantauVehicle = table.Column<bool>(type: "bit", nullable: true),
                    Attribute = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DocNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CancelReason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastUpdated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    VehicleClassId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehicleInfo", x => x.VehicleId);
                    table.ForeignKey(
                        name: "FK_VehicleInfo_VehicleClasses_VehicleClassId",
                        column: x => x.VehicleClassId,
                        principalTable: "VehicleClasses",
                        principalColumn: "VehicleClassId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Appointments",
                columns: table => new
                {
                    AppointmentNumber = table.Column<long>(type: "bigint", nullable: false),
                    CentreCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrimaryExamCode = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FreeOfCharge = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExamFee = table.Column<double>(type: "float", nullable: false),
                    FeeWaiver = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContactPerson = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Lane = table.Column<int>(type: "int", nullable: false),
                    Time = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SupplementaryExamCode = table.Column<int>(type: "int", nullable: true),
                    ContactNumber = table.Column<long>(type: "bigint", nullable: true),
                    VehicleId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointments", x => x.AppointmentNumber);
                    table.ForeignKey(
                        name: "FK_Appointments_VehicleInfo_VehicleId",
                        column: x => x.VehicleId,
                        principalTable: "VehicleInfo",
                        principalColumn: "VehicleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_VehicleId",
                table: "Appointments",
                column: "VehicleId");

            migrationBuilder.CreateIndex(
                name: "IX_CenterExamCodes_ExamsId",
                table: "CenterExamCodes",
                column: "ExamsId");

            migrationBuilder.CreateIndex(
                name: "IX_Centers_CTR_Id",
                table: "Centers",
                column: "CTR_Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Exams_ExamCode",
                table: "Exams",
                column: "ExamCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Logins_CTR_Key",
                table: "Logins",
                column: "CTR_Key");

            migrationBuilder.CreateIndex(
                name: "IX_VehicleInfo_RegMark_ChassisNumber_VehicleClassId",
                table: "VehicleInfo",
                columns: new[] { "RegMark", "ChassisNumber", "VehicleClassId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VehicleInfo_VehicleClassId",
                table: "VehicleInfo",
                column: "VehicleClassId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Appointments");

            migrationBuilder.DropTable(
                name: "CenterExamCodes");

            migrationBuilder.DropTable(
                name: "lanes");

            migrationBuilder.DropTable(
                name: "Logins");

            migrationBuilder.DropTable(
                name: "VehicleInfo");

            migrationBuilder.DropTable(
                name: "Exams");

            migrationBuilder.DropTable(
                name: "Centers");

            migrationBuilder.DropTable(
                name: "VehicleClasses");
        }
    }
}
