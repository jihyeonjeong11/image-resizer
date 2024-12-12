"use server";

import { promises as fs } from "fs";

async function uploadAction(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file || file.size === 0) {
      console.log("return?");
      return { error: "No file uploaded" };
    }

    const data = await file.arrayBuffer();

    await fs.mkdir(`${process.cwd()}/tmp`, { recursive: true });
    await fs.writeFile(`${process.cwd()}/tmp/${file.name}`, Buffer.from(data));
  } catch (error) {
    console.error(error);
  }
}

export default uploadAction;
