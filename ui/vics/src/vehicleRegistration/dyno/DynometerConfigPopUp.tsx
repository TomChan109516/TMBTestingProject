import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  SelectItem,
  Select,
} from "@nextui-org/react";

export default function DynometerConfigPopUp(props) {
  const handleClose = () => {
    props.closePopup(false);
    props.SpeedPopUp(false);
    props.setDynometerConfigPopUp(false);
  };

  return (
    <>
      <Modal
        size="sm"
        className=" overflow-y-auto text-inputTxt "
        isOpen={true}
        onClose={handleClose}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="bg-lightGreen w-[100%]  p-1 font-bold text-black text-center h-8">
                Dynometer Config
              </div>

              <ModalBody>
                <div className="flex items-center text-inputTxt mt-4">
                  <span className="w-[150px] text-[12px] font-bold ml-16 ">
                    Require Dynometer Test?
                  </span>
                  <Select
                    placeholder="Yes"
                    labelPlacement="outside-left"
                    data-testid="vehicleClass"
                    className="w-[70px]"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                  >
                    <SelectItem key={3}>Data1</SelectItem>
                  </Select>
                </div>
              </ModalBody>
              <div className="flex flex-row items-center justify-center mb-6 mt-6">
                <Button
                  className={`bg-persianGreen text-[white] font-bold rounded-sm ml-2 `}
                  variant="bordered"
                  size="sm"
                >
                  Save
                </Button>
                <Button
                  className={`bg-white text-black font-bold rounded-sm ml-6`}
                  variant="bordered"
                  size="sm"
                  onClick={handleClose}
                  onPress={onClose}
                >
                  Quit
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
// DynometerConfigPopUp.propTypes = {
//     showshowDynoPopUp: PropTypes.string,
//     closeshowDynoPopUp: PropTypes.func,
//   };
