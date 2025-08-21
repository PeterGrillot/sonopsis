import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export async function GET() {
  try {
    const bands = await prisma.band.findMany();
    return NextResponse.json(bands, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch bands" },
      { status: 500 },
    );
  }
}
