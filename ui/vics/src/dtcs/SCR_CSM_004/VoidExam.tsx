import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter } from "@nextui-org/react";
import PropTypes from 'prop-types';

export default function VoidExam(props) {
    const open = props.showVoidExam;
    const handleClose = () => {
        props.closeVoidExam(false);
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
                            <ModalHeader className="flex flex-col gap-1 text-center p-1 bg-lightblue">void Examination Report</ModalHeader>
                            <ModalBody>

                                <div className="text-center mt-5"> Confirm void Report?            </div>


                            </ModalBody>
                            <ModalFooter className="justify-center mb-4 mt-5 ">
                                <Button
                                    className="text-white font-calibri font-bold rounded-sm bg-persianGreen  h-8 "
                                    variant="light"
                                    radius="none"

                                >
                                    Yes
                                </Button>
                                <Button data-testid="No" onClick={handleClose} className="text-black font-calibri font-bold  rounded-sm bg-white border-1  h-8 ml-4">
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
VoidExam.propTypes = {
    showVoidExam: PropTypes.bool,
    closeVoidExam: PropTypes.func,

}