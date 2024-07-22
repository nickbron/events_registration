'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import ToggleMode from '../ToggleMode/ToggleMode'

export default function NavBar() {
    const { data: session } = useSession()
    console.log('SESSION::', session)

    return (
        <nav className=" flex flex-col  items-center  border-b border-primary  bg-secondary py-4 px-2">
            <div className="flex justify-between w-full ">
                <a className="flex flex-shrink-0 items-center " href="/">
                    <Image className="block h-8 w-auto" src="https://www.svgrepo.com/show/303650/neo-logo.svg" alt="" width={32} height={32} />
                </a>

                <div className="flex items-center gap-5   ">
                    {session?.user && (
                        <a className="flex items-center" href="/profile">
                            {session?.user.image && <Image className="rounded-full mr-2" src={session.user.image} alt="" width={24} height={24} />}
                            <span> Profile</span>
                        </a>
                    )}

                    {session?.user ? (
                        <a className="flex items-center" href="#" onClick={() => signOut({ callbackUrl: '/' })}>
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4"
                                />
                            </svg>
                            <span> Sign Out</span>
                        </a>
                    ) : (
                        <a className="flex items-center" href="/signin">
                            <span> Sign In</span>
                        </a>
                    )}
                    <ToggleMode />
                </div>
            </div>
        </nav>
    )
}
