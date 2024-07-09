import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    
    return (
        <div className='flex flex-1'>
            <div className="w-256 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-black">
                    <li className='btn mb-2 '><NavLink to='dashboard/cart'>My Cart</NavLink></li>
                    <li className='btn mb-2'><NavLink to='dashboard/userHome'>User Home</NavLink></li>
                    <li className='btn mb-2'><NavLink to='dashboard/reserve'>Reserve</NavLink></li>
                    <div className='divider'></div>
                    <li className='btn mb-2 '><NavLink to='/'>Home</NavLink></li>
                    <li className='btn mb-2 '><NavLink to='/menu'>Menu</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 p-8'>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;


