import { PrismaClient } from '@prisma/client'
// import { prisma } from '@/lib/prisma';
// import prisma from '@/lib/prisma'
// import { IEvents } from '@/models'
// import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export const getEvents = () =>
    prisma.events.findMany({
        orderBy: {
            eventDate: 'desc',
        },
    })

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Array<IEvents>>) {
//     const data = await getEvents()
//     res.status(200).json(data)
// }
