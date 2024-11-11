import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-no-background(1).png'
import {Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import userIcon from '../assets/profile.gif'
import { FaSearchengin } from "react-icons/fa6";
import { navigation } from '../constants/navigation';



const Header = () => {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
    const [searchInput,setSearchInput] = useState(removeSpace);
    const navigate = useNavigate()
    


    useEffect(()=>{
        if(searchInput){
            navigate(`/search?q=${searchInput}`)
        }        
    },[searchInput])

    const handleSubmit = (e)=>{
         e.preventDefault();
    }


  return (
    <>
        <header className='mt-1 p-2 fixed top-0 w-full h-32 bg-neutral-700 bg-opacity-80 rounded-3xl z-40'>
            <div className='container mx-auto flex items-center h-full'>
                <Link to={'/'}>
                    <img 
                    src={logo}
                    alt='logo'
                    width={170}
                    />
                </Link>

                <nav className='hidden lg:flex items-center gap-3 ml-6'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div>
                                    <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-3 hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 ${isActive && "underline decoration-2" } rounded-3xl`}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        
                        })
                    }
                </nav>

                <div className='ml-auto flex items-center gap-6'>
                    <form className='flex items-center gap-3' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search kar yaar...'
                            className='bg-transparent px-4 py-3 outline-none border-none hidden lg:block'
                            onChange={(e)=> setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-4xl text-white'>
                        <FaSearchengin />
                        </button>
                    </form>

                    <div className='w-11 h-11 cursor-pointer'>
                        <img
                            src={userIcon}
                            alt='usericon'
                            className='w-full h-full rounded-full'
                        />
                    </div>
                </div>
            </div>
        </header> 
    </>
  )
}

export default Header