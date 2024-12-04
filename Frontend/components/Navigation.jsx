"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name : "home",
        path : "/",
    },
    {
        name : "rules",
        path : "/rules",
    },
    {
        name : "requirements",
        path : "/requirements",
    },
]

const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className='flex justify-between items-center gap-8'>
            {links.map((link, index) => {
                return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-primary border-b-2 border-primary "
                        } capitalize font-medium hover:text-primary transition-all`}
                        >
                            {link.name}
                        </Link>
                )
            })}
        </nav>
    )   
}

export default Navigation
