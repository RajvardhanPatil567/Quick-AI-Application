import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const Navbar = () => {
    const navigate = useNavigate()
    const { openSignIn } = useClerk()

    const { user } = useUser()

    return (
        <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-32 cursor-pointer'>
            <img src={assets.logo} alt="" className='w-32 sm:w-44' onClick={() => navigate('/')} />
            {user ?
                <UserButton /> : (
                    <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm bg-primary text-white px-10 py-2.5 hover:opacity-90 transition'> Get Started<ArrowRight className=' w-4 h-4' /></button>
                )}
        </div>
    )
}



export default Navbar
