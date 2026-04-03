import { siteUrl } from "@/lib/site-config"

const indexNowKey = "e98701c3c101409fa172d59ba2b597ec"
const indexNowEndpoint = "https://api.indexnow.org/indexnow"

export function getIndexNowKey() {
  return indexNowKey
}

export function getIndexNowKeyLocation() {
  return new URL(`/${indexNowKey}.txt`, siteUrl).toString()
}

export function normalizeIndexNowUrls(urls: string[]) {
  const allowedHost = new URL(siteUrl).host

  return Array.from(
    new Set(
      urls
        .map((url) => url.trim())
        .filter(Boolean)
        .map((url) => new URL(url, siteUrl).toString())
        .filter((url) => new URL(url).host === allowedHost),
    ),
  )
}

export async function submitIndexNowUrls(urls: string[]) {
  const normalizedUrls = normalizeIndexNowUrls(urls)

  if (!normalizedUrls.length) {
    return {
      ok: false,
      status: 400,
      data: { message: "No valid URLs to submit" },
    }
  }

  const response = await fetch(indexNowEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: new URL(siteUrl).host,
      key: getIndexNowKey(),
      keyLocation: getIndexNowKeyLocation(),
      urlList: normalizedUrls,
    }),
  })

  const text = await response.text()

  return {
    ok: response.ok,
    status: response.status,
    data: text,
    submittedUrls: normalizedUrls,
  }
}
