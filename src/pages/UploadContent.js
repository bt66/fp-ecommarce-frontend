import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function UploadContent() {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("token");
        if(!loggedInUser) {
            navigate('/login');
        }else {
            setauthenticated(true)
        }
        // fetch to protected route
    }, [])

    return (
        <div className='absolute h-full w-full bg-black'>
            <Header/>
        </div>
    )
}

export default UploadContent