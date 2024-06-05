import React, { useState } from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import PropTypes from "prop-types";

function AddVehicleClassAndExamCodePopup(props) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["2"]));
  const [vehicleClass, setVehicleClass] = useState<Selection>(new Set([]));
  const [examCode, setExamCode] = useState<Selection>(new Set([]));
  const [subClass, setSubClass] = useState<Selection>(new Set([]));
  const [attribute, setAttribute] = useState<Selection>(new Set([]));
  const { showAddVehicleClassAndExamCodePopup } = props;

  const ResetbtnFunc = () => {
    setVehicleClass(new Set([]));
    setExamCode(new Set([]));
    setSubClass(new Set([]));
    setAttribute(new Set([]));
  };
  const lanes = [{ value: "1" }, { value: "2" }, { value: "3" }];

  const handleClose = () => {
    props.closeAddVehicleClassAndExamCodePopup(false);
  };

  return (
    <>
      <Modal
        size="5xl"
        isOpen={showAddVehicleClassAndExamCodePopup}
        onClose={handleClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-[10.5px] text-[#00AF8F]">
                Monday, 8:45-9:00
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap ">
                  <div className="w-[40%] p-[5px] pl-2 ">
                    <div className="grid grid-rows-4 grid-flow-col gap-1">
                      <div>
                        <span className="text-[10.5px] text-black font-bold text-left pt-1 w-1/4">
                          Vehicle-Class
                        </span>
                        <span className="text-[10.5px] text-black text-left pl-5">
                          <Select
                            items={lanes}
                            labelPlacement="outside-left"
                            className="w-3/4"
                            radius="none"
                            size="sm"
                            name="center"
                            aria-label="center"
                            variant="bordered"
                            placeholder="Select"
                            selectedKeys={vehicleClass}
                            onChange={(e) => {
                              setVehicleClass(
                                new Set(e.target.value.split(","))
                              );
                            }}
                          >
                            {(lanes) => (
                              <SelectItem
                                key={lanes.value}
                                value={lanes.value}
                                className="text-[10px]"
                              >
                                {lanes.value}
                              </SelectItem>
                            )}
                          </Select>
                        </span>
                      </div>
                      <div>
                        <span className="text-[10.5px] text-black font-bold text-left pt-1 w-1/4">
                          Sub-Class
                        </span>
                        <span className="text-[10.5px] text-black text-left pl-9">
                          <Select
                            items={lanes}
                            labelPlacement="outside-left"
                            className="w-3/4"
                            radius="none"
                            size="sm"
                            name="center"
                            aria-label="center"
                            variant="bordered"
                            placeholder="Select"
                            selectedKeys={subClass}
                            onChange={(e) => {
                              setSubClass(new Set(e.target.value.split(",")));
                            }}
                          >
                            {(lanes) => (
                              <SelectItem
                                key={lanes.value}
                                value={lanes.value}
                                className="text-[10px]"
                              >
                                {lanes.value}
                              </SelectItem>
                            )}
                          </Select>
                        </span>
                      </div>
                      <div>
                        <span className="text-[10.5px] text-black font-bold text-left pt-1 w-1/4">
                          Attribute
                        </span>
                        <span className="text-[10.5px] text-black text-left pl-11">
                          <Select
                            items={lanes}
                            labelPlacement="outside-left"
                            className="w-3/4"
                            radius="none"
                            size="sm"
                            name="center"
                            aria-label="center"
                            variant="bordered"
                            placeholder="Select"
                            selectedKeys={attribute}
                            onChange={(e) => {
                              setAttribute(new Set(e.target.value.split(",")));
                            }}
                          >
                            {(lanes) => (
                              <SelectItem
                                key={lanes.value}
                                value={lanes.value}
                                className="text-[10px]"
                              >
                                {lanes.value}
                              </SelectItem>
                            )}
                          </Select>
                        </span>
                      </div>
                      <div className="justify-end">
                        <Button
                          className="bg-[#ffffff] float-right mr-1.5 rounded h-6"
                          variant="bordered"
                          type="submit"
                          fond-bold
                          onClick={ResetbtnFunc}
                        >
                          Add
                        </Button>
                        <Button
                          className="bg-[#ffffff] float-right mr-2 rounded h-6"
                          variant="bordered"
                          type="submit"
                          fond-bold
                          onClick={ResetbtnFunc}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className=" p-[2px] ">
                      <div className=" p-[5px] pl-2 ">
                        <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                          <div></div>
                        </h5>
                        <div className="border border-indigo-600 min-h-[306px]  max-h-[306px] h-[306px] ">
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                003
                              </Checkbox>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[60%] p-[5px] pr-2 ">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="col-start-1 col-end-7 ...">
                        <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-1/6">
                          Exam Code
                        </span>
                        <span className="text-[10.5px] text-black text-left pl-5">
                          <Select
                            items={lanes}
                            labelPlacement="outside-left"
                            className="w-5/6"
                            radius="none"
                            size="sm"
                            name="center"
                            aria-label="center"
                            variant="bordered"
                            placeholder="Select"
                            selectedKeys={examCode}
                            onChange={(e) => {
                              setExamCode(new Set(e.target.value.split(",")));
                            }}
                          >
                            {(lanes) => (
                              <SelectItem
                                key={lanes.value}
                                value={lanes.value}
                                className="text-[10px]"
                              >
                                {lanes.value}
                              </SelectItem>
                            )}
                          </Select>
                        </span>
                      </div>
                    </div>

                    <div className=" p-[2px] pt-4 ">
                      <div className=" p-[5px] pl-2 ">
                        <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                          <div></div>
                        </h5>
                        <div className="border border-indigo-600 min-h-[400px] max-h-[400px] h-[400px] overflow-x-hidden text-black">
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                001 PRE-REGISTRATION : NEW, IMPORTANT USED
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                002 RE-CLASSIFICATION
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                002+023 COF-1ST STAGE W/RE-CLASSIFICATION
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                002+023+035 COF-BATCH SAMPLING
                                W/RE-CLASSIFICATION
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                002+023+035 COF-BATCH SAMPLING
                                W/RE-CLASSIFICATION
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                002+023 COF-2ND STAGE W/RE-CLASSIFICATION
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                003 RE-REGISTRATION
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                003+001 RE-REGISTRATION+TOTAL LOSS 'WRITTEN-OFF'
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                003+11R RECHECK FOR 003+011
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                004 CHANGE OF BODY TYPE
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                005 SEATING CAPACITY
                              </Checkbox>
                            </span>
                          </div>
                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                006 STAMPING CHASSIS NO
                              </Checkbox>
                            </span>
                          </div>

                          <div className="pl-2 pt-2">
                            <span>
                              {" "}
                              <Checkbox
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                size="sm"
                                radius="none"
                              >
                                006 STAMPING CHASSIS NO
                              </Checkbox>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] float-left ml-2 rounded font-bold "
                  variant="bordered"
                  type="submit"
                  size="sm"
                  onPress={handleClose}
                  fond-bold
                >
                  Cancel
                </Button>
                <Button
                  className="text-white bg-[#00AF8F] font-bold mr-2 float-right border-solid border-2 border-[#00AF8F] rounded"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  fond-bold
                  onPress={onClose}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
AddVehicleClassAndExamCodePopup.propTypes = {
  showAddVehicleClassAndExamCodePopup: PropTypes.bool,
  closeAddVehicleClassAndExamCodePopup: PropTypes.func,
};
export default AddVehicleClassAndExamCodePopup;
