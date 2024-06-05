import React, { useState } from "react";
import {
  Button,
  Input,
  Table,
  TableColumn,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Pagination,
} from "@nextui-org/react";
import {theme} from"../../common/themes/themeConfig";
import { Edit, Search, X } from "tabler-icons-react";
import AddCategoryPopup from "./AddCategoryPopup";

export const EnbMaintenance = () => {
  const [showAddCategoryPopup, setShowAddCategoryPopup] = useState(false);
  const [enbData, setEnbData] = useState([
    { id: 1, category: "Announcement", files_count: 2 },
    { id: 2, category: "Notice", files_count: 2 },
  ]);

  const handleAddCategory = () => {
    setShowAddCategoryPopup(true);
  };

  return (
    <>
      <div className="ml-1">
        <div className={`flex items-left text-[#007F62] pl-1 pb-[10px] font-[${theme?.fontFamily?.calibri}] font-bold text-sm`}>
          System {">"} ENB {">"} Category
        </div>
        <div className="mr-1">
          <h1 className="p-2">
            <h5 className={`absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-sm text-[#00AF8F] font-[${theme?.fontFamily?.calibri}]`}>
              Search Criteria
            </h5>
            <div className="mt-[15px] pb-[50px] ">
              <div className="flex flex-row items-center mt-2">
                <div className={`w-36 text-left text-base  ml-2 font-[${theme?.fontFamily?.calibri}] font-bold text-[#333333] text-sm`}>
                  Category
                </div>
                <div className="flex w-full mt-1">
                  <Input
                    id="standard-basic"
                    variant="bordered"
                    radius="none"
                    size="sm"
                    className="flex flex-grow rounded-sm  ml-1 mt-1"
                  />
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className=" flex-row flex justify-between">
          <div className="flex items-left mt-1 mb-1">
            <Button
              className={`text-sm rounded-sm font-[${theme?.fontFamily?.calibri}] font-bold`}
              variant="bordered"
              radius="none"
            >
              ENB Files
            </Button>
          </div>
          <div className="flex  mt-1 mb-1 mr-1">
            <Button
              className={`text-sm rounded-sm font-[${theme?.fontFamily?.calibri}] font-bold bg-[#00AF8F] text-white`}
              radius="none"
              onClick={handleAddCategory}
            >
              Add Category
            </Button>
          </div>
        </div>
        <div className="mr-1">
          <div className={`bg-[#007F62] text-left pb-1 pt-1 pl-1 text-white  font-calibri text-sm font-bold`}>
            ENB Category
          </div>
          <Table radius="none" classNames={{ wrapper: "p-0" }}>
            <TableHeader className={`bg-[#A0D9C1] text-[#00AF8F] text-sm  text-left font-[${theme?.fontFamily?.calibri}] font-bold`}>
              <TableColumn className={`bg-[#A0D9C1] text-[#007F62] text-sm w-[70px] text-left font-calibri font-bold border-1 border-white first:rounded-none last:rounded-none`}>
                {""}
              </TableColumn>
              <TableColumn className={`bg-[#A0D9C1] text-[#007F62] text-sm text-left font-[${theme?.fontFamily?.calibri}] font-bold border-1 border-white first:rounded-none last:rounded-none`}>
                Category
              </TableColumn>
              <TableColumn className={`bg-[#A0D9C1] text-[#007F62] text-sm text-left font-[${theme?.fontFamily?.calibri}] font-bold border-1 border-white first:rounded-none last:rounded-none`}>
                Files Count
              </TableColumn>
              <TableColumn className={`bg-[#A0D9C1] text-[#007F62] text-sm text-left font-[${theme?.fontFamily?.calibri}] font-bold border-1 w-[20px] border-white first:rounded-none last:rounded-none`}>
                Actions
              </TableColumn>
            </TableHeader>
            <TableBody>
              {enbData.map((data) => (
                <TableRow className=" border-1 border-[#A0D9C1] text-left">
                  <TableCell className={`border-1 border-[#eff1f0] font-[${theme?.fontFamily?.calibri}]`}>
                    {data.id}
                  </TableCell>
                  <TableCell className={`border-1 border-[#eff1f0] font-[${theme?.fontFamily?.calibri}]`}>
                    {data.category}
                  </TableCell>
                  <TableCell className={`border-1 border-[#eff1f0] font-[${theme?.fontFamily?.calibri}]`}>
                    {data.files_count}
                  </TableCell>
                  <TableCell className={`border-1 border-[#eff1f0] font-[${theme?.fontFamily?.calibri}]`}>
                    <div className="inline-flex">
                      <Search
                        size="20"
                        color="white"
                        className="bg-[#00AF8F] rounded-sm"
                        //onClick={() => navigate("/userDetail")}
                      />
                      <Edit
                        size="20"
                        color="white"
                        className="bg-[#00AF8F] rounded-sm ml-2"
                      />
                      <X
                        size={18}
                        color="white"
                        className="ml-2 bg-[red] rounded-xl"
                        //onClick={deletePopup}
                        // onClick={() => {
                        //   handleDeleteRecordPopup(item);
                        // }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-row mt-2">
          <div className={`ml-1 mt-1 text-sm font-[${theme?.fontFamily?.calibri}]`}>
            Total {enbData.length}
          </div>
          <div className={`ml-2 w-24 text-sm font-[${theme?.fontFamily?.calibri}]`}>
            <Select
              labelPlacement="outside-left"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            >
              <SelectItem key="1" aria-activedescendant="10/page">
                10/page
              </SelectItem>
            </Select>
          </div>
          <div className="ml-2 text-sm">
            <Pagination
              isCompact
              showControls
              total={1}
              classNames={{
                wrapper:
                  "gap-0 overflow-visible h-8  rounded-none border border-divider",
                item: "w-8 h-8 text-sm rounded-none bg-transparent ",
                prev: "rounded-none",
                next: "rounded-none",
                cursor:
                  "bg-gradient-to-b shadow-lg from-[#00AF8F] to-[#00AF8F] rounded-none  text-white font-[Calibri] font-bold",
              }}
              initialPage={1}
            />
          </div>
          <div className={`w-[60px] ml-2 mt-1 text-sm font-[${theme?.fontFamily?.calibri}]`}>Go to</div>
          <div className="w-10">
            <Input
              className="flex-row"
              value="1"
              size="sm"
              radius="none"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      {showAddCategoryPopup && (
        <AddCategoryPopup
          showAddCategoryPopup={showAddCategoryPopup}
          closeAddcategoryPopup={setShowAddCategoryPopup}
        />
      )}
    </>
  );
};
export default EnbMaintenance;
