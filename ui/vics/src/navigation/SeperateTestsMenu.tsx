import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SeperateTestsMenu = ({ setDisplayShow, btnName, dropDownItem }) => {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
    setDisplayShow(false);
  };

  return (
    <Dropdown
      classNames={{
        base: "absolute z-50 left-[118px] top-[-41px] max-h-[610px] rounded-none",
        content: "rounded-none",

      }}
    >
      <DropdownTrigger
        className="p-0 h-[22px]  data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton  data-[hover=true]:text-white "
        name={btnName}
      >
        {btnName}
      </DropdownTrigger>
      <DropdownMenu className="w-[300px] ">
        {dropDownItem !== undefined ? dropDownItem.map((item) => <DropdownItem
          className="data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton data-[focus=true]:text-white data-[hover=true]:text-white"
          key={item.name}
          data-testid={item.name}
          onClick={() => {
            handleNavigate(`${item.link}`);
          }}
        >
          {item.name}
        </DropdownItem>) : null}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SeperateTestsMenu;