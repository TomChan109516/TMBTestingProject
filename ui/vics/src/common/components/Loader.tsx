import React from "react";
// import { Spinner } from "@nextui-org/react";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function Loader() {
  const load = useSelector((state: { login: { loader: boolean } }) => state.login.loader);
  return (
    <Modal backdrop="transparent" size="full" isOpen={load} className="shadow-none bg-[transparent]">
      <ModalContent>
        <ModalBody>
          <div className="flex bg-slate-100 p-80 justify-center">
            <div className=" w-8 h-8 rounded-full animate-spin border-x-4 border-t-4  border-solid border-purple-500 border-t-transparent loaderClr"></div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
