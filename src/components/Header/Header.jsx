import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/logo.png'

export default function Header() {
  return (
    <nav>
      <div className="scroll-smooth fixed w-screen flex justify-center items-center h-24 bg-white shadow-lg">
        <div className='max-w-[1200px] flex items-center justify-center h-24 md:pr-2 lg:pr-44 m-auto'>
          <img src={logo} alt="logo" className='md:w-[40px] lg:w-[220px] md:h-[40px] lg:h-[100px]'/>
          
        </div>
        <div className='mr-auto'>
          <a href="#inicio" className='m-5 hover:text-blue-400 hover:underline'>Inicio</a>
          <a href="#about" className='m-5 hover:text-blue-400 hover:underline'>About</a>
          <a href="#portfolio" className='m-5 hover:text-blue-400 hover:underline'>Portfolio</a>
          <a href="#contatos" className='m-5 hover:text-blue-400 hover:underline'>Contatos</a>
        </div>
        <ul className='flex md:pr-20 lg:pr-40 '>
            <li>
              <NavLink to="/registro" className=' text-gray-600 font-bold p-2 m-2 rounded-md hover:text-white hover:bg-blue-900 duration-300 transition ease-in-out ' >Cadastro</NavLink>   
            </li> 
            <li>
              <NavLink to="/login" className=' text-gray-600 font-bold  p-2 m-2 rounded-md hover:text-white hover:bg-blue-900 duration-300 transition ease-in-out' >Login</NavLink>
            </li>
        </ul>
      </div>

    </nav>
  )
}
