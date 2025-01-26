import React from 'react';

import '../style/card5.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const Card5 = () => {
  const mcardata5 = [
    { id: 1, name: 'Top electric vehicle', description: 'More of this hello samlande lied much over tightly circa horse taped mightly', image: '/b1.jpg', date: "21 August 2020", writter: "Sabeer Ali" },
    { id: 2, name: 'Top comfort vehicle', description: 'More of this hello samlande lied much over tightly circa horse taped mightly', image: '/b2.jpg', date: "21 August 2020", writter: "Surfaxion" },
    { id: 3, name: 'Top econmy vehicle', description: 'More of this hello samlande lied much over tightly circa horse taped mightly', image: '/b3.webp', date: "21 August 2020", writter: "Sabeer Ali" },
    { id: 4, name: 'Top econmy vehicle', description: 'More of this hello samlande lied much over tightly circa horse taped mightly', image: '/b3.webp', date: "21 August 2020", writter: "Sabeer Ali" },
  ];

  return (
  
    <div className=''>
        <div className="flex ">
    <h1 className="mt-16  text-emerald-950 text-[60px]">Products</h1></div><div className="flex justify-end">
      <Link  href={"/blogpage"} className="mb-3"> <a className="   bg-emerald-950  text-white  text-[18px] text-right px-5 py-2 hover:text-amber-600 mb-5 rounded-md   " >See More</a></Link>
  </div> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {mcardata5.map((cars5) => (
          <div key={cars5.id} className='className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
            {/* Use local or relative path directly */}
            <Image
              src={cars5.image}
              alt={cars5.name}
              width={300} // Adjust width
              height={200} // Adjust height for uniformity
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className='alpp5'>
            <h2 className="text-[25px] font-semibold">{cars5.name}</h2>
              <p className='flex'>
                <FaPenNib className='alp5' />
                {cars5.writter}</p><p className='flex'>
                <FaRegCalendarAlt className='alp55' />
                {cars5.date}
              </p>
            </div>
  
            <p>{cars5.description}</p>
            <a href='#' className='aop5'>Read more</a>
          </div>
        ))}
      </div>
      </div>

  );
};

export default Card5;
