import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({ message: 'Cron job run at' + new Date() })
}
