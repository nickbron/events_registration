import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const events = await prisma.events.findMany({
            orderBy: {
                eventDate: 'asc',
            },
        })
        if (!events) {
            return NextResponse.json({ message: 'No events' })
        }
        return new NextResponse(JSON.stringify(events, null, 2))
    } catch (error) {
        return NextResponse.error()
    }
}
