
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
  <div className="bg-white   mx-auto px-10 mb-8 ">
    <div className="border-b w-full inline-block border-gray-200 py-8 pb-10 mb-10">
        <div className="md:float-left block">
            <Link href="/">
                <h1 className="cursor-pointer  text-4xl text-black">
                    GKDesign
                </h1>
            </Link>
        </div>
  
    <div className="hidden md:float-left md:contents">
    {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="md:float-right mt-2 align-middle text-black ml-4  cursor-pointer">
                {category.name}
            </span>
        </Link>
    ))}
    </div>
  </div>
</div>
  )
};

export default Header;
