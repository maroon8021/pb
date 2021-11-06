if (!process.env.NODE_ENV) {
  throw new Error("NODE_ENV is not set")
}

if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
  throw new Error("NEXT_PUBLIC_BACKEND_URL is not set")
}

export const NODE_ENV = process.env.NODE_ENV
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
