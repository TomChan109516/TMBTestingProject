using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.Constants;
using SCS_Backend_API.Models;
using SCS_Backend_API.Models1;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Data
{
    [ExcludeFromCodeCoverage]
    public class DbInitializer
    {
        private readonly ModelBuilder modelBuilder;

        public DbInitializer(ModelBuilder modelBuilder)
        {
            this.modelBuilder = modelBuilder;
        }

        public void Seed()
        {
            modelBuilder.Entity<New_Centre>().HasData(
                new New_Centre()
                {
                    CenterId = "TY1",
                    CenterName = "KOWLOON BAY VEHICLE EXAMINATION CENTRE",
                    CenterChineseName = "KOWLOON BAY VEHICLE EXAMINATION CENTRE",
                    CenterAddress = "TBD",
                    CenterChineseAddress = "TBD",
                    CenterPhone1 = "123456789",
                    CenterPhone2 = "123456789",
                    CenterBeginDate = DateTime.Now,
                    CenterEndDate = DateTime.Now.AddYears(1),
                    CenterMondayOprtnTimeStart = "1000",
                    CenterMondayOprtnTimeEnd = "1700",
                    CenterTuesdayOprtnTimeStart = "1000",
                    CenterTuesdayOprtnTimeEnd = "1700",
                    CenterWednesdayOprtnTimeStart = "1000",
                    CenterWednesdayOprtnTimeEnd = "1700",
                    CenterThrusdayOprtnTimeStart = "1000",
                    CenterThrusdayOprtnTimeEnd = "1700",
                    CenterFridayOprtnTimeStart = "1000",
                    CenterFridayOprtnTimeEnd = "1700",
                    CenterSaturdayOprtnTimeStart = "1000",
                    CenterSaturdayOprtnTimeEnd = "1700",
                    CenterSundayOprtnTimeStart = "1000",
                    CenterSundayOprtnTimeEnd = "1700",
                    LastRecordTransactionDateTime = DateTime.UtcNow,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",

                },
                new New_Centre()
                {
                    CenterId = "TY2",
                    CenterName = "TSINGI-YI BAY VEHICLE EXAMINATION CENTRE",
                    CenterChineseName = "TSINGI-YI BAY VEHICLE EXAMINATION CENTRE",
                    CenterAddress = "TBD",
                    CenterChineseAddress = "TBD",
                    CenterPhone1 = "123456789",
                    CenterPhone2 = "123456789",
                    CenterBeginDate = DateTime.Now,
                    CenterEndDate = DateTime.Now.AddYears(1),
                    CenterMondayOprtnTimeStart = "1000",
                    CenterMondayOprtnTimeEnd = "1700",
                    CenterTuesdayOprtnTimeStart = "1000",
                    CenterTuesdayOprtnTimeEnd = "1700",
                    CenterWednesdayOprtnTimeStart = "1000",
                    CenterWednesdayOprtnTimeEnd = "1700",
                    CenterThrusdayOprtnTimeStart = "1000",
                    CenterThrusdayOprtnTimeEnd = "1700",
                    CenterFridayOprtnTimeStart = "1000",
                    CenterFridayOprtnTimeEnd = "1700",
                    CenterSaturdayOprtnTimeStart = "1000",
                    CenterSaturdayOprtnTimeEnd = "1700",
                    CenterSundayOprtnTimeStart = "1000",
                    CenterSundayOprtnTimeEnd = "1700",
                    LastRecordTransactionDateTime = DateTime.UtcNow,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },
                new New_Centre()
                {
                    CenterId = "TYG",
                    CenterName = "TSINGI-Yuhan BAY VEHICLE EXAMINATION CENTRE",
                    CenterChineseName = "TSINGI-Yuhan BAY VEHICLE EXAMINATION CENTRE",
                    CenterAddress = "TBD",
                    CenterChineseAddress = "TBD",
                    CenterPhone1 = "123456789",
                    CenterPhone2 = "123456789",
                    CenterBeginDate = DateTime.Now,
                    CenterEndDate = DateTime.Now.AddYears(1),
                    CenterMondayOprtnTimeStart = "1000",
                    CenterMondayOprtnTimeEnd = "1700",
                    CenterTuesdayOprtnTimeStart = "1000",
                    CenterTuesdayOprtnTimeEnd = "1700",
                    CenterWednesdayOprtnTimeStart = "1000",
                    CenterWednesdayOprtnTimeEnd = "1700",
                    CenterThrusdayOprtnTimeStart = "1000",
                    CenterThrusdayOprtnTimeEnd = "1700",
                    CenterFridayOprtnTimeStart = "1000",
                    CenterFridayOprtnTimeEnd = "1700",
                    CenterSaturdayOprtnTimeStart = "1000",
                    CenterSaturdayOprtnTimeEnd = "1700",
                    CenterSundayOprtnTimeStart = "1000",
                    CenterSundayOprtnTimeEnd = "1700",
                    LastRecordTransactionDateTime = DateTime.UtcNow,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },
                new New_Centre()
                {
                    CenterId = "SKC",
                    CenterName = "Haivan BAY VEHICLE EXAMINATION CENTRE",
                    CenterChineseName = "Haivan BAY VEHICLE EXAMINATION CENTRE",
                    CenterAddress = "TBD",
                    CenterChineseAddress = "TBD",
                    CenterPhone1 = "123456789",
                    CenterPhone2 = "123456789",
                    CenterBeginDate = DateTime.Now,
                    CenterEndDate = DateTime.Now.AddYears(1),
                    CenterMondayOprtnTimeStart = "1000",
                    CenterMondayOprtnTimeEnd = "1700",
                    CenterTuesdayOprtnTimeStart = "1000",
                    CenterTuesdayOprtnTimeEnd = "1700",
                    CenterWednesdayOprtnTimeStart = "1000",
                    CenterWednesdayOprtnTimeEnd = "1700",
                    CenterThrusdayOprtnTimeStart = "1000",
                    CenterThrusdayOprtnTimeEnd = "1700",
                    CenterFridayOprtnTimeStart = "1000",
                    CenterFridayOprtnTimeEnd = "1700",
                    CenterSaturdayOprtnTimeStart = "1000",
                    CenterSaturdayOprtnTimeEnd = "1700",
                    CenterSundayOprtnTimeStart = "1000",
                    CenterSundayOprtnTimeEnd = "1700",
                    LastRecordTransactionDateTime = DateTime.UtcNow,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },
                new New_Centre()
                {
                    CenterId = "TKW",
                    CenterName = "SK-Yuhan BAY VEHICLE EXAMINATION CENTRE",
                    CenterChineseName = "SK-Yuhan BAY VEHICLE EXAMINATION CENTRE",
                    CenterAddress = "TBD",
                    CenterChineseAddress = "TBD",
                    CenterPhone1 = "123456789",
                    CenterPhone2 = "123456789",
                    CenterBeginDate = DateTime.Now,
                    CenterEndDate = DateTime.Now.AddYears(1),
                    CenterMondayOprtnTimeStart = "1000",
                    CenterMondayOprtnTimeEnd = "1700",
                    CenterTuesdayOprtnTimeStart = "1000",
                    CenterTuesdayOprtnTimeEnd = "1700",
                    CenterWednesdayOprtnTimeStart = "1000",
                    CenterWednesdayOprtnTimeEnd = "1700",
                    CenterThrusdayOprtnTimeStart = "1000",
                    CenterThrusdayOprtnTimeEnd = "1700",
                    CenterFridayOprtnTimeStart = "1000",
                    CenterFridayOprtnTimeEnd = "1700",
                    CenterSaturdayOprtnTimeStart = "1000",
                    CenterSaturdayOprtnTimeEnd = "1700",
                    CenterSundayOprtnTimeStart = "1000",
                    CenterSundayOprtnTimeEnd = "1700",
                    LastRecordTransactionDateTime = DateTime.UtcNow,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },
                new New_Centre()
                {
                    CenterId = "CTB",
                    CenterName = "Cavin BAY VEHICLE EXAMINATION CENTRE",
                    CenterChineseName = "Cavin BAY VEHICLE EXAMINATION CENTRE",
                    CenterAddress = "TBD",
                    CenterChineseAddress = "TBD",
                    CenterPhone1 = "123456789",
                    CenterPhone2 = "123456789",
                    CenterBeginDate = DateTime.Now,
                    CenterEndDate = DateTime.Now.AddYears(1),
                    CenterMondayOprtnTimeStart = "1000",
                    CenterMondayOprtnTimeEnd = "1700",
                    CenterTuesdayOprtnTimeStart = "1000",
                    CenterTuesdayOprtnTimeEnd = "1700",
                    CenterWednesdayOprtnTimeStart = "1000",
                    CenterWednesdayOprtnTimeEnd = "1700",
                    CenterThrusdayOprtnTimeStart = "1000",
                    CenterThrusdayOprtnTimeEnd = "1700",
                    CenterFridayOprtnTimeStart = "1000",
                    CenterFridayOprtnTimeEnd = "1700",
                    CenterSaturdayOprtnTimeStart = "1000",
                    CenterSaturdayOprtnTimeEnd = "1700",
                    CenterSundayOprtnTimeStart = "1000",
                    CenterSundayOprtnTimeEnd = "1700",
                    LastRecordTransactionDateTime = DateTime.UtcNow,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                }
                );




            modelBuilder.Entity<UserPrivilege>().HasData(
                 new UserPrivilege()
                 {
                     PrivilegeId = "APPT-AUTH-1",
                     PrivilegeLevel = 1,
                     PrivilegeDescription = "Authorize bypass of validation rule",
                     LastRecordTransactionDateTime = DateTime.Now,
                     LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                     LastRecordTransactionUserId = "Test",
                 },
                
                new UserPrivilege()
                {
                    PrivilegeId = "APPT-AUTH-2",
                    PrivilegeLevel = 2,
                    PrivilegeDescription = "Authorize bypass of validation rule",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-AMND",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Amend appointment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-BTCH-RSCHD",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Batch reschedule appointment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },                                

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-CNCL",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Cancel appointment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-CRE",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Create appointment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-DEL",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Delete appointment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-DRFT-DEL",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Delete draft appointment to release temp-hold",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-LANE-RALCT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Lane reallocation",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-RLS-TMSLT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Release held timeslot for cancelled appointment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-RSCHD",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Reschedule appointment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Search and view appointment detail",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "CTR-BI-TMTBL-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain examination schedule for taxi BI",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "CTR-EXAM-TMTBL-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain examination schedule",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "CTR-EXAM-TMTBL-RSRV-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain reservations of exam schedule",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "CTR-LANE-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain inspection lanes",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "CTR-SPCL-EVNT-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain special event rescheduling arrangement",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },


                new UserPrivilege()
                {
                    PrivilegeId = "INSP-ADHOC-CRE",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Input VV / MPV inspection",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-AMND",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Amend inspection result",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-BTCH-RSLT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Batch input inspection overall result",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-CERT-DSPCH",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Dispatch certificate",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },                
                new UserPrivilege()
                {
                    PrivilegeId = "INSP-CERT-ISS",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Issue certificates and documents to an inspection",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-CRE",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Input inspection result",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-UPD-COF-EXP",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Update COF Expiry Date",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "View workload list",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-WL-EXTRC",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Extract data",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-WL-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "View workload list",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "REPO-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain data repository",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "REPO-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Search and view data repository",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "RPT-MGT-001",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Daily New Appointment List",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "RPT-MGT-002",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Daily Registration Log",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "SYS-USER-ACCT-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain user accounts",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-APRV-AMND-CHG-EXAM-FEE",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Approve vehicle amendment that will cause change of exam fee for any active appointment up to 7 days ago (exclude current or future appointments)",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain vehicle entry (non-VALID vehicle)",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-VALID-SYNC",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Synchronize VALID vehicle particulars",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "View vehicle detail",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-WHLST-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain vehicle watch and alert lists",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-CRE-AMND-HIST",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Create / amend history inspection result (over 7 days)",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-RVRT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Revert inspection result",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-ALRTLST-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain vehicle alert list (for own centre)",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-WHLST-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Shows whether vehicle is in alert list under current centre",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-WHLST-VIEW-ALL-CTR",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Shows whether vehicle is in alert list for all centres",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "APPT-CNCL-FEE-WVE",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Cancel Fee Waiver of Appointment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "GNRL-LGN-CTR",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Login to Specific Centre",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-ADHOC-AMND",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Amend VV / MPV inspection",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-ADHOC-DEL",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Delete VV / MPV inspection",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "RPT-MGT-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Management Reports",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "RPT-RSLT-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Vehicle Exam Result Reports",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },
                new UserPrivilege()
                {
                    PrivilegeId = "RPT-SMRY-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Report Summary",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "SYS-INFO-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "System Information",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-MNT-NV",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain vehicle entry (non-VALID vehicle)",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-MNT-VV",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain vehicle entry (VV)",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-MNT-MPV",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain vehicle entry (MPV)",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "RC-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "View random check",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "SYS-UPD-HCP-VHCL",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Upload HCP Vehicle",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "PAY-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Manage payment",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "PAY-SMRY-RPT-EXPT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Export payment summary report",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "PAY-RCNN-RPT-EXPT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Export payment reconciliation report",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "RC-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain random check configuration",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "RC-DRAW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Random check draw",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "SYS-BJ-MMT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain batch job",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "SYS-CFG-MMT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain system configuration",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-FLR-MGT-VIEW",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "View floor management",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "INSP-VHCL-SYNC",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Synchronize vehicle particulars to inspection result",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-MERGE",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Merge vehicle",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-ATTRIBUTE-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain Vehicle Attribute ",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VHCL-MSG-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Edit Vehicle Message",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "VV-MPV",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "VV-MPV",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                new UserPrivilege()
                {
                    PrivilegeId = "ASSIGN-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "ASSIGN-MNT",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                },

                

                new UserPrivilege()
                {
                    PrivilegeId = "SYS-ROLE-MNT",
                    PrivilegeLevel = 1,
                    PrivilegeDescription = "Maintain roles",
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                }
                );



            modelBuilder.Entity<UserGroup>().HasData(
                  new UserGroup()
                  {
                      UserGroupId = "TD-USER",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "MVE",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "MVE-II",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "OFFC-CLERICAL-STF",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "OFFC-IN-CHRG",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "VT",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "CERT-DSPCH",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "MOM-CLERICAL-STF",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "MOM-IC",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "CNFG-ADMIN-SYS",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "CNFG-ADMIN-CTR",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "BOOK-SPRV-LVL1",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "BOOK-SPRV-LVL2",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "APPT-DEL",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "MNT-ALERT-LIST",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "MNT-WHLST",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "VIEW-APPT-INSP",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "CTC-MVE",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  },
                  new UserGroup()
                  {
                      UserGroupId = "CTC-CNFG-ADMIN",
                      PrivilegeId = "APPT-AUTH-2",
                      LastRecordTransactionDateTime = DateTime.Now,
                      LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                      LastRecordTransactionUserId = "Test",
                  }
                  );


            // modelBuilder.Entity<Users>().HasData(
            //     new Users()
            //     {
            //         UserId = "User1",
            //         PrivilegeId = "APPT-AUTH-2",
            //         CenterId = "SKC",
            //         UserCenterRoleBeginDate = DateTime.Now,
            //         UserCenterRoleEndDate = DateTime.Now,
            //         UserCenterRoleRemarkText = "TBD",
            //         LastRecordTransactionDateTime = DateTime.Now,
            //         LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
            //         LastRecordTransactionUserId = "Test",

            //     },
            //     new Users()
            //     {
            //         UserId = "User2",
            //         PrivilegeId = "APPT-AUTH-2",
            //         CenterId = "TY2",
            //         UserCenterRoleBeginDate = DateTime.Now,
            //         UserCenterRoleEndDate = DateTime.Now,
            //         UserCenterRoleRemarkText = "TBD",
            //         LastRecordTransactionDateTime = DateTime.Now,
            //         LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
            //         LastRecordTransactionUserId = "Test",

            //     },
            //     new Users()
            //     {
            //         UserId = "User3",
            //         PrivilegeId = "APPT-VIEW",
            //         CenterId = "TY1",
            //         UserCenterRoleBeginDate = DateTime.Now,
            //         UserCenterRoleEndDate = DateTime.Now,
            //         UserCenterRoleRemarkText = "TBD",
            //         LastRecordTransactionDateTime = DateTime.Now,
            //         LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
            //         LastRecordTransactionUserId = "Test",

            //     }
            //     );

            //modelBuilder.Entity<UserInUserGroups>().HasData(
            //    new UserInUserGroups()
            //    {
            //        UserToUserGroupMappingId = Guid.NewGuid().ToString(),
            //        UserId = "User1",
            //        UserGroupId = "TD-USER",
            //    },
            //    new UserInUserGroups()
            //    {
            //        UserToUserGroupMappingId = Guid.NewGuid().ToString(),
            //        UserId = "User2",
            //        UserGroupId = "TD-USER",
            //    },
            //    new UserInUserGroups()
            //    {
            //        UserToUserGroupMappingId = Guid.NewGuid().ToString(),
            //        UserId = "User3",
            //        UserGroupId = "TD-USER",
            //    }
            //    );



            modelBuilder.Entity<New_Lane>().HasData(
                new New_Lane()
                {
                    LaneId = "1",
                    CenterId = "TY1",
                    laneName = "01",
                    LaneDescription = "Lane 1",
                    LaneStatus = 'Y',
                    DefaultCapacity = 12,
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                    
                },

                new New_Lane()
                {
                    LaneId = "2",
                    CenterId = "TY2",
                    laneName = "02",
                    LaneDescription = "Lane 2",
                    LaneStatus = 'Y',
                    DefaultCapacity = 12,
                    LastRecordTransactionDateTime = DateTime.Now,
                    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                    LastRecordTransactionUserId = "Test",
                    
                }

                //new New_Lane()
                //{
                //    LaneId = Guid.NewGuid().ToString(),
                //    CenterId = "SKC",
                //    laneName = "03",
                //    LaneDescription = "Lane 3",
                //    LaneStatus = 'Y',
                //    DefaultCapacity = 12,
                //    LastRecordTransactionDateTime = DateTime.Now,
                //    LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
                //    LastRecordTransactionUserId = "Test",                    
                //}
                );


            modelBuilder.Entity<LaneTimeslot>()
                .HasData(
                new LaneTimeslot()
                {
                    TimeSlotId = Guid.NewGuid().ToString(),
                    LaneId = "1",
                    TimeSlotBegin = DateTime.UtcNow,
                    TimeSlotEnd = DateTime.UtcNow.AddHours(8),
                    ExamScheduleDescription = "",
                    Capacity = 15
                },
                new LaneTimeslot()
                {
                    TimeSlotId = Guid.NewGuid().ToString(),
                    LaneId = "1",
                    TimeSlotBegin = DateTime.Now,
                    TimeSlotEnd = DateTime.Now.AddHours(8),
                    ExamScheduleDescription = "",
                    Capacity = 15
                },
                new LaneTimeslot()
                {
                    TimeSlotId = Guid.NewGuid().ToString(),
                    LaneId = "2",
                    TimeSlotBegin = DateTime.UtcNow,
                    TimeSlotEnd = DateTime.UtcNow.AddHours(8),
                    ExamScheduleDescription = "",
                    Capacity = 15
                },
                new LaneTimeslot()
                {
                    TimeSlotId = Guid.NewGuid().ToString(),
                    LaneId = "2",
                    TimeSlotBegin = DateTime.Now,
                    TimeSlotEnd = DateTime.Now.AddHours(8),
                    ExamScheduleDescription = "",
                    Capacity = 15
                },
                new LaneTimeslot()
                {
                    TimeSlotId = Guid.NewGuid().ToString(),
                    LaneId = "cc84ceef-4d61-4079-aa25-864af6198fde",
                    TimeSlotBegin = DateTime.UtcNow,
                    TimeSlotEnd = DateTime.UtcNow.AddHours(8),
                    ExamScheduleDescription = "",
                    Capacity = 15
                },
                new LaneTimeslot()
                {
                    TimeSlotId = Guid.NewGuid().ToString(),
                    LaneId = "cc84ceef-4d61-4079-aa25-864af6198fde",
                    TimeSlotBegin = DateTime.Now,
                    TimeSlotEnd = DateTime.Now.AddHours(8),
                    ExamScheduleDescription = "",
                    Capacity = 15
                }
                );

            //To be enabled
            //modelBuilder.Entity<DynoTimeslot>().HasData(
            //    new DynoTimeslot()
            //    {
            //        DynoTimeSlotId = Guid.NewGuid().ToString(),
            //        DynoRoomId = "DynoRoom1",
            //        DynoTimeSlotBegin = DateTime.UtcNow,
            //        DynoTimeSlotEnd = DateTime.UtcNow.AddHours(8),
            //        ExamScheduleDescription = "TBD",
            //        Capacity = 10
            //    },
            //    new DynoTimeslot()
            //    {
            //        DynoTimeSlotId = Guid.NewGuid().ToString(),
            //        DynoRoomId = "DynoRoom2",
            //        DynoTimeSlotBegin = DateTime.UtcNow,
            //        DynoTimeSlotEnd = DateTime.UtcNow.AddHours(8),
            //        ExamScheduleDescription = "TBD",
            //        Capacity = 10
            //    }
            //    );


            //To be enabled
            //modelBuilder.Entity<CenterHoliday>().HasData(
            //    new CenterHoliday()
            //    {
            //        CenterHolidayId = Guid.NewGuid().ToString(),
            //        CenterId = "TY1",
            //        HolidayDate = DateTime.UtcNow,
            //        HolidayName = "TBD",
            //        HolidayChineseName = "TBD",
            //        AllDayHoliday = 'Y',
            //        HolidayStartTime = DateTime.UtcNow,
            //        HolidayEndTime = DateTime.UtcNow,
            //        LastRecordTransactionDateTime = DateTime.Now,
            //        LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
            //        LastRecordTransactionUserId = "Test"

            //    },
            //    new CenterHoliday()
            //    {
            //        CenterHolidayId = Guid.NewGuid().ToString(),
            //        CenterId = "TY1",
            //        HolidayDate = DateTime.UtcNow,
            //        HolidayName = "TBD",
            //        HolidayChineseName = "TBD",
            //        AllDayHoliday = 'Y',
            //        HolidayStartTime = DateTime.UtcNow,
            //        HolidayEndTime = DateTime.UtcNow,
            //        LastRecordTransactionDateTime = DateTime.Now,
            //        LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
            //        LastRecordTransactionUserId = "Test"
            //    },
            //    new CenterHoliday()
            //    {
            //        CenterHolidayId = Guid.NewGuid().ToString(),
            //        CenterId = "TY1",
            //        HolidayDate = DateTime.UtcNow,
            //        HolidayName = "TBD",
            //        HolidayChineseName = "TBD",
            //        AllDayHoliday = 'Y',
            //        HolidayStartTime = DateTime.UtcNow,
            //        HolidayEndTime = DateTime.UtcNow,
            //        LastRecordTransactionDateTime = DateTime.Now,
            //        LastRecordTransactionTypeCode = Convert.ToChar(CommonConstants.InsertTranTypeCode),
            //        LastRecordTransactionUserId = "Test"
            //    }
            //    ); 
            }                         
        
    }
}
