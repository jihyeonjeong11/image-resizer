"use server";

import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function POST(req: NextRequest) {
  try {
    // Extract the form data from the request
    const formData = await req.formData();
    const file = formData.get("file") as File;

    // Validate file input
    if (!file || file.size === 0) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read the file data as ArrayBuffer
    const data = await file.arrayBuffer();

    // Define the save directory and file path
    const saveDir = `${process.cwd()}/public/media/tmp`;
    const savePath = `${saveDir}/${file.name}`;

    // Ensure the directory exists
    await fs.mkdir(saveDir, { recursive: true });

    // Save the file to the server
    await fs.writeFile(savePath, Buffer.from(data));

    // Return the file URI in the response
    return NextResponse.json(
      { fileURI: `/media/tmp/${file.name}` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "File upload failed" }, { status: 500 });
  }
}
