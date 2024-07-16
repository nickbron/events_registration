'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
export default function GoogleButton() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/profile'

    return (
        <div className="flex items-center justify-center ">
            <button
                onClick={() => signIn('google', { callbackUrl })}
                className=" px-4 py-2 border-2 border-gray-300 flex gap-2 rounded-full transition duration-300
        hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
            >
                <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google logo" width={6} height={6} />
                <span>Login with Google</span>
            </button>
        </div>
    )
}
