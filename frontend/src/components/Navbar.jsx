import React, { useState } from 'react'
import logo from "../assets/logo.png"



const Navbar = () => {
    const [activeState, setActiveState] = useState("shop");
    return (
        <>
            <nav className='h-[10vh] py-3'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="" className='w-72' />
                    </div>
                    <ul className='flex space-x-10'>
                        <li className={`${activeState === "shop" ? "py-2 border-b-4 border-solid border-blue-600" : ""} cursor-pointer`} onClick={() => setActiveState("shop")}>Shop</li>
                        <li className={`${activeState === "men" ? "py-2 border-b-4 border-solid border-blue-600" : ""} cursor-pointer`} onClick={() => setActiveState("men")}>Men</li>
                        <li className={`${activeState === "women" ? "py-2 border-b-4 border-solid border-blue-600" : ""} cursor-pointer`} onClick={() => setActiveState("women")}>Women</li>
                        <li className={`${activeState === "kids" ? "py-2 border-b-4 border-solid border-blue-600" : ""} cursor-pointer`} onClick={() => setActiveState("kids")}>Kids</li>
                    </ul>
                    <div className='space-x-10 '>
                        <button className='px-5 py-2 font-bold bg-blue-600 hover:bg-white text-white hover:text-blue-600 border-2 border-solid border-white hover:border-blue-600 rounded-full cursor-pointer'>Login</button>
                        <i className="fa-solid fa-cart-shopping px-3 py-1 text-xl text-blue-600 hover:text-blue-400 cursor-pointer"></i>
                    </div>
                </div>
                <hr className='mt-3' />
            </nav>
            
        </>
    )
}

export default Navbar