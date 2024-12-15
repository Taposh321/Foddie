import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger ,faStore,faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import Store from '../../assets/heroAssets/store.svg'

export default function NavigationBar() {
     
    const [clicked,setClicked]=useState(false)

    const handleClick =()=>{
      setClicked((pre)=> pre?false:true)
    }
    return (
      <div className="w-full py-5 flex items-center">
        {/* Logo */}
        <div className="logo w-[60px] flex font-bold">
          Foodie

        </div>
  
        {/* Navigation */}
        <div className="flex-1 flex justify-end px-5 relative">
            <span className='bg-white w-[100px] h-auto md:hidden relative' onClick={handleClick}>
         <FontAwesomeIcon icon={faBurger} color='white' size='lg' className='absolute right-0' />
         </span>
         
          <ul className={`flex   gap-5 text-sm
           absolute top-5   h-auto flex-col bg-gray-200 text-black p-3 shadow-lg rounded transition-all md:transition-none
           md:relative md:top-0 md:w-auto md:h-auto md:flex-row md:text-white md:bg-transparent md:opacity-100
           ${clicked?"opacity-100":"opacity-0"}
          `}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Foods</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Chef and Kitchen</a></li>
            <li className="flex gap-2">
              <a className='px-3 py-1 bg-blue-600 text-white rounded' href="#">Log In</a>
              
            </li>
          </ul>
        </div>
      </div>
    );
  }
  