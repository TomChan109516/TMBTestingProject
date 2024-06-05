import React from "react";
import { ChevronDown } from "tabler-icons-react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function NavMenu() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#d4d4d8d9]">
      <Navbar className="items-start justify-start w-full">
        <NavbarContent>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="px-2 bg-transparent data-[focus=true]:text-[#00AF8F] data-[hover=true]:text-[#00AF8F]"
                  endContent={<ChevronDown size="15" />}
                  radius="sm"
                  variant="light"
                >
                  Appointment
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="create_appointment"
                onClick={() => {
                  navigate("/createAppointPage");
                }}
              >
                Create Appointment
              </DropdownItem>
              <DropdownItem
                key="appointment_enquiry"
                onClick={() => {
                  navigate("/enquireAppoint");
                }}
              >
                Appointment Enquiry
              </DropdownItem>
              <DropdownItem
                key="tax-_bi"
                onClick={() => {
                  navigate("/appointmentTaxiBIPrePrint");
                }}
              >
                Taxi Bi Appointment Letter Pre-Print
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[focus=true]:text-[#00AF8F] data-[hover=true]:text-[#00AF8F]"
                  endContent={<ChevronDown size="15" />}
                  radius="sm"
                  variant="light"
                >
                  Inspection
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="workload_list"
                onClick={() => {
                  navigate("/workloadlist");
                }}
              >
                Workload List
              </DropdownItem>
              <DropdownItem key="inspection_enquiry" onClick={()=>{navigate('/inspectionEnquiry')}}>
                Inspection Enquiry
              </DropdownItem>
              <DropdownItem key="inspection_enquiry"
              onClick={() => {
                navigate("/mpvworkload");
              }}>
                VV/MPV WorkLoadList
              </DropdownItem>
              {/* <DropdownItem key="inspection_enquiry"
              onClick={() => {
                navigate("/mpvworkload");
              }}>
                Input Certificate
              </DropdownItem> */}
              <DropdownItem key="input certificate" onClick={() => {
                  navigate("/inputCertificate");
                }}>Input Certificate</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[focus=true]:text-[#00AF8F] data-[hover=true]:text-[#00AF8F]"
                  endContent={<ChevronDown size="15" />}
                  radius="sm"
                  variant="light"
                >
                  Vehicle
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="vehicle_enquiry"
                onClick={() => {
                  navigate("/searchVehicle");
                }}
              >
                Vehicle Enquiry
              </DropdownItem>
              <DropdownItem
                key="vehicle_watchlist"
                onClick={() => {
                  navigate("/vehicleWatchlist");
                }}
              >
                Vehicle Watchlist
              </DropdownItem>
              <DropdownItem key="vv/mpv Enquiry"
              onClick={()=>{navigate("/mpvVehicleExamination")}}
              >
                VV/MPV Enquiry
              </DropdownItem>

              <DropdownItem
                key="vehicle _attribute"
                onClick={() => {
                  navigate("/VehicleAttributeSearch");
                }}
              >
                Vehicle Attribute List
              </DropdownItem>
              <DropdownItem
                key="vehicle _attribute"
                onClick={() => {
                  navigate("/VehicleMergeLinkSearch");
                }}
              >
                Vehicle Merge
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[focus=true]:text-[#00AF8F] data-[hover=true]:text-[#00AF8F]"
                  endContent={<ChevronDown size="15" />}
                  radius="sm"
                  variant="light"
                >
                  Center
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="inspection_lanes"
                onClick={() => {
                  navigate("/searchInspectionLanes");
                }}
              >
                Inspection Lanes
              </DropdownItem>
              <DropdownItem
                key="examination_schedule"
                onClick={() => {
                  navigate("/searchexaminationSchedule");
                }}
              >
                Examination Schedule
              </DropdownItem>
              <DropdownItem
                key="special_event"
                onClick={() => {
                  navigate("/searchSpecialEvent");
                }}
              >
                Special Event
              </DropdownItem>
              <DropdownItem
                key="random_check_configuration"
                onClick={() => {
                  navigate("/RandomCheckConfigurationSearch");
                }}
              >
                Random Check Configuration
              </DropdownItem>
              <DropdownItem
                key="random_check"
                onClick={() => {
                  navigate("/assignRandomCheckInspections");
                }}
              >
                Random Check
              </DropdownItem>
            </DropdownMenu>
            <DropdownItem
                key="exam_code_maintenance"
                onClick={() => {
                  navigate("/examCodeMaintenance");
                }}
              >
                Exam Code Maintenance
              </DropdownItem>
          </Dropdown>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[focus=true]:text-[#00AF8F] data-[hover=true]:text-[#00AF8F]"
                  endContent={<ChevronDown size="15" />}
                  radius="sm"
                  variant="light"
                >
                  Assignment
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="staff_assignment"
                onClick={() => {
                  navigate("/searchstaffassignment");
                }}
              >
                Staff Assignment
              </DropdownItem>
              <DropdownItem key="inspection_enquiry">
                Assignment Result Search
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[focus=true]:text-[#00AF8F] data-[hover=true]:text-[#00AF8F]"
                  endContent={<ChevronDown size="15" />}
                  radius="sm"
                  variant="light"
                >
                  Report
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem key="management_report"
              onClick={() => {
                navigate("/manageementReport");
              }}
              
              >
                Management Report
              </DropdownItem>
              <DropdownItem key="vehicle_examination_report"
              onClick={() =>navigate('/vehicleExaminationResult')}>
                Vehicle Examination Report
              </DropdownItem>
              <DropdownItem key="payment_report" onClick={()=>{navigate('/PaymentReport')}}>Payment Report</DropdownItem> 
              <DropdownItem key="police_report" onClick={()=>{navigate('/policeReport')}} >Police Report</DropdownItem>
              <DropdownItem key="VE11_report"onClick={()=>{navigate('/ve11')}} >VE11 Report</DropdownItem>
              <DropdownItem key="exception_report" onClick={()=>{navigate('/exceptionReport')}} >
                Exception Report
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[focus=true]:text-[#00AF8F] data-[hover=true]:text-[#00AF8F]"
                  endContent={<ChevronDown size="15" />}
                  radius="sm"
                  variant="light"
                >
                  System
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem key="user_account" onClick={()=>{navigate('/searchUser')}} >User Account</DropdownItem>
              <DropdownItem key="role_and_privilege" onClick={()=>{navigate('/roleandprivilages')}}>
                Role and Privilege
              </DropdownItem>
              <DropdownItem key="system_configuration" onClick={()=>{navigate('/maintainSysConfig')}}>
                System Configuration
              </DropdownItem>
              <DropdownItem key=" batch_job" onClick={()=>{navigate("/batchjob")}}>Batch Job</DropdownItem>
              <DropdownItem
                key="vehicle_attribute"
                onClick={() => {
                  navigate("/systemvehicleAttributeSearch");
                }}
              >
                Vehicle Attribute
              </DropdownItem>
              <DropdownItem
              key="vehicle_watch_reason"
              onClick={() => {
                navigate("/vehicleWatchReason");
              }}>
                Vehicle Watch Reason
              </DropdownItem>
              <DropdownItem
                key="enb_maintenance"
                onClick={() => {
                  navigate("/systemEnbMaintenance");
                }}
              >
                ENB Maintenance
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[focus=true]:text-[#00AF8F] data-[hover=true]:text-[#00AF8F]"
                  endContent={<ChevronDown size="15" />}
                  radius="sm"
                  variant="light"
                >
                  Payment
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key=" manage_payment"
                onClick={() => {
                  navigate("/managePayment");
                }}
              >
                Manage Payment
              </DropdownItem>
             
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
