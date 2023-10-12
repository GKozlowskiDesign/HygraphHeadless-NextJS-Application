import React from "react";
import moment from 'moment';
import Link from 'next/link';
const PostCard = ({ post }) => {
    console.log(post);
  return (
    <div className="bg-white mt-2 border-y-1 border-gray-300 shadow-md shadow-gray-100 lg:p-0 rounded-lg">
        <div className="grid grid-cols-6 pt-4 ">
            {/*Column one*/}
            <div className="justify-start col-span-3 p-2">
             {/*    <p className="text-center justify-center pt-1 md:pt-0 text-gray-700 text-xs  md:text-sm">{post.author.name}</p>   */}
            </div>
            {/*Column two*/}
            <div className="justify-center items-center  text-gray-700 col-span-3 mb-2 mt-1 lg:mb-0 flex text-sm p-2">
                <span>
              {/*      {moment(post.createdAt).format('MMM DD, YYYY')} */}
                </span>
            </div>
        </div>

        <div className="grid-cols-1 grid">
            <h1 className="transition duration-500 text-left mb-2 md:mt-2  mr-4 p-2 cursor-pointer text-black
            hover:text-indigo-500 text-xl">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
        </div>
        
       
                
        <div className="grid-cols-4 grid gap-6">
            {/*Column One*/}
            <div className="p-8 text-left items-center justify-center mb-2 w-full col-span-3">
                <Link href={`/post/${post.slug}`}>
                        <p className="text-sm text-black font-normal mx-auto mb-8">{post.excerpt}</p>
                </Link>
            </div>
            
            {/*Column Two*/}
            <div className="pt-8 rounded-md  mr-4 cols-span-3">
            <Link href={`/post/${post.slug}`}>
                <img
                src={post.featuredImage.url}
                alt={post.title}
                className="
                w-full 
                shadow-lg
                rounded-md justify-center items-center
                "
                />
            </Link>
            </div>
        </div>
    </div>
    )
};

export default PostCard;

