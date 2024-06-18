import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const idEvent = searchParams.get('id')

    try {
        const result = await prisma.$queryRaw`
        SELECT TO_CHAR(DATE_TRUNC('day', "created"), 'YYYY-MM-DD') AS "dateRegistration",
        COUNT ('dateRegistration')::int as "quantity"
        FROM "Registration"
        WHERE "eventsId" = ${idEvent}
        GROUP BY "dateRegistration"
        `
        if (!result) {
            return NextResponse.json({ message: 'No Participants' })
        }

        return NextResponse.json(result)
    } catch (error) {
        console.log('ERROR', error)
        return NextResponse.error()
    }
}
