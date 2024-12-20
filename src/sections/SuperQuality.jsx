import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" 
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
      <h2 className="  font-palanquin text-4xl capitalize lg:max-w-lg font-bold ">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10  pr-4 ">We proviede you</span><span className="text-coral-red">Super</span><br /><span className="text-coral-red" >Quality</span> Shoe</h2>
      <p className="mt-4 lg:max-w-lg info-text ">Unleash your potential with Nike. Gear up, push limits, and redefine greatness. Every step, every move, every goal—Nike empowers you to achieve the impossible. Just do it</p>
      <p className="mt-6 lg:max-w-lg info-text" >The artification of exellence ensure your satisfation</p>
      <div className="mt-11">
      <Button label="View Details" iconURL={arrowRight}/>
      </div>
      </div>
      <div className=" flex-1 flex justify-center items-center " >
        <img src={shoe8} alt='shoe8'
      width={570}
      height={522}
      className="object-contain"
        />

        
      </div>

       
    </section >
  )
}

export default SuperQuality
