import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-2 px-4 flex justify-between shadow-md'>
            <Link to={'/dashboard'}>
                <div className="px-3 py-1 text-lg font-extrabold text-zinc-900 flex items-center  rounded-md shadow-sm">
                    <img src="/vite.svg" alt="" srcset="" className='h-8 mr-2'/>
                    ResumeForge
                </div>
            </Link>
            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                        <Button variant="outline" className="text-sm px-2 py-1">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button className="text-sm px-2 py-1">Get Started</Button>
                </Link>
            }
        </div>
    )
}

export default Header
