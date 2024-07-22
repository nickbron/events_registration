'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'

const ToggleMode = () => {
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Button variant="secondary" size="icon" disabled={true}></Button>
    }

    const dark = theme === 'dark'

    return (
        <Button variant="secondary" size="icon" onClick={() => setTheme(`${dark ? 'light' : 'dark'}`)}>
            {dark ? <Sun className="hover:cursor-pointer hover:text-primary" /> : <Moon className="hover:cursor-pointer hover:text-primary" />}
        </Button>
    )
}

export default ToggleMode
