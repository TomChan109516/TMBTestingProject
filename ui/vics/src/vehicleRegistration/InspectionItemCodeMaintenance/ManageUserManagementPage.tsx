import {
    Modal,
    ModalContent,
    ModalBody,
    Button,
    Select,
    SelectItem,
    Input,
  } from "@nextui-org/react";
  import React from "react";
  import PropTypes from "prop-types";
 

    const ManageUserManagementPage = (props) => {
        const open = props.showManageUserManagementPage;
        
        const handleClose = () => {
          props.closeManageUserManagementPage(false);
        };
    return (
      <>
        <Modal
          
          isOpen={open}
          onClose={handleClose}
          className="font-calibri text-inputTxt w-[500px] h-fit rounded-md">
          <ModalContent className="mb-3">
            <div
              className="bg-[#ddf3f2] h-8 w-[100%] p-1 font-bold text-black text-center justify-center
              text-popupHeading">
              User Information
            </div>
            <ModalBody>
              <div className="flex justify-center items-center font-bold text-black">
                <div className="w-[20%] text-right mr-3">User Role</div>
                <div className="w-[31%]">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    variant="bordered"
                    name="page"
                    aria-label="center"
                    radius="none"
                    className="rounded-sm"
                  >
                    <SelectItem key={""}>DTCS</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center items-center  font-bold text-black">
                <div className="w-[20%] text-right mr-3">User ID</div>
                <div className="w-[31%]">
                  <Input
                    size="sm"
                    radius="none"
                    variant="bordered"
                    classNames={{ inputWrapper: "h-7 w-[100%] rounded-sm" }}
                  ></Input>
                </div>
              </div>
              <div className="flex justify-center items-center  font-bold text-black">
                <div className="w-[20%] text-right mr-3">Password</div>
                <div className="w-[31%]">
                  <Input
                    size="sm"
                    variant="bordered"
                    radius="none"
                    type="password"
                    classNames={{ inputWrapper: "h-7 w-[100%] rounded-sm" }}
                  ></Input>
                </div>
              </div>
              <div className="flex justify-center items-center font-bold text-black">
                <div className="w-[20%] text-right mr-3">Dyno Room</div>
                <div className="w-[31%] ">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    variant="bordered"
                    radius="none"
                    className="rounded-sm"
                  >
                    <SelectItem key={""}>DTCS</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center items-center  font-bold text-black">
                <div className="w-[20%] text-right mr-3">Smart Card</div>
                <div className="w-[31%]">
                  <Input
                    size="sm"
                    variant="bordered"
                    radius="none"
                    classNames={{ inputWrapper: "h-7 w-[100%] rounded-sm" }}
                  ></Input>
                </div>
              </div>
              <div className="flex justify-center items-center font-bold text-black">
                <div className="w-[20%] text-right mr-3">Real Name</div>
                <div className="w-[31%]">
                  <Input
                    size="sm"
                    variant="bordered"
                    radius="none"
                    classNames={{ inputWrapper: "h-7 w-[100%] rounded-sm" }}
                  ></Input>
                </div>
              </div>
              <div className="flex justify-center items-center font-bold text-black">
                <div className="w-[20%] text-right mr-3">User Name</div>
                <div className="w-[31%]">
                  <Input
                    size="sm"
                    variant="bordered"
                    radius="none"
                    classNames={{ inputWrapper: "h-7 w-[100%] rounded-sm" }}
                  ></Input>
                </div>
              </div>
              <div className="flex justify-center items-center font-bold text-black">
                <div className="w-[20%] text-right mr-3">Lane</div>
                <div className="w-[31%] ">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    variant="bordered"
                    radius="none"
                    className="rounded-sm"
                  >
                    <SelectItem key={""}>31</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center items-center font-bold text-black">
                <div className="w-[20%] text-right mr-3">Station</div>
                <div className="w-[31%] ">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    variant="bordered"
                    radius="none"
                    className="rounded-sm"
                  >
                    <SelectItem key={""}>F</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center items-center font-bold text-black pl-[93px]">
                <div className="w-[20%] text-right mr-3">Signature</div>
                <div className="w-[37%] "></div>
                <Button
                  className="m-1 bg-persianGreen text-white font-bold rounded-sm"
                  size="sm"
                >
                  Sign
                </Button>
              </div>
              <div className="flex justify-center items-center font-bold text-black">
                <Button
                  className="m-1 bg-persianGreen text-white font-bold rounded-sm"
                  size="sm"
                >
                  Save
                </Button>
                <Button
                  className="m-1 bg-white border text-black font-bold ml-4 rounded-sm"
                  size="sm"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
       
    );
  };
  ManageUserManagementPage.propTypes = {
    showManageUserManagementPage: PropTypes.bool,
    closeManageUserManagementPage: PropTypes.func,
  }


  export default ManageUserManagementPage;