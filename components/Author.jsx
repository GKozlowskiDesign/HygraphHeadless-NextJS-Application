import React from "react";
import Image from 'next/image';
const Author = ({ author }) => {
  return (
        <div className="left-0 mt-20 mb-8 p-12 relative rounded-lg bg-white shadow-lg">
            <div className="absolute left-0 right-0 -top-14">
                <Image
                alt={author.name}
                unoptimized
                height='70'
                width='70'
                className="align-middle rounded-full shadow-lg"
                src={author.photo.url}
                />
            </div>
            <h3 className="text-black my-4 text-xl font-bold">{author.name}</h3>
            <p className="text-black text-lg">{author.bio}</p>
        </div>
    )
};

export default Author;
