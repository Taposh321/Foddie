  import Table from '../../assets/heroAssets/table.png'
  import CheckTable from "./instantTableCheck";
export default function HeroImage (){

    return (<>
    <div className="   flex flex-col items-center justify-center  col-start-1  col-end-13 row-start-3 row-end-4 md:col-start-7 md:row-end-12 md:row-start-1  " >
    
     <div className=" flex justify-center  overflow-hidden">
      <img src={Table} className='w-[350px] min-w-[300px] h-[300px]  object-cover -mt-[95px]' alt="table"  />
     </div>
     <CheckTable />

    </div>
    
    </>)


}