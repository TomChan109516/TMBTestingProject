import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, useDisclosure,Select, SelectItem, CheckboxGroup, Textarea } from '@nextui-org/react';
 
export const ChangeOfVehicleParticularsPopup = (props) => {
    const {showChangeOfVehicleParticularsPopup, closeChangeOfVehicleParticularsPopup} =  props;
 
  const handleClose = () => {
    closeChangeOfVehicleParticularsPopup(false);
  };

    const axileWeightData = [{id:1, value:1},
    {id:2, value:2},
    {id:3, value:3},
    {id:4, value:4},
    {id:5, value:5},
    {id:6, value:6},
    {id:7, value:7},
    {id:8, value:8},
   
    ]
 
    const { onOpen, onOpenChange, isOpen} = useDisclosure();
    const [onConfirm, setOnConfirm] = useState(false);
   
    const [checkedField, setCheckedField] = useState(false);
    const [isDisabledInput, setIsDisabledInput] = useState(true);
 
    const handleCheckboxChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
       const value=e.target.value;
       const checked=e.target.checked;
        switch(value){
            case 'T.A. No':
                if (checked) {
                    setCheckedField(false);
                    setIsDisabledInput(true);
                    console.log('checked', checked)
                    console.log(isDisabledInput, checkedField)
                 }
                else {
                    setCheckedField(true);
                    setIsDisabledInput(false);
                }
                break;
            default:
                setCheckedField(false);
                break;
          }
      }
 
  const handleConfirm=()=>{
    setOnConfirm(true);
  }
 
    return (<div>
<Modal isOpen={showChangeOfVehicleParticularsPopup} onClose={handleClose} size="4xl" 
       >
        <ModalContent className='overflow-y-auto h-[100%]'>
        {(onClose) => (
            <>
                
              <div className="flex flex-col gap-1 text-[#00AF8F]  text-md font-[Calibri]  pt-4 pl-4 pb-0 font-bold">Change of Vehicle Particulars (TD559)</div>
              <ModalBody>
                <div className='flex flex-row text-[rgb(0,175,143)] bg-[#ccf3ec] p-1'>
                    <div className='flex flex-col-2 mr-3 text-md font-[Calibri] '>Vehicle Particulars</div>
                    <div className='flex flex-col-10 ml-10  font-[Calibri] text-md'> Value</div>
                </div>
 
                {/* <CheckboxGroup>
                    <Checkbox>
                        <div className='flex flex-row'>
                            <div className='grid grid-cols-2'>T.A. No.</div>
                            <div className='grid grid-cols-10'> <input type='text'/></div>
                        </div>
                    </Checkbox>
                </CheckboxGroup> */}
 
                            <div className="flex">
                                    <Checkbox
                                        key={1}
                                        radius="none"
                                        className=" rounded-sm mr-12 w-[100%] font-[Calibri] text-sm"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="T.A. No"
                                        onChange={ handleCheckboxChange} >T.A. No</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className='ml-8'/>
                            </div>
 
                             <div className="flex bg-[#ebfefb] ">  
                                    <Checkbox
                                        key={2}
                                        radius="none"
                                        className=" rounded-sm mr-12 font-[Calibri] text-md"
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Color">Color</Checkbox>
                              <div className='flex ml-11'>
                                <div className='flex w-[580px] font-[Calibri] text-md '>
                                    Primary
                                    <Select
                                            placeholder="Select"
                                            className="flex w-full font-[Calibri] text-md" children={undefined}                                    >
                                    </Select>
                                </div>
                                {/* <div className='flex w-[580px]'> */}
                               
                                    Secondary
                                    <Select
                                        placeholder="Select"
                                        className="font-[Calibri] text-md"
                                    >
                                    </Select>
                                {/* </div> */}
                                </div>
                            </div>
 
                            <div className="flex">
                                    <Checkbox
                                        key={3}
                                        radius="none"
                                        className=" rounded-sm mr-6 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Engine Number"
                                        onChange={ handleCheckboxChange} >Engine Number</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/>
                            </div>
 
                            <div className="flex justify-center align-items-center bg-[#ebfefb]">
                                    <Checkbox
                                        key={4}
                                        radius="none"
                                        className=" rounded-sm mr-2 w-[100%] font-[Calibri] text-md" 
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Cylinder Capacity"
                                        onChange={ handleCheckboxChange} >Cylinder Capacity</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/>
                                <span className='ml-2 align-middle font-[Calibri] text-md'>(c.c.)</span>
                            </div>
                             <div className="flex justify-center align-items-center">
                                    <Checkbox
                                        key={5}
                                        radius="none"
                                        className=" rounded-sm mr-10 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Rated Power"
                                        onChange={ handleCheckboxChange} >Rated Power</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/>
                                <span className='ml-2 align-middle font-[Calibri] text-md'>(kw)</span>
                            </div>
                       <div className="flex bg-[#ebfefb] ">  
                                 <Checkbox
                                        key={6}
                                        radius="none"
                                        className=" rounded-sm mr-10 font-[Calibri] text-md"
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Body Type">Body Type</Checkbox>
                                       
                              <div>
                               
                                    <Select
                                        placeholder="Select"
                                        className="flex flex-grow w-[650px] ml-4 font-[Calibri] text-md"
                                    >
                                    </Select>
                             </div>
                            </div>
                             <div className='flex'>
                            <Checkbox
                                        key={8}
                                        radius="none"
                                        className=" rounded-sm mr-10 w-[100%] font-[Calibri] text-md"
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Overall Dimentions">Overall Dimentions</Checkbox>
                               
                            <div className='flex font-[Calibri] text-md'>
                                <span>Length</span><Input type='text' isDisabled={isDisabledInput} className=''/><span className='font-[Calibri] text-md'>(m)</span></div>
                            <div className='flex font-[Calibri] text-md'><span>Width</span><Input type='text' isDisabled={isDisabledInput} className=''/><span className='font-[Calibri] text-md'>(m)</span></div>
                            <div className='flex font-[Calibri] text-md'><span>Height</span><Input type='text' isDisabled={isDisabledInput} className=''/><span className='font-[Calibri] text-md'>(m)</span></div>
                            </div>
 
                            <div className='flex  bg-[#ebfefb]'>
                            <Checkbox
                                        key={9}
                                        radius="none"
                                        className=" rounded-sm mr-12 w-[100%] font-[Calibri] text-md"
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Axle Weight">Axle Weight</Checkbox>
                               
                                {axileWeightData.map((data)=>{
                                    return(
                                        <div className='flex'>
                                        <div className='flex font-[Calibri] text-md' key={data.id}><span>{data.value}</span><Input type='text' isDisabled={isDisabledInput} className=''/></div>
                                        </div>
                                    )
                                })}
 </div>
 
 <div className="flex justify-center align-items-center">
                                    <Checkbox
                                        key={10}
                                        radius="none"
                                        className=" rounded-sm mr-10 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="PGV Weight"
                                        onChange={ handleCheckboxChange} >PGV Weight</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/><span className='ml-2 align-middle font-[Calibri] text-md'>(tonnes)</span>
                            </div>
 
                            <div className="flex justify-center align-items-center bg-[#ebfefb]">
                                    <Checkbox
                                        key={11}
                                        radius="none"
                                        className=" rounded-sm mr-10 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="LUG Weight"
                                        onChange={ handleCheckboxChange} >LUG Weight</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/><span className='ml-2 align-middle font-[Calibri] text-md'>(tonnes)</span>
                            </div>
                            <div className="flex justify-center align-items-center">
                                    <Checkbox
                                        key={12}
                                        radius="none"
                                        className=" rounded-sm mr-10 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="PCV Weight"
                                        onChange={ handleCheckboxChange} >PCV Weight</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/><span className='ml-2 align-middle font-[Calibri] text-md'>(tonnes)</span>
                            </div>
 
                            <div className="flex  bg-[#ebfefb]">
                                    <Checkbox
                                        key={13}
                                        radius="none"
                                        className=" rounded-sm mr-10 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Seat Capacity"
                                        onChange={ handleCheckboxChange} >Seat Capacity</Checkbox>
                                    <div className='flex flex-grow'>
                                    <span className=' align-middle font-[Calibri] text-md'>Lower</span><Input type='text' isDisabled={isDisabledInput} className=''/>
                                </div>
                                <div className='flex flex-grow'>
                                    <span className='ml-2 align-middle font-[Calibri] text-md'>Upper</span><Input type='text' isDisabled={isDisabledInput} className='flex flex-grow'/>
                                </div>
                            </div>
 
                            <div className="flex">
                                    <Checkbox
                                        key={14}
                                        radius="none"
                                        className=" rounded-sm mr-4 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Standing Capaticy"
                                        onChange={ handleCheckboxChange} >Standing Capaticy</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/>
                            </div>
 
                            <div className="flex bg-[#ebfefb]">
                               
                                    <Checkbox
                                        key={15}
                                        radius="none"
                                        className=" rounded-sm mr-12 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Propulsion"
                                        onChange={ handleCheckboxChange} >Propulsion</Checkbox>
                             
                                <div className='flex flex-shrink ml-4'>
                                    <CheckboxGroup orientation="horizontal" radius='none'>
                                    <Checkbox className='font-[Calibri] text-md'>Petrol</Checkbox>
                                        <Checkbox className='font-[Calibri] text-md'>Diesel</Checkbox>
                                        <Checkbox className='font-[Calibri] text-md'>Electric</Checkbox>
                                        <Checkbox className='font-[Calibri] text-md'>LPG</Checkbox>
                                        <Checkbox className='font-[Calibri] text-md'>Wanked</Checkbox>
                                        <Checkbox className='font-[Calibri] text-md'>Other</Checkbox>
                                    </CheckboxGroup>
                                <Input type='text' isDisabled={isDisabledInput} className='w-[16%]'/>
                                </div>
                            </div>
                            <div className="flex">
                                    <Checkbox
                                        key={16}
                                        radius="none"
                                        className=" rounded-sm w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Chassis Number Stamp"
                                        onChange={ handleCheckboxChange} >Chassis Number Stamp</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/>
                            </div>
                            <div className="flex bg-[#ebfefb] mt-0 mb-0 pt-0 pb-0">
                                    <Checkbox
                                        key={17}
                                        radius="none"
                                        className=" rounded-sm  w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Engine Number Stamp"
                                        onChange={ handleCheckboxChange} >Engine Number Stamp</Checkbox>
                                <Input type='text' isDisabled={isDisabledInput} className=''/>
                            </div>
                            <div className="flex">
                                    <Checkbox
                                        key={18}
                                        radius="none"
                                        className=" rounded-sm mr-12 w-[100%] font-[Calibri] text-md"
                                        isSelected={checkedField}
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        value="Others"
                                        onChange={ handleCheckboxChange} >Others</Checkbox>
                                <Textarea type='text ' isDisabled={isDisabledInput} className='ml-10'/>
                            </div>
                            </ModalBody>
                <div className='flex flex-row justify-between m-2 mb-4 '>
                    <div className='ml-3'>
                <Button className="border-[#e4e4e7] font-[Calibri] text-md  text-black rounded-sm" variant="bordered" radius="none" onPress={onClose}>
                  Close
                </Button>
                </div>
                <div className='mr-3'>
                <Button className="bg-[#00AF8F] font-[Calibri] text-md font-bold ml-30 text-white rounded-sm" radius="none" onPress={handleConfirm}>
                  Confirm
                </Button>
                </div>
                </div>
             
              </>)}
        </ModalContent>
        </Modal>
    </div>
    
    )
}
ChangeOfVehicleParticularsPopup.propTypes = {
    showChangeOfVehicleParticularsPopup:  PropTypes.bool,
    closeChangeOfVehicleParticularsPopup: PropTypes.func,
  };