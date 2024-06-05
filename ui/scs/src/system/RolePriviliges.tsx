import { Button, Checkbox, CheckboxGroup, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";

const RolePriviliges = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [privileges, setPrivileges] = useState([ "Person",
  "PerSon",
  "PeRson",
  "PerSon1",
  "PerSon1",
  "PeRson1",
  "Person2",
  "PerSon2",
  "PeRson2",
  "Person3",
  "PerSon3",
  "PeRson3", "PerSon",
  "PeRson",
  "PerSon1",
  "PerSon1",
  "PeRson1",
  "Person2",
  "PerSon2",
  "PeRson2",
  "Person3",
  "PerSon3",
  "PeRson3", "PerSon",
  "PeRson",
  "PerSon1",
  "PerSon1",
  "PeRson1",
  "Person2",
  "PerSon2",
  "PeRson2",
  "Person3",
  "PerSon3",
  "PeRson3",]);
  const [roles, setRoles] = useState([ "Person",
  "PerSon",
  "PeRson",
  "PerSon1",
  "PerSon1",
  "PeRson1",
  "Person2",
  "PerSon2",
  "PeRson2",
  "Person3",
  "PerSon3",
  "PeRson3", "PerSon",
  "PeRson",
  "PerSon1",
  "PerSon1",
  "PeRson1",
  "Person2",
  "PerSon2",
  "PeRson2",
  "Person3",
  "PerSon3",
  "PeRson3", "PerSon",
  "PeRson",
  "PerSon1",
  "PerSon1",
  "PeRson1",
  "Person2",
  "PerSon2",
  "PeRson2",
  "Person3",
  "PerSon3",
  "PeRson3", "PerSon",
  "PeRson",
  "PerSon1",
  "PerSon1",
  "PeRson1",
  "Person2",
  "PerSon2",
  "PeRson2",
  "Person3",
  "PerSon3",
  "PeRson3",]);
  const [roleSuccess, setRoleSuccess] = useState(false);
  const handleClose=()=>{
    setRoleSuccess(false);
  }
  return (
    <div>
      <div className="flex items-left text-[#007F62] p-[10px]  font-bold text-sm">
        System {">"} Role and Privilege
      </div>
      <div className="mt-[10px] ml-2 mr-2">
        <h1 className="h-[565px]">
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Searching Criteria
          </h5>
          <div className="mt-5 pl-1 pr-1 ">
            {" "}
            <h1 className="h-32">
              <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]  ">
                Role
              </h5>
              <div className="flex flex-col w-full "> 
              <Tabs  radius="none" size="sm" items={roles} 
              classNames={{base:`text-left bg-white  mt-4 ml-4 mr-4 flex flex-wrap`,tabList:`p-0 text-left gap-0 overflow-x-hidden flex-wrap`, panel:'gap-0 flex flex-row flex-wrap',tab:'group-data-[selected=true]:bg-[#00AF8F]', cursor:'group-data-[selected=true]:bg-[#00AF8F]', tabContent:'text-sm font-[Calibri] group-data-[selected=true]:text-white group-data-[selected=true]:bg-[#00AF8F] text-[#333333]'}}
              // classNames={{
              //   base: `after:bg-[#00AF8F] text-left bg-white mt-4 ml-4 mr-4 flex flex-wrap overflow-auto`, 
              //   tabList: `p-0 text-left gap-0 overflow-x-hidden flex-wrap`, 
              //   panel: 'gap-0 flex flex-row flex-wrap', 
              //   tabContent: 'text-sm font-[Calibri] group-[data-selected=true]:text-white text-[#333333] whitespace-normal'
              // }}
               >
              { roles.map((data,index)=>{
               return <Tab key={index} title={data} 
              //  className="bg-white flex flex-row flex-wrap w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              // className="bg-white"
              className="bg-white flex-grow flex-shrink w-auto"
               />  
                })
            }
            </Tabs> 
              </div>
            </h1>
          </div>
          <div className="mt-5 pl-1 pr-1">
            <h1 className="h-96">
              <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                Privilege List
              </h5>
              <div>
                <CheckboxGroup
                  value={checkedList}
                  onValueChange={setCheckedList}
                  classNames={{
                    wrapper:
                      " text-white grid grid-cols-5 max-w-full pt-4 ml-1 ",
                  }}
                >
                    {privileges.map((data, index) => {
              return (
                <Checkbox
                  key={index}
                  radius="none"
                  size="sm"
                  value={data}
                  className="pt-0"
                //   onChange={handleChangesMVE}
                  classNames={{
                    wrapper:
                      "after:bg-[#00AF8F] text-white rounded-sm text-xs",
                    // base:' even:ml-5 relative'
                  }}
                >
                  {data}
                </Checkbox>
              );
            })}
                </CheckboxGroup>
              </div>
              <div className="flex justify-end mr-1 mt-[16%]">
                <Button radius="none" size='sm' className="rounded-sm bg-[orange] text-sm font-[Calibri] text-white font-bold" onPress={()=>setRoleSuccess(true)}>Update</Button>
              </div>
            </h1>
          </div>
        </h1>
      </div>
      {roleSuccess && (
        <div className="w-[320px] absolute  top-12 right-0 mr-5 mt-10 pb-2 border border-solid border-[#eedfdf] bg-[white]">
          <p className="mt-3">
            <span className="flex font-bold text-[12px] font-[Calibri]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#00AF8F"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              Success
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth={1}
                stroke="currentColor"
                className="w-5 h-5 ml-16"
                onClick={handleClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </p>
          <p className="text-xs text-left ml-5 font-[Calibri]">
            Successfully
          </p>
        </div>
      )}
    </div>
  );
};

export default RolePriviliges;
