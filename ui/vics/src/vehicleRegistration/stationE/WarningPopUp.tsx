import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { saveLoader } from "../../login/state/loginSlice";
import { addUnConfirmedList } from "./service/addUnConfirmedList";
import useToast from "../../common/hooks/useToast";

function WarningPopUp(props) {
  const open = props.showWarningPopUp;
  const { successToast, errorToast } = useToast();
  const lane = JSON.parse(localStorage.getItem("lane") || "{}");
  const dispatch = useDispatch();
  const unConfirmedListVehicleData = useSelector(
    (state: any) => state.data.regdata
  );
  const appointmentId = useSelector((state: any) => state.data.appointmentId);
  const handleClose = () => {
    props.closeWarningPopUp(false);
  };

  const handleClick = async () => {
    const payload = {
      appointmentId: appointmentId,
      laneId: lane,
      vehicleId: unConfirmedListVehicleData.vehicleId,
    };
    try {
      dispatch(saveLoader(true));
      const response = await addUnConfirmedList(payload);
      console.log(response);

      if (response.httpStatusCode === 201) {
        successToast(response.message);
      } else {
        errorToast(response.message);
      }
      dispatch(saveLoader(false));
      console.log(response);
    } catch (error) {
      errorToast(error);
      dispatch(saveLoader(false));
    }
    handleClose();
  };

  return (
    <Modal
      size="xl"
      className="rounded-sm"
      onClose={handleClose}
      isOpen={open}
      hideCloseButton={true}
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col text-black font-calibri rounded-sm font-bold bg-lightGreen text-center i justify-center">
              Warning
            </ModalHeader>
            <ModalBody>
              <div className="justify-center text-center text-black font-calibri font-bold mt-3">
                Do You confirm to put this vehical into the unconfirmed list?{" "}
                <br />
              </div>
            </ModalBody>
            <ModalFooter className="justify-center mb-4 ">
              <Button
                className="text-white font-calibri font-bold rounded-sm bg-tropicalrainforest h-8 w-8 border-[#e0dede] "
                radius="none"
                // onPress={onClose}
                data-testid="yes"
                onClick={handleClick}
              >
                Yes
              </Button>
              <Button
                className="text-black font-calibri rounded-sm  font-bold bg-white border-1 border-[#d3d3d3] h-8 w-8 "
                radius="none"
                variant="light"
                onClick={onClose}
              >
                No
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
WarningPopUp.propTypes = {
  showWarningPopUp: PropTypes.bool,
  closeWarningPopUp: PropTypes.func,
};
export default WarningPopUp;
