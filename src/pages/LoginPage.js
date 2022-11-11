import React, { useEffect, useState }  from 'react'

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
        <div className='flex justify-center items-center bg-dark-secondary h-screen'>
            <div className='bg-default-dark p-4 rounded'>
                <h2 className='mt-4 text-white font-bold text-2xl text-center'>Welcome !</h2>
                <h3 className='mt-2 text-white text-center'>Sing in to your account !</h3>
                <div className='mt-9'>
                    <form onSubmit={handleSubmit}>
                        <label>Enter your name:
                            <input 
                                type="text" 
                                name="username" 
                                value={userData.username} 
                                onChange={handleChangeUserData}
                            />
                        </label>
                        <label>Enter your age:
                            <input 
                            type="number" 
                            name="age" 
                            value={userData.age} 
                            onChange={handleChangeUserData}
                            />
                        </label>
                        <input type="submit" />
                    </form>
                    <form>
                        <div className='flex flex-col mx-10 my-3'>
                            <label className='text-white'>Username or Email : </label>
                            <input type="text" id='email' value={userData.email  || ""} onChange={handleChangeUserData}></input>
                        </div>
                        <div className='flex flex-col mx-10 my-3'>
                            <label className='text-white'>Password : </label>
                            <input type="text" id='password' value={userData.password || ""} onChange={handleChangeUserData}></input>
                        </div>
                        <div className='flex text-white justify-around my-9'>
                            <p>Forget password?</p>
                            <p>Register</p>
                        </div>
                        <div className='rounded flex text-white justify-center my-4'>
                            <button type='submit' onClick={handleSubmit} className='bg-btn-primary rounded w-full mx-10 py-1 hover:bg-btn-primary-hover'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage