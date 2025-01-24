import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import "./slug.css"
interface ProductPageProps {
params: Promise<{slug: string}>


}



async function getProduct(slug: string): Promise<Product  >{


return client.fetch(

groq `*[_type == "car" && slug.current == $slug][0]{
_id,
name,
_type,
image,
pricePerDay,
transmission,
brand,
type,
fuelCapacity,
seatingCapacity,
OriginalPrice,
}`,{slug}
)}

export default async function Productpage({params}:ProductPageProps) {
  const {slug} =await params;
  const product =await getProduct(slug) 

return(
<div className="max-w-7x1- mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  <div className="aspect-square ">
  
 

  {product.image && (
    <Image
    src={urlFor(product.image).url()}
    alt=""
    width={500}
    height={500}
    className="img1"
    >
  
    </Image>
  )}
 
  </div>
  <div><h1 className="prodhead">{product.name}</h1>
  <p className="prodesc"><span>Price Per/Day:</span>{product.pricePerDay}</p><p className="prodesc"><span>Vechile type: </span>{product.type}</p><p className="prodesc"><span>Seating Capacity: </span>{product.seatingCapacity}</p><p className="prodesc"><span>Fuel Capacity: </span>{product.fuelCapacity}</p><p className="prodesc"><span>Transmission: </span>{product.transmission}</p>
    </div>
  </div> </div>
 
)}