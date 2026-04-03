import { promises as fs } from "node:fs"
import path from "node:path"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://windsurfth.com"
const indexNowKey = "e98701c3c101409fa172d59ba2b597ec"
const indexNowEndpoint = "https://api.indexnow.org/indexnow"
const blogDirectory = path.join(process.cwd(), "src", "content", "blogs")
const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/faq",
  "/features",
  "/pricing",
  "/blog",
  "/what-is-windsurf",
  "/guides/getting-started",
]

function normalizeUrls(urls) {
  const allowedHost = new URL(siteUrl).host

  return Array.from(
    new Set(
      urls
        .map((url) => String(url).trim())
        .filter(Boolean)
        .map((url) => new URL(url, siteUrl).toString())
        .filter((url) => new URL(url).host === allowedHost),
    ),
  )
}

async function getBlogUrls() {
  const entries = await fs.readdir(blogDirectory, { withFileTypes: true })
  const files = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".ts") && entry.name !== "types.ts")

  const urls = []

  for (const file of files) {
    const filePath = path.join(blogDirectory, file.name)
    const content = await fs.readFile(filePath, "utf8")
    const slugMatch = content.match(/slug:\s*"([^"]+)"/)

    if (slugMatch?.[1]) {
      urls.push(`/blog/${slugMatch[1]}`)
    }
  }

  return urls
}

async function submitIndexNow(urls) {
  const normalizedUrls = normalizeUrls(urls)

  if (!normalizedUrls.length) {
    console.log("[IndexNow] No valid URLs to submit")
    return
  }

  const response = await fetch(indexNowEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: new URL(siteUrl).host,
      key: indexNowKey,
      keyLocation: new URL(`/${indexNowKey}.txt`, siteUrl).toString(),
      urlList: normalizedUrls,
    }),
  })

  const text = await response.text()
  console.log(`[IndexNow] status=${response.status} ok=${response.ok}`)
  if (text) {
    console.log(`[IndexNow] response=${text}`)
  }
}

async function main() {
  try {
    const blogUrls = await getBlogUrls()
    await submitIndexNow([...staticRoutes, ...blogUrls])
  } catch (error) {
    console.error("[IndexNow] submit failed", error)
    process.exit(0)
  }
}

await main()
