import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import RSConfirm from "./RSConfirm";
import RemoteAuth from "./RemoteAuth";
import GenerateReport from "./GenerateReport";
function ExaminationReport() {
    const [showRSConfirm, setshowRSConfirm] =
    useState(false);
  const [confirm, setConfirm] = useState(false);
  
  const [
    showRemoteAuth,
    setshowRemoteAuth,
  ] = useState(false);

  const handleRSConfirm = (data) => {
    setshowRSConfirm(data);
  };

  const handleRemoteAuth = (data) => {
    setshowRemoteAuth(data);
    handleRSConfirm(false);
  };
   
    return (
        <>
            <Button
            data-testId="button"
                className="text-white font-calibri font-bold float-left rounded-sm bg-persianGreen mt-2 ml-1 h-8 "
                variant="light"
                radius="none"
                onClick={() => handleRSConfirm(true)}
            >
                Submit Test Result /Remote Authorisation
            </Button>
            {confirm ? (
        <GenerateReport/>
      ) : (null)}
            {showRSConfirm && (
                <RSConfirm
                    showRSConfirm={showRSConfirm}
                    handleRSConfirm={(data) => handleRSConfirm(data)} // Add the handleRSConfirm prop
                    handleRemoteAuth={() => handleRemoteAuth(true)}
                    confirm={confirm}
                    setConfirm={setConfirm}
                ></RSConfirm>
            )}
       {showRemoteAuth && (
        <RemoteAuth
          showRemoteAuth={showRemoteAuth}
          handleRemoteAuth={(data) =>
            handleRemoteAuth(data)
          }
          confirm={confirm}
          setConfirm={setConfirm}
          setshowRemoteAuth={
            setshowRemoteAuth
          }
        
        ></RemoteAuth>
      )}
        </>
    )
}

export default ExaminationReport;