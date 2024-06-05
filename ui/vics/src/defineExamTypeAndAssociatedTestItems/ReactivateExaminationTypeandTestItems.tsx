import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
function ReactivateExaminationTypeandTestItems(props) {
  const handleClose = () => {
    props.setReactivateExamination(false);
  };
  return (
    <>
      <Modal
      className="rounded-md"
        size="lg"
        onClose={handleClose}
        isOpen={true}
        isDismissable={false} >
        <ModalContent>
          {(onClose) => ( <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center   gap-1">
              Reactivate Examination Type and Test Items
              </ModalHeader>
              <ModalBody>
                <div className="justify-center text-center text-black font-calibri font-bold mt-2">
                  Do you confirm to reactivate This 
                  <br />
                  Examination Type and Test Items? 
                   <br />
                </div>
                <div className="  w-[100%] items-center text-center text-black font-calibri font-bold ">
                  <div className=" w-[100%] -ml-6  ">
                    Exam Code: <span className="ml-5">001
                    </span>
                  </div>
                  <div className="w-[100%] -ml-7 ">
                    Vehicle Class:{" "}
                    <span className="ml-5">013{" "}
                    </span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center -mt-3 mb-4 ">
                <Button
                  className="text-white rounded-[2px] font-calibri font-bold bg-tropicalrainforest border-grey h-[35px]  "
                  variant="light"
                  radius="sm"
                  onPress={onClose}>
                  Yes
                </Button>
                <Button
                  className="text-black rounded-[2px] font-calibri font-bold bg-white border-1  border-grey ml-4 h-[35px]"
                  radius="sm"
                  onClick={handleClose} >
                  No
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default ReactivateExaminationTypeandTestItems;
