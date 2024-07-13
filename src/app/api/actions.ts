import prisma from '@/lib/prisma'

type eventType = {
    title: string
    description: string
    eventDate: Date
    organizer: string
    image: string
}
type randomEventsType = {
    name: string
    promoter: { description: string; name: string }
    dates: { start: { dateTime: Date } }
    images: { url: string }[]
}

export async function getEventsByTitle(title: string) {
    try {
        const res = await fetch(`/api/findEvents?q=${title}`)
        if (!res.ok) {
            throw new Error('Get Events error')
        }
        return res.json()
    } catch (error) {
        console.error('get Events error:', error)
    }
}
export async function getParticipants(idEvent: string) {
    try {
        const res = await fetch(`/api/participants?id=${idEvent}`)
        if (!res.ok) {
            throw new Error('Get Participants error')
        }
        return res.json()
    } catch (error) {
        console.error('get Participants error:', error)
    }
}

export async function getCountParticipants() {
    const count = await prisma.$queryRaw`SELECT * FROM Registration`
    return count
}

export async function getRandomEvents() {
    const newEvents: eventType[] = []
    const API_KEY = process.env.TICKETMASTER_KEY
    const urlEvents = `https://app.ticketmaster.com/discovery/v2/events.json?page=1&startDateTime=2024-12-01T14:00:00Z&apikey=${API_KEY}`
    const result = await fetch(urlEvents).then((res) => res.json())
    const events: randomEventsType[] = result._embedded.events

    try {
        events.forEach((item) => {
            newEvents.push({
                title: item.name,
                description: item.promoter.description,
                eventDate: item.dates.start.dateTime,
                organizer: item.promoter.name,
                image: item.images[7].url,
            })
        })
    } catch (error) {
        console.log(error)
    }

    console.log('RESPONSE::', newEvents)
    addEvents(newEvents)
}

export async function addEvents(item: eventType[]) {
    try {
        const event = await prisma.events.createMany({
            data: item,
        })
        console.log('Event:', event)
    } catch (e) {
        console.error('ERROR:', e)
    }
}
