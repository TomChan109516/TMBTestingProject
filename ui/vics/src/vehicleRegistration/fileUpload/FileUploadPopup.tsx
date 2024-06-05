import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import React, { ChangeEvent, useRef, useState } from 'react';


const FileUploadPopup = (props) => {
    const open = props.fileUploadPopup;
    const { handleClose } = props
    const [file, setFile] = useState<File>();

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        setFile(e.target.files[0]);
    };

    return (
        <>
            <Modal isOpen={open}
        onClose={handleClose}
        isDismissable={false}   
                size="4xl" className="font-calibri text-popupHeading">

                <ModalContent >
                    <div className="pl-5 pr-4 pt-4">
                        <button onClick={handleUploadClick}>
                            {file ? `${file.name}` : <Button
                                className="m-1 bg-primary text-white font-bold h-8"
                                radius="none"
                                onClick={handleUploadClick}
                            
                            >
                                Select File
                            </Button>}
                        </button>

                        <input
                            type="file"
                            ref={inputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />

                        <Button
                            className="m-1 bg-persianGreen text-white font-bold h-8"
                            radius="none"
                            data-testId='file-input'
                        >
                            Upload
                        </Button>
                    </div>
                    <ModalBody>
                        <table className=" bg-tropicalrainforest mt-1 mb-1 w-full">
                            <tr className=" bg-tropicalrainforest text-white">
                                <th className='w-[10%] p-2'>File Name</th>
                                <th>Size</th>
                                <th>State</th>
                                <th>Operation</th>
                            </tr>
                        </table>
                    </ModalBody>

                    <div className="flex flex-row items-center justify-center mb-3 ">

                        <Button
                            className="m-1 bg-white border-1 border-greyBorder text-black font-bold h-8"
                            radius="none" onClick={handleClose}
                        >
                            Quit
                        </Button>
                    </div>
                </ModalContent>
            </Modal>
        </>
    );
};

export default FileUploadPopup;

