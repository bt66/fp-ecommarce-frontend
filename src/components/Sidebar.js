import React from 'react'
import LogoSubmitMusik from '../assets/LOGO.svg'
import { BiBullseye } from "react-icons/bi";

function Sidebar() {
    return (
        <div className='h-full w-16 sticky'>
            <div className='bg-red-500 w-16 h-full'>
                <div className='flex flex-col items-center bg-grey'>
                    <div className='mt-4 p-2'>
                        <img src={LogoSubmitMusik}></img>
                    </div>
                    <div className='flex w-full items-center mt-10 hover:bg-secondary-grey'>
                        <div>
                            <BiBullseye color="white" size="40px"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar