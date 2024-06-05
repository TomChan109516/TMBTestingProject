import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, Input } from "@nextui-org/react";

    function PrintReport(props) { 
        const open = props.showPrintReport;
        const handleClose = () => {
            props.closePrintReport(false);
        };

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
                            <ModalHeader className="flex flex-col gap-1 text-center p-1 bg-lightblue">Print Examination Report</ModalHeader>
                            <ModalBody>

                                <div className="text-center mt-5"> Please enter security paper number</div>
                                <div> <Input
                                    size="xs"
                                    radius="none"
                                    variant="bordered"
                                    className="w-[50%]  mx-auto h-10 text-center"
                                ></Input></div>

                            </ModalBody>
                            <ModalFooter className="justify-center mb-4 mt-5 ">
                                <Button
                                    className="text-white font-calibri font-bold rounded-sm bg-persianGreen  h-8 "
                                    variant="light"
                                    radius="none"
                                    onClick={()=>{props.handleButton();handleClose();}}
                                    data-testId="Test"
                                >
                                    Print
                                </Button>
                                <Button  data-testid="Cancel" onClick={handleClose} className="text-black font-calibri font-bold  rounded-sm bg-white border-1  h-8 ml-4">
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


export default PrintReport;
