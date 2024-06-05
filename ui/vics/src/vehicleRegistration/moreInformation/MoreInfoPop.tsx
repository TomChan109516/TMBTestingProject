import { Modal, ModalBody, ModalContent, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import ValidDataInMoreInfoPopup from "./ValidDataInMoreInfoPopup";
import TypeApproval from "./TypeApproval";

const MoreInfoPopup = (props) => {
  const handleClose = () => {
    props.closePopup(false);
  };
  const tabList = [
    { id: 1, name: "Type Approval", component: "" },
    { id: 2, name: "Vaild", component: "ValidDataInMoreInfoPopup" },
  ];

  return (
    <>
      <Modal  onClose={handleClose}
        isOpen={true}
        isDismissable={false} size="5xl" className="font-calibri text-inputTxt">
        <ModalContent className="mb-3">
          <ModalBody>
            <Tabs
              radius="none"
              className="w-[100%] flex flex-grow border-b-1 border-tropicalrainforest mt-0 mb-0"
              classNames={{
                tabContent:
                  " group-data-[selected=true]:bg-tropicalrainforest group-data-[selected=true]:text-[white] text-[black]  ",
                tab: " bg-lightGrey   h-6",
                cursor: "group-data-[selected=true]:bg-tropicalrainforest",
                tabList: "group-data-[selected=true]:bg-tropicalrainforest   ",
              }}
            >
              {tabList.map((data) => (
                <Tab
                  key={data.id}
                  title={data.name}
                  className="flex flex-grow w-[1000px]"
                >
                  {data.component === "ValidDataInMoreInfoPopup" ? (
                    <ValidDataInMoreInfoPopup handleClose={handleClose}/>
                  ) : (
                    <TypeApproval />
                  )}
                </Tab>
              ))}
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MoreInfoPopup;
