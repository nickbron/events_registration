'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function NavBar() {
    const { data: session } = useSession()
    console.log('SESSION::', session)

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
                <div className="relative flex h-16 space-x-10 w-full">
                    <div className="flex justify-start">
                        <a className="flex flex-shrink-0 items-center" href="/">
                            <img className="block h-8 w-auto" height="32" src="https://www.svgrepo.com/show/303650/neo-logo.svg" />
                        </a>
                    </div>
                    <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">
                        {session?.user && (
                            <a className="flex items-center text-gray-600 hover:text-gray-800" href="/profile">
                                {session?.user.image && <Image className="rounded-full" src={session.user.image} alt="" width={24} height={24} />}
                                <span className="font-bold"> Profile</span>
                            </a>
                        )}

                        {session?.user ? (
                            <a className="flex items-center text-gray-600 hover:text-gray-800" href="#" onClick={() => signOut({ callbackUrl: '/' })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4"
                                    />
                                </svg>
                                <span className="font-bold"> Sign Out</span>
                            </a>
                        ) : (
                            <a className="flex items-center text-gray-600 hover:text-gray-800" href="/signin">
                                <span className="font-bold"> Sign In</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
