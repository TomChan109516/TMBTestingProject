
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox} from "@nextui-org/react";
import PropTypes from "prop-types";

 function LanePopUp(props) {
    const { showLanePopUp, setShowLanePopUp } = props;

  const handleClosefunc = () => {
    setShowLanePopUp(false);
  };

  return (

    <>
      {/* <div className="w-[100%] p-[1px] pl-5 width={1000} height={100}">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>open popup</Button>
        ))}  
      </div> */}

      <Modal 
        size="xl"
        className="rounded-sm"
        isOpen={showLanePopUp} 
        onClose={handleClosefunc} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-[#0a923d]">Add Virtual Lane</ModalHeader>
              <ModalBody>
              <div className="grid grid-cols-2 ">
                        <div className="grid grid-rows-2 grid-flow-col ">
                            <div className="flex flex-row items-center mt-2 text-sm">
                                <div className="w-[40%] text-left font-bold ">Lane</div>
                                <div className="inline-flex  w-[20%]"> 22   
                                </div>
                            </div>
                            <div className=" mt-2  flex flex-row text-sm ">
                            <div className=" w-[60%]  ">  
                                <div className="inline-flex  W-[40%] ">
                                <Checkbox classNames={{ wrapper: `after:bg-[#00AF8F] ` }} size="sm" radius="none" defaultSelected> 22S   </Checkbox>  
                                </div>
                                </div>
                            </div>

                           

                        </div>
                       
                        < div className="justify-evenly">
                            <div className="grid grid-rows-3">

                                < div className="flex flex-row mt-2 text-sm">
                                    <div className="w-[50%] justify-end font-bold mt-4 -ml-2  ">  Time-Slot</div>
                                    <div className=" w-[60%] mt-4 ">08:45 to 09:00 </div>
                                    <div className="flex justify-end">
                                   
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
             
              </ModalBody>
              <div className="flex justify-end mb-5 mr-5"> 
                <Button 
                    
                    className={`bg-[white] text-[black] shadow-sm rounded-sm `}
                    variant="bordered"
                    size="sm"
                    
                    onPress={handleClosefunc}

                >
                  Cancel 
                </Button>
                <Button
                
                  className={`bg-[#00AF8F] text-white shadow-sm ml-2 rounded-sm`}
                  variant="bordered"
                  size="sm"
                  type="submit"

              >
                  Confirm
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default LanePopUp;