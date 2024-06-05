import React from "react";
import {Modal, ModalContent, ModalBody, Button} from "@nextui-org/react";
export default function DisableUserRolePopup({setIsDisableUserRole}) {
    const setDisableUserRolefnc = () => {
        setIsDisableUserRole(false)
      }
  return (
    <> 
      <Modal 
       isOpen={true}
       onClose={setIsDisableUserRole}
       isDismissable={false}
       size="full"
       className="w-[40%]  h-[35%] "  
      >
       <ModalContent>
          <div className="bg-lightGreen w-[100%] font-calibri text-xm p-1 font-bold text-black text-center h-9">Disable User Role</div>
          <ModalBody>
            <div className="flex flex-row items-center justify-center ml-6 mt-5 mb-2">
              <p
                className="text-sm text-black font-calibri text-center w-[500px]"
                style={{ whiteSpace: "nowrap" }}
              >
                <b>Do you confirm to Disable this user account?</b>
              </p>
            </div>
            <div className=" mb-2 ml-12">
              <div className="ml-5">
                <span className="text-sm text-black font-bold font-calibri text-nowrap ml-14 mt-2 " >
                     User Role Name: Dyno Supervisor
                </span>
                &nbsp;
              </div>
            </div>
          </ModalBody>
          <div className="flex justify-center mb-5 mt-4 ml-8">
            <Button
              className=" bg-persianGreen font-calibri text-white rounded-sm mr-8 font-bold text-xs"
              type="submit"
              size="sm"
              radius="none"
            >
              Yes
            </Button>
            <Button
              className="bg-white font-calibri rounded-sm mr-8 font-bold text-xs "
              variant="bordered"
              type="submit"
              size="sm"
              radius="none"
              onClick={setDisableUserRolefnc}  
            >
              No
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}