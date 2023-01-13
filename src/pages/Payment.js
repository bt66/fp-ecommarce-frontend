import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import LogoSubmitMusik from '../assets/LOGO.svg'
import { BiMenu,BiPlus } from "react-icons/bi";
import { BsBroadcast } from "react-icons/bs";
import MicrophoneLogo from "../assets/Microphone.svg"
import SirrenLogo from "../assets/Siren.svg"
import PlaylistLogo from "../assets/Playlist.svg"
import DiscLogo from "../assets/Disc.svg"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import { HiLogout } from "react-icons/hi";
import { MdPayment } from "react-icons/md";

// import component
import UpdateModal from '../components/UpdateModal';
import { useRef } from 'react';

export const DataContext = React.createContext();

function Payment() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(1);

    const [fetched, setFeched] = useState(false);
    const [userHaveContent, setUserHaveContent] = useState(false);

    const[data, setData] = useState([]);
    const updateModalRef = useRef();

    const [updateData, setUpdateData] = useState({
        _id: "",
        plan : "",
        releaseType : "",
        songType: "",
        title: "",
        artistName: "",
        featuringArtistName: "",
        trackList: "",
        primaryGenre: "",
        secondaryGenre: "",
        productionYear: "",
        language: "",
        explicitContent: "",
        tracks: [],
        artWorkFile: ""
    });

    useEffect(() => {
        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_BACKEND_URL}/content/getContent`,
            headers: { 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        };
        axios(config)
        .then(response => 
            {
                setData(response.data)
                setFeched(true)
                console.log(data)
                if(response.data != []) {
                    setUserHaveContent(false);
                }else{
                    setUserHaveContent(true);
                }
                
            })
        .catch(function (error) {
            console.log(error)
            // if unauthorized redirect to login
            if(error.response.status == 401){
                navigate("/login");
            }
        })
    },[fetched])

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token")
        navigate("/")
    }

    const handleDelete = (event) => {
        event.preventDefault();
        var config = {
            method: 'delete',
            url: `${process.env.REACT_APP_BACKEND_URL}/content/deleteContent`,
            headers: { 
            'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            data : {"id": updateData._id}
        };
        console.log(updateData._id)
        axios(config)
        .then(response => 
            {
                setFeched(!fetched)
                addNotification({
                    title: 'Success',
                    message: 'Delete data success',
                    theme: 'darkgreen',
                    native: false // when using native, your OS will handle theming.
                });
                updateModalRef.current.classList.add('hidden')
                // console.log(data)
            })
        .catch(function (error) {
            console.log(error)
        })
    }

    const handleOpenModal = ((event, key) => {

        event.preventDefault()
        updateModalRef.current.classList.remove('hidden')

        setModalIndex(key);
        setUpdateData(data[key]);
        setOpenModal(true);
    })
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log(value)
        
        // console.log(event.target.file)
        setUpdateData((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
    }
    const handleCloseModal = ((event) => {
        updateModalRef.current.classList.add('hidden')
        event.preventDefault()
        setOpenModal(false);
    })
    if (localStorage.getItem('token') == undefined){
        navigate("/");
    }else {
        return (
            <div className='z-10 absolute w-screen h-screen bg-black overflow-auto'>
                <Notifications />
                {/* updateModal */}
                <div className='absolute hidden t-0 z-10 flex fixed z-10 w-full  items-center justify-center bg-black bg-opacity-60' ref={updateModalRef}>
                    <div id="defaultModal" aria-hidden="true" className="flex justify-center text-white z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                        <div className="relative w-full h-full max-w-2xl md:h-auto">
                            <div className="relative bg-base-grey rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-white">
                                        {updateData._id} - {updateData.title}
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={handleCloseModal}>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
    
                                <div className="p-6 space-y-6 text-white">
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Choose Your Best Plan<span className='text-red-500'>*</span></p>
                                        <form className='text-grey'>
                                            <select id="cars" name="plan" value={updateData.plan} onChange={handleInputChange} className='w-full p-2 rounded'>
                                                <option value="none">None</option>
                                                <option value="Standard Single">Standard Single</option>
                                                <option value="PRO Single">PRO Single</option>
                                                <option value="Standard Album">Standard Album</option>
                                                <option value="PRO Album">PRO Album</option>
                                                <option value="Standard Cover">Standard Cover</option>
                                                <option value="PRO Cover">PRO Cover</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Release Type<span className='text-red-500'>*</span></p>
                                        <p>Select “single” for release per 1 song, and select “album” if more than 4 songs</p>
                                        <form>
                                            <div className=''>
                                                <div className='flex items-center'>
                                                    <div>
                                                        <input type="radio" name="releaseType" onChange={handleInputChange} value="Single"></input>
                                                        {/* <input value="agreements" type="checkbox"></input> */}
                                                    </div>
                                                    <div className='m-2'>
                                                        <p>Single</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-center'>
                                                    <div>
                                                        <input type="radio" name="releaseType" onChange={handleInputChange} value="Album"></input>
                                                        {/* <input value="agreements" type="checkbox"></input> */}
                                                    </div>
                                                    <div className='m-2'>
                                                        <p>Album</p>
                                                    </div>
                                                </div>
    
                                            </div>
                                        </form>
                                    </div>
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Song Type<span className='text-red-500'>*</span></p>
                                        <form>
                                            <div className=''>
                                                <div className='flex items-center'>
                                                    <div>
                                                        <input type="radio" onChange={handleInputChange} name="songType" value="Original Version"></input>
                                                    </div>
                                                    <div className='m-2'>
                                                        <p>Original Version</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-center'>
                                                    <div>
                                                        <input type="radio" onChange={handleInputChange} name="songType" value="Cover Version"></input>
                                                    </div>
                                                    <div className='m-2'>
                                                        <p>Cover Version</p>
                                                    </div>
                                                </div>
    
                                            </div>
                                        </form>
                                    </div>
    
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Album/Single Title<span className='text-red-500'>*</span></p>
                                        <form className='text-black'>
                                            <input 
                                                name="title" 
                                                placeholder='Title' 
                                                value={updateData.title}
                                                onChange={handleInputChange}
                                                className='px-3 mt-4 py-2 rounded w-full'/>
                                        </form>
                                    </div>
    
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Artist Name<span className='text-red-500'>*</span></p>
                                        <form className='text-black'>
                                            <input 
                                                type="text" 
                                                name="artistName" 
                                                placeholder='Artist Name'
                                                value={updateData.artistName}
                                                onChange={handleInputChange}
                                                className='px-3 mt-4 py-2 rounded w-full'/>
                                        </form>
                                    </div>
    
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Featuring Artist Name</p>
                                        <p>Enter the featuring artist name (if any)</p>
                                        <form className='text-black'>
                                            <input 
                                                type="text" 
                                                name="featuringArtistName"
                                                value={updateData.featuringArtistName}
                                                onChange={handleInputChange}
                                                placeholder='Featuring Artist Name'
                                                className='px-3 mt-4 py-2 rounded w-full'/>
                                        </form>
                                    </div>
    
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Track List</p>
                                        <p>List the Song Titles in the order you want, (along with feat. if available). Separate with commas. Example; First Song, Second Song (feat. Full Name), Next Song, Last Song.</p>
                                        <p className='mt-1'><i>Skip this step if the release type is not an album.</i></p>
                                        <form className='text-black'>
                                            <input 
                                                type="text" 
                                                name="trackList"
                                                value={updateData.trackList}
                                                onChange={handleInputChange}
                                                placeholder='Track List'
                                                className='px-3 mt-4 py-2 rounded w-full'/>
                                        </form>
                                    </div>
    
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Primary Genre<span className='text-red-500'>*</span></p>
                                        <form className='text-grey'>
                                            <select id="primaryGenre" name="primaryGenre" onChange={handleInputChange} value={updateData.primaryGenre} className='w-full p-2 rounded'>
                                                <option value="none">none</option>
                                                <option value="Pop">Pop</option>
                                                <option value="Jaz">Jaz</option>
                                            </select>
                                        </form>
                                    </div>
                                    
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Secondary Genre<span className='text-red-500'>*</span></p>
                                        <p>Must be different from the main genre</p>
                                        <form className='text-grey'>
                                            <select id="secondaryGenre" name="secondaryGenre" onChange={handleInputChange} className='w-full p-2 rounded'>
                                                <option value="none">Pop 1</option>
                                                <option value="volvo">Pop 2</option>
                                            </select>
                                        </form>
                                    </div>
                                    
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Production Year<span className='text-red-500'>*</span></p>
                                        <p>The year your work was created or recorded. Generally Platforms will display it with the symbol: ©</p>
                                        <form className='text-black'>
                                            <input 
                                                type="number" 
                                                name="productionYear" 
                                                placeholder='Production Year'
                                                value={updateData.productionYear}
                                                onChange={handleInputChange}
                                                className='px-3 mt-4 py-2 rounded w-full'/>
                                        </form>
                                    </div>
    
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Language<span className='text-red-500'>*</span></p>
                                        <p>The main language used in the song lyrics</p>
                                        <form className='text-grey'>
                                            <select id="language" name="language" onChange={handleInputChange} value={updateData.language}  className='w-full p-2 rounded'>
                                                <option value="none">None</option>
                                                <option value="English">English</option>
                                                <option value="Indonesian">Indonesian</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='my-2 bg-base-grey p-4 rounded-xl border border-third-grey'>
                                        <p>Explicit Content<span className='text-red-500'>*</span></p>
                                        <p>The main language used in the song lyrics</p>
                                        <form className='text-grey'>
                                            <select id="explicitContent" name="explicitContent" onChange={handleInputChange} value={updateData.explicitContent}  className='w-full p-2 rounded'>
                                                <option value="none">None</option>
                                                <option value="Menu mbuh 1">Menu mbuh 1</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                    <button data-modal-hide="defaultModal" type="button" className="text-white bg-red-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={handleDelete}>Delete</button>
                                    <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={handleCloseModal}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                
                {/* main */}
                <div className='flex'>
                    <Sidebar/>
                    
                    <div className='h-full w-full px-1 py-3'>
                        <div className='text-white'>
                            <p className='text-right p-2'>Welcome back - sudobash</p>
                        </div>
                        <div className=' text-white rounded-xl p-4'>
                            <h1 className='text-primary-color'>List Payment <span className='text-white'>- See all of the payment based on content you've uploaded</span></h1>
                            
                            <div className='bg-base-grey rounded-full'>

                                <div className='my-2 flex rounded-full w-full h-10 p-1 border border-fourth-grey bg-third-grey text-white'>
                                    <div className='flex'>
                                        <div className='flex  justify-center items-center rounded-full p-1 bg-fourth-grey text-black overflow-hidden'>
                                            <p className=''>Action Needed</p>
                                        </div>
                                        <div className='flex justify-center items-center rounded-full p-1 bg-fourth-grey text-black overflow-hidden'>
                                            <p className=''>Action Needed</p>
                                        </div>
                                        <div className='flex justify-center items-center rounded-full p-1 bg-fourth-grey text-black overflow-hidden'>
                                            <p className=''>Action Needed</p>
                                        </div>
                                        <div className='flex justify-center items-center rounded-full p-1 bg-fourth-grey text-black overflow-hidden'>
                                            <p className=''>Action Needed</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            
                            <div className='flex justify-evenly flex-wrap'>
                                {
                                    data.map((item, index) => (
                                        <div className='text-white border-2 border-primary-color rounded-xl max-w-md my-3 mx-1 sm:my-5' onClick={event => handleOpenModal(event, index)} key={item._id}>
                                            <div className='flex text-black rounded-t px-2 py-1 justify-between bg-primary-color'>
                                                <div>
                                                    <h1>{item.title}</h1>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <BiMenu/>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div>
                                                    <img src={item.artWorkFile} className="h-52 w-80 object-none"/>
                                                </div>
                                                <div>
                                                    <div className='p-2'>
                                                        <h1>ID: {item._id}</h1>
                                                        <div className='flex'>
                                                            <img src={MicrophoneLogo} className="mx-2"></img>
                                                            <p>{item.artistName}</p>
                                                        </div>
                                                        <div className='flex'>
                                                            <img src={DiscLogo} className="mx-2"></img>
                                                            <p>{item.releaseType}</p>
                                                        </div>
                                                        <div className='flex'>
                                                            <img src={PlaylistLogo} className="mx-2"></img>
                                                            <p>{item.tracks.length} Track</p>
                                                        </div>
                                                        <div className='flex'>
                                                            <img src={SirrenLogo} className="mx-2"></img>
                                                            <p>Submited - waiting review</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* modal update and delete */}
            </div>
        )
    }
}

export default Payment