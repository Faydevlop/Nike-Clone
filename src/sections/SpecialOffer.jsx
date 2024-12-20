import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10  max-container " >
     <div className="flex-1 ">
      <img src={offer} width={773} height={687} className="object-contain w-full" />

     </div>
     <div className="flex flex-1 flex-col ">
      <h2 className="  font-palanquin text-4xl capitalize lg:max-w-lg font-bold ">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10   "></span><span className="text-coral-red pr-2">Special</span><span className="text-black" >Offer</span> </h2>
      <p className="mt-4 lg:max-w-lg info-text ">Unleash your potential with Nike. Gear up, push limits, and redefine greatness. Every step, every move, every goal—Nike empowers you to achieve the impossible. Just do it</p>
      <p className="mt-6 lg:max-w-lg info-text" >The artification of exellence ensure your satisfation</p>
      <div className="mt-11 flex flex-wrap gap-4">
      <Button label="View Offer" iconURL={arrowRight}/>
      <Button label="Learn More" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
      </div>
      </div>
    </section >
  )
}

export default SpecialOffer
