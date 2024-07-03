import  { useContext,useState} from 'react';
// import React, { useContext, useEffect, useState } from 'react';
// import Style from './Navbar.module.css';
import logo from '../../assets/images/logo.svg'
import { NavLink ,Link, useNavigate } from 'react-router-dom';
// import { CounterContext } from '../../Context/CounterContext';
import { UserContext } from '../../Context/UserContext';

export default function Navbar() {

  let {userLogin,setUserLogin}= useContext(UserContext)
  let navigate =useNavigate();

function logOut(){
 
  navigate('/login')
  localStorage.removeItem('userToken')
  setUserLogin(null)

}
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  return <>
  <nav className=' navbar '>
  <div className="burger" onClick={toggleMenu}>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
      </div>
    <div className={isOpen ? 'menu open container items-center flex lg:flex-row flex-col justify-between mx-auto py-4' : 'menu container items-center flex lg:flex-row flex-col justify-between mx-auto py-4'} >
    <div className='flex flex-col lg:flex-row text-center items-center '>
        <img src={logo} width={120} alt="fresh cart logo " />
        <ul className='flex flex-col lg:flex-row justify-around pl-10'>
          {userLogin !==null?<>  <li className='text-md mx-4 text-slate-900 font-normal py-3  '><NavLink to={'/'}> Home </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-normal py-3 '><NavLink to={'/carts'}> Cart </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-normal py-3 '><NavLink to={'/categories'}> Categories </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-normal py-3 '><NavLink to={'/brands'}> Brands </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-normal py-3 '><NavLink to={'/products'}> Products </NavLink></li>
          </>:null}
        
        </ul>
      </div>

      <ul className='flex flex-col lg:flex-row justify-around items-center m-0 pl-10'>
        {userLogin === null?<>
          <li className='text-md mx-4 text-slate-900 font-normal py-3 '><NavLink to={'/login'}> Login </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-normal py-3 '><NavLink to={'/register'}> Register </NavLink></li>
          </>:<li className='text-md mx-4 text-slate-900 font-normal py-3 'onClick={logOut} ><Link > Logout </Link></li>
        }
          <li className='text-md mx-4 text-slate-900 font-normal  items-center flex justify-between py-4 '>
            <i className='fab fa-facebook mx-2 fa-sm'></i>
            <i className='fab fa-twitter mx-2 fa-sm'></i>
            <i className='fab fa-instagram mx-2 fa-sm'></i>
            <i className='fab fa-tiktok mx-2 fa-sm'></i>
            <i className='fab fa-youtube mx-2 fa-sm'></i>
          </li>
          
        </ul>
    </div>

   
  </nav>
 </>
}


