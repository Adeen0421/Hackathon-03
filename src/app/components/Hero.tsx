import React from 'react'
import '../style/hero.css'


const Hero = () => {
  return (
    <div className='hero' >

 <div>  <button className='bt'>See more</button>
  </div>
  
<div className='bg-white'>
<h1 className=' text-center text-emerald-950 mt-96 text-[60px]'>Welcome to HEKTO Your Reliable Car Rental Service</h1>
<p className='text-center text-amber-700 text-2xl'>At HEKTO we offer a wide range of cars for every need, whether you are traveling for business or leisure. With competitive pricing, convenient pickup and drop-off locations, and 24/7 customer support, we make renting a car simple and stress-free.</p>
<h3 className='text-center text-4xl text-emerald-950 mt-10'>Why Choose Us</h3>
<ul>
  <li className='text-center text-2xl  text-amber-700'><span className='text-emerald-950'>Variety of Vehicles:</span>From economy cars to luxury models and SUVs.</li>
  <li className='text-center text-2xl  text-amber-700'><span className='text-emerald-950' >Transparent Pricing:</span>No hidden fees, just great rates.</li>
  <li className='text-center text-2xl  text-amber-700'><span className='text-emerald-950'>Easy Booking:</span>Reserve your car online in minutes.</li>
  <li className='text-center text-2xl  text-amber-700'><span  className='text-emerald-950'>Flexible Terms:</span>Rent by the day, week, or longer.</li>
</ul></div>
    </div>
  )
}

export default Hero
