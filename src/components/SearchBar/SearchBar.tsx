'use client'
import { useState } from 'react'

type SearchProps = {
    onSearch: (value: string) => void
}

export default function SearchBar(props: SearchProps) {
    const { onSearch } = props

    const [value, setValue] = useState('')

    onSearch(value)

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const normalizedString = event.target.value.trim().toLowerCase()
        setValue(normalizedString)
    }
    return (
        <>
            <div className="flex flex-col w-full items-center pt-4 gap-4 bg-gradient-to-b from-blue-600 via-blue-300 to-blue-100">
                <p className="text-4xl md:text-6xl font-extrabold text-white">Upcoming Event</p>
                <form action="" className="max-w-[480px] w-full px-4 py-4">
                    <div className="relative">
                        <input
                            type="text"
                            name="search"
                            autoComplete="off"
                            onChange={searchHandler}
                            className="w-full border h-12 shadow p-4 rounded-full"
                            placeholder="enter Search"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
