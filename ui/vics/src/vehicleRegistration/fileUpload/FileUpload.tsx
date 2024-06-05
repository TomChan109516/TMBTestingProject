import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React, { useState } from "react";
import FileUploadPopup from "./FileUploadPopup";

const FileUpload = () => {
    const [fileUploadPopup, setFileUploadPopup] = useState(false);
    const handleButton = () => {
        setFileUploadPopup(true)
    }

    const handleClose = () => {
        setFileUploadPopup(false)
    }
    return (
        <>
            <div className="text-left pb-2 pt-2 text-calibri text-inputTxt">
                <Button
                    className="m-1 bg-persianGreen text-white font-bold h-8"
                    radius="none"
                    onClick={() => handleButton()}
                >
                    Select File
                </Button>
            </div>
            <Table radius="none" className="text-calibri text-inputTxt" classNames={{ wrapper: "p-0", table: "w-full" }}
            >
                <TableHeader className="bg-tropicalrainforest">
                    <TableColumn className="bg-tropicalrainforest text-white text-sm border-1 border-white first:rounded-none last:rounded-none">ID</TableColumn>
                    <TableColumn className="bg-tropicalrainforest text-white text-sm border-1 border-white first:rounded-none last:rounded-none">File Name</TableColumn>
                    <TableColumn className="bg-tropicalrainforest text-white text-sm border-1 border-white first:rounded-none last:rounded-none">Description</TableColumn>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>{ }</TableCell>

                        <TableCell>{ }</TableCell>
                        <TableCell>{ }</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            {fileUploadPopup && (<FileUploadPopup
                fileUploadPopup={fileUploadPopup}
                handleClose={handleClose}
            >
            </FileUploadPopup>

            )}
        </>
    );
};

export default FileUpload;