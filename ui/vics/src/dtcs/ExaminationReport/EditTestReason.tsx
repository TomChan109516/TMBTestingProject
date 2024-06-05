import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import PropTypes from 'prop-types';

function EditTestReason(props) {
  const open = props.showEditTestReason;
  JSON.stringify(props.EditData)
  const handleClose = () => {
    props.closeEditTestReason(false);
  };
  return (
    <>
      <Modal
        data-testid="edit-test-reason-button"

        size="xl"
        className="rounded-sm"
        onClose={handleClose}
        isOpen={open}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
                Edit Abort/ Suspend Test Reason
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row items-center mx-auto mt-4 ">
                  <span className="text-xs text-black font-bold text-right w-[120px]">
                    Code
                  </span>
                  <div className="text-xs w-[300px] text-black ml-8">
                    <Input
                      data-testid="Code"
                      id="standard-basic"
                      radius="sm"
                      variant="bordered"
                      size="sm"
                      maxLength={25}
                      value={props.EditData.Id}
                      onChange={(e) => props.setEditData({ ...props.EditData, Id: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex flex-row  mx-auto mt-4 ">
                  <span className="text-xs text-black font-bold text-right w-[120px]">
                    Description
                  </span>
                  <div className="text-xs w-[300px]  text-black ml-8">
                    <Textarea
                      data-testid="Description"
                      labelPlacement="inside"
                      minRows={4}
                      variant="bordered"
                      radius="sm"
                      value={props.EditData.Description}
                      onChange={(e) => props.setEditData({ ...props.EditData, Description: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center mx-auto mt-4 ">
                  <span className="text-xs text-black font-bold text-right w-[120px]">
                    Test Type
                  </span>
                  <div className="text-xs w-[300px]  text-black ml-8">
                    <Select
                      data-testid="test"
                      labelPlacement="outside-left"
                      radius="sm"
                      size="sm"
                      name="page"
                      aria-label="center"
                      variant="bordered"
                      placeholder={props.EditData.status}
                      value={props.EditData.status}
                      onChange={(e) => props.setEditData({ ...props.EditData, status: e.target.value })}
                    >
                      <SelectItem key="1" id="Abort" value="Abort">Abort</SelectItem>
                      <SelectItem key="2" id="Suspend" value="Suspend">Suspend</SelectItem>
                    </Select>
                  </div>
                </div>

              </ModalBody>
              <ModalFooter className="justify-center mb-8 mt-4 ">
                <Button
                  className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                  radius="none"
                >
                  Save
                </Button>
                <Button data-testid="close-button" onClick={handleClose} className="text-black font-calibri font-bold  rounded-sm bg-white border-1 border-greyBorder h-8 ml-4">
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
}
EditTestReason.propTypes = {
  showEditTestReason: PropTypes.bool,
  closeEditTestReason: PropTypes.func,
  EditData: PropTypes.object,
}
export default EditTestReason;