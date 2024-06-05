import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import {theme} from "../../common/themes/themeConfig";

 function RandomCheckEditPopUp(props) {
  const { showRandomCheckEditPopUp, setShowRandomCheckEditPopUp } = props;
  const [size, setSize] = React.useState("3xl");

  const sizes = ["3xl"];

  const handleOpen = (size) => {
    setSize(size);
  };

  
  const handleClose = () => {
    setShowRandomCheckEditPopUp(false);
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>
            Open {size}
          </Button>
        ))}
      </div>
      <Modal
        size="3xl"
        radius="none"
        className="rounded-sm"
        isOpen={showRandomCheckEditPopUp}
        onClose={handleClose}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={`flex flex-col gap-1 text-tropicalRainForest text-sm font-[${theme?.fontFamily?.calibri}]`}>
                Edit
              </ModalHeader>
              <ModalBody>
                <div>
                  <h1>
                    <h5 className={`absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F] font-[${theme?.fontFamily?.calibri}]`}>
                      Config
                    </h5>
                    <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px] font-bold">
                      <div className="grid grid-rows-4 h-[200 px] grid-flow-col ml-6">
                        <div className="flex flex-row items-center">
                          <div className={`w-[40%] text-left font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}>Centre</div>
                          <div className="w-[55%]">
                            <Select
                              labelPlacement="outside-left"
                              radius="none"
                              size="sm"
                              variant="bordered"
                            >
                              <SelectItem key="TY"> </SelectItem>
                            </Select>
                          </div>
                        </div>
                        <div className="flex flex-row items-center mt-1">
                          <div className={`w-[40%] text-left font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}>Rate%</div>
                          <div className="w-[55%]">
                            <Input
                              id="standard-basic"
                              name="rate"
                              radius="none"
                              variant="bordered"
                              size="sm"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center mt-1">
                          <div className={`w-[40%] text-left font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}>
                            Min Draw Number
                          </div>
                          <div className="w-[55%]">
                            <Input
                              id="standard-basic"
                              name="draw number"
                              radius="none"
                              variant="bordered"
                              size="sm"
                              data-testid="FloatName"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-rows-4 grid-flow-col">
                        <div className="flex flex-row items-center ">
                          <div className= {`w-[40%] text-left font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}>Name</div>
                          <div className="w-[58%]">
                            <Input
                              id="standard-basic"
                              name="name"
                              radius="none"
                              variant="bordered"
                              size="sm"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center ">
                          <div className={`w-[40%] text-left font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}>Check Type</div>
                          <div className="w-[60%] ml-[5px] mr-2">
                            <Select
                              labelPlacement="outside-left"
                              radius="none"
                              size="sm"
                              variant="bordered"
                            >
                              <SelectItem key="TY"> </SelectItem>
                            </Select>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div className={`w-[40%] text-left font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}>
                            Draw by Section
                          </div>
                          <div className="w-[60%] ml-[5px] mr-2">
                            <Select
                              labelPlacement="outside-left"
                              radius="none"
                              size="sm"
                              variant="bordered"
                            >
                              <SelectItem key="TY"> </SelectItem>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </h1>
                </div>
              </ModalBody>
              <div className="flex justify-end mb-5 mr-5">
                <Button
                  className={`bg-[white] text-[black] shadow-sm rounded-sm font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}
                  variant="bordered"
                  size="sm"
                >
                  Reset
                </Button>
                <Button
                  className={`bg-[#00AF8F] text-white shadow-sm ml-2 rounded-sm font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}
                  radius="none"
                  size="sm"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
RandomCheckEditPopUp.propTypes = {
  showRandomCheckEditPopUp: PropTypes.bool,
  setShowRandomCheckEditPopUp: PropTypes.func,
};

export default RandomCheckEditPopUp;