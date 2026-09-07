import { hasProtocol, joinURL } from 'ufo'

export function publicAsset(path: string, baseURL = '/'): string {
  if (!path || hasProtocol(path)) {
    return path
  }

  return joinURL(baseURL, path)
}
