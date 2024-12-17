"use client";

import React, { ChangeEvent, useRef, useState, useTransition } from "react";
import FileSVG from "@/public/file.svg";
import Image from "next/image";
import axios from "axios";

const UploadForm = () => {
  const formRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();
  const [fileURI, setFileURI] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(async () => {
      const file = e.target.files?.[0];

      if (!file) {
        console.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
        // const response = await uploadAction(formData);
        const response = await axios.post("/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              );
              setUploadProgress(progress);
            }
          },
        });

        if (response?.data?.error) {
          throw new Error(response.data.error);
        }

        if (response?.data?.fileURI) {
          setFileURI(response.data.fileURI);
        }
      } catch (err) {
        console.error(
          "Upload failed:",
          err instanceof Error ? err.message : err
        );
      }
    });
  };

  return (
    <div className="p-3 bg-slate-200">
      <div className="bg-primary px-3 py-10 border-4 border-dashed">
        <div className="flex flex-col justify-center items-center">
          <FileSVG width={55} height={55} viewBox="0 0 56 56" fill="white" />
          <div className="flex flex-col justify-center items-center mt-6">
            <button
              disabled={isPending}
              className="bg-white p-4 cursor-pointer rounded-md"
              onClick={() => formRef?.current?.click()}
            >
              Upload a file
            </button>
            <input
              onChange={handleFileChange}
              className="hidden"
              ref={formRef}
              type="file"
              name="myfile"
            />
          </div>
          {isPending && <div>{uploadProgress}%</div>}

          {fileURI && (
            <div className="mt-4">
              <p>File uploaded successfully:</p>
              <Image
                src={`${fileURI}`}
                width={300}
                height={300}
                alt="Uploaded image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
