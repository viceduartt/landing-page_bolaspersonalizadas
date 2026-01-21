import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import path from 'path'
import { NextResponse } from 'next/server'

const file = path.join(process.cwd(), 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter, { users: [] })

export async function GET() {
  await db.read()

  console.log(db.data)

  return NextResponse.json(db.data)
}