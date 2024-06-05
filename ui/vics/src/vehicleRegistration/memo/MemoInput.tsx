import React, { useEffect, useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import MemoModelPopup from "./MemoModelPopup";
import MemoAddPopup from "./MemoPredefineListPopup";

function MemoInput() {
  const [MemoPopup, setMemoPopup] = React.useState(false);
  const [currentStation, setCurrentStation] = useState();
  const openMemo = () => {
    setMemoPopup(true);
  };
  const closePopup = () => {
    setMemoPopup(false);
  };
  useEffect(() => {
    const station = JSON.parse(localStorage.getItem("station") || "{}");
    setCurrentStation(station);
  }, []);

  return (
    <>
      <div>
        
          <div className="text-center justify-center items-center">
            <div className="flex w-full h-full items-center mt-4 ">
              <h1 className="text-left ml-2  font-bold border-white  text-[12px]  md:w-[10%] lg:w-[10%] xl:w-[10%]">
                Remark from Previous Station
              </h1>
              <div className="flex w-full h-full   ">
                <div className="grid grid-cols-1 gap-2">
                  <div className="col-span-1 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
                    <Textarea
                      placeholder=""
                      radius="none"
                      disableAnimation
                      disableAutosize
                      variant="bordered"
                      className="border- "
                      classNames={{
                        input: "resize-y h-[160px] resize-x w-[980px]  ",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full h-full items-center mt-4 ">
              <h1 className="text-left ml-2  font-bold border-white  text-[12px]  md:w-[10%] lg:w-[10%] xl:w-[10%]">
                Remark To Add
              </h1>
              <div className="flex w-full h-full   ">
                <div className="grid grid-cols-1 gap-2">
                  <div className="col-span-1 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
                    <Textarea
                      placeholder=""
                      radius="none"
                      disableAnimation
                      disableAutosize
                      variant="bordered"
                      className="border- "
                      classNames={{
                        input: "resize-y h-[160px] resize-x w-[980px]  ",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-5 ml-[17px] mt-6">
              <div className="col-span-7 col-start-2">
                <Textarea
                  placeholder=""
                  radius="none"
                  disableAnimation
                  disableAutosize
                  variant="bordered"
                  className="border- "
                  classNames={{
                    input: "resize-y h-[70px] resize-x w-[650px] ",
                  }}
                />
              </div>
              <div className="flex col-span-3 justify-self-end  ">
                <div className="grid grid-cols-2 gap-7 col-start-4 content-end mr-[20px] ">
                  <Button
                    className={`bg-persianGreen  text-[white] font-bold rounded-sm h-7  `}
                  >
                    Add Memo
                  </Button>

                  <Button
                    className={`bg-persianGreen  text-[white] font-bold shadow-sm rounded-sm h-7 `}
                    type="submit"
                    onClick={openMemo}
                  >
                    Predefine List
                  </Button>
                </div>
              </div>
            </div>
          </div>
        
        {MemoPopup ? (
          <MemoAddPopup closePopup={closePopup}></MemoAddPopup>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default MemoInput;
