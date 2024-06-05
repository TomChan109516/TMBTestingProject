import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import { AlertCircle } from "tabler-icons-react";
export default function RegistrationErrorPopUp(props) {
  const [apiErrorData] = useState(props.apiErrorData);
  const [errorMessage, setErrorMessage] = useState("");
  const [lsmessage, setLsMessage] = useState(""); // Fix: Destructure useState call into value + setter pair

  const handleClose = () => {
    props.closePopup(false);
  };
  const [userName] = useState<string>(localStorage.getItem("userName") || "");
  useEffect(() => {
    if (apiErrorData === "Request failed with status code 404") {
      setErrorMessage(
        "Please note this is an invalid appointment number. Please enter a valid appointment number."
      );
    } else if (apiErrorData === "Not todays appointment") {
      setErrorMessage(
        "Please note this appointment is not today's appointment. Appointment will not proceed."
      );
    } else if (apiErrorData === "Not In Lane") {
      setErrorMessage(
        " Please note this appointment is not at the assigned lane. "
      );
    } else if (apiErrorData === "Cancel Reason") {
      setErrorMessage(
        "Please note this appointment is bearing a Cancel Reason Code. "
      );
    } else if (apiErrorData === "Inspection order") {
      setErrorMessage(
        "Please note this appointment is bearing an Inspection order. "
      );
    } else if (apiErrorData === "WatchList") {
      setErrorMessage(" Please note this appointment is in the Watch List ");
    }
    setLsMessage(" LS approval required to proceed.");
  }, []);

  return (
    <Modal
      isOpen={true}
      onClose={handleClose}
      isDismissable={false}
      className={
        apiErrorData === "Request failed with status code 404" ||
        apiErrorData === "Not todays appointment"
          ? "w-[30%] h-[25%]"
          : "w-[35%] h-[38%]"
      }
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-lightGreen w-[100%]  text-[12px] p-2 font-bold text-black text-center h-8">
              Registration Alert
            </div>

            <ModalBody>
              <div className=" flex justify-center text-center text-black  text-[12px] mt-2 font-bold">
                <AlertCircle
                  size={30}
                  strokeWidth={2}
                  color={"red"}
                  className="mr-2 w-[70px] h-[40px]  "
                />
                {apiErrorData === "Request failed with status code 404" ||
                apiErrorData === "Not todays appointment" ? (
                  <div>
                    <div className="text-start ml-4">{errorMessage}</div>
                    <div className="flex flex-row justify-center mt-2">
                      <Button
                        data-testid="Back"
                        className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm mt-2 h-7 ml-[-20px] `}
                        variant="bordered"
                        size="sm"
                        type="submit"
                        onPress={onClose}
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-start">
                      {errorMessage} <br></br>
                      {lsmessage}
                    </div>
                    <div className="flex flex-row  mt-4">
                      <div className=" font-bold text-[12px] mt-1">
                        Username
                      </div>
                      <div className="ml-4">
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
                    <div className="flex flex-row  font-bold mt-1">
                      <div className=" text-[12px] mt-1">Password</div>
                      <div className=" ml-5">
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
                    <div className="flex flex-row mt-4 ">
                      <Button
                        className={`bg-[#009b77] text-[white] font-bold rounded-sm ml-5 h-7 `}
                        variant="bordered"
                        size="sm"
                      >
                        Proceed
                      </Button>
                      <Button
                        className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-5 h-7 `}
                        variant="bordered"
                        size="sm"
                        type="submit"
                        onPress={onClose}
                      >
                        No
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
