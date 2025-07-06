import Hero from "../components/Hero"
import Dishes from "../components/Dishes"
import Reviews from "../components/Reviews"
import dishesData from '../assets/dishes.json'

export default function Home() {
  return (
    <>
      <Hero />
      <Dishes dishesData={dishesData}/>
      <Reviews />
    </>
  )
}