import { getEvents } from '@/api/getEvents'
import Events from '@/components/Events/Events'

export default async function Home() {
    const data = await getEvents()

    console.log('GETDATA:', data)

    return <Events data={data} />
}
