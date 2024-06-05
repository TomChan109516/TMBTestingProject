import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Select,
    Radio,
    RadioGroup,
} from "@nextui-org/react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function tips(props) {
    const [showLimitConfig,setshowLimitConfig] = useState(false);
    const navigate = useNavigate();
    const handleLimitConfig = () => {
        setshowLimitConfig(true);
        navigate("/LimitConfig");
        handleClose();
      };
     
    const handleClose = () => {
       props.closetips(false);
    };

    return (
        <>
            <Modal className="rounded-sm" size="lg" hideCloseButton onClose={handleClose} isOpen={true} isDismissable={false}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
                                Tips
                            </ModalHeader>
                            <ModalBody className=" px-0">
                                <div>
                                    <div>
                                        <p className="flex justify-center font-semibold mt-6 mb-3">
                                            Are you sure to abort/suspend the inspection?                    </p>
                                        <div>


                                            <div className="flex  justify-center mt-4 mb-3">
                                                <RadioGroup orientation="horizontal" className="">

                                                    <Radio
                                                        size="sm"
                                                        value="A"
                                                    >
                                                        <span className=" font-bold mr-4">Abort Test</span>
                                                    </Radio>
                                                    <Radio
                                                        size="sm"
                                                        value="B"
                                                    >
                                                        <span className=" font-bold mr-4">Suspend Test</span>
                                                    </Radio>
                                                </RadioGroup>
                                            </div>
                                            <div className=" flex justify-center mx-auto md:space-x-[-7px] ml-2 ">
                                                <div className="ml-3">
                                                    <p className=" font-semibold ">Supplement Reson</p>
                                                </div>
                                                <div className=" mb-2">
                                                    <Select
                                                    data-testid="Select"
                                                        labelPlacement="outside-left"
                                                        className="text-lg text-black font-bold ml-4 mr-4 "
                                                        classNames={{ base: "w-[180px]" }}
                                                        radius="none"
                                                        size="sm"
                                                        name="Test Specific"
                                                        aria-label="Test Specific"
                                                        variant="bordered"

                                                    >

                                                    </Select>
                                                </div>
                                            </div>
                                            <div className=" items-center text-center  text-black font-calibri font-bold mt-3">
                                                <div className=" w-[100%] -ml-4">
                                                    Abort Count: <span className="ml-4">1</span>
                                                </div>
                                                <div className=" w-[100%] -ml-6">
                                                    Suspend Count: <span className="ml-4">1</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-center mb-6 ml-16 ">
                                <Button
                                    className="text-white h-8 font-bold bg-tropicalrainforest border-[#e0dede] rounded-sm mr-6"
                                    radius="none"
                                    name="Next"
                                    aria-label="Next"
                                    onClick={handleLimitConfig}
                                   
                                >
                                    Confirm
                                </Button>
                                <Button
                                    className="text-black font-calibri h-8 font-bold bg-white border-1 border-[#e0dede] ml-0 mr-10 rounded-sm"
                                    radius="none"
                                    onClick={handleClose}
                                >
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
tips.propTypes = {
    showtips: PropTypes.bool,
    closetips: PropTypes.func,
  };
export default tips;