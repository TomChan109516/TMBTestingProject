import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React from "react";

const MemoPopup = (props) => {
  const handleClose = () => {
    props.closePopup(false);
  };
  return (
    <>
      <Modal
        onClose={handleClose}
        isOpen={true}
        isDismissable={false}
        size="5xl"
        className="font-calibri text-inputTxt "
      >
        <ModalContent className="mb-3">
          <ModalBody>
            <div className="grid grid-cols-2 m-2 gap-1">
              <div className="flex flex-col">
                <div className="text-center font-bold">Model</div>
                <div className=" flex m-1 items-center mt-5">
                  <span className="ml-11 font-bold">
                    System And Equipment
                  </span>
                  <span className="text-black text-left ml-4  mt-[-3px]">
                    <Select
                      placeholder="Please select"
                      labelPlacement="outside-left"
                      data-testid="vehicleClass"
                      className="w-[350px]"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                    >
                      <SelectItem key={1}>Data</SelectItem>
                    </Select>
                  </span>
                </div>
                <div className=" flex m-1 ml-12 items-center mt-4">
                  <span className="w-[20%] font-bold">
                    Test Items
                  </span>
                  <span className="text-black text-left ml-4  mt-[-3px]">
                    <Select
                      placeholder=""
                      labelPlacement="outside-left"
                      data-testid="vehicleClass"
                      className="w-[350px]"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                    >
                      <SelectItem key={2}>Data</SelectItem>
                    </Select>
                  </span>
                </div>
                <div className="flex mt-4 ml-20 items-center ">
                  <span className="w-[15%] font-bold ml-[-16px]">
                    Defect
                  </span>
                  <span className="text-black text-left   mt-[-3px]">
                    <Select
                      placeholder="Common defect"
                      labelPlacement="outside-left"
                      data-testid="vehicleClass"
                      className="w-[167px]"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                    >
                      <SelectItem key={3}>Data1</SelectItem>
                    </Select>
                  </span>
                  <span className="text-black text-left ml-4  mt-[-3px]">
                    <Select
                      placeholder=""
                      labelPlacement="outside-left"
                      data-testid="vehicleClass"
                      className="w-[167px]"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                    >
                      <SelectItem key={3}>Data1</SelectItem>
                    </Select>
                  </span>
                </div>
              </div>
              <div>
                <Table
                  radius="none"
                  classNames={{ wrapper: "p-0" }}
                  className="mt-1"
                >
                  <TableHeader className="bg-tropicalrainforest text-white mb-0">
                    <TableColumn className="bg-tropicalrainforest text-white text-center border-1 border-[#eff1f0] first:rounded-none">
                      ID
                    </TableColumn>
                    <TableColumn className="bg-tropicalrainforest text-white text-center border-1 border-[#eff1f0] last:rounded-none">
                      DESC
                    </TableColumn>
                    <TableColumn className="bg-tropicalrainforest text-white text-center border-1 border-[#eff1f0] last:rounded-none">
                      Operation
                    </TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border border-greyBorder  text-center mt-0 ">
                      <TableCell className="border  border-greyBorder">
                        1
                      </TableCell>
                      <TableCell className="border  border-greyBorder">
                        Please Select ///
                      </TableCell>
                      <TableCell className="border  border-greyBorder text-[#ff7e4b] ">
                        Cancel
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* <div className="grid grid-rows-2 mt-4">
                <div className="grid grid-cols-4 gap-1">
                  <div>
                    {" "}
                    <Checkbox
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      size="sm"
                      radius="none"
                    >
                      Upper
                    </Checkbox>
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      size="sm"
                      radius="none"
                    >
                      Lower
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      NearSide
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Offside
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Both Side
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Front
                    </Checkbox>{" "}
                  </div>
                  <div>
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Midddle
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Rear
                    </Checkbox>{" "}
                  </div>
                  <div>
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Inner
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Outer
                    </Checkbox>{" "}
                  </div>
                </div>
                <div className="grid grid-cols-4 border-t-2 border-[#2dd4bf] mt-2 gap-1">
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      First Axle
                    </Checkbox>
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Second Axle
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Three Axle
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Four Axle
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Five Axle
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Six Axle
                    </Checkbox>{" "}
                  </div>
                  <div>
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Seven Axle
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Eight Axle
                    </Checkbox>{" "}
                  </div>
                  <div>
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Nine Axle
                    </Checkbox>{" "}
                  </div>
                  <div>
                    {" "}
                    <Checkbox
                      size="sm"
                      classNames={{ wrapper: "after:bg-persianGreen" }}
                      radius="none"
                    >
                      Ten Axle
                    </Checkbox>{" "}
                  </div>
                </div>
              </div> */}
            </div>
          </ModalBody>

          <div className="flex flex-row items-center justify-center mb-8 mt-40 ">
            <Button
              className={`bg-persianGreen  text-white font-bold rounded-sm ml-4 `}
              variant="bordered"
              size="sm"
            >
              Add
            </Button>
            <Button
              className={`bg-persianGreen  text-white font-bold rounded-sm ml-2 `}
              variant="bordered"
              size="sm"
            >
              Save
            </Button>
            <Button
              className={`bg-white text-black font-bold rounded-sm ml-2`}
              variant="bordered"
              size="sm"
              onClick={handleClose}
              data-testId="Cancel"
            >
              Cancel
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MemoPopup;
