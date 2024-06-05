import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  CheckboxGroup,
  useDisclosure,

} from "@nextui-org/react";

export default function SelectVtPersonPopUp(props) {
  const open = props.SelectVtPersonPopUp;
  const router = useNavigate();
  const navigate = useNavigate();
  const { showVtPersonPopup, setShowVtPersonPopup } = props;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleClose = () => {
    setShowVtPersonPopup(false);
    navigate("/staffSchedule");
  };
  const sizes = ["5xl"];

  return (
    <>
      <Modal isOpen={showVtPersonPopup} onClose={handleClose} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-sm text-[#009B77] gap-1 px-3">
                Select VT Person
              </ModalHeader>
              <ModalBody className="gap-0 ">
                <div className="flex flex-wrap w-full bg-[#cdf6ec] p-2 h-10">
                  <div>
                    <div className="text-md font-bold text-[#009B77] text-left">
                      SKC
                    </div>
                  </div>
                </div>
                <p>
                  <div className="flex flex-wrap">
                    <div className="w-[100%]">
                      <div className="border border-[#c0c0c0] ">
                        <div className="pl-2 pt-2 ">
                          <CheckboxGroup
                            orientation="horizontal"
                            color="secondary"
                            defaultValue={["buenos-aires", "san-francisco"]}
                          >
                            <Checkbox
                              classNames={{ wrapper: "after:bg-[#009B77]" }}
                              size="sm"
                              radius="none"
                              className="pr-12"
                              value="KMKEI"
                            >
                              <span className="text-xs">KMKEI</span>
                            </Checkbox>
                            <Checkbox
                              classNames={{ wrapper: "after:bg-[#009B77]" }}
                              size="sm"
                              radius="none"
                              className="pr-12"
                              value="SMFOK"
                            >
                              <span className="text-xs">SMFOK</span>
                            </Checkbox>
                            <Checkbox
                              classNames={{ wrapper: "after:bg-[#009B77]" }}
                              size="sm"
                              radius="none"
                              className="pr-12"
                              value="SYHO"
                            >
                              <span className="text-xs">SYHO</span>
                            </Checkbox>
                            <Checkbox
                              classNames={{ wrapper: "after:bg-[#009B77]" }}
                              size="sm"
                              radius="none"
                              className="pr-12"
                              value="MVE Ⅱ"
                            >
                              <span className="text-xs">
                                MVE Ⅱ-LIU Wing-chiu
                              </span>
                            </Checkbox>
                          </CheckboxGroup>
                        </div>

                        <div className="min-h-[150px] max-h-[150px] h-[150px] overflow-x-hidden"></div>
                      </div>
                    </div>
                  </div>
                </p>
              </ModalBody>
              <ModalFooter className="px-3">
                <Button
                  className="bg-[#ffffff] float-left ml-2 rounded "
                  variant="bordered"
                  type="submit"
                  size="sm"
                  onPress={onClose}
                  fond-bold
                >
                  Cancle
                </Button>
                <Button
                  className="text-[#ffffff] bg-[#15bf94] mr-2 float-right border-solid border-2 border-[#009B77] rounded"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  fond-bold
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
SelectVtPersonPopUp.propTypes = {
  showVtPersonPopup: PropTypes.bool,
  setShowVtPersonPopup: PropTypes.func,
  title: PropTypes.string,
  handleApi: PropTypes.func,
};
