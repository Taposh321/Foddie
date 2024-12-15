import React from 'react'
import specialTable from "/src/assets/reservationIcon/specialTable.svg"
import Table from "/src/assets/reservationIcon/table.svg"

import PhotoGallery from './photoGallery'

 const reservation = () => {
  return (
    <div className=' text-white flex flex-col md:flex-row px-5 mt-5 gap-3 md:gap-0 w-full md:items-center'>

        <div className='w-full  max-w-[400px]  rounded   '>
            <h1 className='text-2xl  font-["Parkinsans",sans-serif] '>Table reservation</h1>
            <p className='text-sm'>We can arrange Tables for your occasion. <strong>Max 6 parsons per table </strong> </p>
            <ul className='text-sm space-y-4 my-5'>
              <li className='flex  gap-3'> <span><img src={Table} alt="table" className='w-[30px]' /></span>Common booking</li>
              <li className='flex  gap-3 items-center'>  <span><img src={specialTable} alt="table" className='w-[40px]' /></span>  Special booking (For any occasion eg. birthDay party, Marriage Annivercery etc.)</li>

            </ul>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Book a Table</button>

        </div>
        <PhotoGallery />
        
        
    </div>
  )
}

export default reservation;
