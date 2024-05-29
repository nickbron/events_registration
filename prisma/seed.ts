import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const event1 = await prisma.events.create({
        data: {
            title: 'Beach Party',
            description: 'Party on the beach Mayami',
            organizer: 'Fox Group',
            eventDate: '2024-06-03T18:25:43.511Z',
            userRegistration: {
                create: {
                    firstName: 'Alise',
                    lastName: 'Braxton',
                    email: 'alice@prisma.io',
                    birthday: '1985-01-23T18:25:43.511Z',
                    whereKnow: 'FoundMySelf',
                },
            },
        },
    })
    const event2 = await prisma.events.create({
        data: {
            title: 'Front End Better Practicies',
            description: 'React, Next and other',
            organizer: 'SoftServis',
            eventDate: '2024-06-10T18:25:43.511Z',
            userRegistration: {
                create: {
                    firstName: 'Alise',
                    lastName: 'Braxton',
                    email: 'bob@prisma.io',
                    birthday: '1980-04-23T18:25:43.511Z',
                    whereKnow: 'Friends',
                },
            },
        },
    })
    const event3 = await prisma.events.create({
        data: {
            title: 'Concert Rammstein',
            description: 'Tribute Show Rammstein з симфонічним оркестром у Києві!',
            organizer: 'Kontramarka.ua',
            eventDate: '2024-06-10T18:25:43.511Z',
            userRegistration: {
                create: {
                    firstName: 'Den',
                    lastName: 'Abramov',
                    email: 'den_abramov@prisma.io',
                    birthday: '1980-04-23T18:25:43.511Z',
                    whereKnow: 'FoundMySelf',
                },
            },
        },
    })
    console.log({ event1, event2, event3 })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
