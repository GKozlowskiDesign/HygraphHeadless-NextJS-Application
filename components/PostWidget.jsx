import React, { useState, useEffect } from "react";
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';


import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    
    useEffect(() => {
        if(slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
            .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

    return (
        <div className="bg-white  mb-8 border-b p-4">
            <h3 className="text-xl text-black mb-8  pb-4">
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
                {relatedPosts.map((post) => (
                    <div key={post.title} className="flex items-center w-full mb-4">
                        <div className="w-16 flex-none">
                            <Image
                            alt={post.title}
                            height="60px"
                            width="60px"
                            className="align-middle rounded-full border-2 border-gray-800"
                            src={post.featuredImage.url} />
                        </div>
                        <div className="flex-grow ml-4">
                            <p className="text-gray-500 font-sm">
                                {moment(post.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <Link href={`/post/${post.slug}`} key={post.title} className="text-md text-black">
                                    {post.title}
                            </Link>
                        </div>
                    </div>
               ))}
        </div> 
    )
};

export default PostWidget;
