import React, { useState, ChangeEvent, useEffect } from "react";
import { Button, Card, CardBody, CardHeader, Input, Select, SelectItem, Switch, cn } from "@nextui-org/react";
import { Eye, EyeOff } from "tabler-icons-react";
import { useNavigate } from "react-router";
import { IFormValues, IFormErrors } from "./model/loginModel";
import LoginPopup from "../login/LoginPopup";

// **** FOR DEMO PURPOSE WE COMMENT THIS CODE BUT AFTER TESTING UNCOMMENT THIS CODE  ****

import { useDispatch } from "react-redux";
// import { saveCredentials } from "./state/loginSlice";
import { getstationdetils, validateLogin } from "./service/login.service";
import {
  saveCredentials,
  saveLoader,
  saveLoginResponse,
} from "./state/loginSlice";
import axios from "axios";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormValueState = {
    userId: "",
    password: "",
  };
  const [formValues, setFormValues] = useState<IFormValues>(
    initialFormValueState
  );
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    userId: "",
    password: "",
  });

const VICS = "Vehicle Inspection Control System (VICS)";
const VICCS="Vehicle Inspection Control and Scheduling System (VICCS)"
  const [title, setTitle]=useState<string>(VICS); 
  const [station, setStation]=useState<string>("B");
  const [altStation, setAltStation]=useState<string>("A(B)")
  const [altIRS, setAltIRS]=useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [exitButton, setExitButton] = useState<boolean>(false);
  const [currentStation, setCurrentStation] = useState<string>("");
  const [lane, setLane] = useState<string>("");
  const [ipAddress, setIpAddress] = useState<string>("");
  const [deviceType, setDeviceType] = useState<string>("");
  const [isSmartCard, setIsSmartCard] = useState<boolean>(false);

  const getIP: string | null = new URLSearchParams(window.location.search).get(
    "clientip"
  );
  const toggleVisibility = () => setShowPassword(!showPassword);

  const closePopup = () => {
    setExitButton(false);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // **** FOR DEMO PURPOSE WE COMMENT THIS CODE BUT AFTER TESTING UNCOMMENT THIS CODE AND REPLACE THE URL ****

  const getIp = async () => {
    getstationData(getIP);
  };

  useEffect(() => {
    if(props.title===VICCS){
      setTitle(props.title)
      setCurrentStation(props.station);
      setStation(props.station);
      setAltStation(props.altStation)
    }
    getIp();
  }, []);

  const signIn = async () => {
    const loginData = {
      userId: formValues?.userId,
      password: formValues?.password,
      ipAddress: ipAddress,
    };
    try {
      dispatch(saveLoader(true));
      const response = await validateLogin(loginData);
      dispatch(saveCredentials(loginData));
      dispatch(saveLoginResponse(response));
      dispatch(saveLoader(false));
      localStorage.setItem("userName", response.userName);
      localStorage.setItem("station", JSON.stringify(response.stationId));
      localStorage.setItem("lane", JSON.stringify(response.laneId));
      localStorage.setItem("clientip", JSON.stringify(response.ipAddress));
      localStorage.setItem("deviceType", deviceType);
      if (response.isSuccess) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/vehicleRegistration");
      }
    } catch (error) {
      dispatch(saveLoader(false));
    }
  };

  const getstationData = async (getIP) => {
    try {
      dispatch(saveLoader(true));
      const response = await getstationdetils(getIP);
      setCurrentStation(response.stationId);
      setLane(response.laneId);
      setIpAddress(response.ipAddress);
      dispatch(saveLoader(false));
      setDeviceType(response.deviceType);
    } catch (error) {
      dispatch(saveLoader(false));
    }
  };
  // **** FOR DEMO PURPOSE WE COMMENT THIS CODE BUT AFTER TESTING UNCOMMENT THIS CODE AND REPLACE THE URL ****
  const handleReset = () => {
    setFormValues({ userId: "", password: "" });
    setFormErrors({ userId: "", password: "" });
    setExitButton(true);
  };
  const handleLogin = (evt) => {
    // const loginData: ICredentials = { userName: formValues.userId, password: formValues.password, ipAddress: ipAddress };
    evt.preventDefault();
    //localStorage.setItem("Username", formValues.userId);
    let isValid = true;
    const errors = {
      userId: "",
      password: "",
    };
    if (!formValues.userId) {
      errors.userId = "user id required";
      isValid = false;
    }
    if (!formValues.password) {
      errors.password = "password required";
      isValid = false;
    }
    setFormErrors(errors);
    if (isValid) {
      signIn();
    }
  };

  const handleSmartCardClick = () => {
    setIsSmartCard(true);
  };

  const handleUserIdAndPasswordClick = () => {
    setIsSmartCard(false);
    setFormValues(initialFormValueState);
  };

  const handleSwitchChange=(e)=>{
    if(e.target.checked){
      setCurrentStation(altStation)
      setAltIRS(true)
    }
    else{
      setCurrentStation(station)
      setAltIRS(false)
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-tropicalrainforest font-calibri">
      {exitButton && <LoginPopup data-testid="loginPopup" closePopup={closePopup} />}
      <div className="text-h1Heading  pb-10 font-extrabold font-Cambria text-white">
        {title}
      </div>
      <div className="flex flex-row justify-center w-[100%] p-2">
        <Card
          radius="none"
          className=" shadow-md text-center font-bold text-textGrey"
          classNames={{
            base: "w-[500px] md:w-[500px] lg:w-[600px]",
            body: "self-center",
          }}
        >
          <CardHeader>
            <h2 className=" w-[100%] text-[25px] items-center">System Login</h2>
          </CardHeader>
          <CardBody className="w-[65%]">
            <div className="flex flex-row flex-wrap md:flex-nowrap  items-center">
              <div className="w-[35%] text-lg self-center font-bold">
                <span className="text-requiredFieldColor text-[30px] ">*</span>{" "}
                User Id
              </div>

              <Input
                name="userId"
                aria-label="userId"
                radius="none"
                data-testid="userId"
                size="none"
                placeholder="Please enter the account ID"
                isReadOnly={isSmartCard}
                value={formValues.userId}
                errorMessage={formErrors.userId}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="border border-solid border-[lightgray] font-extrabold mt-3"
                classNames={{ input: "h-9" }}
              ></Input>
            </div>
            {!isSmartCard && (
              <div className="flex flex-row flex-wrap md:flex-nowrap items-center">
                <div className="w-[35%] text-lg self-center font-bold">
                  <span className="text-requiredFieldColor text-[30px] font-bold">
                    *
                  </span>
                  Password
                </div>

                <Input
                  aria-label="password"
                  data-testid="password"
                  radius="none"
                  size="none"
                  name="password"
                  placeholder="Please input a password"
                  value={formValues.password}
                  errorMessage={formErrors.password}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      data-testid="toggle-visibility"
                      onClick={toggleVisibility}
                    >
                      {showPassword ? (
                        <Eye size={18} color="black" />
                      ) : (
                        <EyeOff size={18} color="black" />
                      )}
                    </button>
                  }
                  type={showPassword ? "text" : "password"}
                  className="border border-solid border-[lightgray] mt-3 font-extrabold"
                  classNames={{ input: "h-9" }}
                ></Input>
              </div>
            )}

            <div className="flex flex-row justify-center mt-3">
              <div className="mr-2">
                <Button
                  radius="md"
                  className="bg-tropicalrainforest text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm"
                  type="submit"
                  data-testid="loginButton"
                  onClick={(e) => handleLogin(e)}
                >
                  OK
                </Button>
              </div>
              <div className="ml-2">
                <Button
                  radius="md"
                  data-testid="exit-button"
                  onClick={handleReset}
                  className="bg-white text-[black] float-left mt-[10px] self-center border-[lightgray] border-solid border-[1px] font-bold h-8 text-base decoration-black rounded-sm"
                >
                  EXIT
                </Button>
              </div>
            </div>
          </CardBody>
          <div className="font-bold font-calibri text-left pl-4 pb-3">
            <div className=" flex justify-between">
              <p>Lane : {lane}</p>
            { title!==VICCS && <p
              data-testid="smartCard"
                className=" md:mr-7 hover:cursor-pointer drop-shadow-md text-hyperlink"
                onClick={
                  !isSmartCard
                    ? handleSmartCardClick
                    : handleUserIdAndPasswordClick
                }
              >
                {isSmartCard
                  ? "Login with UserId & Password"
                  : "Login with Smart Card"}
              </p>}
            </div>
           <div className="flex flex-row">
             <div>Station : <span className={altIRS?'text-red':'text-black'}>{currentStation}</span></div>
           {title===VICCS ?<div className="ml-2">
            <Switch defaultSelected size="sm" value="Alt.IRS"
            color="success"
            aria-label="Alt.IRS"
            data-testid="AltIRS"
            name="Alt.IRS"
            startContent={<p style={{ color: 'white' }}>Alt.IRS</p>}
            endContent={<p style={{ color: 'white' }}>Alt.IRS</p>}
            classNames={{
              wrapper:
                "group-data-[selected=true]:bg-[#00AF8F] group:data-[pressed=true]:bg-[#00AF8F] text-white w-[70px] overflow-visible",
                thumb: cn(
                  "w-5 h-5 shadow-md",
                  "group-data-[hover=true]:border-primary",
                  "group-data-[selected=true]:ml-12",
                  "group-data-[pressed=true]:w-7 ",
                  "group-data-[selected]:group-data-[pressed]:ml-4 "
                ),
              }}

            onChange={handleSwitchChange}
            />
            </div>:null}
           </div>
           <div className="flex justify-between text-center">
            <p>IP : {ipAddress}</p>
            {title===VICCS?<div className="flex flex-row -mt-3 font-bold">
              <span className="mr-2 mt-1">Centre</span>
              <Select
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    variant="bordered"
                    value="TY1"
                    className="w-[120px] mr-5 h-5 "
                    // onChange={handleChangeCentre}
                  >
                   
                      <SelectItem key="TY1" value="TY1">
                        TY1
                      </SelectItem>
                    
                  </Select>
            </div>:null}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;
