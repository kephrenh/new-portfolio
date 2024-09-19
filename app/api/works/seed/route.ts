import data from "@/lib/data/data";
import Work from "@/lib/models/work.model";
import connect from "@/lib/services/mongodb";
import { parseStringify } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { projects } = data;
  await connect();
  await Work.deleteMany({});
  await Work.insertMany(projects);

  return NextResponse.json({
    message: "Data seeded successfully",
    projetcs: parseStringify(projects),
  });
};
