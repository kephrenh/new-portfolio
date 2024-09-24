import Work from "@/models/work.model";

import { parseStringify } from "@/lib/utils";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

export async function GET() {
  try {
    await dbConnect();
    const projects = await Work.find({});

    if (!projects) {
      return NextResponse.json(parseStringify({ message: "No projects found" }), { status: 404 });
    }

    return NextResponse.json(parseStringify(projects));
  } catch (error) {
    return NextResponse.json({ message: "Failed to retrived projects" }, { status: 500 });
  }
}
