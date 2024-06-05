import React from "react";
import {
    Modal,
    ModalContent,
    ModalBody,

    Button,
} from "@nextui-org/react";

export function DisablePassingStandardTASpecificPopUp({ setIsDisablePassingStandardTASpecificPopUp }) {

    const setDisablePassingStandardTASpecificPopUp = () => {
        setIsDisablePassingStandardTASpecificPopUp(false)
    }

    return (
        <div className="w-screen h-screen">
            <Modal

                isOpen={true}
                onClose={setDisablePassingStandardTASpecificPopUp}
                isDismissable={false}
                size="full"
                className="w-[40%]  h-[35%] "
            >
                <ModalContent>

                    <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-9">Disable Passing Standard</div>

                    <ModalBody>
                        <div className="flex flex-row items-center justify-center ml-6 mt-5 mb-2" data-testId="Do you confirm to disable this Disable Passing Standard">
                            <p
                                className="text-sm text-black  text-center w-[500px]"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                <b>Do you confirm to disable this Disable Passing Standard</b>
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-center mb-2 ml-6 ">
                            <div className="flex flex-row" >
                                <span className="text-sm text-black font-bold text-left w-[170px] mt-2 ml-40 mr-10" data-testId="ID">
                                    ID:<span>7</span>
                                </span>
                                &nbsp;
                            </div>
                        </div>
                    </ModalBody>

                    <div className="flex justify-center mb-20 mt-4 ml-8">
                        <Button
                            className=" bg-[#009B77] text-white rounded-sm mr-8 font-bold text-xs"
                            type="submit"
                            size="sm"
                            radius="none"
                        >
                            Yes
                        </Button>
                        <Button
                            className="bg-[#ffffff] rounded-sm mr-8 font-bold text-xs "
                            variant="bordered"
                            type="submit"
                            size="sm"
                            radius="none"
                            onClick={setDisablePassingStandardTASpecificPopUp}
                        >
                            No
                        </Button>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default DisablePassingStandardTASpecificPopUp;