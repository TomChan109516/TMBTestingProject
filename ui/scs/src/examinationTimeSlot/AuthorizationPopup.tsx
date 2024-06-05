import { Button, Input, useDisclosure, Modal,
    ModalContent,
    ModalBody,
    ModalFooter } from "@nextui-org/react";
import React, { ChangeEvent, useState } from "react";
import { AlertCircle, Eye, EyeOff, User, Lock } from "tabler-icons-react";
import { IFormErrors, IFormValues } from "../login/model/loginModel";



export default function AuthorizationPopup(props) {
  //const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const{allowOverBook,setAllowOverBook}=props;
  const [formValues, setFormValues] = useState<IFormValues>({
    userId: "",
    password: "",
  });
//   const [formErrors, setFormErrors] = useState<IFormErrors>({
//      userId: "",
//       password: "",
//    });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleVisibility = () => setShowPassword(!showPassword);


  
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

 

  const handleClose = () => {
    setAllowOverBook(false);
  }

  return (
    <div className="w-[100%] h-[100%]">
      <>
        <Modal isOpen={allowOverBook} onClose={handleClose}  size="3xl" >
          <ModalContent>
            {(onClose) => (
              <>
                
                <ModalBody>
                  <div className="text-left  font-[Calibir] text-sm font-bold text-[#007f62] mt-5 ">
                    Authorization
                  </div>
                  <div className=" flex flex-row border-2  border-white h-[70px]  w-[100%]  overflow-y-scroll ">
                    <AlertCircle
                      size={20}
                      strokeWidth={2}
                      color={"white"}
                      style={{ background: "#b91c1c" }}
                      className="rounded-lg text-white m-2 "
                    />
                     <div className=" mt-2 font-[Calibri] text-sm font-bold">
                      Reshedule must be made at least 14 days before examination
                      date.
                    </div>
                  </div>
                  <div>
                    <div className="text-left mt-[3%] ml-6">
                      <h3 className="font-bold font-[Calibri] text-sm">
                         Approver rank requried: Level 1
                      </h3>
                      <p className="font-[Calibri] text-sm">
                        Please input your User ID and Password to authorize the
                        operations
                      </p>
                    </div>
                    <div>
                      <div className="w-[90%] ml-10  mt-4">
                        <Input
                          name="userId"
                          aria-label="userId"
                          radius="none"
                          data-testid="userId"
                          size="md"
                          value={formValues.userId}
                          //errorMessage={formErrors.userId}
                          onChange={(e) => {
                            handleInputChange(e);
                          }}
                          className="border border-solid border-[lightgray]" 
                          
                          startContent={<User size={25} color="black"  />}
                        ></Input>
                      </div>
                      <Input
                        aria-label="password"
                        data-testid="password"
                        radius="none"
                        size="md"
                        name="password"
                        value={formValues.password}
                        //errorMessage={formErrors.password}
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
                        className=" w-[90%] ml-10 border border-solid border-[lightgray] mt-2"
                      />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    type="reset"
                    className="bg-[] font-bold border border-[lightgrey] shadow-sm font-[Calibri] text-sm font-bold rounded-sm"
                    size="sm"
                    radius="none"
                    variant="flat"
                    onPress={handleClose}
                  >
                    Cancle
                  </Button>
                  <Button
                    type="reset"
                    className="bg-[#00AF8F]  text-white font-bold border border-[lightgrey]  font-[Calibri] text-sm font-bold rounded-sm"
                    size="sm"
                    radius="none"
                    variant="flat"
                    onPress={onClose}
                  >
                    Confrim
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}
