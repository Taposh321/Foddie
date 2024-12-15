import TermsAndPolicies from "./components/termsAndPolicies/termsAndPolicy"
import Hero from "./components/hero/hero"
import HomeSlider from "./components/slider/homeSlider"
import Reservation from "./components/reservation/reservation"
import BurgerParallax from "./components/parallax/burgerParallax"
import PizzaParallax from "./components/parallax/pizzaParallax"
import Delivery from "./components/delivery/delivery"

export default function App (){
  return(<>
  <div className="w-full max-w-[1200px] mx-auto ">
  <Hero />
  <div>
  <h1 className="text-white text-2xl font-bold pl-5 mt-[100px]">Nutrition facts</h1>
  <BurgerParallax />
  <PizzaParallax />
  </div>
  <Reservation />
  <Delivery />
  <HomeSlider />

  <TermsAndPolicies />

  </div>
  </>)
}