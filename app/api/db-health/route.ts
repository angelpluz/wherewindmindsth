import { NextResponse } from "next/server";
import { ping } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    await ping();
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown database error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 },
    );
  }
}
