import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,

} from "@nextui-org/react";
import PropTypes from "prop-types";
import TabMasterVehicle from "./TabMasterVehicle";
import SearchMasterVehicle from "./SearchMasterVehicle";


export default function ViewMasterVechiclepopup(props) {

  const ViewMasterVechiclepopup = props.showViewMasterVechiclepopup;
  const handleClose = () => {
    props.setViewMasterVechiclepopup(false);
  };
  
  return (
    <>
      <Modal isOpen={ViewMasterVechiclepopup} onClose={handleClose} size="full" className="w-[90%] h-[100%] overflow-y-auto ">
        <ModalContent>
          <>
            <ModalBody>
              <div className="pt-[5px] w-[100%]">
                <div className="flex">
                  <div className="flex-initial text-[#0a923d] p-[0px] ml-[15px] font-bold text-[13px]">
                    View Master Vehicle
                  </div>
                </div>
                <div>
                  <div className="ml-1">

                    <div className="mt-[15px] ml-2 mr-2">
                      <SearchMasterVehicle />

                      <div className="m-[5px]">
                        <TabMasterVehicle />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
ViewMasterVechiclepopup.propTypes = {
  showViewMasterVechiclepopup: PropTypes.string,
  closeViewMAsterVechiclepopup: PropTypes.func,
};


