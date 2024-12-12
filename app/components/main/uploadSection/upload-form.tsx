"use client";
import React, { useRef } from "react";
import FileSVG from "@/public/file.svg";
import uploadAction from "./fileUploader";

// https://siamahnaf.medium.com/next-js-server-action-a-guide-to-uploading-files-to-aws-s3-00b61358536c

const UploadForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = () => {
    formRef.current?.requestSubmit(); // Programmatically submit the form
  };

  return (
    <div className="p-3 bg-slate-200">
      <div className="bg-primary px-3 py-10 border-4 border-dashed">
        <div className="flex flex-col justify-center items-center">
          <FileSVG width={55} height={55} viewBox="0 0 56 56" fill="white" />
          <form
            ref={formRef}
            className="flex flex-col justify-center items-center mt-6"
            action={uploadAction}
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
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
