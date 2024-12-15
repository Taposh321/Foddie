import {useState } from "react"
import { PropagateLoader } from 'react-spinners';
import {motion} from "motion/react"

export default function CheckTable(){
    const [tableAvailable,setTableAvailable]=useState({status:false,numberTable:10})
    const [isClicked,setIsClicked]=useState(false)
    
    const handleCheck= async ()=>{
        setIsClicked(true)
        const response= await fetch("http://localhost:3001/tableAvailable")
        const tableAvaiable= await response.json()
        setTableAvailable({status:true,numberTable:tableAvaiable.length})
        setIsClicked(false)
    }

    return(<>
      <p  className="text-sm">Instant Table Checking</p> 
      <p className=" min-h-[25px] text-sm  flex items-center  justify-center">
        {isClicked? <PropagateLoader size={5}color='white'  />:""}
        {tableAvailable.status && isClicked==false? <span className="text-green-600">{tableAvailable.numberTable} Tables available ! Book now </span> :""
      }
      </p>

       <div className="flex text-sm gap-3">
       <motion.button className="px-3 py-1 1 w-[70px] cursor-pointer rounded-lg text-center text-white bg-blue-700"
  whileTap={{ scale: 0.95 }}
  onClick={handleCheck}
>Check </motion.button>
      
     
       </div>
    
    </>)
}