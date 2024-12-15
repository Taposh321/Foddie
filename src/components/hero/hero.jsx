import HeroHeading from "./heroHeading";
import HeroImage from "./HeroImage";
import HeroInfo from "./heroInfo";
import NevigationBar from "./nevigationBar";

export default function Hero(){
return(<>
<div className="w-full  pl-5 text-white flex flex-col">
<NevigationBar />

<div className="grid grid-cols-auto md:grid-rows-12  grid-rows-auto gap-5 ">
    <HeroHeading />
    <HeroImage />
    <HeroInfo />
</div>
</div>

</>)
}