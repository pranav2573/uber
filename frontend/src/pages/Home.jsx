import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='bg-cover bg-right bg-[url(https://media.istockphoto.com/id/175437972/photo/green-light.jpg?s=1024x1024&w=is&k=20&c=wX64I8w-w4J3rwLFayp6AyEYbscnKW9BJ-va6hlgsgQ=)] h-screen pt-8 flex justify-between flex-col w-full'>
                <img className='w-14 ml-8' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="uber" />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
