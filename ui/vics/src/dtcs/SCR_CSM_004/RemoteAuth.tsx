import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,

} from "@nextui-org/react";
import React from "react";


function RemoteAuth(props) {
    const {
      showRemoteAuth,
      setshowRemoteAuth,
      handleRemoteAuth,
      setConfirm,
 
    } = props;

const handleConfirm = async () => {
   
    setConfirm(true);
    setshowRemoteAuth(false);
  };
  
    return (
        <>
            <Modal
                size="lg"
                className="rounded-sm"
                onClose={() => handleRemoteAuth(false)}
                isOpen={showRemoteAuth}
                isDismissable={false}
                hideCloseButton={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
                                Remote Authorization
                            </ModalHeader>
                            <ModalBody>
                                <div className="  w-[100%] items-left text-left text-black font-calibri font-bold ">

                                    <div className="text-center">Inspection result Submitted<br/> Requesting for authorization</div>
                                    <div className="flex  flex-row justify-center ml-6 mt-3 ">

                                        <div className="justify-center font-bold text-[12px] mt-3 ">
                                            User Name:
                                        </div>
                                        <div className="justify-center ml-2 mb-6">
                                            <Input
                                                labelPlacement="outside-left"
                                                className=" rounded-sm h-6"
                                                size="sm"
                                                radius="none"
                                                aria-label="center"
                                                variant="bordered"
                                        
                                            />
                                        </div>
                                    </div>
                                    <div className="flex  flex-row justify-center ml-6">
                                        <div className="justify-center font-bold text-[12px] mt-2 ">
                                            Password:
                                        </div>
                                        <div className="justify-center ml-4 mb-8 ">
                                            <Input
                                                labelPlacement="outside-left"
                                                className=" rounded-sm h-6"
                                                size="sm"
                                                radius="none"
                                                aria-label="center"
                                                variant="bordered"

                                            />
                                        </div>
                                    </div>

                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-center mb-4 ">
                                <Button
                                    className="text-white font-calibri font-bold rounded-sm bg-persianGreen h-8 "
                                    variant="light"
                                    radius="none"
                                    onClick={handleConfirm}
                                    
                                >
                                    Submit
                                </Button>
                                <Button onPress={onClose}  className="text-black font-calibri font-bold  rounded-sm bg-white border-1  h-8 ml-4">
                                    Cancel
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default RemoteAuth;