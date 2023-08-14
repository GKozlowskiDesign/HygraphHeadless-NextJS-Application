import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white p-8 pb-12 mb-8 border-y">
      <h3 className="text-xl text-black mb-8  border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer text-sm text-black bg-gray-50 hover:bg-gray-200 rounded-xl block ${(index === categories.length - 1) } pb-2 pt-2 justify-center text-center items-center  mb-2`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;