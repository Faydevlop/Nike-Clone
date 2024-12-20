import ReviewCard from '../components/ReviewCard'
import {reviews} from '../constans'

const CustomerReviews = () => {
  return (
    <section className=" ">
      <h3 className="font-palanquin text-center text-4xl font-bold ">What Out <span className="text-coral-red "> Customer </span>Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center ">Hear Genuin Storys from our satisfied Customers about their exceptonal experiences with us</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14  " >
        {reviews.map((reviews)=>(
          <ReviewCard key={reviews.customerName} imgURL={reviews.imgURL} customerName={reviews.customerName} rating={reviews.rating} feedback={reviews.feedback}  />

        ))}

      </div>
    </section>
  )
}

export default CustomerReviews
