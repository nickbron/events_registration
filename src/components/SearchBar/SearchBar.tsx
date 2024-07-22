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
            <div className="flex flex-col w-full items-center pt-4 ">
                <p className="text-4xl text-primary md:text-6xl font-extrabold ">Upcoming Event</p>
                <form action="" className="max-w-[480px] w-full  py-5  ">
                    <div className="relative">
                        <input
                            type="text"
                            name="search"
                            autoComplete="off"
                            onChange={searchHandler}
                            className="w-full border h-12 p-4 rounded-full   "
                            placeholder="enter Search"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
