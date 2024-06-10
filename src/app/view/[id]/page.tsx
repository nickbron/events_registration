'use client'
import { useSearchParams } from 'next/navigation'
import { getParticipants } from '@/api/actions'
import ListPartisipants from '@/components/ListParticipants/ListPartisipants'

export default async function ViewPage() {
    const searchParams = useSearchParams()
    const idEvent = searchParams.get('id')
    const data = await getParticipants(idEvent)

    return (
        <>
            {data?.length ? (
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
