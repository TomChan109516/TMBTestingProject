import React from "react";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Textarea,
} from "@nextui-org/react";

import PropTypes from "prop-types";

export default function SystemVehicleAttributeInfoPopUp(props) {
    const { showVehicleAttributeInfoPopUp, setVehicleAttributeInfoPopUp } = props;
    const handleClose = () => {
        setVehicleAttributeInfoPopUp(false);

    };
    return (
        <>
            <Modal isOpen={showVehicleAttributeInfoPopUp} onClose={handleClose} radius="none" size="2xl"
                classNames={{
                    base: "rounded-sm",
                    body: "py-4",
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    closeButton: " hover:bg-white/5 active:bg-white/20",
                }}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalBody>
                                <div className="flex">
                                    <div className="flex-initial text-[#00AF8F] mb-1 font-bold text-sm">
                                        Vehicle Attribute Information
                                    </div>
                                </div>

                                <div className="...">
                                    <div className="flex flex-row">
                                        <span className="text-xs text-black font-bold text-left  pt-1 w-[120px]">
                                            Attribute Name
                                        </span>
                                        <span className="text-xs w-[70%]  text-black text-left ml-8">
                                            <Input
                                                id="standard-basic"
                                                radius="none"
                                                variant="bordered"
                                                size="sm"
                                                maxLength={15}
                                            //   placeholder="Lane"
                                            />{" "}
                                        </span>
                                    </div>
                                </div>
                                <div className="...">
                                    <div className="flex flex-row">
                                        <span className="text-xs text-black font-bold text-left  pt-1 w-[120px]">
                                            Attribute Description
                                        </span>
                                        <span className="text-xs w-[70%]  text-black text-left ml-8">
                                            <Input
                                                id="standard-basic"
                                                radius="none"
                                                variant="bordered"
                                                size="sm"
                                                maxLength={15}
                                            //   placeholder="Lane"
                                            />{" "}
                                        </span>
                                    </div>
                                </div>

                                <div className="...">
                                    <div className="flex flex-row">
                                        <span className="text-xs text-black font-bold text-left  pt-1 w-[120px]">
                                            Attribute Message
                                        </span>
                                        <span className="text-xs w-[70%] text-black text-left ml-8   border-[2px] border-[#d3dcda] rounded-sm ">
                                            <Textarea
                                                radius="none"

                                                classNames={{
                                                    input:
                                                        "resize-y  h-[100px] w-[800px] hover: border-transparent",
                                                }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    className="bg-[#ffffff] rounded-sm ml-2 font-bold text-xs "
                                    variant="bordered"
                                    type="submit"
                                    size="sm"
                                    radius="none"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className=" bg-[#e0a648] text-white rounded-sm ml-1 mr-1 font-bold text-xs"
                                    variant="bordered"
                                    type="submit"
                                    size="sm"
                                    radius="none"
                                // onClick={handleClose}
                                >
                                    Save
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
SystemVehicleAttributeInfoPopUp.propTypes = {
    showVehicleAttributeInfoPopUp: PropTypes.bool,
    setVehicleAttributeInfoPopUp: PropTypes.func,
}
