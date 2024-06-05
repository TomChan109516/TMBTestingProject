import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  ModalHeader,
  SelectItem,
  Select,
  Input,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import DeleteVEEPairing from "./DeleteVEEPairing";
import { addVeePairing } from "./service/ArtAdministration.service";
import { IconInfoCircle } from "@tabler/icons-react";
const laneData = [
  { label: "1", id: "1" },
  { label: " 2", id: "2" },
  { label: "3", id: "3" },
  { label: "4", id: "4" },
  { label: " 5", id: "5" },
  { label: "6", id: "6" },
  { label: "7", id: "7" },
  { label: " 8", id: "8" },
  { label: "9", id: "9" },
  { label: "10", id: "10" },
  { label: " 11", id: "11" },
  { label: "12", id: "12" },
  { label: "13", id: "13" },
  { label: " 14", id: "14" },
  { label: "15", id: "15" },
  { label: "16", id: "16" },
  { label: " 17", id: "17" },
  { label: "18", id: "18" },
  { label: "19", id: "19" },
  { label: " 20", id: "20" },
  { label: "21", id: "21" },
  { label: "22", id: "22" },
  { label: " 23", id: "23" },
  { label: "24", id: "24" },
  { label: "25", id: "25" },
  { label: " 26", id: "26" },
  { label: "27", id: "27" },
  { label: "28", id: "28" },
  { label: " 29", id: "29" },
  { label: "30", id: "30" },
];
const stationData = [
  { label: "A", id: "1" },
  { label: " B", id: "2" },
  { label: "C", id: "3" },
  { label: "D", id: "4" },
  { label: " E", id: "5" },
];
export default function VEEPairingPopUp(props) {
  const [showDeleteVEEPairing, setshowDeleteVEEPairing] = useState(false);
  const { onAddVeePairingData } = props;

  const initialErrorState = {
    lane: "",
    description: "",
    address: "",
    port: "",
    keepAlive: "",
    station: "",
  };

  const [formData, setFormData] = useState({
    lane: "",
    description: "",
    address: "",
    port: "",
    keepAlive: "",
    station: "",
  });

  const [errors, setErrors] = useState(initialErrorState);
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [discriptionerrorMessage, setDiscriptionErrorMessage] = useState("");
  const [addresserrorMessage, setAddressErrorMessage] = useState("");
  const [porterrorMessage, setPortErrorMessage] = useState("");
  const [keepaliveerrorMessage, setKeepaliveerrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (formData.lane != "" && formData.station != "") {
      setFormData({ ...formData, [event.target.name]: event.target.value });
      
    }
  };

  const handleChangePort = (e) => {
    const re = /^[0-9]*$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setPortErrorMessage("");
    } else if (e.target.value !== "") {
      setPortErrorMessage("Please enter numeric characters only");
    }
  };

  const handleChangeLeepalive = (e) => {
    const re = /^[0-9]*$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setKeepaliveerrorMessage("");
    } else if (e.target.value !== "") {
      setKeepaliveerrorMessage("Please enter numeric characters only ");
    }
  };

  const handleChangeDiscription = (e) => {
    const re = /^[A-Za-z]*$/;
    if (
      e.target.value === "" ||
      (re.test(e.target.value) && e.target.value.length <= 25)
    ) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setDiscriptionErrorMessage("");
    } else if (e.target.value !== "") {
      setDiscriptionErrorMessage("Please enter only alphabetic characters ");
    }
  };

  const handleChangeAddress = (e) => {
    const re = /^[0-9.]*$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setAddressErrorMessage("");
    } else if (e.target.value !== "") {
      setAddressErrorMessage("Please enter valid characters only ");
    }
  };

  const handleDeletePopUp = (props) => {
    setshowDeleteVEEPairing(true);
    props.formData;
  };
  const closeDeleteVEEPairing = (val) => {
    setshowDeleteVEEPairing(val);
  };
  const open = props.showVEEPairingPopUp;
  const handleClose = () => {
    props.closeVEEPairingPopUp(false);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleaddVEEpairing = async () => {
    const newFormData = {
      id: "",
      laneId: formData.lane,
      stationId: formData.station,
      veesIp: formData.address,
      veesPort: formData.port,
      maxLogAge: 2,
      veeHeartBeatInterval: formData.keepAlive,
      description: formData.description,
      userId: "User1",
    };

    try {
      const apiResponse = await addVeePairing(newFormData);
      apiResponse.data.isSuccess && onAddVeePairingData();
      setIsSaveClicked(false)
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setIsSaveClicked(false);
    }
  };

  useEffect(() => {
    if (isSaveClicked) {
      if (Object.values(formData).every((value) => value !== "")) {
        setErrors(initialErrorState);

        handleaddVEEpairing();
      } else {
        const newErrors = { ...errors };

        Object.keys(formData).forEach((key) => {
          newErrors[key] = formData[key] ? "" : "This field is required";
        });

        setErrors(newErrors);
      }
    }
  }, [focusedField, formData, isSaveClicked]);

  return (
    <div>
      <Modal
        isOpen={open}
        onClose={handleClose}
        isDismissable={false}
        size="3xl"
        className="h-[41%] rounded-sm w-full"
        classNames={{
          backdrop: "bg-lightBlack/50 backdrop-opacity-40",
          header: "bg-[#d8f1f0] p-2  font-bold text-[13px] ",
          closeButton: "hover:bg-white/4 active:bg-white/10",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-[black]">
                <div className="text-center font-calibri font-bold text-popupHeading">
                  ARTU Unit Config
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <div>
                    <div className="text-[12px] font-calibri font-bold ">
                      <div className="w-full pl-2 ">
                        <div className=" grid  text-center w-[100%] text-[14px] font-bold font-[calibri] mt-2">
                          Select and add the ARTU Unit Configuration
                        </div>
                        <div>
                          <div className="grid grid-cols-3 gap-3 mt-4">
                            <div className="flex">
                              Lane
                              <Select
                                labelPlacement="outside-left"
                                onFocus={() => setFocusedField("lane")}
                                radius="none"
                                classNames={{ trigger: "min-h-unit-2 h-6" }}
                                variant="bordered"
                                name="lane"
                                aria-label="center"
                                className="w-[90px] font-[Calibri] ml-4"
                                value={[formData.lane]}
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                style={{
                                  border: errors.lane ? "2px solid red " : "",
                                  width: "100%",
                                }}
                              >
                                {laneData?.map((label) => (
                                  <SelectItem key={label.id}>
                                    {label.label}
                                  </SelectItem>
                                ))}
                              </Select>
                            </div>

                            <div>
                              <div className="flex">
                                <div className=""> Station</div>
                                <Select
                                  labelPlacement="outside-left"
                                  onFocus={() => setFocusedField("station")}
                                  radius="none"
                                  classNames={{ trigger: "min-h-unit-2 h-6" }}
                                  variant="bordered"
                                  name="station"
                                  aria-label="center"
                                  className="w-[90px] font-[Calibri] ml-3"
                                  value={[formData.station]}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                  style={{
                                    border: errors.station
                                      ? "2px solid red "
                                      : "",
                                    width: "100%",
                                  }}
                                >
                                  {stationData?.map((station) => (
                                    <SelectItem key={station.label}>
                                      {station.label}
                                    </SelectItem>
                                  ))}
                                </Select>
                              </div>
                            </div>
                            <div>
                              <div className="flex">
                                Description
                                <Input
                                  size="sm"
                                  onFocus={() => setFocusedField("description")}
                                  radius="none"
                                  variant="bordered"
                                  name="description"
                                  classNames={{
                                    inputWrapper: "h-7 w-[82%] ml-6",
                                  }}
                                  value={formData.description}
                                  onChange={(e) => handleChangeDiscription(e)}
                                  style={{
                                    border: errors.description
                                      ? "2px solid red "
                                      : "initial",
                                    width: "100%",
                                  }}
                                />
                              </div>
                              <div className="text-red">
                                {discriptionerrorMessage}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-3 gap-3 mt-2">
                          <div>
                            <div className="flex">
                              Address
                              <Input
                                size="sm"
                                radius="none"
                                variant="bordered"
                                onFocus={() => setFocusedField("address")}
                                name="address"
                                classNames={{
                                  inputWrapper: "h-7 w-[80%] ml-2   ",
                                }}
                                value={formData.address}
                                onChange={(e) => handleChangeAddress(e)}
                                style={{
                                  border: errors.address
                                    ? "2px solid red "
                                    : "initial",
                                  width: "100%",
                                }}
                              />
                            </div>
                            <div className="text-red">
                              {addresserrorMessage}
                            </div>
                          </div>
                          <div>
                            <div className="flex ml-1">
                              Port
                              <Input
                                size="sm"
                                radius="none"
                                variant="bordered"
                                onFocus={() => setFocusedField("port")}
                                name="port"
                                classNames={{
                                  inputWrapper: "h-7 w-[80%] ml-2   ",
                                }}
                                value={formData.port}
                                onChange={(e) => handleChangePort(e)}
                                style={{
                                  border: errors.port
                                    ? "2px solid red "
                                    : "initial",

                                  width: "100%",
                                }}
                              />
                            </div>
                            <div className="text-red">{porterrorMessage}</div>
                          </div>
                          <div className="w-full">
                            <div className="flex text-[12px]">
                              <div className="w-[50%] "> Keep Alive(ms)</div>
                              <Input
                                size="sm"
                                radius="none"
                                variant="bordered"
                                onFocus={() => setFocusedField("keepAlive")}
                                name="keepAlive"
                                classNames={{
                                  inputWrapper: "h-7 w-[90%] ml-2",
                                }}
                                value={formData.keepAlive}
                                onChange={(e) => handleChangeLeepalive(e)}
                                style={{
                                  border: errors.keepAlive
                                    ? "2px solid red "
                                    : "initial",

                                  width: "100%",
                                }}
                              />
                            </div>
                            <div className="text-red">
                              {keepaliveerrorMessage}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {errorMessage && (
                      <div className=" flex text-red-500 text-center text-red mt-3 ml-[20%]">
                        <div>
                          <IconInfoCircle
                            size={20}
                            strokeWidth={2}
                            color={"red"}
                            className=" h-[25px] mr-2"
                          />
                        </div>
                        {errorMessage}
                      </div>
                    )}
                  </div>
                </div>
              </ModalBody>
              <div className="grid grid-cols-3 gap-2   ml-[190px] mb-4">
                <div className="text-end">
                  <Button
                    className={`bg-navButton text-[white] shadow-sm rounded-sm ml-2 font-bold`}
                    variant="bordered"
                    size="sm"
                    type="submit"
                    onClick={() => setIsSaveClicked(true)}
                  >
                    Save
                  </Button>
                </div>
                <div>
                  <Button
                    className={`bg-white text-[black] shadow-sm rounded-sm font-bold`}
                    variant="bordered"
                    size="sm"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </div>
                <div className="text-center w-full">
                  <Button
                    className={`bg-darkred4 text-[white] shadow-sm rounded-sm w-[73%] mr-3 font-bold`}
                    variant="bordered"
                    size="sm"
                    onClick={handleDeletePopUp}
                  >
                    Delete VEE Pairing
                  </Button>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
      {showDeleteVEEPairing && (
        <DeleteVEEPairing
          showDeleteVEEPairing={showDeleteVEEPairing}
          closeDeleteVEEPairing={closeDeleteVEEPairing}
          formData={formData}
        ></DeleteVEEPairing>
      )}
    </div>
  );
}
