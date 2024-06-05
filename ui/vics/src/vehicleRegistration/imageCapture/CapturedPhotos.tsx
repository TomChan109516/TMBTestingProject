import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import PhotoCapturePopup from "./PhotoCapturePopup";

const CapturedPhotos = () => {
  const [PhotoCapture, setPhotoCapture] = useState(false);
  const images = [
    {
      id: 1,
      buttonName: "Retake Front Photo",
      url: "images/image1.png",
    },
    {
      id: 2,
      buttonName: "Retake Back Photo",
      url: "images/image2.png",
    },
  ];
  const handleCapture = (btnName: string) => {
    if (btnName === "Retake Front Photo") {
      setPhotoCapture(true);
    } else {
      setPhotoCapture(true);
    }
  };
  const closePopup = () => {
    setPhotoCapture(false);
  };

  return (
    <>
      <div className="flex">
        {images.map((data) => (
          <div className="items-start m-2">
            <img
              src={data.url}
              alt="Captured Image"
              className="w-[180px] mb-4"
            ></img>
            <Button
              className="self-center bg-persianGreen text-white  rounded-none h-7"
              onClick={() => handleCapture(data.buttonName)}
            >
              {data.buttonName}
            </Button>
          </div>
        ))}
        {PhotoCapture && <PhotoCapturePopup closePopup={closePopup} />}
      </div>
    </>
  );
};

export default CapturedPhotos;
