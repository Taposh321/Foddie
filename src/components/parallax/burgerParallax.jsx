import { useRef, useState } from "react"
import { motion } from "motion/react"
import Table from "./table"
import topBun from '../../assets/parallax/burger/topBun.png'
import bottomBun from '../../assets/parallax/burger/bottomBun.png'
import lettuce from '../../assets/parallax/burger/lettuce.png'
import patty from '../../assets/parallax/burger/patty.png'
import tomato from '../../assets/parallax/burger/tomato.png'
import onion from '../../assets/parallax/burger/onion.png'
const Item =({src,alt,height,width,top})=>{
return(<>
  <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} 
  transition={{ duration: 0.5, ease: [0.6, 0.0, 0.3, 1] ,delay:.5}}
   style={{height,width:width+"px",top:top+"px",marginRight:width+30+"px"}} className="text-white text-sm items-center flex absolute">
    {
      alt
    }
</motion.div>

<motion.div
  initial={{ opacity: 0,top:top+100+"px" }}
  whileInView={{ opacity: 1,top:top }} 
  transition={{ duration: .5, ease: [0.6, 0.0, 0.3, 1] }}
   style={{height,width:width+"px",top:top+"px"}} className="w-full hover:scale-110 transition-[transform] flex-1 absolute">
<img src={src} alt={alt}  className="w-full h-auto object-cover"  />
</motion.div>



</>)
}





export default function BurgerParallax(){

const items=[
      {
      src:topBun,
      alt:"Top Bun",
      width:140,
      height:"100px",
      top:0,
      },
      {
        src:lettuce,
        alt:"Lettuce",
        width:90,
        height:"70px",
        top:100,
        },
        {
          src:tomato,
          alt:"Tomato",
          width:80,
          height:"70px",
          top:170,
          },
          {
            src:onion,
            alt:"Onion",
            width:60,
            height:"80px",
            top:240
            },
            {
              src:patty,
              alt:"Patty",
              width:100,
              height:"70px",
              top:310,
              },
              {
                src:bottomBun,
                alt:"Bottom Bun",
                width:140,
                height:"70px",
                top:360
                },

]


  return (
    <>
      <div className="relative px-5 flex flex-col md:flex-row   gap-5 md:gap-0 my-5 ">
        <div className=" relative flex flex-col items-center  md:justify-center">
      <Table name={"Burger"} weight={"200"} />
        </div>
     
        <div className="flex-1 relative flex flex-col items-center min-h-[450px]  text-white">
         {

        items.map((e,i)=>{
        return   <Item key={i} src={e.src} alt={e.alt}  height={e.height}  width={e.width}  top={e.top} />

        })
         }

           </div>
      </div>
    </>
  )
}

