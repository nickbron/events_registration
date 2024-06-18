'use client'
import { useSearchParams } from 'next/navigation'
import ListPartisipants from '@/components/ListParticipants/ListPartisipants'

import { useEffect, useState } from 'react'
import { IRegistration, IstatResult } from '@/models'
import Loading from '@/app/loading'
import SimpleCharts from '@/components/Charts/charts'

export default function ViewPage() {
    const searchParams = useSearchParams()
    const idEvent = searchParams.get('id')
    const arrX: string[] = []
    const arrY: number[] = []

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
    }, [idEvent])

    useEffect(() => {
        fetch(`/api/norParticipantsPerDay?id=${idEvent}`)
            .then((res) => res.json())
            .then((data) => {
                setStatistic(data)
                setLoading(false)
            })
    }, [])

    statistic.forEach((item) => arrX.push(item.dateRegistration))
    statistic.forEach((itemResult) => arrY.push(itemResult.quantity))

    if (isLoading) return <Loading />

    return (
        <>
            {data.length ? (
                <>
                    <ListPartisipants data={data} />
                    <SimpleCharts arrX={arrX} arrY={arrY} />
                </>
            ) : (
                <div className="bg-gray-100 py-2 px-4">
                    <p className="text-2xl md:text-4xl font-extrabold dark:text-slate-400">while there are no participants</p>
                </div>
            )}
        </>
    )
}
