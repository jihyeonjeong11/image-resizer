"use server";

import { promises as fs } from "fs";

async function uploadAction(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file || file.size === 0) {
      return { error: "No file uploaded" };
    }

    const data = await file.arrayBuffer();

    // Define the new save path
    const saveDir = `${process.cwd()}/public/media/tmp`;
    const savePath = `${saveDir}/${file.name}`;

    // Ensure the directory exists
    await fs.mkdir(saveDir, { recursive: true });

    // Save the file
    await fs.writeFile(savePath, Buffer.from(data));

    // Return the file URI
    return { fileURI: `/media/tmp/${file.name}` }; // Adjust as per your URI structure
  } catch (error) {
    console.error(error);
    return { error: "File upload failed" };
  }
}

export default uploadAction;
