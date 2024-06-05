import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Selection,
} from "@nextui-org/react";
import { Pencil } from "tabler-icons-react";
import ResetAssignmentPopup from "./ResetAssignmentPopup";

function StaffAssignment() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editIconEnable, setEditIconEnable] = useState<boolean>(false);
  const [cellContent, setCellContent] = useState({
    col1: "VT116(WD)",
    col2: "VT115(WD)",
  });
  const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);

  const handleEditClick = () => {
    // setEditIconEnable(true);
    setIsEdit(!isEdit);
  };

  const handleEditCell = () => {
    setEditIconEnable(!editIconEnable);
  };
  const handleInputChange = (event) => {
    setCellContent(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEdit(false);
    // setEditIconEnable(false);
  };
  const resetAssignment = () => {
    setShowConfirmPopup(true);
  };
  return (
    <div>
      <div>
        <div className="flex flex-initial text-[#00AF8F]  ml-[15px] font-bold text-sm">
          Assignment {">"} Staff Assignment(TY1)
        </div>
        <div className="mt-2">
          <table className="ml-2 mr-2 table-auto text-sm">
            <thead>
              <tr>
                <th className="text-[#00AF8F] w-[30px]">{"Lane \n Station"}</th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white w-[30px] pb-2">
                  11
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  12
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  13
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  14
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  15
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  16
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  17
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  18
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  19
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white">
                  20
                </th>
                <th className="bg-[#00AF8F] text-[#FFFFFF]  border-2 h-[65px] border-white w-[6%]">
                  SDU
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white font-bold">
                  M.V.E
                </td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white font-bold text-xs">
                  CHOIKIthung(WD)
                </td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#DADBDD] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white font-bold text-xs">
                  {"POONChinhei(TY1) \n NGNapkeung(TY1) \n lamwaichung(TY1)"}
                </td>
              </tr>
              <tr>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white font-bold">
                  A
                </td>
                <td className="bg-[#E0FFFF] text-[red]  border-2 h-[65px] border-white font-bold text-xs">
                  {"michaelsoi(WD) \n michaelsoi(WD)"}
                </td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[#FFFFFF]  border-2 h-[65px] border-white"></td>
              </tr>
              <tr>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white font-bold">
                  B
                </td>

                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[#FFFFFF]  border-2 h-[65px] border-white"></td>
              </tr>
              <tr>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white font-bold">
                  C
                </td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white font-bold">
                  <input
                    value={cellContent.col2}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    disabled={!editIconEnable}
                    className="w-[85%]"
                  />
                  {isEdit && (
                    <Pencil
                      onClick={handleEditCell}
                      size={15}
                      strokeWidth={3}
                      color="grey"
                      className="bg-[#E0FFFF] border-1.5 border-[#00AF8F]  rounded-sm float-right mt-[-15px]"
                    />
                  )}
                </td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[#FFFFFF]  border-2 h-[65px] border-white"></td>
              </tr>
              <tr>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white font-bold">
                  D
                </td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white font-bold text-xs">
                  VT115(WD)
                </td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[black]  border-2 h-[65px] border-white"></td>
                <td className="bg-[#E0FFFF] text-[#FFFFFF]  border-2 h-[65px] border-white"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <h5 className="pl-[10px] text-[#00AF8F] text-left text-sm font-bold">
            Leave
          </h5>
          <div className="border-2 h-[40px] border-greyBorder ml-2 mr-2">
            <div className="h-[35px] grid grid-cols-6 bg-[#b0ddd2] ml-[2px] text-sm font-bold">
              <div className="text-[#00AF8F]  border-2  border-white p-1">
                On/Vacation Leave
              </div>
              <div className="text-[#00AF8F]  border-2  border-white p-1">
                Sick Leave
              </div>
              <div className="text-[#00AF8F]  border-2  border-white p-1">
                Medical/Dental Appt.
              </div>
              <div className="text-[#00AF8F]  border-2  border-white p-1">
                Time Off
              </div>
              <div className="text-[#00AF8F]  border-2  border-white p-1">
                Training/Meeting
              </div>
              <div className="text-[#00AF8F]  border-2  border-white p-1">
                Others
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="pl-[10px] text-[#00AF8F] text-left text-sm font-bold">
            Common Message
          </h5>
          <div className="border-1.5 border-[#00AF8F] ml-2 mr-2 p-[20px]">
            <ol
              className="text-xs text-left"
              style={{ listStyleType: "number" }}
            >
              <li>
                Lane 1A / Colleagues at Lane 1 Station A to turn on/off lighings
                of floor
              </li>
              <li>
                Lane B / Colleagues at Station Bof a lane to turn on lane
                workstations and health check
              </li>
              <li>
                Lane C / Colleagues at Lane 1 Station A to turn on/off lighings
                of floor
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="pl-[10px] text-[#00AF8F] text-left text-sm font-bold">
            Remark
          </h5>
          <div className="border-1.5 border-[#00AF8F] ml-2 mr-2 p-[20px]"></div>
        </div>
      </div>
      <div className="mt-2 ml-2 mr-2 pb-10">
        <div className="float-left">
          <Button
            className="bg-[white] border border-solid border-[lightgrey] rounded-sm font-medium"
            radius="sm"
            size="sm"
          >
            Export Assignment
          </Button>
        </div>
        <div className="float-right">
          <Button
            className="bg-[orange] text-[#FFFFFF] rounded-sm font-bold"
            radius="sm"
            size="sm"
            onClick={resetAssignment}
          >
            Reset Assignment
          </Button>
          {isEdit ? (
            <>
              <Button
                className="bg-[white] border border-solid border-[lightgrey] rounded-sm font-medium ml-1"
                radius="sm"
                size="sm"
                onClick={handleEditClick}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              onClick={handleEditClick}
              className="bg-[white] border border-solid border-[lightgrey] rounded-sm font-medium ml-1"
              radius="sm"
              size="sm"
            >
              Edit
            </Button>
          )}

          <Button
            className="bg-[#00AF8F] text-white font-bold rounded-sm ml-1"
            radius="sm"
            size="sm"
          >
            Save
          </Button>
        </div>
      </div>
      {showConfirmPopup && (
        <ResetAssignmentPopup
          showConfirmPopup={showConfirmPopup}
          setShowConfirmPopup={setShowConfirmPopup}
        />
      )}
    </div>
  );
}
export default StaffAssignment;
