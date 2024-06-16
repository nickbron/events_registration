import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    // const { searchParams } = new URL(req.url)
    const searchParams = req.nextUrl.searchParams
    const idEvent = searchParams.get('id')
    try {
        const participants = await prisma.registration.findMany({
            where: {
                eventsId: idEvent,
            },
            orderBy: {
                created: 'desc',
            },
        })
        if (!participants) {
            return NextResponse.json({ message: 'No participants' })
        }
        return new NextResponse(JSON.stringify(participants, null, 2))
    } catch (error) {
        return NextResponse.error()
    }
}

// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//     const id = params.id
//     return NextResponse.json({ id })
// }