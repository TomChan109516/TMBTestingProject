import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Radio,
    RadioGroup,
    Select,
    SelectItem,
    Input
} from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
function NewPopUp(props) {
    const open = props.showNewPopUp;
    const handleClose = () => {
      props.closeNewPopUp(false);
    };
    return (
        <>
            <Modal size="2xl" onClose={handleClose} isOpen={open} isDismissable={false} hideCloseButton className="rounded-sm ">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col text-black font-calibri font-bold  bg-lightGreen text-center i justify-center  gap-1 ">
                                Skip Test Reason
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col justify-center -ml-14">
                                    <div className="flex flex-row mt-2 font-bold justify-center items-center">
                                        <div className="w-[20%] text-right">Code</div>
                                        <div className="w-[30%] ml-2">
                                            <Input
                                                size="sm"
                                                radius="sm"
                                                variant="bordered"
                                                classNames={{ inputWrapper: "h-7 w-[100%] rounded-md" }}
                                            ></Input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center mt-3 ">
                                        <div className="w-[20%] text-right font-bold ">Description</div>
                                        <div className="w-[30%] ml-2 ">
                                            <Textarea
                                                radius="sm"
                                                variant="bordered"
                                                disableAnimation
                                                disableAutosize
                                                classNames={{
                                                    base: "max-w-xs ",
                                                    input: "resize-y min-h-[40px]",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center mt-3 ">
                                        <div className="w-[20%] text-right font-bold ">Test Type</div>
                                        <div className="w-[30%] ml-2">
                                            <Select
                                                labelPlacement="outside-left"
                                                radius="sm"
                                                variant="bordered"
                                            >
                                                <SelectItem key="TY"> For DYNO Tests </SelectItem>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center mb-2 mt-2">
                                    <div className="flex justify-center items-center">
                                        <div className="ml-[14px]">
                                            <RadioGroup orientation="vertical" className="ml-16">
                                                <Radio
                                                    size="sm"
                                                    classNames={{
                                                        wrapper:
                                                            "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                                                        control: "bg-white",
                                                        base: "border-persianGreen",
                                                    }}
                                                    value="Triangle"
                                                >
                                                    <span className="  font-bold ">Mandatory For Next DYNO</span>
                                                </Radio>
                                                <Radio
                                                    size="sm"
                                                    classNames={{
                                                        wrapper:
                                                            "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                                                        control: "bg-white",
                                                        base: "border-persianGreen",
                                                    }}
                                                            value=""
                                                >
                                                    <span className="font-bold ">Exempt from DYNO Test</span>
                                                </Radio>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-center mb-4 ">
                                <Button
                                    className="text-white font-calibri font-bold bg-persianGreen border-greyBorder rounded-sm"
                                    variant="light" 
                                    onPress={onClose}
                                >
                                    Save
                                </Button>
                                <Button className="text-black font-calibri font-bold bg-white border-1 border-greyBorder ml-4 rounded-sm"  onClick={handleClose}>
                                    Quit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default NewPopUp;