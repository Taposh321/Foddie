import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight,faArrowLeft,faStar } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useRef, useState } from "react"
import myContext from "./context"
import MySlider from './mySlider'

const Item =({image,name,rating,totalSold})=>{
return (<>
<div className="slider-container gap-3 flex flex-col ">
<div className={``} >
<img src={image} className=' size-[100px]  object-cover' alt="table" />
</div>
<div className="text-center">
<p className="text-sm font-bold text-white">{name}</p>
<p className="text-sm text-gray-300">{rating} ({totalSold}k sold)</p>
<p className="text-sm font-bold text-white
 px-5 bg-blue-700 rounded cursor-pointer">Explor Now</p>

</div>
</div>
</>)
}


const Table=()=>{
   const {index,setIndex,slides,isLoaded} = useContext(myContext)
   const sliderRef =useRef(null)
   const [isClicked,setIsClicked]=useState(false) 
   const handler=(dir)=>{ 
        if(!isClicked){
        setIsClicked(true)
        if(dir=="left"){
          if(index > 0){
            setIndex((pre)=> pre-1)
            sliderRef.current.slickPrev()
          } else {
            setIndex(slides.length - 1)
            sliderRef.current.slickPrev()

          }
        }
         
          if(dir=="right"){
          if(index < slides.length-1){
            setIndex((pre)=> pre+1)
            sliderRef.current.slickNext()
          } else {
            setIndex(0)
            sliderRef.current.slickNext()
    
          }
        }


setTimeout(()=>{
  setIsClicked(false)
},400)

      }
  
     
  }
  
 

    return (<>
   <div className="flex flex-col md:flex-row  items-center">
   <div className="tableBackground  w-full max-w-[350px] min-w-[300px] h-[350px] pb-3  text-white  flex flex-col justify-center items-center">
    <div className=" flex justify-center items-center pt-[60px] flex-1   ">
        {
      isLoaded && <Item image={slides[index].image} name={slides[index].name} rating={slides[index].rating} totalSold={slides[index].sold}  />
        }

      </div>
    <div className="mt-auto flex gap-[100px]  ">
        <button onClick={()=>{
            handler("left")
        }}>
           <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={()=>{
            handler("right")
        }}>
        <FontAwesomeIcon icon={faArrowRight} />
        </button>
    </div>
    </div>
       
    <div className=" md:max-w-[500px]  max-w-[450px] flex-1 flex w-full text-white justify-center  h-full items-center  overflow-x-hidden ">
 
 <MySlider ref={sliderRef} />

 </div>
   

   </div>

    </>)
}


const Rating =()=>{
  const {slides,index}=useContext(myContext)
  const [reviews,setReviews]=useState(null);
  const [seeMore ,setSeeMore]=useState(false)
  useEffect(()=>{
    //fetch data from api
    fetch(`http://localhost:3001/rating?_limit=4 &product=${slides[index].name}`)
    .then(response=>response.json())
    .then(data=>{
      data.length>3?setSeeMore(true) : setSeeMore(false)
      setReviews(data)
    })
    .catch(error=>console.log(error))
    },[index])
  return (
    <>
    <div className="flex  flex-col flex-1 min-w-[300px] px-5 slider:pl-0 mt-5 md:mt-0   ">
 
    <h1 className="font-['Parkinsans',sans-serif] slider:text-center text-white w-full ">
      Reviews and Ratings
    </h1>
    <div className="reviewContainer flex flex-1 slider:flex-col flex-col md:flex-row overflow-y-scroll  scrollbar-none bg-white rounded  ">

      {reviews && reviews.map(review=>(
        <div key={review.id} className="hover:bg-[#f2f1f1] md:border-r-[1px] flex md:flex-col slider:flex-row border-b-[1px] border-[#dededd] transition-colors gap-[10px] md:max-w-[250px] w-full slider:max-w-full text-sm  rounded   p-3">
            <div className="flex  flex-col "> 
            <div className="flex gap-2">
              <div className="size-[40px] bg-white border rounded-full">

              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                <p className="font-bold">{review.name}</p>
                <p>({review.rating}<FontAwesomeIcon icon={faStar} size="sm" className="text-yellow-200" />)</p>
                </div>
             
               <p className="text-gray-500">{review.date}</p>

              </div>
              

            </div>
        </div>
      
        <p>"{review.reviews}"</p>
        </div>
      ))}
    </div>
  <div className="text-white w-full text-center ">
    {
      seeMore && <button className='text-white' onClick={()=>setSeeMore(false)}>See more</button>
    }
  </div>
    </div>
    
    </>
  )
}


export default function HomeSlider(){
     const [isLoaded,setIsLoaded]= useState(false)
     const [slides,setSlides]= useState([])
     const [index,setIndex]=useState(0)

     useEffect(()=>{
     //fetch data from api
     fetch("http://localhost:3001/mostSoldItems")
     .then(response=>response.json())
     .then(data=>{
      setIsLoaded(true)
       setSlides(data)
     })
     .catch(error=>console.log(error))
     },[])



    return (<>

      <p className="font-bold text-2xl font-['Parkinsans',sans-serif] text-white ml-5 pt-5">Most Sold Items</p>
    <p className="text-white pb-5 ml-5">Discover our most popular items</p>

    <div className="flex  w-full flex-col md:justify-start  max-h-[850px] slider:flex-row">
       
<myContext.Provider value={{isLoaded,slides,index,setIndex}} >
{
    isLoaded && <>
    <Table />
    <Rating />
     </>
}

</myContext.Provider>
   
    </div>
    
    </>)
}