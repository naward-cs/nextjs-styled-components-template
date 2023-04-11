import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ data: 'here' }) //
  return new Response('Hello, Next.js!')
}
//refer to https://beta.nextjs.org/docs/api-reference/response for reponse
//refer to https://beta.nextjs.org/docs/api-reference/request for requests
