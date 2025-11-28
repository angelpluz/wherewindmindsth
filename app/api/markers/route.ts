import { NextResponse } from "next/server";
import { pool, query } from "@/lib/db";

type MarkerRow = {
  id: string;
  title: string;
  description: string | null;
  x_pct: number;
  y_pct: number;
  min_zoom: number | null;
  max_zoom: number | null;
  is_active: 0 | 1;
  category_slug: string;
  category_name: string;
  category_color: string | null;
};

export async function GET() {
  try {
    const markers = await query<MarkerRow>(
      `SELECT 
         m.id,
         m.title,
         m.description,
         m.x_pct,
         m.y_pct,
         m.min_zoom,
         m.max_zoom,
         m.is_active,
         c.slug AS category_slug,
         c.name AS category_name,
         c.color AS category_color
       FROM markers_wwm m
       JOIN categories_wwm c ON c.id = m.category_id
       WHERE m.is_active = 1
       ORDER BY m.created_at DESC`,
    );
    return NextResponse.json({ markers });
  } catch (error) {
    console.error("[GET /api/markers]", error);
    return NextResponse.json({ error: "Failed to load markers" }, { status: 500 });
  }
}

type MarkerInput = {
  title?: string;
  description?: string | null;
  category?: string; // slug
  x_pct?: number;
  y_pct?: number;
  min_zoom?: number | null;
  max_zoom?: number | null;
  is_active?: boolean;
};

function ensureAdmin(req: Request) {
  const adminKey = process.env.ADMIN_DASHBOARD_PASSWORD;
  if (!adminKey) return true; // no password set, allow
  const headerKey = req.headers.get("x-admin-key");
  const cookieName = process.env.ADMIN_COOKIE_NAME ?? "poll_admin";
  const cookieHeader = req.headers.get("cookie") ?? "";
  const fromCookie = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${cookieName}=`))
    ?.split("=")[1];
  return headerKey === adminKey || fromCookie === adminKey;
}

export async function POST(req: Request) {
  try {
    if (!ensureAdmin(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = (await req.json()) as MarkerInput;
    const { title, description, category, x_pct, y_pct, min_zoom, max_zoom, is_active } = body;

    if (!title || !category || x_pct === undefined || y_pct === undefined) {
      return NextResponse.json(
        { error: "title, category, x_pct, y_pct are required" },
        { status: 400 },
      );
    }

    const x = Number(x_pct);
    const y = Number(y_pct);
    if (!Number.isFinite(x) || !Number.isFinite(y) || x < 0 || x > 100 || y < 0 || y > 100) {
      return NextResponse.json(
        { error: "x_pct and y_pct must be between 0 and 100" },
        { status: 400 },
      );
    }

    const minZoomVal = min_zoom === undefined ? null : Number(min_zoom);
    const maxZoomVal = max_zoom === undefined ? null : Number(max_zoom);

    const cats = await query<{ id: string }>(
      "SELECT id FROM categories_wwm WHERE slug = ? LIMIT 1",
      [category],
    );
    if (!cats.length) {
      return NextResponse.json({ error: "category not found" }, { status: 400 });
    }
    const categoryId = cats[0].id;

    const [result] = await pool.execute(
      `INSERT INTO markers_wwm
        (id, title, description, category_id, x_pct, y_pct, min_zoom, max_zoom, is_active)
       VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        description ?? null,
        categoryId,
        x,
        y,
        minZoomVal,
        maxZoomVal,
        is_active === undefined ? true : Boolean(is_active),
      ],
    );

    const insertId = (result as { insertId?: string }).insertId ?? null;

    return NextResponse.json(
      {
        ok: true,
        id: insertId,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[POST /api/markers]", error);
    return NextResponse.json({ error: "Failed to create marker" }, { status: 500 });
  }
}
