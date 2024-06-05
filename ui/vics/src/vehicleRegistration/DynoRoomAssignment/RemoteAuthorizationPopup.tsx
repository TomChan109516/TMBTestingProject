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
export default function RemoteAuthorizationPopup() {
  return (
    <Modal
      isOpen={true}
    //   onClose={}
    //   isDismissable={false}
      size="lg"
      className=" "
      radius="none"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8">
              Remote Authorization
            </div>

            <ModalBody>
            <div className=" text-center text-black w-[100%] text-inputTxt mt-2 font-bold">
               The vehicle has completed Dyno test and requesting to print exam report
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold  ">
           Dyno chit time : 11:00:32 (by Chan Da Mam)
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold ">
               Request by : Wong Da Man (Dyno 1 - reassigned)
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold ">
             Appt no: 12334657899
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold ">
            Reg. Mark : FB2115
              </div>
              <div className="flex justify-center items-center">
             <Button radius="none" className="bg-tropicalrainforest h-6 text-white ">Modify Defect</Button>
             <Button radius="none" className="bg-tropicalrainforest h-6 ml-4 text-white ">Modify Stamp</Button>
              </div>
              <hr />
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold ">
               Test Type : Dyno
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold ">
               Time : 11:15:32
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold ">
              Result : <span className="text-lightCyan ml-1">PASS</span>
              </div>
              <div className="flex justify-center items-center">
             <Button radius="none" className="bg-tropicalrainforest h-6 text-white ">View Emission Report</Button>
              </div>
              <hr />
              <div className=" flex  font-calibri font-bold ">
                <span className=" w-[15%] ml-16 ">Username</span>
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
              <div className=" flex  font-calibri font-bold ">
                <span className=" w-[15%] ml-16 ">Password</span>
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
                <span className=" w-[19%] ml-16 flex justify-start items-start text-right ">
                 Remark
                </span>

                <Textarea
                  label=""
                  placeholder=""
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
                 Approve
                </Button>
                <Button
                  className={`bg-darkred4 text-white font-bold shadow-sm rounded-sm ml-6 h-7 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  onPress={onClose}
                >
                  Reject
                </Button>
                <Button
                  className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 h-7 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  onPress={onClose}
                >
                  Quit
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
