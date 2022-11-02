import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const menuItems = <>
        <li className='font-semibold'> <Link to='/'>Home</Link></li>
        <li className='font-semibold'> <Link to='/'>About</Link></li>
        <li className='font-semibold'> <Link to='/#services'>Services</Link></li>
        <li className='font-semibold'> <Link to='/'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'>
                        <Link to='/orders'>Orders</Link>

                    </li>
                    <li><button onClick={logOut} className='btn btn-sm text-light rounded-full text-xs my-auto'>Logout</button></li>
                </>
                :
                <li className='font-semibold'> <Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-brand md:px-20 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case  h-full"> <img src={logo} alt="" className='md:w-44 w-36' /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link><button className="btn md:btn-md btn-sm text-sm md:text-base btn-primary ">Appointment</button></Link>
            </div>
        </div>
    );
};

export default Header;