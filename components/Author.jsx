import React from "react";

const Author = ({ author }) => {
  return (
        <div className="left-0 mt-20 mb-8 p-12 relative rounded-lg bg-gradient-to-tl from-black to-gray-900 border border-gray-700">
            <div className="absolute left-0 right-0 -top-14">
                <img
                alt={author.name}
                unoptimized
                height='100'
                width='100'
                className="align-middle rounded-full"
                src={author.photo.url}
                />
            </div>

            <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
            <p className="text-white text-lg">{author.bio}</p>
           
        </div>

    )
};

export default Author;
