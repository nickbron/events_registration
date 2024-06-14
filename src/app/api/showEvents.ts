import prisma from '@/lib/prisma'

export const getEvents = () =>
    prisma.events.findMany({
        orderBy: {
            eventDate: 'desc',
        },
    })
