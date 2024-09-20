import Work from "@/lib/models/work.model";
import connect from "@/lib/services/mongodb";
import { parseStringify } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const projects = await Work.find({});

    if (!projects) {
      return NextResponse.json(parseStringify({ message: "No projects found" }), { status: 404 });
    }

    return NextResponse.json(parseStringify(projects));
  } catch (error) {
    return NextResponse.json({ message: "Failed to retrived projects" }, { status: 500 });
  }
}
