
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils,faClock } from '@fortawesome/free-solid-svg-icons'
export default function HeroInfo(){

    return (<>
    <div className="w-full flex flex-col 
    col-start-1  col-end-13 row-start-4 row-end-12
     md:col-start-1 md:col-end-7 md:row-start-8 md:row-end-12 
     gap-3 text-sm   justify-center items-center md:items-start ">
   

     <div className="flex gap-3  md:flex-row flex-col">
     <div className="border  rounded p-3 h-[75px] w-[200px]">
        <p className="font-bold flex gap-2 "> <span><FontAwesomeIcon icon={faClock} color='white' /> </span>Table Booking Time</p> 
        <p className='pl-5'>Mon-Sat,10am-6pm</p>
    </div>

    <div  className="border   rounded p-3 h-[75px] w-[200px]">
        <p  className="font-bold flex gap-2"> <span><FontAwesomeIcon icon={faUtensils} color='white' /> </span>Dinner Session time</p> 
        <p className='pl-5'>6pm-11:59pm</p>
    </div>
    </div>
    <div className='flex gap-3'>
      <div className='border px-5 py-2 rounded-full text-center'>
            Book now
      </div>
        <div  className='border px-5 py-2 rounded-full text-center'>
            Download app
        </div>
    </div>

    </div>
    
    </>)
}