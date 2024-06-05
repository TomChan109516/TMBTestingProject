import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import React from "react";
import { AlertCircle } from "tabler-icons-react";


export default function DeleteExaminationSchedulePopup(props) {

    const { showConfirmPopup, setShowConfirmPopup } = props;
      const handleClose = () => {
        setShowConfirmPopup(false);
    };

    return (
        <div>
            <Modal isOpen={showConfirmPopup} onClose={handleClose} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className="text-[#0a923d] m-5"></div>
                            <ModalBody>
                                <div className="flex">
                                    <AlertCircle
                                        size={25}
                                        strokeWidth={3}
                                        color={'orange'}
                                        className="mr-2"
                                    />
                                    Are you sure you want to delete this record?
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-end">
                                <Button
                                    onPress={onClose}
                                    size="sm"
                                    radius="sm"
                                    className="border-[lightgrey] text-[black] bg-white w-[50px] h-10 border-solid border-[1px] font-medium"
                                >
                                    No
                                </Button>
                                <Button
                                    // onClick={handleDeleteAppoint }
                                    size="sm"
                                    radius="sm"
                                    className="text-white bg-[#00AF8F] mr-[25px] w-[50px] h-10 font-medium"
                                >
                                    Yes
                                </Button>
                            </ModalFooter>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
DeleteExaminationSchedulePopup.propTypes = {
    showConfirmPopup: PropTypes.bool,
    setShowConfirmPopup: PropTypes.func,
    title: PropTypes.string,
    handleApi: PropTypes.func,
};
