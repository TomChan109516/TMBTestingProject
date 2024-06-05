import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,

  Select,
  SelectItem,
} from "@nextui-org/react";

import {

  saveExaminationCentres,

  saveLoader,
} from "../login/state/loginSlice"
import { useDispatch } from "react-redux";
import { getCenters } from "../login/service/login.service";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";


type CentreData = {
  centerId: string;
  centerName: string;
};


 function PaymentReconciliationReport() {
  const dispatch = useDispatch();


  const [centreData, setCenterData] = useState<CentreData[]>([]);
  const [centerId, setCenterId] = useState<Set<string>>(new Set([]));
 
  
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("");
  

  const handleCenterData = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCenterId(new Set(event.target.value.split(",")));
  };
  


 

  

  const loadCentres = useCallback(async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getCenters();
      setCenterData(response);
      dispatch(saveExaminationCentres(response));
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
  }, [dispatch]);

  useEffect(() => {
    loadCentres();
   
  }, [loadCentres]);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
      setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
      setToDate(newValue);
  };
  


 
  return (
    <div>
     
      <div className="  mt-7 ">
        <h1 className="h-[100px]    mr-2 ml-2  ">
          <h5 className="absolute -top-3 start-3 pl-[10px] pr-[10px] text-[12px] text-[#00AF8F] font-[Calibri] ">
          Payment Reconciliation Report
          </h5>
          <div className="grid grid-cols-2  row-3 gap-2 mt-[13px] text-[12px] font-bold font-[Calibri] w-[100%]  ">
            <div className="grid grid-rows-3 h-[100px] grid-flow-col ml-6">
              <div className="flex flex-row items-center">
                <div className="w-[5%] text-left">Centre</div>
                <div className="w-[95%] ml-[30px]">

                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    placeholder="Select"

                    selectedKeys={centerId}
                    onChange={(e) => {
                      handleCenterData(e);
                    }}
                    className="w-[85%] bg-white ml-[17px]"
                  >
                    {centreData?.map((center) => (
                      <SelectItem
                        key={center?.centerId}
                        value={center.centerId}
                        className="text-xs"

                      >
                        {center?.centerId}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
          
             
            </div>
            
            <div className="grid  grid-flow-col">
            <div className="grid grid-rows-3 h-[90px] grid-flow-col ml-6 mt-[px]">
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Transaction Date</div>
              

                <div className=" flex flex-row  mt-2 w-[85%] ml-[20px]">
                                    
                                    <div className="inline-flex border border-solid border-[lightgray] w-[42%] ml-[px] h-8">
                                        <CalendarEvent color="grey" size="25" />
                                        <DatePicker
                                            name="fromDate"
                                            selected={fromDate}
                                            onChange={handleFromDateChanged}
                                            className="text-[12px] p-[2px] w-[140%] selection:border-none mt-1"
                                        />
                                    </div>
                                    <div className="w-[10%] ml-[5px]">  To </div>
                                    <div className=" inline-flex border border-solid border-[lightgray] w-[42%]  mr-1 h-8">
                                        <CalendarEvent color="grey" size="25" />
                                        <DatePicker
                                            name="toDate"
                                            selected={toDate}
                                            onChange={handleToDateChanged}
                                            className="text-[12px] p-[px] w-[140%] mt-1"
                                        />
                                    </div>
                              
                </div>
              </div>
             
              <div className="flex justify-end  font-bold gap-1 mt-4 ">
                <Button
                  className={`bg-[#00af8f] text-white rounded-sm mr-5 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                >
                  Generate
                </Button>
            
         
        
          </div>
            </div>
              
            </div>
          
          </div>
         
       
        
          
        </h1>
       
       
      </div>
    </div>
  );
}
export default PaymentReconciliationReport;