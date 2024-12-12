"use client";

import React, { useRef, useState } from "react";
import FileSVG from "@/public/file.svg";
import uploadAction from "./fileUploader";
import Image from "next/image";

const UploadForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [fileURI, setFileURI] = useState<string | null>(null);

  const handleFileChange = async () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const response = await uploadAction(formData);

      console.log(response);

      if (response.error) {
        console.error(response.error);
        return;
      }

      setFileURI(response.fileURI);
    }
  };

  return (
    <div className="p-3 bg-slate-200">
      <div className="bg-primary px-3 py-10 border-4 border-dashed">
        <div className="flex flex-col justify-center items-center">
          <FileSVG width={55} height={55} viewBox="0 0 56 56" fill="white" />
          <form
            ref={formRef}
            className="flex flex-col justify-center items-center mt-6"
            encType="multipart/form-data"
          >
            <input
              id="file-upload"
              name="file"
              type="file"
              hidden
              onChange={handleFileChange}
            />
            <label
              className="bg-white p-4 cursor-pointer rounded-md"
              htmlFor="file-upload"
            >
              Choose File
            </label>
          </form>
          {fileURI && (
            <div className="mt-4">
              <p>File uploaded successfully:</p>
              <Image src={`${fileURI}`} width={300} height={300} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
