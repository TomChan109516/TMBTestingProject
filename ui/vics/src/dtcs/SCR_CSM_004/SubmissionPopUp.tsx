import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button,ModalFooter } from "@nextui-org/react";

export default function Submission() {


    return (
        <>

            <Modal
                size="lg"
                isOpen={open}
                hideCloseButton={true}
                radius="none"
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center p-1 bg-lightblue">Result Submission Confirmation</ModalHeader>
                            <ModalBody>

                            <div className="text-center mt-5"> Confirm to submit Inspection Result? <br/> Appointment will be removed from the dyno workload list 
                            </div>

                                    
                            </ModalBody>
                            <ModalFooter className="justify-center mb-4 mt-5 ">
                            <Button
                  className="text-white font-calibri font-bold rounded-sm bg-persianGreen h-8 "
                  variant="light"
                  radius="none"
                
                >
                  Submit
                </Button>
                <Button className="text-black font-calibri font-bold  rounded-sm bg-white border-1  h-8 ml-4">
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