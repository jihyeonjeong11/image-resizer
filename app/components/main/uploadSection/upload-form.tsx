import React from "react";
import { promises as fs } from "fs";

const UploadForm = () => {
  async function action(formData: FormData) {
    "use server";
    console.log("eiei");
    try {
      console.log("eror");
      const file = formData.get("file") as File;
      if (!file || file.size === 0) {
        console.log("return?");
        return { error: "No file uploaded" };
      }

      console.log("111");

      const data = await file.arrayBuffer();

      await fs.mkdir(`${process.cwd()}/tmp`, { recursive: true });
      await fs.writeFile(
        `${process.cwd()}/tmp/${file.name}`,
        Buffer.from(data)
      );
      console.log("File saved successfully!");
    } catch (error) {
      console.error("Error saving file:", error);
    }
  }
  return (
    <div className="bg-primary p-3">
      <form action={action}>
        <input name="file" type="file"></input>
        <button>upload</button>
      </form>
    </div>
  );
};

export default UploadForm;
