import React from 'react'

function SignUp() {
    return (
        <div className='bg-black absolute w-full h-full'>
            <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='text-center font-bold text-primary-color text-xl my-8 sm:text-2xl lg-text-4xl'>CREATE YOUR ACCOUNT</h2>
                <div className='bg-grey rounded-lg w-11/12 max-w-md p-2 sm:p-10 md:p-14'>
                    <div className='w-full h-full'>
                        <form className=''>
                            <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-around'>
                                <input type="text" name="fitstName" placeholder='First Name' className='px-3 mt-4 py-2 rounded-full w-11/12 sm:w-2/5'/>
                                <input type="text" name="lastName" placeholder='Last Name' className='px-3 mt-4 py-2 rounded-full w-11/12 sm:w-2/5'/>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <input type="text" name="username" placeholder='Username' className='px-3 mt-4 py-2 rounded-full w-11/12'/>
                                <input type="email" name="text" placeholder='Email Address' className='px-3 mt-4 py-2 rounded-full w-11/12'/>
                                <input type="password" name="Password" placeholder='Password' className='px-3 mt-4 py-2 rounded-full w-11/12'/>
                                <input type="submit" value="Submit" className='bg-primary-color text-black  px-3 py-2 w-1/2 rounded mt-9'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp