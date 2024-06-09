import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
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

export async function getRandomEvents() {
    const newEvents: eventType[] = []
    const API_KEY = process.env.TICKETMASTER_KEY
    const urlEvents = `https://app.ticketmaster.com/discovery/v2/events.json?page=1&apikey=${API_KEY}`
    const result = await fetch(urlEvents).then((res) => res.json())
    const events: randomEventsType[] = result?._embedded?.events

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
    // addEvents(newEvents)
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

// export async function getParticipants(idEvent: any) {
//   const supabase = createClient();

//   const { data, error } = await supabase
//     .from("UserRegistration")
//     .select("*")
//     .in("id_event", [idEvent])
//     .order("created", { ascending: false });

//   console.log("DAAAAA", data);
//   if (error) {
//     redirect("/error");
//   }
//   return { data, error };
// }
