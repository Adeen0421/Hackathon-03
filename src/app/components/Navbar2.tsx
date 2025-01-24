import React from 'react'
import Link from 'next/link'
import '../style/navbar2.css'

    

const navbar2 = () => {
  return (
    <div>
      <div>
<header>
<div className="logo">
 <h1>Hekto</h1>
</div>
<div className='akj'>
 
<Link href={"/"} className='a7'>Home</Link>
  
<Link href={"/products"} className='a7'>Products</Link>

 <Link href={"/blogpage"} className='a7'>Blog</Link>
<Link href={"/Contact"} className='a7'>Contact</Link>
   

 
</div>


</header>
</div>
    </div>
  )
}

export default navbar2
