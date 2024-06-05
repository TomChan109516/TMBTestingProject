import {
  Button,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Checkbox,
} from "@nextui-org/react";
import React, { useState } from "react";

const vehicleValues = ["car", "bus", "bike", "truck", "auto"];

function AvailableVehicleClassPopup(props){
  const { showAvailableVehicleClassPopup, closeAvailableVehicleClassPopup } =
    props;
  const [slectedOption, setSelectedOption] = useState("");
  const [selectedData, setSelectedData] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleAdd = () => {
    if (slectedOption && !selectedData.includes(slectedOption)) {
      setSelectedData([
        ...selectedData,
        { label: slectedOption, checked: false },
      ]);
      setSelectedOption("");
    }
  };

  const handleDelete = () => {
    const deteleItem = selectedData.filter((items) => !items.checked);
    setSelectedData(deteleItem);
  };

  const handleCheck = (index) => {
    // setSelectedData(
    //   (prevData
    //     ))=> prevData.map((data)=>{
    //   data===option?{...data, checked:!data.checked}:data
    // }

    // setSelectedData(
    //   selectedData.map((data) => {
    //     return data.label === option ? { ...data, checked: !data.checked } : data;
    //   })
    // );
    const deteleItem = [...selectedData];
    deteleItem[index].cheked = !deteleItem[index].checked;
    setSelectedData(deteleItem);
  };

  const handleClose = () => {
    closeAvailableVehicleClassPopup(false);
  };
  return (
    <>
      <Modal
        isOpen={showAvailableVehicleClassPopup}
        onClose={handleClose}
        size="4xl"
        radius="none"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-sm font-[Calibri] font-bold text-[#007F62] ">
                {" "}
                Available Vehicle Class
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="grid grid-col- gap-1">
                    <div className="flex flex-row  ml-5 ">
                      <div className="text-sm font-[Calibri] font-bold  whitespace-nowrap  mt-2">
                        Vehicle Class
                      </div>
                      <div className="w-full ml-5  mr-2">
                        <Select
                          labelPlacement="outside-left"
                          radius="none"
                          size="sm"
                          variant="bordered"
                          placeholder="Select"
                          value={slectedOption}
                          selectedKeys={[slectedOption]}
                          onChange={handleChange}
                        >
                          <SelectItem value="" key={""}>
                            {" "}
                            Select
                          </SelectItem>
                          {vehicleValues.map((items) => {
                            return (
                              <SelectItem key={items} value={items}>
                                {items}
                              </SelectItem>
                            );
                          })}
                          ;
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-col- gap-1 mt-1">
                    <div className="flex flex-row  ml-5 ">
                      <div className="text-sm font-[Calibri] font-bold whitespace-nowrap  mt-2">
                        Sub Class
                      </div>
                      <div className="w-full  ml-[41px] mr-2">
                        <Select
                          labelPlacement="outside-left"
                          radius="none"
                          size="sm"
                          variant="bordered"
                          placeholder="Select"
                          //onChange={handleChange}
                        >
                          <SelectItem key="1"> </SelectItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-col- gap-1 mt-1">
                    <div className="flex flex-row  ml-5 ">
                      <div className="text-sm font-[Calibri] font-bold whitespace-nowrap  mt-2">
                        Attribute
                      </div>
                      <div className="w-full ml-[42.5px]  mr-2">
                        <Select
                          labelPlacement="outside-left"
                          radius="none"
                          size="sm"
                          variant="bordered"
                          placeholder="Select"
                        >
                          <SelectItem key="1"> </SelectItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end  mr-1 mt-4">
                    <Button
                      className={`bg-[red] text-[White] font-[Calibri] text-sm font-bold rounded-sm ml-1 `}
                      variant="bordered"
                      size="sm"
                      color="danger"
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                    <Button
                      className=" bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white] rounded-sm ml-1"
                      //variant="bordered"
                      //classNames={{ wrapper: "after:bg-[#ffffff] before:bg-[#00AF8F]" }}
                      size="sm"
                      // type="submit"
                      onClick={handleAdd}
                    >
                      ADD
                    </Button>
                  </div>
                  <div className="h-[290px] border-2 border-[lightgray] mt-2  ml-6 mr-6">
                    {selectedData.map((option, index) => {
                      return (
                        <div className="flex flex-row">
                          <Checkbox
                            key={index}
                            size="sm"
                            radius="none"
                            className="pl-2 ml-4 rounded-sm test-sm font-[Calibri]"
                            classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                            //isSelected={selectedData}
                            //value={selectedData}
                            checked={option.checked}
                            onChange={(e) => handleCheck(option)}
                          >
                            {option.label}
                          </Checkbox>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="">
                <Button
                  className="bg-[#ffffff] text-[black] font-[Calibri] border-[lightgray] text-sm  font-bold border rounded-none"
                  size="sm"
                  onPress={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className={`bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white] rounded-none ml-1`}
                  size="sm"
                  onPress={onClose}
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
export default AvailableVehicleClassPopup;
