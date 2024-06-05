import React from "react";
import {
    Button,
    Checkbox,
    Select,
    SelectItem,
    Modal,
    ModalContent,
    ModalBody,
} from "@nextui-org/react";
const tableData = [
    { id: 1, name: "Axle",type:"Function"  },
    { id: 2, name: "Brake Test" ,type:"Non-Function"  },
    { id: 3, name: "Chassis/Body Structure*",type:"Non-Function"  },
    { id: 4, name: "Dimension/Weight*" ,type:"Non-Function"  },
    { id: 5, name: "Documents" ,type:"Non-Function" },
    { id: 6, name: "Door/Emergency Exit*",type:"Non-Function"  },
    { id: 7, name: "Driver Cab/Bodywork*" ,type:"Non-Function" },
    { id: 8, name: "Driver's View" ,type:"Non-Function" },
    { id: 9, name: "steering & Attachment" ,type:"Non-Function" },
    { id: 10, name: "Suspension System" ,type:"Non-Function" },
    { id: 11, name: "Tyre" ,type:"Non-Function" },
    { id: 12, name: "Vehicle/Trailer Equipment*",type:"Non-Function"  },
    { id: 13, name: "Wheel/Axle Alignment*" ,type:"Non-Function" },
    { id: 14, name: "Wheel/Hub*" ,type:"Non-Function" },
    { id: 15, name: "Wheelguard" ,type:"Non-Function" },
];
    export function VisualInspectionAndAdditionalInfo({
        setIsVisualInspectionAndAdditionalInfo,
      }) {
        const setVisualInspectionAndAdditionalInfo = () => {
          setIsVisualInspectionAndAdditionalInfo(false);
        };
    return (
        <>
            <Modal
                isOpen={true}
                onClose={setVisualInspectionAndAdditionalInfo}
                isDismissable={false}
                size="4xl"
                className=""
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className="bg-lightGreen w-[100%] p-1 text-black font-bold  text-center text-popupHeading  ">
                                Other Checklist
                            </div>
                            <>
                                <ModalBody>
                                    <>
                                        <div className=" h-[300px] overflow-y-scroll overflow-x-clip mb-4">
                                            <table className=" border-1 border-tropicalrainforest mt-2 mb-8 w-[98%] justify-end text-inputTxt font-calibri font-bold mr-4 ml-4">
                                                <tr className=" bg-[#047857] text-white text-innerInputTxt ">
                                                    <th className="border-l-1 mb-0 h-8 border-greyBorder border-b-1 w-[7%] ">
                                                        Code
                                                    </th>
                                                    <th className="border-l-1 border-greyBorder border-b-1 w-[40%]">
                                                        Description
                                                    </th>
                                                   
                                                    <th className="border-l-1 border-greyBorder border-b-1 w-12 ">Type</th>
                                                   
                                                    <th className="border-l-1 border-greyBorder border-b-1 w-[6%] ">
                                                        Yes/No
                                                    </th>
                                                    <th className="border-l-1 border-greyBorder border-b-1 w-[28%]">
                                                        Result
                                                    </th>
                                                </tr>
                                                {tableData.map((item) => (
                                                    <tr
                                                        id={item.name}
                                                        className="border-b-1 boxNotes border-lightGrey text-center "
                                                    >
                                                        <td className="border-l-1 border-greyBorder ">{item.id}</td>
                                                        <td className="border-l-1 border-greyBorder  ">{item.name}</td>
                                                        <td className="border-l-1 border-greyBorder  ">{item.type}</td>
                                                        <td className="border-l-1 border-greyBorder  ">
                                                            <Checkbox
                                                                radius="none"
                                                                size="sm"
                                                                defaultSelected={false}
                                                                className="ml-2"
                                                            ></Checkbox>
                                                        </td>
                                                        <td className="border-l-1 border-greyBorder h-12">
                                                            <Select
                                                                placeholder="p"
                                                                labelPlacement="outside-left"
                                                                className="w-[70%] ml-8 rounded-sm"
                                                                radius="none"
                                                                size="sm"
                                                                name="center"
                                                                aria-label="center"
                                                                variant="bordered"
                                                            >
                                                                <SelectItem key={2}>Data</SelectItem>
                                                            </Select>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </table>
                                        </div>
                                    </>
                                </ModalBody>
                                <div className="flex justify-center mb-4">
                                    <Button
                                        className={`bg-persianGreen  text-white rounded-sm w-[9%] `}
                                        size="sm"
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        className={`bg-white text-black shadow-sm rounded-sm ml-6 w-[9%]  `}
                                        variant="bordered"
                                        size="sm"
                                        type="submit"
                                        onClick={setVisualInspectionAndAdditionalInfo}
                                        data-testid="close-button"
                                    >
                                        Quit
                                    </Button>
                                </div>
                            </>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default VisualInspectionAndAdditionalInfo;
