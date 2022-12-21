import React from 'react'
import './Header.css'
import {AiOutlineShoppingCart, AiFillQuestionCircle} from 'react-icons/ai'
import {BiHome} from 'react-icons/bi'
import {FiSun} from 'react-icons/fi'


const Header = () => {
  return (
<div className='Header'>
<div className='Header-wrap'>

         <div>
            <img src='/Head-Logo.png' className='Logo'  />
        </div>

        <div className='main-icons'>
        <p className='main'>HOME</p>
        <p className='main'>ABOUT</p>
         {/* <BiHome fontSize={35} className='Home' />
        <AiFillQuestionCircle  className='Question' fontSize={35} />       */}
        <AiOutlineShoppingCart  className='Cart' fontSize={25} /> 
        <p>CART</p>
          
        </div>

         <div className='theme-icons'> 
          <FiSun fontSize={25} className='Sun' />  
        </div>
 </div>
 </div>
  )
}

export default Header