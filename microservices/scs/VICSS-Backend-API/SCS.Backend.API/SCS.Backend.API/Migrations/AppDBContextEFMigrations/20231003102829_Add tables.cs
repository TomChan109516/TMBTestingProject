
using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCS_Backend_API.Migrations.AppDBContextEFMigrations
{
    [ExcludeFromCodeCoverage]
    /// <inheritdoc />
    public partial class Addtables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SCS_BookingChannel",
                columns: table => new
                {
                    Bk_Chnl_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bk_Chnl_Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Bk_Chnl_Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_BookingChannel", x => x.Bk_Chnl_Key);
                    table.UniqueConstraint("AK_SCS_BookingChannel_Bk_Chnl_Id", x => x.Bk_Chnl_Id);
                });

            migrationBuilder.CreateTable(
                name: "SCS_Centers",
                columns: table => new
                {
                    Ctr_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ctr_Id = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Ctr_Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_Centers", x => x.Ctr_Key);
                    table.UniqueConstraint("AK_SCS_Centers_Ctr_Id", x => x.Ctr_Id);
                });

            migrationBuilder.CreateTable(
                name: "SCS_ExamCodes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExamCode = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    ExamName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IsPrimary = table.Column<bool>(type: "bit", nullable: false),
                    ExamFee = table.Column<double>(type: "float", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_ExamCodes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SCS_ExamSlotsInformation",
                columns: table => new
                {
                    ExamSlotKey = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SlotName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Quota = table.Column<int>(type: "int", nullable: false),
                    Session = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_ExamSlotsInformation", x => x.ExamSlotKey);
                });

            migrationBuilder.CreateTable(
                name: "SCS_Lanes",
                columns: table => new
                {
                    Lane_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LaneId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LaneType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Floor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_Lanes", x => x.Lane_Key);
                    table.UniqueConstraint("AK_SCS_Lanes_LaneId", x => x.LaneId);
                });

            migrationBuilder.CreateTable(
                name: "SCS_VehicleClasses",
                columns: table => new
                {
                    VehicleClass_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VehicleClassId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    VehicleClassName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_VehicleClasses", x => x.VehicleClass_Key);
                    table.UniqueConstraint("AK_SCS_VehicleClasses_VehicleClassId", x => x.VehicleClassId);
                });

            migrationBuilder.CreateTable(
                name: "SCS_VehicleMake",
                columns: table => new
                {
                    Make_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MakeId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    MakeName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_VehicleMake", x => x.Make_Key);
                });

            migrationBuilder.CreateTable(
                name: "SCS_Logins",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Ctr_Id = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_Logins", x => x.UserID);
                    table.ForeignKey(
                        name: "FK_SCS_Logins_SCS_Centers_Ctr_Id",
                        column: x => x.Ctr_Id,
                        principalTable: "SCS_Centers",
                        principalColumn: "Ctr_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CenterExamCodes",
                columns: table => new
                {
                    CentersCtr_Key = table.Column<int>(type: "int", nullable: false),
                    ExamsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterExamCodes", x => new { x.CentersCtr_Key, x.ExamsId });
                    table.ForeignKey(
                        name: "FK_CenterExamCodes_SCS_Centers_CentersCtr_Key",
                        column: x => x.CentersCtr_Key,
                        principalTable: "SCS_Centers",
                        principalColumn: "Ctr_Key",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CenterExamCodes_SCS_ExamCodes_ExamsId",
                        column: x => x.ExamsId,
                        principalTable: "SCS_ExamCodes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SCS_SubClasses",
                columns: table => new
                {
                    VehicleSubClass_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VehicleSubClassId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    VehicleSubClassName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleClassId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_SubClasses", x => x.VehicleSubClass_Key);
                    table.ForeignKey(
                        name: "FK_SCS_SubClasses_SCS_VehicleClasses_VehicleClassId",
                        column: x => x.VehicleClassId,
                        principalTable: "SCS_VehicleClasses",
                        principalColumn: "VehicleClassId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SCS_VehicleInfo",
                columns: table => new
                {
                    Vhcl_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VhclTypeCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    VehicleId = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    RegMark = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    ChassisNumber = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
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
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    VehicleClassId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_VehicleInfo", x => x.Vhcl_Key);
                    table.UniqueConstraint("AK_SCS_VehicleInfo_VehicleId", x => x.VehicleId);
                    table.ForeignKey(
                        name: "FK_SCS_VehicleInfo_SCS_VehicleClasses_VehicleClassId",
                        column: x => x.VehicleClassId,
                        principalTable: "SCS_VehicleClasses",
                        principalColumn: "VehicleClassId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SCS_Appointments",
                columns: table => new
                {
                    Appointment_Key = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppointmentNumber = table.Column<long>(type: "bigint", nullable: false),
                    CentreCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrimaryExamCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AppointmentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FreeOfCharge = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExamFee = table.Column<double>(type: "float", nullable: false),
                    FeeWaiver = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContactPerson = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LaneId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Time = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SupplementaryExamCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactNumber = table.Column<long>(type: "bigint", nullable: true),
                    VehicleId = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    RegMark = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    ChassisNumber = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    VehicleClassId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsOverBooked = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    Appointment_Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Last_Txn_Type_Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Last_Txn_UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Result = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PaymentStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Bk_Chnl_Id = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_Appointments", x => x.Appointment_Key);
                    table.UniqueConstraint("AK_SCS_Appointments_AppointmentNumber", x => x.AppointmentNumber);
                    table.ForeignKey(
                        name: "FK_SCS_Appointments_SCS_BookingChannel_Bk_Chnl_Id",
                        column: x => x.Bk_Chnl_Id,
                        principalTable: "SCS_BookingChannel",
                        principalColumn: "Bk_Chnl_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SCS_Appointments_SCS_Lanes_LaneId",
                        column: x => x.LaneId,
                        principalTable: "SCS_Lanes",
                        principalColumn: "LaneId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SCS_Appointments_SCS_VehicleInfo_VehicleId",
                        column: x => x.VehicleId,
                        principalTable: "SCS_VehicleInfo",
                        principalColumn: "VehicleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SCS_AppointmentHistory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppointmentNumber = table.Column<long>(type: "bigint", nullable: false),
                    Appointment_Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Last_Txn_UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SCS_AppointmentHistory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SCS_AppointmentHistory_SCS_Appointments_AppointmentNumber",
                        column: x => x.AppointmentNumber,
                        principalTable: "SCS_Appointments",
                        principalColumn: "AppointmentNumber",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CenterExamCodes_ExamsId",
                table: "CenterExamCodes",
                column: "ExamsId");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_AppointmentHistory_AppointmentNumber",
                table: "SCS_AppointmentHistory",
                column: "AppointmentNumber");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_Appointments_AppointmentNumber",
                table: "SCS_Appointments",
                column: "AppointmentNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_Appointments_Bk_Chnl_Id",
                table: "SCS_Appointments",
                column: "Bk_Chnl_Id");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_Appointments_LaneId",
                table: "SCS_Appointments",
                column: "LaneId");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_Appointments_VehicleId",
                table: "SCS_Appointments",
                column: "VehicleId");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_BookingChannel_Bk_Chnl_Id",
                table: "SCS_BookingChannel",
                column: "Bk_Chnl_Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_Centers_Ctr_Id",
                table: "SCS_Centers",
                column: "Ctr_Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_ExamCodes_ExamCode",
                table: "SCS_ExamCodes",
                column: "ExamCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_Lanes_LaneId",
                table: "SCS_Lanes",
                column: "LaneId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_Logins_Ctr_Id",
                table: "SCS_Logins",
                column: "Ctr_Id");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_SubClasses_VehicleClassId",
                table: "SCS_SubClasses",
                column: "VehicleClassId");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_SubClasses_VehicleSubClassId",
                table: "SCS_SubClasses",
                column: "VehicleSubClassId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleClasses_VehicleClassId",
                table: "SCS_VehicleClasses",
                column: "VehicleClassId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleInfo_ChassisNumber",
                table: "SCS_VehicleInfo",
                column: "ChassisNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleInfo_VehicleClassId",
                table: "SCS_VehicleInfo",
                column: "VehicleClassId");

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleInfo_VehicleId",
                table: "SCS_VehicleInfo",
                column: "VehicleId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SCS_VehicleMake_MakeId",
                table: "SCS_VehicleMake",
                column: "MakeId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CenterExamCodes");

            migrationBuilder.DropTable(
                name: "SCS_AppointmentHistory");

            migrationBuilder.DropTable(
                name: "SCS_ExamSlotsInformation");

            migrationBuilder.DropTable(
                name: "SCS_Logins");

            migrationBuilder.DropTable(
                name: "SCS_SubClasses");

            migrationBuilder.DropTable(
                name: "SCS_VehicleMake");

            migrationBuilder.DropTable(
                name: "SCS_ExamCodes");

            migrationBuilder.DropTable(
                name: "SCS_Appointments");

            migrationBuilder.DropTable(
                name: "SCS_Centers");

            migrationBuilder.DropTable(
                name: "SCS_BookingChannel");

            migrationBuilder.DropTable(
                name: "SCS_Lanes");

            migrationBuilder.DropTable(
                name: "SCS_VehicleInfo");

            migrationBuilder.DropTable(
                name: "SCS_VehicleClasses");
        }
    }
}
