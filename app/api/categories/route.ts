import { NextResponse } from "next/server";
import { query } from "@/lib/db";

type CategoryRow = {
  id: string;
  slug: string;
  name: string;
  color: string | null;
};

export async function GET() {
  try {
    const categories = (await query(
      "SELECT id, slug, name, color FROM categories_wwm ORDER BY name ASC",
    )) as CategoryRow[];
    return NextResponse.json({ categories });
  } catch (error) {
    console.error("[GET /api/categories]", error);
    return NextResponse.json({ error: "Failed to load categories" }, { status: 500 });
  }
}
