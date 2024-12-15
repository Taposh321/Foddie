import { div } from "motion/react-client"
import { useRef,forwardRef, useEffect, useState } from "react"


const  Slider = forwardRef(({photos,time},ref) =>{
    const [index,setIndex]=useState(0);
    const [width,setWidth]=useState(0)

useEffect(()=>{
     const width=ref.current.getBoundingClientRect().width
    setWidth(width)
    const id=setTimeout(()=>{

        if(index>=photos.length-1){
            setIndex(0)
    }else{
        setIndex((pre)=> pre+1)

    }
    },time)

  return  ()=>{
clearTimeout(id)
  } 

},[index])

    return(<>
<div className=" bg-red-500 h-full overflow-hidden">
        <div style={{
            transform: `translateX(-${index*width}px)`
        }} className=" flex  h-full duration-1000">

    {
        photos.map((photo, index)=>(
            <div key={index}   className="min-w-full  h-full">
            <img src={photo} alt="photo" className="w-full h-full object-cover"/>
            </div>
        ))
    }
        </div>

    </div>

    </>)
});

export default function PhotoGallery(){
    const ref =useRef()
    const ref2 =useRef()
    const Birthday=["src/assets/photoCollege/birthday/birthDay.jpeg", "src/assets/photoCollege/birthday/birthDay2.jpeg", "src/assets/photoCollege/birthday/birthDay3.jpeg"]
    const family=["src/assets/photoCollege/familyDinner/familyDinner.jpeg", "src/assets/photoCollege/familyDinner/familyDinner2.jpeg", "src/assets/photoCollege/familyDinner/familyDinner3.jpeg"]

 return (<>
      <div className="flex-1 relative overflow-hidden  justify-center  flex text-white  max-h-[300px]">
     <div className=" relative w-full gap-2  max-w-[400px] min-h-full flex-col flex justify-center items-center ">
   
    <div className="w-full  flex h-full  gap-2 ">
    <div ref={ref} className="  w-full max-w-[220px] ">
        <Slider photos={Birthday} ref={ref} time={5000} />
         </div>
    <div className="flex-1 bg-green-400"></div>
    </div>
    <div className="flex  w-full h-full gap-2">
    <div className="flex-1  bg-red-400"></div>
    <div ref={ref2} className=" w-full max-w-[250px] ">
    <Slider photos={family} ref={ref2} time={4000} />
    </div>

    </div>
    
     </div>
   
      </div>
   
   </>)

}