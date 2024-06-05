import React from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import { axiosPost } from "../../utils/axiosInstance";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import { saveLoader } from "../../login/state/loginSlice";
// import { validateOperationRemark } from "../service/TextEditor.service";
// import axios from "axios";
import { OPERATION_REMARK } from "../../constants/urlConstants";

function TextEditor(props) {
  const dispatch = useDispatch();
  const [EditorValue, setEditorValue] = React.useState("");
  const [showApiError, setShowApiError] = React.useState(false);
  const handleChange = (value) => {
    setEditorValue(value);
  };
  const handleClose = () => {
    props.operationRemarkClose(false);
  };

  const handleConfirm = async () => {
    try {
      // dispatch(saveLoader(true));
      const searchData = {
        remark: EditorValue,
        chasisNumber: props.chassisNo,
      };
      const response = await axiosPost(OPERATION_REMARK, searchData);
      //const response = await axios.get(`http://your-api-url.com/endpoint?param=${data}`);
      
      console.log(response);
      // dispatch(saveLoader(false));
      // props.operationRemarkClose(false);
    } catch (error) {
      setShowApiError(true);
      dispatch(saveLoader(false));
    }
    props.operationRemarkClose(false);
  };
  return (
    <div>
      <Modal size="5xl" isOpen={props.operationRemark} onClose={handleClose}>
        <ModalContent>
          {() => (
            <>
              <div className="flex flex-col text-sm p-2 pl-5  text-[#00AF8F] font-bold">
                {" "}
                Operation Remark
              </div>
              <ModalBody>
                <div className="h-[400px]">
                  <EditorToolbar />
                  <ReactQuill
                    theme="snow"
                    value={EditorValue}
                    onChange={handleChange}
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    formats={formats}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="float-right mt-2">
                  <Button
                    data-testid="close"
                    name="Close"
                    className="bg-[white] ml-[5px] text-[black] border border-[black] font-bold rounded h-8"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    data-testid="confirm"
                    name="confirm"
                    className="bg-[#F0FFFF] float-right ml-[5px] text-[#00AF8F] border border-[#00AF8F] font-bold rounded h-8"
                    onClick={handleConfirm}
                  >
                    Confirm
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default TextEditor;
