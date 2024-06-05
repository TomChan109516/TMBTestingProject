import React, { ChangeEvent, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { X } from "tabler-icons-react";
import { theme } from "../../common/themes/themeConfig";

function UpdateOverallPublicHolidayPopup(props) {
  const {
    uploadOverallPublicHolidayPopup,
    setUploadOverallPublicHolidayPopup,
  } = props;
  const [file, setFile] = useState<File| null | Blob>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file=e.target.files;
    if(file){
      setFile(file[0]?.slice(0));
    }
  };

  const handleClose = () => {
    setUploadOverallPublicHolidayPopup(false);
  };
  return (
    <Modal
    size="xl"
    radius="none"
      isOpen={uploadOverallPublicHolidayPopup}
      onClose={handleClose}
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className={`flex flex-col text-[${theme?.colors?.tropicalRainForest}] font-[${theme?.fontFamily?.calibri}] font-bold pl-2 pt-2 pb-2`}>
              Update Overall Public Holiday
            </div>
            <ModalBody className={`border-[2px] border-[${theme?.colors?.persianGreen}] ml-5 mr-7`}>
              <div className="h-[100px] grid grid-rows-2">
              <div className={`ml-1 text-[gray] font-[${theme?.fontFamily?.calibri}] text-md font-bold`}>File</div>
              <div className="flex justify-around">
                <div className="flex border h-[26px]">
                  <input
                    type="file"
                    ref={inputRef}
                    data-testid="file-input"
                    value={(file as File)?.name}
                    className={`font-[${theme?.fontFamily?.calibri}] text-sm file:hidden text-[gray] border-[gray]`}
                    onChange={(e) => {
                      handleFileChange(e);
                    }} 
                  ></input>
                  <X className="bg-[gray] border-[gray] rounded-xl text-white mt-1 mr-[2px]" size="18" onClick={()=>{if(inputRef.current){inputRef.current.value = '';setFile(new Blob()) }}}/>
                </div>
                <div>
                  <Button
                    radius="none"
                    size="sm"
                    data-testid="SelectFile"
                    className={`font-[${theme?.fontFamily?.calibri}] font-bold text-sm h-7 w-[90px] border bg-[${theme?.colors?.white}] border-[${theme?.colors?.greyBorder}] rounded-sm`}
                    onClick={() => {
                      inputRef?.current?.click();
                    }}
                  >
                    Select File
                  </Button>
                </div>
                <div>
                  <Button
                    radius="none"
                    size="sm"
                    className={`text-white font-[${theme?.fontFamily?.calibri}] font-bold text-sm bg-[${theme?.colors?.persianGreen}] h-7 w-[90px] rounded-sm`}
                  >
                    Submit
                  </Button>
                </div>
              </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button radius="none" size="sm" className={`bg-white border border-[${theme?.colors?.greyBorder}] h-7 w-[90px] font-bold font-[${theme?.fontFamily?.calibri}] text-sm rounded-sm`} onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
export default UpdateOverallPublicHolidayPopup;
