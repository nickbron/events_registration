import prisma from '@/lib/prisma'
import { whereKnowType } from '@/models'
import { NextResponse } from 'next/server'

export async function PUT(request: Request) {
    const formData = await request.formData()
    const user = await prisma.registration.create({
        data: {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            birthday: new Date(formData.get('birthday') as string),
            whereKnow: formData.get('whereKnow') as whereKnowType,
            eventsId: formData.get('eventsId') as string,
        },
    })
    return NextResponse.json({ user })
}
