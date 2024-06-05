import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem
 
} from "@nextui-org/react";

function DynoTestConfig(props) {
  const open = props.showDynoTestConfig;
  const handleClose = () => {
     props. closeDynoTestConfig(false);
  };
    
  return (
    <Modal
        size="full"
        className="rounded-md h-[90%] w-[70%] border-1 border-[black]"
        onClose={handleClose}
        isOpen={open}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black bg-lightGreen font-calibri font-bold text-center i justify-center gap-1">
               Test Configuration
               </ModalHeader>
              <ModalBody>
               <div className="overflow-auto flex flex-row font-calibri">
                
                <div className="flex flex-col">


                <div className=" flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[35%] ">
                     Double Axle Propulsion
                    </div>
                    <div className=" ml-5 mt-1">
                     <Select
                      style={{ textAlign: 'center' }}
                      labelPlacement="inside-left"
                      label="Yes"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      className="w-[130px] ml-4  font-bold bg-white border-greyBorder  rounded-sm"
                          >
                    <SelectItem key={1}>-</SelectItem>
                    </Select>
                    </div>
                    </div>


                  <div className="flex flex-row mt-4">
                <div className=" font-bold text-[14px] mt-1">
                      Sweep Rate(m/s²)
                    </div>
                    <div className=" ml-8">
                    <Input isDisabled
                     style={{ textAlign: 'center' }}
                        value="0.5"
                        className="w-[130px]  bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                    />
                    </div>
                    </div>

                    <div className="flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[40%]">
                      Max.Speed cannot Exceed(km/h)
                    </div>
                    <div className=" mt-2 ml-5">
                      <Input isDisabled
                       style={{ textAlign: 'center' }}
                      value="100"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[34.5%]">
                      Constant Speed Duration(s)
                    </div>
                    <div className=" mt-1 ml-9 ">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="3"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-4">
                <div className=" font-bold text-[14px] mt-2 w-[35.5%]">
                      Emission Limit
                    </div>
                    <div className=" mt-1 ml-8 ">
                      <Input isDisabled
                        className="w-[130px] bg-greyBorder"
                        style={{ textAlign: 'center' }}
                        value="50"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-5">
                <div className=" font-bold text-[14px] w-[42.5%] mt-2">
                      Fuel Density(g/cm³)
                    </div>
                    <div className="  mt-1 ml-3  ">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="0.86"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className=" flex flex-row mt-6">
                <div className=" font-bold text-[14px] w-[37%] mt-2 ">
                    Fuel Supply Type
                    </div>
                    <div className=" ml-7">
                     <Select isDisabled
                      labelPlacement="inside-left"
                      label="--"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      className="w-[130px]  font-bold bg-greyBorder border-greyBorder  rounded-sm"
                          >
                    <SelectItem key={1}>-</SelectItem>
                    </Select>
                    </div>
                    </div>

                    <div className=" flex flex-row mt-6">
                <div className=" font-bold text-[14px] w-[42%] mt-2 ">
                     Power Correction
                    </div>
                    <div className="ml-3 ">
                     <Select isDisabled
                      labelPlacement="inside-left"
                      label="Manual"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      className="w-[130px]  font-bold bg-greyBorder border-greyBorder  rounded-sm"
                          >
                    <SelectItem key={1}>-</SelectItem>
                    </Select>
                    </div>
                    </div>


                </div>

               <div className="flex flex-col ml-4 mt-2">
               <div className="flex flex-row mt-2">
                <div className=" font-bold text-[14px] mt-1">
                      Rated Speed(RPM)
                    </div>
                    <div className=" ml-8">
                      <Input
                       style={{ textAlign: 'center' }}
                       value="3000"
                       className="w-[130px] "
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>
                 <div className="flex flex-row mt-5">
                <div className=" font-bold text-[14px] mt-2">
                      Scan Deceleration
                    </div>
                    <div className=" ml-5">
                      <Input isDisabled
                       style={{ textAlign: 'center' }}
                       value="1"
                       className="w-[130px] bg-greyBorder mt-1 ml-4"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-5">
                <div className=" font-bold text-[14px] w-[40%]">
                      Min. Speed cannot Exceed(km/h)
                    </div>
                    <div className=" mt-1 ml-6">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="50"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[34%]">
                      Sampling Duration(s)
                    </div>
                    <div className=" mt-1 ml-10 ">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="5"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-4">
                <div className=" font-bold text-[14px] mt-1 w-[37%]">
                      End of Speed Rate Scanning(%) 
                    </div>
                    <div className=" mt-1 ml-8 ">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="20"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-3">
                <div className=" font-bold text-[14px] w-[42%]">
                      Fuel Viscosiy (mm²/s)
                    </div>
                    <div className="  mt-1 ml-4  ">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="2.6"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className=" flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[35%] mt-2 ">
                    Air Intake System
                    </div>
                    <div className=" ml-9">
                     <Select
                      labelPlacement="inside-left"
                      label="Naturally"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      className="w-[130px] font-bold bg-white border-greyBorder  rounded-sm"
                          >
                    <SelectItem key={1}>-</SelectItem>
                    </Select>
                    </div>
                    </div>

                    <div className="flex flex-row mt-6">
                <div className=" font-bold text-[14px] w-[40%] mt-1">
                      Dry Air Coefficient
                    </div>
                    <div className=" ml-5">
                      <Input isDisabled
                       style={{ textAlign: 'center' }}
                       value="88"
                       className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>
                </div>

               <div className="flex flex-col ml-4 mt-2">
                    <div className="flex flex-row mt-2">
                <div className=" font-bold text-[14px] w-[40%] mt-1">
                      Rated Power(KW)
                    </div>
                    <div className=" ml-5">
                      <Input
                        style={{ textAlign: 'center' }}
                        value="80"
                        className="w-[130px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                  <div className="flex flex-row mt-5">
                <div className=" font-bold text-[14px] w-[35.5%] ">
                      Constant Speed Range(%)
                    </div>
                    <div className=" ml-8 mt-1">
                      <Input isDisabled
                       style={{ textAlign: 'center' }}
                       value="1"
                       className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[40%]">
                      70km/h Linear Loading (KW)
                    </div>
                    <div className=" mt-1 ml-5">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="10"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className=" flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[35%] mt-1 ">
                     No. Drive Axle
                    </div>
                    <div className=" ml-9">
                     <Select
                      labelPlacement="inside-left"
                      label="2"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      className="w-[130px] font-bold bg-white border-greyBorder  rounded-sm"
                          >
                    <SelectItem key={1}>-</SelectItem>
                    </Select>
                    </div>
                    </div>

                    <div className="flex flex-row mt-5">
                <div className=" font-bold text-[14px]  w-[35%]">
                      Power Discount Factor (%)
                    </div>
                    <div className=" mt-1 ml-9 ">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="50"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[35%]">
                      Ambient Temperature(°C)
                    </div>
                    <div className="  mt-1 ml-9  ">
                      <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="25"
                        className="w-[130px] bg-greyBorder"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className=" flex flex-row mt-4">
                <div className=" font-bold text-[14px] w-[38%] mt-1 ">
                    Correction Factor
                    </div>
                    <div className=" ml-7">
                    <Input isDisabled
                        style={{ textAlign: 'center' }}
                        value="--"
                        className="w-[130px] bg-greyBorder "
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    
                    </div>
                    </div>
                    </div>

               </div>
                </ModalBody>
              <ModalFooter className="justify-center mb-4  ">
                <Button
                  onClick={handleClose}
                  className="text-white font-calibri font-bold rounded-md bg-persianGreen border-[#e0dede] h-8 "
                  variant="light"
                  
                
                 role="buttonYes">
                  Save
                </Button>
                <Button 
                onClick={handleClose}
                title="no" data-testId="no" className="text-black font-calibri font-bold  rounded-md bg-white border-1 border-[#e0dede] h-8 ml-4"
                 role="buttonNo">
                  Cancel
                </Button>
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  );
}

export default DynoTestConfig;



