import { authConfig } from '@/configs/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

export default async function Profile() {
    const session = await getServerSession(authConfig)

    return (
        <div className="flex flex-col items-center max-w-xl gap-4 mt-20">
            <h1>Profile of {session?.user?.name}</h1>
            {session?.user?.image && <Image src={session.user.image} alt="" width={10} height={10} />}

            <div className="h-5 bg-gray-400 rounded w-1/2"></div>
            <div className="h-5 bg-gray-400 rounded w-1/2"></div>
            <div className="h-5 bg-gray-400 rounded w-1/2"></div>
            <div className="h-5 bg-gray-400 rounded w-1/2"></div>
            <div className="h-5 bg-gray-400 rounded w-1/2"></div>
        </div>
    )
}
