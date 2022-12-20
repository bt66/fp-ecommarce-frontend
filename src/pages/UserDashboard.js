import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LogoSubmitMusik from '../assets/LOGO.svg'
import { BiBullseye } from "react-icons/bi";
function UserDashboard() {
    const [open, setOpen] = useState(false);
    return (
        <div className='absolute w-screen h-screen bg-black overflow-auto'>
            <div className='flex'>
                <div className={`${open ? "w-72" : "w-20" } h-5/6 sticky top-0`}>
                    <div className={`${open ? "w-70" : "w-19" } h-full bg-grey m-2 rounded-xl`}>

                    <img src={LogoSubmitMusik} className="py-6 px-2 "></img>
                    </div>
                </div>
                <div className=''>
                    <div className='bg-green-400 h-40 w-40'></div>
                    <div className='bg-green-400 h-40 w-40'></div>
                    <div className='bg-green-400 h-40 w-40'></div>
                    <div className='bg-green-400 h-40 w-40'></div>
                    <div className='bg-green-400 h-40 w-40'></div>
                    <div className='bg-green-400 h-40 w-40'></div>
                    <div className='bg-green-400 h-40 w-40'></div>
                    <div className='bg-green-400 h-40 w-40'></div>
                    <div className='bg-green-400 h-40 w-40'></div>
                </div>

            </div>
        </div>
    )
}

export default UserDashboard