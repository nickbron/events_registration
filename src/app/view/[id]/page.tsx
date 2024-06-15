'use client'
import { useSearchParams } from 'next/navigation'
import ListPartisipants from '@/components/ListParticipants/ListPartisipants'

import { useEffect, useState } from 'react'
import { IRegistration } from '@/models'

export default function ViewPage() {
    const searchParams = useSearchParams()
    const idEvent = searchParams.get('id')

    const [data, setData] = useState<Array<IRegistration>>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/api/participants?id=${idEvent}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [idEvent])

    console.log('DATA:', data)
    if (isLoading) return <p>Loading...</p>
    if (!data.length) return <p>No profile data</p>

    return (
        <>
            {data.length ? (
                <>
                    <div className="bg-gray-100 py-2 px-4">
                        <p className="text-2xl md:text-4xl font-extrabold dark:text-slate-400">List of registered participants:</p>
                    </div>
                    <ListPartisipants data={data} />
                </>
            ) : (
                <div className="bg-gray-100 py-2 px-4">
                    <p className="text-2xl md:text-4xl font-extrabold dark:text-slate-400">while there are no participants</p>
                </div>
            )}
        </>
    )
}
