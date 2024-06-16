import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const nameEvent = searchParams.get('q')
    try {
        const events = await prisma.events.findMany({
            where: {
                title: { contains: String(nameEvent), mode: 'insensitive' },
            },
        })
        if (!events) {
            return NextResponse.json({ message: 'No participants' })
        }
        return new NextResponse(JSON.stringify(events, null, 2))
    } catch (error) {
        return NextResponse.error()
    }
}
