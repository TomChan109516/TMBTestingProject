import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Select,
    SelectItem,
} from "@nextui-org/react";
import PropTypes from 'prop-types';

function SelectReason(props) {



    const open = props.showSelectReason;
    const handleClose = () => {
        props.closeSelectReason(false);




    };
    return (
        <>
            <Modal
                size="3xl"
                onClose={handleClose}
                isOpen={open}
                hideCloseButton={true}
                isDismissable={false}
                className="rounded-sm"
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col text-tropicalrainforest font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1 ">
                                Select Reason
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex justify  font-bold text-black mr-[100px]" >
                                    <div className="w-[40%]" >
                                        <Select
                                            labelPlacement="outside-left"
                                            size="sm"
                                            variant="bordered"
                                            name="page"
                                            aria-label="center"
                                            radius="none"
                                            className="rounded-sm"
                                        >
                                            <SelectItem key={""}>Chassis No. Incorrect</SelectItem>
                                        </Select>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-center -mt-2 mb-6 ">
                                <Button
                                    className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-[#e0dede] h-8 mr-4 "
                                    variant="light"
                                    radius="none"
                                    onClick={props.handleClickAccept}
                                    size="sm"

                                >
                                    Yes
                                </Button>
                                <Button
                                    className="text-black rounded-[2px] font-calibri font-bold bg-white border-1  border-[#e0dede] "
                                    radius="none"
                                    onClick={handleClose}
                                    size="sm"
                                >
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

SelectReason.propTypes = {
    showSelectReason: PropTypes.bool,
    closeSelectReason: PropTypes.func,
    handleClickAccept:PropTypes.func,
};

export default SelectReason;