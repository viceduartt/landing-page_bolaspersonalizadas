import { NextResponse } from "next/server";


export async function POST(req, res) {
  const body = await req.json()
  console.log(body)

  if (body.auth === process.env.A) {
    return NextResponse.json({
      ok: true,
      message: 'true',
    })
  } else {
    return NextResponse.json({ ok: true,
        message: 'false',
     })

  }

}