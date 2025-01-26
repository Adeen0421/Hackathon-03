"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import "./product23.css";
import Link from "next/link";
import { Product } from "../../../types/product";

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Initialize filteredProducts
    }
    fetchProducts();
  }, []);

  // Filtering logic
  useEffect(() => {
    const filtered = products.filter((product) => {
      return (
        (!brandFilter || product.brand === brandFilter) &&
        (!typeFilter || product.type === typeFilter)
      );
    });
    setFilteredProducts(filtered);
  }, [brandFilter, typeFilter, products]);

  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="max-w-6x1 mx-auto px-4 py-8">
      <h1 className="text-[70px] font-bold mb-6 text-center text-emerald-950">
        Rental Cars
      </h1>

      {/* Filter Section */}
      <div className="mb-8 flex gap-4">
        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Brands</option>
          <option value="Nissan">Nissan</option>
          <option value="Tesla">Tesla</option>
          <option value="BMW">BMW</option>
          {/* Add more brand options */}
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Types</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Sport">Sport</option>
          {/* Add more type options */}
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-14 bg-stone-200 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-black text-emerald-950 m-5">Wishlist</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-amber-600">{item.pricePerDay}</p>
                </div>
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center font-semibold">
            Your Wishlist is empty. Please add products.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
