'use server'
import { whereKnowType } from './../models'
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export async function addRegistration(idEvent: string | null, formData: FormData) {
    try {
        const user = await prisma.registration.create({
            data: {
                firstName: formData.get('firstName') as string,
                lastName: formData.get('lastName') as string,
                email: formData.get('email') as string,
                birthday: new Date(formData.get('birthday') as string) as Date,
                whereKnow: formData.get('whereKnow') as whereKnowType,
                eventsId: idEvent as string,
            },
        })
        console.log('USER:', user)
    } catch (e) {
        console.error('ERROR:', e)
    }
    redirect('/')
}
