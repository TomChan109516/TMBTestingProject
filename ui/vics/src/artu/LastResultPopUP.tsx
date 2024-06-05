import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalBody,
    Button,
    ModalHeader,
    Chip,
} from "@nextui-org/react";
import { getArtuTestResults } from "./service/ArtAdministration.service";

function LastResultPopUp(props) {
    const open = props.showLastResultPopUp;

    const [showApiError, setShowApiError] = useState<boolean>(false);
    const [apiErrorData, setApiErrorData] = useState<string>("");

    const testResult = props.testResult;
    const handleClose = () => {
        props.closeLastResultPopUp(false);
    };

    const params = new URLSearchParams({
        LaneId: testResult?.laneId,
        stationId: testResult?.stationId,
    });

    const TestResult = async () => {
        try {
            const response = await getArtuTestResults(params);
            response.entities = response.entities.map((item) => {
                item.switch = false;
                return item;
            });
        } catch (error) {
            setShowApiError(true);
            if (!error.response) {
                setShowApiError(true);
                setApiErrorData("Server Error");
            } else {
                if (error.response.status === 401) {
                    setApiErrorData(error.message);
                } else if (error.response.status === 500) {
                    setApiErrorData("500 - Internal Error");
                } else {
                    setApiErrorData(error.response.status === 404 ? "404 - Not Found" : "Server Error");
                }
            }
        }
    };
    useEffect(() => {
        TestResult();
    });

    return (
        <Modal
            isOpen={open}
            onClose={handleClose}
            isDismissable={false}
            radius="none"
            className="h-[85%] rounded-sm "
            classNames={{
                backdrop: "bg-lightBlack/50 backdrop-opacity-40",
                header: "bg-[#d8f1f0]  font-bold text-[14px] ",
                closeButton: "hover:bg-white/4 active:bg-white/10",
                body: "px-0 py-0",
            }}
        >
            <ModalContent>
                <>
                    {" "}
                    <ModalHeader>
                        <div className="ml-[180px]">Last Result</div>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <div>
                                <div className="flex flex-wrap">
                                    <div className="w-[100%]">
                                        <div className="grid grid-cols-2 text-center w-[100%] text-[13px] font-bold font-[calibri] border-b-1 border-[lightgray] shadow-sm mt-2">
                                            <div className="grid grid-rows-2 ml-20 w-[50%] justify-end mb-2">
                                                <div className="flex">
                                                    {" "}
                                                    <div>Lane:</div>{" "}
                                                    <div className="ml-1">{testResult?.laneId}</div>
                                                </div>
                                                <div className="flex">
                                                    {" "}
                                                    <div>Station:</div>{" "}
                                                    <div className="ml-1">{testResult?.stationId}</div>
                                                </div>
                                            </div>
                                            <div className="grid grid-rows-2 w-[50%] mb-2">
                                                <div className="flex">
                                                    {" "}
                                                    <div>Address:</div>{" "}
                                                    <div className="ml-1">{testResult?.veesIp}</div>
                                                </div>
                                                <div className="flex">
                                                    {" "}
                                                    <div>Port:</div>{" "}
                                                    <div className="ml-1">{testResult?.veesPort}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 w-fit">
                                            <div className="border-1  border-[gray] rounded-sm flex text-[12px] font-[calibri] h-[330px] ml-3 mr-3 p-3 shadow-md  w-[420px]">
                                                {testResult?.testResultXML}
                                                { }
                                            </div>
                                            <div>
                                                {showApiError === true ? (
                                                    <div className="flex transition-timing-function: cubic-bezier(0.4, 0, 1, 1) p-4 justify-center ...">
                                                        <div>
                                                            <Chip color="default" radius="full">
                                                                <div className="text-center">{apiErrorData}</div>
                                                            </Chip>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <div className="flex justify-center  ">
                        <Button
                            className={`bg-[white] text-[black] font-bold shadow-sm rounded-md  font-[calibri]  mb-4`}
                            variant="bordered"
                            size="sm"
                            type="submit"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </>
            </ModalContent>
        </Modal>
    );
}
export default LastResultPopUp;
