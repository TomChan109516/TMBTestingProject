import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import { axiosPost } from "../../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { setisAccepted } from "./state/SubmissionConfirmationSlice";
import { SubmissionConfirmationPopUpProps } from "./model/SubmissionConfirmationPopup";
import useToast from "../../common/hooks/useToast";
import { saveLoader } from "../../login/state/loginSlice";

export default function SubmissionConfirmationPopUp(props) {
  const dispatch = useDispatch();
  const {
    showSubmissionConfirmationPopUp,
    setSubmissionConfirmationPopUp,
    setNeedInspection,
    setSubmitted,
    url,
    data,
    tabName,
  }: SubmissionConfirmationPopUpProps = props;

  const disableButtons = () => {
    props.setIsBtnDisable(true);
  };

  const enableButtons = () => {
    props.setIsBtnDisable(false);
  };
  const { successToast, errorToast } = useToast();
  const [userName] = useState<string>(localStorage.getItem("userName") || "");
  const closeTabs = async () => {
    if (url) {
      try {
        const response = await axiosPost(url, data);
        if (response.httpStatusCode === 200) {
          successToast(response.message);
          console.log(response.isSuccess);
          saveLoader;
          disableButtons();
        } else {
          console.log("false", response.isSuccess);
          errorToast(response.message);
          enableButtons();
        }
      } catch (error) {
        errorToast(error.message);
        console.log(error);
        enableButtons();
      }
    } else {
      errorToast("URL undefined");
    }
    dispatch(setisAccepted({ [tabName]: { isAccepted: true } }));
    if (setNeedInspection !== undefined) {
      setNeedInspection("No");
    }
    if (setSubmitted !== undefined) {
      setSubmitted("Yes");
    }
    setSubmissionConfirmationPopUp(false);
  };
  const handleClose = () => {
    setSubmissionConfirmationPopUp(false);
  };

  return (
    <Modal
      isOpen={showSubmissionConfirmationPopUp}
      onClose={handleClose}
      isDismissable={false}
      size="full"
      className="w-[35%]  h-[40%] "
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8">
              Submission Confirmation
            </div>

            <ModalBody>
              <div className=" text-center text-black  p-1 text-[12px] mt-2 font-bold">
                Are you sure to submit inspection results?
              </div>
              <div className="flex flex-row justify-center ">
                <div className="justify-center font-bold text-[12px] mt-1">
                  Username
                </div>
                <div className="justify-center ml-4">
                  <Input
                    labelPlacement="outside-left"
                    data-testid="vehicleClass"
                    className="w-[150px] rounded-sm"
                    radius="none"
                    size="sm"
                    name="center"
                    value={userName}
                    placeholder={userName}
                    readOnly
                    aria-label="center"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center font-bold">
                <div className="justify-center text-[12px] mt-1">Password</div>
                <div className="justify-center ml-5">
                  <Input
                    labelPlacement="outside-left"
                    data-testid="vehicleClass"
                    className="w-[150px] rounded-sm"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    type="text"
                    inputMode="none"
                    autoComplete="off"
                    style={{ WebkitTextSecurity: "disc" }}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-center mt-2">
                <Button
                  className={`bg-[#009b77] text-[white] font-bold rounded-sm h-7 `}
                  variant="bordered"
                  size="sm"
                  onClick={closeTabs}
                >
                  Yes
                </Button>
                <Button
                  className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 h-7 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  onPress={onClose}
                >
                  No
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
