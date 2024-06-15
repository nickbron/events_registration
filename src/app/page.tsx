import Events from '@/components/Events/Events'
import { getEvents } from './api/actions'

export default async function Home() {
    const data = await getEvents()

    return <Events data={data} />
}

export const revalidate = 60
