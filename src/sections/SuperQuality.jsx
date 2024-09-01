import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">

      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>

        <p className='mt-4 lg:max-w-lg info-text'>
        Discover the latest in Nike footwear on our website, where performance and style converge. Whether you're an athlete seeking top-notch performance shoes or a trendsetter looking for the latest streetwear kicks, Nike offers a wide selection to meet your needs.
        </p>

        <p className='mt-6 lg:max-w-lg info-text'>
        Elevate your game and your style with <span className='text-coral-red font-semibold'> Nike </span> shoes today.
        </p>

        <div className='mt-11'>
          <Button label='View details'/>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain' />
      </div>

    </section>
  )
}

export default SuperQuality