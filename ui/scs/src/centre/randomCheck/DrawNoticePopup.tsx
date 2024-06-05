import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { AlertCircle } from "tabler-icons-react";
import { theme } from "../../common/themes/themeConfig";

function DrawNoticePopup(props) {
  const { showDrawNoticePopup, closeDrawNoticePopup } = props;

  const handleClose = () => {
    closeDrawNoticePopup(false);
  };

  return ( 
    <div>
      <Modal
        isOpen={showDrawNoticePopup}
        onClose={handleClose}
        radius="none"
        className="rounded-sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={`flex flex-col  text-sm font-[${theme?.fontFamily?.calibri}] font-bold text-tropicalRainForest`}>
                Notice
              </ModalHeader>
              <ModalBody>
                <div className=" flex flex-row border-2  border-white">
                  <AlertCircle
                    size={25}
                    strokeWidth={2}
                    color={"white"}
                    style={{ background:  "#e0a648" }}
                    className="rounded-xl text-white m-2"
                  />
                  <div className={`mt-2 font-[${theme?.fontFamily?.calibri}] text-sm`}>
                    Confrim draw?
                  </div>
                </div>
              </ModalBody>
              <div className="flex justify-end p-2 gap-1">
                <Button
                  className={`text-black font-[${theme?.fontFamily?.calibri}] bg-white font-bold text-sm  border-2 border-[lightgray] rounded-sm`}
                  radius="none"
                  onPress={onClose}
                >
                  No
                </Button>
                <Button
                  className={`text-white bg-[#00AF8F] font-[${theme?.fontFamily?.calibri}] font-bold rounded-sm text-sm`}
                  radius="none"
                  onPress={onClose}
                >
                  Yes
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default DrawNoticePopup;
