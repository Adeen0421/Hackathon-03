"use client"
import React, { useState, useEffect } from "react";
import {  allProducts, four } from "@/sanity/lib/queries";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import '../style/hero.css'
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Card5 from "./Card5";


const Hero = () => {
const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    useEffect(() => {
      async function fetchProducts() {
        const fetchedProducts: Product[] = await client.fetch(four);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts); // Initialize filteredProducts
      }
      fetchProducts();
    }, []);
     const [cart, setCart] = useState<Product[]>([]);
      const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} has been added to your cart!`);
      };
    
  return (
    <div  >

 <div className='hero'>  <button className='bt'>See more</button>
  </div>
  <div className="flex ">
    <h1 className="mt-16  text-emerald-950 text-[60px]">Products</h1></div><div className="flex justify-end">
      <Link  href={"/products"} className="mb-3"> <a className="   bg-emerald-950  text-white  text-[18px] text-right px-5 py-2 hover:text-amber-600 mb-5 rounded-md   " >See More</a></Link>
  </div> 
  {/* Product List */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            
            <Link href={`/product/${product.slug?.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={300} // Adjust width
                  height={200} // Adjust height for uniformity
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              )}
              <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
              <p className="text-gray-500 mt-2">{product.pricePerDay}</p>
            </Link>
            <button
              className="mt-4 w-full bg-emerald-950 text-white text-md font-medium py-2 rounded-md hover:text-amber-600"
              onClick={() => addToCart(product)}
            >
              Wishlist
            </button>
          </div>
        ))} </div>
<Card5 />
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
