import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Home, Login } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="flex flex-wrap w-full bg-[#00AF8F] p-2 h-10">
      <div className="w-3/4">
        <p className="text-md text-white text-left">
          Inspection Scheduling System(SCS)
          <span className="header-text text-xs text-white">V0.0.1.dev</span>
        </p>
      </div>
      <div className="w-1/4">
        <div className="flex">
          <div className="-m-[5px]">
            <span>
              <Button className="text-white bg-[transparent] h-8">
                <Home size="15" />
                Welcome
              </Button>
            </span>
          </div>
          <div className="-mt-[8px]">
            <span>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    color="default"
                    variant="light"
                    className="capitalize text-white"
                  >
                    {localStorage.getItem("username")}({localStorage.getItem("centre")})
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Dropdown Variants"
                  color="default"
                  variant="light"
                >
                  <DropdownItem key="new">
                  {localStorage.getItem("username")}(TKW)
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </span>
          </div>
          <div className="-mt-[8px]">
            <span>
              <Button
                className="text-white w-3 bg-[transparent]"
                onClick={handleLogout}
              >
                <Login size="15" />
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
