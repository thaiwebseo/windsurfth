import { NextRequest, NextResponse } from "next/server"
import { getIndexNowKeyLocation, submitIndexNowUrls } from "@/lib/indexnow"

export async function GET() {
  return NextResponse.json({
    ok: true,
    keyLocation: getIndexNowKeyLocation(),
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const rawUrls = Array.isArray(body?.urls)
    ? body.urls
    : typeof body?.url === "string"
      ? [body.url]
      : []

  const result = await submitIndexNowUrls(rawUrls)

  return NextResponse.json(result, {
    status: result.status,
  })
}
