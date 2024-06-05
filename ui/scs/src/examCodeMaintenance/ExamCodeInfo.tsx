import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  SelectItem,
  Select,
  Textarea,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { theme } from "../common/themes/themeConfig";
import { addExamCodes } from "./service/ExamCodeMaintenanceService";

function ExamCodeInfo(props) {
  const navigate = useNavigate();
  const { showExamInfoPopup, setShowExamInfoPopup } = props;
  const examTypes = [
    { value: "Select.." },
    { value: "Primary" },
    { value: "Supplementary" },
  ];
  const [formState, setFormState] = useState({
    InspTypeId: "",
    ExCode: "",
    ExClass: "",
    InspTypeName: "",
    InspTypeDescrip: "",
    exFee: "",
    usId: localStorage.getItem("username"),
  });
  const handleClose = () => {
    setShowExamInfoPopup(false);
    navigate("/examCodeMaintenance");
  };
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const addExamCode = async (e) => {
    e.preventDefault();
    const data = {
      examCodeDto: {
        InspectionTypeId: formState.InspTypeId,
        ExamCode: formState.ExCode,
        ExamClass: formState.ExClass,
        InspectionTypeDescription: formState.InspTypeDescrip,
        examFee: formState.exFee,
        userId: formState.usId,
        InspectionTypeName: formState.InspTypeName,
      },
    };
    const response = await addExamCodes(data);
  };
  return (
    <div className="w-[100%] h-[100%]">
      <Modal
        size="2xl"
        isOpen={showExamInfoPopup}
        onClose={handleClose}
        radius="none"
        classNames={{
          base: "rounded-sm",
          body: "py-4",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: " hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div
                  className={`text-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily?.calibri}] flex-initial text-[#00AF8F] p-[10px]  ml-[-15px] font-bold text-[16px]`}
                >
                  New Exam Code Details
                </div>
                <div>
                  <h1>
                    <h5
                      className={`text-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily?.calibri}] absolute -top-2 start-3  pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]`}
                    >
                      Exam Code Information
                    </h5>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm text-black ml-5 mt-2 font-bold text-left pt-1 w-[80px]`}
                      >
                        Exam Code
                      </div>
                      <div className="text-xs w-[410px] mt-2 text-black text-left ml-8">
                        {
                          <Input
                            id="standard-basic"
                            radius="none"
                            variant="bordered"
                            size="sm"
                            maxLength={15}
                            placeholder="Enter Exam Code"
                            classNames={{
                              inputWrapper: `min-h-unit-6 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                            }}
                            name="ExCode"
                            value={formState.ExCode}
                            onChange={handleChange}
                          />
                        }
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm ml-5 text-black font-bold text-left  pt-1 w-[80px]`}
                      >
                        Exam Name
                      </div>
                      <div className="text-xs w-[410px]  text-black text-left ml-8">
                        {
                          <Input
                            id="standard-basic"
                            radius="none"
                            variant="bordered"
                            size="sm"
                            maxLength={15}
                            placeholder="Enter Exam Name"
                            classNames={{
                              inputWrapper: `min-h-unit-6 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                            }}
                            name="InspTypeName"
                            value={formState.InspTypeName}
                            onChange={handleChange}
                          />
                        }
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm ml-5 text-black font-bold text-left  pt-1 w-[80px]`}
                      >
                        Exam Type
                      </div>
                      <div className="text-xs w-[410px]  text-black text-left ml-8">
                        <Select
                          items={examTypes}
                          labelPlacement="outside-left"
                          radius="none"
                          size="sm"
                          name="ExClass"
                          aria-label="centLaneer"
                          variant="bordered"
                          data-testid="select-test"
                          placeholder="Choose Exam Type"
                          classNames={{
                            trigger: `min-h-unit-2 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                          }}
                          selectedKeys={[formState?.ExClass]}
                          value={formState?.ExClass}
                          onChange={handleChange}
                        >
                          {(examTypes) => (
                            <SelectItem
                              key={examTypes.value}
                              value={examTypes.value}
                              className="text-[10px]"
                            >
                              {examTypes.value}
                            </SelectItem>
                          )}
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-row mt-1 mb-20"></div>
                    <div className="grid grid-cols-4 gap-4 mt-2 mb-2">
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm ml-5 text-black font-bold text-left  pt-1 w-[80px]`}
                      >
                        Description
                      </div>
                      <div className="text-xs w-[410px] text-black text-left ml-8">
                        <span>
                          {
                            <Textarea
                              id="standard-basic"
                              radius="none"
                              variant="bordered"
                              size="sm"
                              maxLength={100}
                              placeholder="Description"
                              classNames={{
                                inputWrapper: `min-h-unit-6 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                              }}
                              name="InspTypeDescrip"
                              value={formState.InspTypeDescrip}
                              onChange={handleChange}
                            />
                          }
                        </span>
                      </div>
                    </div>
                  </h1>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className={`bg-white text-black font-[${theme?.fontFamily?.calibri}] border border-solid border-[${theme?.colors?.greyBorder}] text-sm shadow-sm font-bold rounded-sm ml-1`}
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className={`bg-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily?.calibri}] text-sm text-white font-bold rounded-sm ml-1`}
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={addExamCode}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default ExamCodeInfo;
