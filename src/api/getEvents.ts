import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getEvents = () =>
    prisma.events.findMany({
        orderBy: {
            eventDate: 'desc',
        },
    })
