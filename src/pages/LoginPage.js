import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';

function LoginPage() {
    const [userData, setUserData] = useState({
        username: "",
        age: ""
    })

    const handleChangeUserData = (event) => {
        // event.preventDefault();
        // setUserData({[event.target.name]: event.target.value})
        // console.log(event.target.value)
        // var name = event.target.name;
        // var value = event.target.value;
        // setUserData(values => ({...values, [name]: value}))
        const value = event.target.value;
        setUserData({
            ...userData, [event.target.name]: value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData.email)
    }
    return (
        <div className='bg-black absolute w-full h-full'>
            <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='text-center font-bold text-primary-color text-xl sm:text-2xl lg-text-4xl'>CREATE. MONETIZE. REPEAT.</h2>
                <h3 className='text-center font-bold text-white text-sm mb-7'>Log in to your account to start your first release!</h3>
                <div className='bg-grey rounded-lg w-11/12 max-w-md p-2 sm:p-10 md:p-14'>
                    <div className='w-full h-full'>
                        <form className=''>
                            <div className='flex flex-col justify-center items-center'>
                                <input type="email" name="text" placeholder='Username' className='px-3 mt-4 py-2 rounded-full w-11/12'/>
                                <input type="password" name="Password" placeholder='Password' className='px-3 mt-4 py-2 rounded-full w-11/12'/>
                                <p className='text-white mt-6'>Don't have account? Register <Link to={'/SignUp'}><span><u>here</u></span></Link></p>
                                <input type="submit" value="Submit" className='bg-primary-color text-black  px-3 py-2 w-1/2 rounded mt-9'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage