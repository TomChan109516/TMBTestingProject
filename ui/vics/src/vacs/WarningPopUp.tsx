import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react";
import PropTypes from "prop-types";


function WarningPopUp(props) {
    const open = props.showWarningPopUp;
    const handleClose = () => {
        props.closeWarningPopUp(false);
    };
    return (
        <>
            <Modal size="xl" className="rounded-sm" onClose={handleClose} isOpen={open} hideCloseButton={true} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col text-black font-calibri rounded-sm font-bold bg-lightGreen text-center i justify-center">
                                Warning
                            </ModalHeader>
                            <ModalBody>
                                <div className="justify-center text-center text-black font-calibri font-bold mt-3">
                                    Do You confirm to put this vehical into the unconfirmed list?  <br />
                                </div>

                            </ModalBody>
                            <ModalFooter className="justify-center mb-4 ">
                                <Button
                                    className="text-white font-calibri font-bold rounded-sm bg-tropicalrainforest h-8 w-8 border-[#e0dede] "
                                    variant="light" radius="none"
                                    onPress={onClose}
                                >
                                    Yes
                                </Button>
                                <Button className="text-black font-calibri rounded-sm  font-bold bg-white border-1 border-[#d3d3d3] h-8 w-8 "
                                    radius="none" variant="light" onClick={handleClose}>
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
WarningPopUp.propTypes = {
    showWarningPopUp: PropTypes.bool,
    closeWarningPopUp: PropTypes.func,
};
export default WarningPopUp;