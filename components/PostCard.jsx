import React from "react";
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({ post }) => {
    console.log(post);
  return (
    <div className="bg-white mt-4 mb-4 pt-4
    border-y-2 border-gray-200 shadow-sm lg:p-2">
        <div className="grid grid-cols-6">
           
            {/*Column Two*/}
            <div className="flex justify-left mb-2 lg:mb-0 w-full lg:w-auto mr-4 col-span-2 bg-gray-50 mx-auto rounded-xl p-1">
                    <img 
                    src={post.author.photo.url}
                    alt={post.author.name}
                    height="20"
                    width="20"
                    className="align-middle rounded-full"
                    />
                    <p className="inline text-center justify-centerp pt-1 md:pt-0 text-gray-700 ml-2 text-xs  md:text-sm">{post.author.name}</p>
                    
                    
                    
            </div>
            {/*Column Three*/}
            <div className="font-medium items-right  justify-center  text-gray-700 col-span-4 mb-4 lg:mb-0 flex">
                <span>
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
            </div>
        </div>

        <div className="grid-cols-1 grid">
            <h1 className="transition duration-500 text-left mb-2 md:mt-2  mr-4 p-5 cursor-pointer text-black
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
            <div className="mb-2 rounded-md mx-auto">
            <Link href={`/post/${post.slug}`}>
                <img
                src={post.featuredImage.url}
                alt={post.title}
                className="
                w-full 
                shadow-lg
                rounded-md 
                "
                />
            </Link>
            </div>
        </div>
    </div>
    )
};

export default PostCard;
