
import pizza from '../../assets/parallax/pizza/pizza.png'
import slice from '../../assets/parallax/pizza/topping.png'
import Table from "./table"
import { motion } from "motion/react"


export default function PizzaParallax(){
    return (<>
    
    <div className="flex flex-col-reverse md:flex-row w-full gap-5 py-5 items-center ">
        <div  className='flex gap-[50px] px-5 items-center '>
         <div>
            <motion.div  
            initial={{ opacity: 0 }}
  whileInView={{ opacity: 1}} 
  transition={{ duration: .8, ease: [0.6, 0.0, 0.3, 1] }} >

            <span className='text-white'>1.5m </span>
             <span className='w-[120px] inline-block h-[5px] bg-white'></span>
            
            </motion.div>
            <div className="md:w-[200px] w-[150px]  md:h-[200px] h-[150px] relative ">
                 <img src={pizza} className="w-full h-auto object-cover" alt="pizza" />
              
                 <motion.div  
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1}} 
                  transition={{ duration: .8, ease: [0.6, 0.0, 0.3, 1] }} >
                   <span className='absolute h-[20px] right-[-10px]  top-0 text-white'>1.5m </span>
                  <span className='w-[5px] absolute h-[120px] right-[-10px] top-6 bg-white'></span>
                 </motion.div>
                   </div>
         </div>
          <div className='text-white flex flex-col gap-2'>
            <div className='text-sm text-gray-300 w-[150px]'>Topping :  Vegetables, Chicken meat, Herbs & spice, Red pepper flakes etc.</div>
          <div className="md:w-[200px] w-[150px]   md:h-[200px] h-[150px] ">
            <img src={slice} className="w-full h-auto object-cover" alt="pizza" />
        </div>
          </div>
        
        </div>
        
        <div className="flex-1 px-5 flex justify-center items-center h-full text-white text-2xl font-bold w-full ">

            <Table name={"Pizza"} weight={"500"} />
        </div>
    </div>
    </>)
}