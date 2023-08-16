import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
      
const Header = () => {
    const [categories, setCategories] = useState([]);
      useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
      }, []);
    
return (
  <div className="bg-white mx-auto px-10 mb-8 ">
    <div className="border-b w-full inline-block border-gray-200 py-8 pb-10 mb-10">
        <div className="sm:float-none md:float-left grid grid-cols-1 mx-auto items-center">
          <Link href="/">
            <div><img src="/favicon.png" alt="GKDesign Logo" className='w-20 flex mx-auto'/></div>  
            <div className='mx-auto flex'><h1 className="cursor-pointer mx-auto text-3xl text-black">GKDesign</h1></div>
          </Link>
        </div>

    <div className="hidden md:float-left md:contents flex items-center">
    {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="md:float-right items-center text-black ml-4 mt-10 cursor-pointer">
                {category.name}
            </span>
        </Link>
    ))}
    </div>
  </div>
</div>
  )};

export default Header;

