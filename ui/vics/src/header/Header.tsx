import React from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const userName = localStorage.getItem("userName");
  const station = JSON.parse(localStorage.getItem("station") || "{}");

  const clientip = JSON.parse(localStorage.getItem("clientip") || "{}");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("testPopupData");
    navigate(`/?clientip=${clientip}`);
    window.location.reload();
  };
  return (
    <div className="flex flex-wrap w-full bg-persianGreen pl-6 h-10  ">
      <div className="w-[85%]">
        {station === "DTCS" ? (
          <p className="text-[25px] text-white text-left font-calibri">
            Dynamometer Test  Control Sub-System(DTCS)
            <span className="header-text text-[12px] text-white pl-2">
              V0.1.6.9
            </span>
          </p>
        ) : (
          <p className="text-[25px] text-white text-left font-calibri">
            Vehicle Inspection Control System(VICS)
            <span className="header-text text-[12px] text-white pl-2">
              V0.2.0.1
            </span>
          </p>
        )}
      </div>
      <div className="w-[15%] p-2">
        <div className="flex">
          <div className="-m-[5px]">
            <span>
              <Button className="text-white bg-[transparent] h-8">
                Input | Welcome
              </Button>
            </span>
          </div>
          <div className="text-white text-[14px]">
            <span>
              <Dropdown>
                <DropdownTrigger>
                  {userName ? userName : "No user"}
                </DropdownTrigger>
                <div className="justify-items-end grid -mt-[40px]">
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new" onClick={handleLogout}>
                      Log out
                    </DropdownItem>
                    <DropdownItem key="copy">Reset Password</DropdownItem>
                  </DropdownMenu>
                </div>
              </Dropdown>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
