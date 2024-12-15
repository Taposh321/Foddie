import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCardAlt, faLocationPinLock, faMoneyBills, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons"
import Truck from "../../assets/delivery/truck.svg"
import bkash from '../../assets/paymentIcon/bkash.svg'
import nagad from '../../assets/paymentIcon/nagad.svg'
import credit from '../../assets/paymentIcon/credit.svg'

export default function Delivery(){
    return (<>
    <div className="w-full wavey relative h-[150px] ">
        <img src={Truck} alt="truck" className=" w-[90px] h-[50px] absolute left-0 bottom-0" />
        {/* <img src={Wave} className="w-full h-full" alt="wave"  /> */}
    </div>
    <div className="flex text-white bg-yellow-400 md:flex-row flex-col  p-5  ">
        <div className="">
        <h1 className=" flex items-center gap-3 "> <span className="text-3xl font-['Parkinsans',sans-serif] font-bold">Fast delivery!</span>  <span className="text-sm font-bold  px-3 bg-yellow-700 w-[170px] text-center rounded-sm ">Delivery charge TK50</span>
       </h1>
        <p className="text-sm">We are able to deliver food as fast as possible within our area </p>
        <p className="text-sm"> Our coverage areas are below in Dhaka</p>
         <ul className="flex flex-col gap-3 mt-3">
            <li><FontAwesomeIcon icon={faLocationPinLock} size='lg' color="white" /> Mirpur 1,2,3</li>
            <li><FontAwesomeIcon icon={faLocationPinLock} size='lg' color="white" /> Uttara</li>
            <li><FontAwesomeIcon icon={faLocationPinLock} size='lg' color="white" />Saver</li>
            <li><FontAwesomeIcon icon={faLocationPinLock} size='lg' color="white" /> Dhanmondi</li>
         </ul>
         <div>
           <ul className="flex gap-3 mt-5 items-center flex-wrap  text-sm ">
            <li className=" flex items-center gap-3"> <FontAwesomeIcon icon={faMoneyBills} size='lg' color="white" />  Cash on delivery</li>
            <li className=" flex items-center"> <img src={bkash} className="w-[40px] h-[40px]  object-cover" alt="Bkash" /> </li>
            <li className=" flex items-center "> <img src={nagad} className="w-[70px] h-[50px] object-cover" alt="Bkash" /></li>
            <li className=" flex items-center gap-3"> <img src={credit} className="w-[30px] h-[30px] object-cover" alt="Bkash" /></li>
           </ul>
         </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center min-h-[200px]">
            <h1 className="font-bold text-xl">Free delivery on first 3 Orders !</h1>
            <h1 className="font-bold text-xl">Buy burgers two , get one free</h1>

        </div>
    
    </div>

    </>)
}