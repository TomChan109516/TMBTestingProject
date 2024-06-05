import { Lock, User, EyeOff, Eye } from "tabler-icons-react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getCentersAll, validateLogin } from "./service/login.service";
import {
  saveCredentials,
  saveExaminationCentres,
  saveLoginResponse,
  saveLoader,
} from "./state/loginSlice";
import { IFormValues, IFormErrors, ICentres } from "./model/loginModel";

function Login() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<IFormValues>({
    userId: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    userId: "",
    password: "",
    centerID: "",
  });
  const [centreData, setCenterData] = useState<ICentres[]>([]);
  const [centreId, setCentreId] = useState<string>("");
  const [centreCode, setCentreCode] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleVisibility = () => setShowPassword(!showPassword);
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCentreData = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCentreId(event.target.value);
    const centre = centreData?.find((centre) => {
      if (centre.centreId === event.target.value) {
        return centre.centreCode;
      }
    });
    setCentreCode(centre?.centreCode);
  };

  const params = {
    status: "All",
  };

  const loadCentres = async () => {
      try {
        dispatch(saveLoader(true));
        const response = await getCentersAll(params);
        console.log('res',response);
        setCenterData(response.centres);
        dispatch(saveExaminationCentres(response.centres));
        dispatch(saveLoader(false));
      } catch (error) {
        setShowApiError(true);
        dispatch(saveLoader(false));
        if (!error.response) {
          setShowApiError(true);
          setApiErrorData("Server Error");
        } else {
          if (error.response.status === 401) {
            setApiErrorData(error.message);
          } else if (error.response.status === 500) {
            setApiErrorData("500 - Internal Error");
          } else {
            setApiErrorData(error.response.status);
          }
        }
      }
  };

  useEffect(() => {
  loadCentres();
  },[]);

  const signIn = async () => {
    localStorage.setItem('username', formValues.userId);
    localStorage.setItem('centre', centreCode);
    const loginData = {
      userName: formValues?.userId,
      password: formValues?.password,
      centreId: centreId,
    };
    try {
      dispatch(saveLoader(true));
      navigate("/createAppointPage");
      const response = await validateLogin(loginData);
      dispatch(saveCredentials(loginData));
      dispatch(saveLoginResponse(response));
      dispatch(saveLoader(false));
    } catch (error) {
      dispatch(saveLoader(false));
      setShowApiError(true);
      if (error.response.status === 401) {
        setApiErrorData("Username or Password is Incorrect");
      } else if (error.response.status === 500) {
        setApiErrorData("500 - Internal Error");
      } else {
        setApiErrorData(error.message);
      }
    }
  };
  const handleReset = () => {
    setFormValues({ userId: "", password: "" });
    setCentreId("");
    setCentreCode("");
    setFormErrors({ userId: "", password: "", centerID: "" });
  };
  const handleLogin = (evt) => {
    evt.preventDefault();
    console.log(evt);
    let isValid = true;
    const errors = {
      userId: "",
      password: "",
      centerID: "",
    };
    if (!formValues.userId) {
      errors.userId = "user id required";
      isValid = false;
    }
    if (!formValues.password) {
      errors.password = "password required";
      isValid = false;
    }
    if (!centreId) {
      errors.centerID = "Centre Id required";
      isValid = false;
    }
    setFormErrors(errors);
    if (isValid) {
      signIn();
    }
  };

  return (
    <div className="text-center">
      <Card
        radius="none"
        className="inline-flex w-[460px] absolute top-[20%] left-1/3 flex-col container content-center text-center border-[1px] border-solid border-[lightgray] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.2)]"
      >
        <CardHeader className="p-1  no-underline h-5 mt-3 ">
          <h2 className="p-2 w-full text-[black] self-center font-extrabold text-[18px] font-[system-ui]">
            SCS Login
          </h2>
        </CardHeader>
        <CardBody>
          <div className="w-[320px] self-center ">
            <Input
              name="userId"
              aria-label="userId"
              radius="none"
              data-testid="userId"
              size="lg"
              value={formValues.userId}
              errorMessage={formErrors.userId}
              onChange={(e) => {
                handleInputChange(e);
              }}
              className="border border-solid border-[lightgray]"
              startContent={<User size={25} color="black" />}
            ></Input>
          </div>
          <Input
            aria-label="password"
            data-testid="password"
            radius="none"
            size="lg"
            name="password"
            value={formValues.password}
            errorMessage={formErrors.password}
            onChange={(e) => {
              handleInputChange(e);
            }}
            startContent={<Lock size={30} color="black" />}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {showPassword ? (
                  <Eye size={22} color="black" />
                ) : (
                  <EyeOff size={22} color="black" />
                )}
              </button>
            }
            type={showPassword ? "text" : "password"}
            className="max-w-xs w-[320px] self-center border border-solid border-[lightgray] mt-2"
          />
          <div className="flex w-[320px] self-center gap-4 bg-white mt-2 text-xs">
            <Select
              size="sm"
              data-testid="centre"
              placeholder="Center"
              selectedKeys={[centreId]}
              value={centreId}
              name="centre"
              aria-label="centre"
              variant="bordered"
              onChange={(e) => {
                handleCentreData(e);
              }}
              errorMessage={formErrors.centerID}
              radius="none"
              className="max-w-xs bg-white"
            >
              {centreData?.map((center) => (
                <SelectItem
                  key={center?.centreId}
                  value={center.centreId}
                  className="text-xs"
                >
                  {center?.centreCode}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Button
            radius="none"
            className="bg-[#00AF8F] text-white w-[320px] mt-[10px] self-center font-bold text-base rounded-sm"
            type="submit"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </Button>
          <Button
            radius="none"
            onClick={handleReset}
            className="bg-white text-[black] w-[320px] mt-[10px] self-center border-[lightgray] border-solid border-[1px] font-bold text-base decoration-black rounded-sm"
          >
            Reset
          </Button>
          {/* {showApiError === true ? (
            <div className="flex transition-timing-function: cubic-bezier(0.4, 0, 1, 1) p-4 justify-center ...">
              <div>
                <Chip color="default" radius="full">
                  <div className="text-center">{apiErrorData}</div>
                </Chip>
              </div>
            </div>
          ) : (
            ""
          )} */}
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
