'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const pathname = usePathname()
    console.log(pathname)
    
    return (
        <div className='bg-gray-100'>
            <div className='p-1 container mx-auto'>
                <ul className='flex gap-3'>
                    <li><Link className={`${pathname === '/' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`} href="/">Home</Link></li>
                    <li><Link className={`${pathname === '/dashboard' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`} href="/dashboard">Dashboard</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar