import { getEvents } from '@/api/getEvents'
import Events from '@/components/Events/Events'

export default async function Home() {
    const data = await getEvents()
    return <Events data={data} />
}
