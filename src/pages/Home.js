import React from 'react'
import Header from '../components/Header'
import BackgroundPexcels from '../assets/pexels-wendy-wei-1916824.svg'
// import ImgContent from '../assets/illustrations.svg'
// import HandCraftIcon from '../assets/handCraft.svg'
// import WarantyIcon from '../assets/waranty.svg'
// import JeweleryIcon from '../assets/icon _Gem.svg'

function Home() {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0'>
        <Header/>
      </div>
      <div className='text-white absolute inset-0 m-auto'>
        <h2>NEW ERA OF</h2>
        <h2>MUSIC DISTRIBUTION</h2>
        <p>Stream and sell your music around the world on Spotify, Apple Music, and more!</p>
        <a href="#" 
        className="border-1 border-slate-300 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-btn-primary px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-yellow-500"
        >
            Get Started
        </a>
      </div>
      <div className='bg-default-dark'>
        <img src={BackgroundPexcels} className="w-full"/>
      </div>
    </div>
  )
}

export default Home