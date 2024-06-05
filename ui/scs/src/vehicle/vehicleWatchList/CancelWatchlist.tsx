import { Button, Textarea } from "@nextui-org/react";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
} from "@nextui-org/react";
import { theme } from "../../common/themes/themeConfig";

function CancelWatchlist(props) {
  const { isOpen, setIsOpen } = props;

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="w-[100%]">
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          size="4xl"
          classNames={{
            body: "py-6",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            closeButton: "mt-6 hover:bg-white/5 active:bg-white/20",
          }}
        >
          <ModalContent>
            {() => (
              <>
                <ModalBody>
                  <div className="flex-initial text-[#00AF8F] p-[5px]  font-bold text-md w-[100%]  ">
                    Cancel Watchlist
                  </div>
                  <div className="width-[100%] flex flex-row">
                    <div className=" flex flex-row basis-1/4 ml-[5px] text-md ">
                      <h5 className="font-medium">Cancel Reason </h5>
                      <div
                        className={`flex flex-row basis-1/2 ml-5 border-[2px] border-[#00AF8F] rounded-sm `}
                      >
                        <Textarea
                          radius="none"
                          classNames={{
                            input:
                              "resize-y min-h-[120px] w-[700px] hover: border-transparent",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    Are you sure you want to cancel the selected Watchlist
                    item(s)?
                  </div>
                  <div className="flex justify-end mr-8">
                    <Button
                      className="bg-[#ffffff] rounded-sm"
                      variant="bordered"
                      onPress={handleClose}
                    >
                      No
                    </Button>
                    <Button className="bg-[#00AF8F] rounded-sm text-white ml-1">
                      Yes
                    </Button>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default CancelWatchlist;
