import {
  Button,
  Checkbox,
  CheckboxGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import React, { ChangeEvent, useEffect, useState } from "react";

function CopyLanePopup(props) {
  const { copyLanePopup, setCopyLanePopup } = props;
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [laneData, setLaneData] = useState([
    "Person",
    "PerSon",
    "PeRson",
    "PerSon1",
    "PerSon1",
    "PeRson1",
    "Person2",
    "PerSon2",
    "PeRson2",
    "Person3",
    "PerSon3",
    "PeRson3", "Person",
    "PerSon",
    "PeRson",
    "PerSon1",
    "PerSon1",
    "PeRson1",
    "Person2",
    "PerSon2",
    "PeRson2",
    "Person3",
    "PerSon3",
    "PeRson3", "Person",
    "PerSon",
    "PeRson",
    "PerSon1",
    "PerSon1",
    "PeRson1",
    "Person2",
    "PerSon2",
    "PeRson2",
    "Person3",
    "PerSon3",
    "PeRson3", "Person",
    "PerSon",
    "PeRson",
    "PerSon1",
    "PerSon1",
    "PeRson1",
    "Person2",
    "PerSon2",
    "PeRson2",
    "Person3",
    "PerSon3",
    "PeRson3"
  ]);
  const handleClose = () => {
    setCopyLanePopup(false);
  };
  const handleChangeLane = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      //   arr = [...checkedList, event.target.value];
      setCheckedList([...checkedList, event.target.value]);
    } else {
      setCheckedList(
        checkedList.filter((obj) => {
          return obj !== event.target.value;
        })
      );
    }
  };

  return (
    <div>
      <Modal isOpen={copyLanePopup} onClose={handleClose} size="xl" classNames={{wrapper:"h-[500px]"}}>
        <ModalContent>
          {(onClose) => (
            <>
              <div className="text-[#00AF8F] m-5">Apply Lane to lane(s)</div>
              <ModalBody>
                  <div className="flex flex-row h-10">
                    <div className="text-sm w-1/4 font-bold font-[Calibri]">Origin Lane</div>
                    <div>
                      <div className="text-xs font-[Calibri]">22S</div>
                      <RadioGroup size="sm" className="text-xs" defaultChecked>
                      <Radio size="sm" name="OriginLane" value='22S' defaultChecked className="text-xs"    classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                                control:'bg-white',
                                base:'border-[#00AF8F]',
                            }}  >22S</Radio>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="text-sm w-1/4 font-bold font-[Calibri]">Target Lane's</div>
                    <div>
                    <CheckboxGroup
                      color="success"
                      value={checkedList}
                      orientation="horizontal"
                      classNames={{
                        wrapper: " text-white  max-w-full pt-2 ml-1 mb-1  grid grid-cols-4 md:auto-cols-min text-xs",
                      }}
                    >
                      {laneData.map((data, index) => {
                        return (
                          <Checkbox
                            key={index}
                            radius="none"
                            size="sm"
                            value={data}
                            className="pt-0"
                            onChange={handleChangeLane}
                            classNames={{
                              wrapper:
                                "after:bg-[#00AF8F] text-white rounded-sm text-xs  font-[Calibri] ",
                              // base:' even:ml-5 relative'
                            }}
                          >
                            {data}
                          </Checkbox>
                        );
                      })}
                    </CheckboxGroup>
                    </div>
                  </div>
                    <div>
                    <RadioGroup
                    size="sm"
        value={selected}
        onValueChange={setSelected}
        className="text-xs"   
      >
        <Radio value="Append new settings" className="text-xs" classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                                control:'bg-white',
                                base:'border-[#00AF8F]',
                            }}>Append new settings</Radio>
        <Radio value="Replace original Settings" className="text-xs" classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                                control:'bg-white',
                                base:'border-[#00AF8F]',
                            }}>Replace original Settings</Radio>
      </RadioGroup>
                    </div>
              </ModalBody>
              <ModalFooter className="justify-end">
                <Button
                  onPress={onClose}
                  size="sm"
                  radius="none"
                  className=" text-[#333333] w-[50px] h-10 border-solid border-[1px] border-greyBorder bg-white rounded-sm font-medium"
                >
                  Cancel
                </Button>
                <Button
                  //   onClick={handleApi}
                  size="sm"
                  radius="none"
                  className="text-white bg-[#00AF8F] mr-[25px] w-[50px] h-10 font-medium rounded-sm"
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CopyLanePopup;
