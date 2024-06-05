import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@nextui-org/react";
import ManagePaymentPopup from "./ManagePaymentPopup";

function ManagePaymentTable({ check, checkFunc }) {
  const [showManagePaymentPopup, setshowManagePaymentPopup] = useState(false);

  const handleManagePaymentPopup = () => {
    setshowManagePaymentPopup(true);
  };

  const onCheckboxChange = (e) => {
    checkFunc(e.target.checked);
  };

  return (
    <>
      <div className="mt-[10px]">
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
          <TableHeader className=" bg-[#A0D9C1] text-[#00af8f] text-sm  text-left font-bold">
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white first:rounded-none" children={undefined}></TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Appointment No.
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Centre
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Exam Code
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Vehicle Class
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Reg Mark
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Vehicle Id
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Amount
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Method
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Remark
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Status
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white last:rounded-none" children={undefined}></TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <CheckboxGroup>
                  <Checkbox
                    name="selectCheckbox"
                    radius="none"
                    size="sm"
                    classNames={{ wrapper: "after:bg-[#00af8f]" }}
                    onChange={(e) => onCheckboxChange(e)}
                    isSelected={check}
                  />
                </CheckboxGroup>
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                112020000118
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                TY1
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[5px]  text-left ">
                008
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                001
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                WK9571
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                003270674
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                585.00
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left " children={undefined}></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left " children={undefined}></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                Pending
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <Button
                  className="text-[#ffffff] bg-[#00af8f] mr-2 float-left border-solid border-1 border-[#00af8f] rounded fond-bold h-[25px]"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  onClick={handleManagePaymentPopup}
                >
                  Pay
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <CheckboxGroup>
                  <Checkbox
                    name="selectCheckbox"
                    radius="none"
                    size="sm"
                    classNames={{ wrapper: "after:bg-[#00af8f]" }}
                    onChange={(e) => onCheckboxChange(e)}
                    isSelected={check}
                  />
                </CheckboxGroup>
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                112020000118
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                TY1
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[5px]  text-left ">
                008
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                001
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                WK9571
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                003270674
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                585.00
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left " children={undefined}></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left " children={undefined}></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                Pending
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <Button
                  className="text-[#ffffff] bg-[#00af8f] mr-2 float-left border-solid border-1 border-[#00af8f] rounded fond-bold h-[25px]"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  onClick={handleManagePaymentPopup}
                >
                  Pay
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <CheckboxGroup>
                  <Checkbox
                    name="selectCheckbox"
                    radius="none"
                    size="sm"
                    classNames={{ wrapper: "after:bg-[#00af8f]" }}
                    onChange={(e) => onCheckboxChange(e)}
                    isSelected={check}
                  />
                </CheckboxGroup>
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                112020000118
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                TY1
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[5px]  text-left ">
                008
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                001
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                WK9571
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                003270674
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                585.00
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left " children={undefined}></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left " children={undefined}></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                Pending
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <Button
                  className="text-[#ffffff] bg-[#00af8f] mr-2 float-left border-solid border-1 border-[#00af8f] rounded fond-bold h-[25px]"
                  variant="bordered"
                  type="submit"
                  size="sm"
                >
                  Pay
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {showManagePaymentPopup && (
        <ManagePaymentPopup
          showManagePaymentPopup={showManagePaymentPopup}
          setManagePaymentPopup={setshowManagePaymentPopup}
        ></ManagePaymentPopup>
      )}
    </>
  );
}
export default ManagePaymentTable;
