import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  ModalFooter,
} from "@nextui-org/react";
export default function AddModifyDefectPopup({ onClose = () => {} }) {
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      isDismissable={false}
      size="5xl"
      className="w-[35%]  h-[60%] "
      radius="none"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8">
              Add/Modify Defect - Location code
            </div>

            <ModalBody>
              <div className=" flex  font-calibri font-bold ">
                <span className=" w-[37%] ml-16 ">Location ID</span>
                <Input
                  labelPlacement="outside-left"
                  className="ml-5 w-[60%]"
                  classNames={{ inputWrapper: " min-h-unit-6 h-unit-6 " }}
                  radius="none"
                  size="sm"
                  variant="bordered"
                  placeholder="011"
                ></Input>
              </div>
              <div className=" flex   font-calibri font-bold ">
                <span className=" w-[35%] ml-16 flex justify-start items-start text-right ">
                  Test Type
                </span>

                <Select
                  size="none"
                  radius="none"
                  label="VI"
                  className="h-6 w-[39%] "
                  classNames={{ trigger: "h-6 min-h-unit-6 " }}
                >
                  <SelectItem key={""} value={""}>
                    {}
                  </SelectItem>
                </Select>
              </div>
              <div className=" flex   font-calibri font-bold ">
                <span className=" w-[35%] ml-16 flex justify-start items-start text-right ">
                  Location Name (EN)
                </span>

                <Textarea
                  label=""
                  placeholder="  NEARSIDE MIDDLE(LOWER) "
                  className="max-w-xs w-[40%]"
                  radius="none"
                />
              </div>
              <div className=" flex   font-calibri font-bold ">
                <span className=" w-[35%] ml-16 flex justify-start items-start text-right ">
                  Location Name (CH)
                </span>

                <Textarea
                  label=""
                  placeholder=" CHINESE TEXT "
                  className="max-w-xs w-[40%]"
                  radius="none"
                />
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <div className="flex">
                <Button
                  className={`bg-tropicalrainforest text-[white] font-bold rounded-sm h-7 `}
                  variant="bordered"
                  size="sm"
                  //onClick={closeTabs}
                >
                  Save
                </Button>
                <Button
                  className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 h-7 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  onPress={onClose}
                >
                  Cancel
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
