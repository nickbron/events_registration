'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IRegistration, IstatResult } from '@/models'
import Loading from '@/app/loading'

import TableParticipants from '@/components/TableParticipants/TableParticipants'
import CahrtOfParticipants from '@/components/Charts/ChartOfParticipants'

export default function ViewPage() {
    const searchParams = useSearchParams()
    const idEvent = searchParams.get('id')

    const [data, setData] = useState<Array<IRegistration>>([])
    const [statistic, setStatistic] = useState<Array<IstatResult>>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`/api/participants?id=${idEvent}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        fetch(`/api/norParticipantsPerDay?id=${idEvent}`)
            .then((res) => res.json())
            .then((data) => {
                setStatistic(data)
                setLoading(false)
            })
    }, [idEvent])

    console.log('Statistic:', statistic)

    if (isLoading) return <Loading />

    return (
        <div className="w-screen">
            {data.length ? (
                <div>
                    <div className="m-5">
                        <p className="flex  justify-center text-2xl md:text-4xl text-primary font-extrabold p-5 ">
                            Report on registered participants
                        </p>
                        <TableParticipants data={data} />
                    </div>

                    <CahrtOfParticipants statisticData={statistic} />
                </div>
            ) : (
                <div className="py-2 px-4">
                    <p className="text-2xl md:text-4xl ">while there are no participants</p>
                </div>
            )}
        </div>
    )
}
