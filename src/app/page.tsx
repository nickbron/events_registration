'use client'
import Events from '@/components/Events/Events'
import SearchBar from '@/components/SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import { getRandomEvents } from './api/actions'

export default function Home() {
    const [events, setEvents] = useState([])
    const [url, setUrl] = useState('/api/events')

    const handleSearch = (value: string) => {
        setUrl(`/api/findEvents?q=${value}`)
    }

    useEffect(() => {
        async function fetchEvents() {
            const response = await fetch(url, { next: { revalidate: 3600 } })
            const events = await response.json()
            setEvents(events)
        }
        fetchEvents()
    }, [url])

    console.log('EVENTS:', events)
    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <Events data={events} />
        </>
    )
}
