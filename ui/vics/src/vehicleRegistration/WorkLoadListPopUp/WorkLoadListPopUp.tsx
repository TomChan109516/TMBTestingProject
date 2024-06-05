import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react";
import { ArrowBackUp } from 'tabler-icons-react';
import PropTypes from "prop-types";
const WorkLoadListPopUp = (props) => {
    const handleClose = () => {
      props.closeWorkLoadListPopUp(false);
    };
    return (
        <>
            <Modal size="5xl" isOpen={true} isDismissable={false} className="rounded-sm">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col text-persianGreen font-calibri  bg-lightGreen text-center i justify-center  gap-1">
                                Workload List
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <div className="flex justify-center text-black font-calibri font-bold mt-6 ml-44">
                                        Please confirm the following appointment to be added to the Dyno Workload List.
                                        <div className="ml-40 flex w-[28px] h-[28px] border-[black] mt-[5px]  border-2 rounded-full justify-center">
                                           
                                            <ArrowBackUp
                                            size={28}
                                            strokeWidth={2}
                                            color={'black'}
                                            className="mb-3"
                                        />
                                        </div> 
                                    </div>
                                    <div className=" text-center text-black font-calibri font-bold mb-2 mr-48">
                                        Appointment will also be added to Unconfirmed List.<br />
                                    </div>
                                </div>
                                <div className="  w-[100%] items-center text-center text-black font-calibri font-bold mb-3 ">
                                    <div className=" w-[90%] ">
                                        231020151942
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-center mb-6 ">
                                <Button
                                    className="text-white font-calibri font-bold h-8 bg-persianGreen border-white  rounded-sm ml-4"
                                    variant="light"    
                                >
                                    Submit
                                </Button>
                                <Button className="text-black font-calibri font-bold rounded-sm h-8 bg-white border-1 border-greyBorder ml-6" 
                                onClick={handleClose}>
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
WorkLoadListPopUp.propTypes = {
    showWorkLoadListPopUp: PropTypes.bool,
    closeWorkLoadListPopUp: PropTypes.func,
  }
export default WorkLoadListPopUp;