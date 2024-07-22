'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
export default function GoogleButton() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    return (
        <div className="flex items-center justify-center ">
            <button
                onClick={() => signIn('google', { callbackUrl })}
                className=" px-4 py-2 border-2 flex gap-2 rounded-full transition duration-300 bg-secondary
       "
            >
                <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google logo" width={20} height={20} />
                <span className="">Login with Google</span>
            </button>
        </div>
    )
}
