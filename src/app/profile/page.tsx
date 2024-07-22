import { authConfig } from '@/configs/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

export default async function Profile() {
    const session = await getServerSession(authConfig)

    return (
        <div className="flex flex-col w-full  items-center pt-4 gap-4 ">
            <h1>Profile of {session?.user?.name}</h1>
            {session?.user?.image && <Image src={session.user.image} alt="" width={100} height={100} loading="lazy" />}

            <div className="h-5 rounded w-1/2"></div>
            <div className="h-5 rounded w-1/2"></div>
            <div className="h-5 rounded w-1/2"></div>
            <div className="h-5 rounded w-1/2"></div>
            <div className="h-5 rounded w-1/2"></div>
        </div>
    )
}
