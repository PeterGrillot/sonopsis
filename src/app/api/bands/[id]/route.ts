import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const band = await prisma.band.findUnique({
      where: { id: params.id },
    });

    if (!band) {
      return NextResponse.json({ error: "Band not found" }, { status: 404 });
    }

    return NextResponse.json(band, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
