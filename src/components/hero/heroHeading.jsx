import Store from '../../assets/heroAssets/store.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger ,faStore,faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

export default function HeroHeading (){

    return (<>
     <div className="text-white  items-center md:items-start col-start-1 flex flex-col md:justify-end   col-end-13 row-start-1 row-end-3  py-5 md:col-end-7 md:row-end-8  text-center md:text-start  ">
       
        <div className="text-sm text-gray-400 w-[40px] relative">
           <img src={Store} alt="" className='w-[40px]' />
           <FontAwesomeIcon icon={faBurger} color='white' size='lg' className='absolute text-yellow-200  top-[-20px] right-0' />
           <FontAwesomeIcon icon={faPizzaSlice} color='white' size='lg' className='absolute text-yellow-200  top-[-20px] left-0' />

        </div>
        <h1 className="text-2xl md:text-3xl  font-['Parkinsans',sans-serif] ">  Best Fast Food and Restuarant in Dhaka</h1>

        <div className="text-sm max-w-[400px] pt-2  text-gray-400">
        Delicious fast food and easy table reservation experience the perfect dining blend with us   
       </div>
     </div>
    
    </>)
}