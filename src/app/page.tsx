import Events from '@/components/Events/Events'

import { getEvents } from './api/showEvents'

export default async function Home() {
    const data = await getEvents()

    return <Events data={data} />
}
