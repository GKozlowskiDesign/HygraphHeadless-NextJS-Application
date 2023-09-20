import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'

const PostDetail = ({ post }) => (
  <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
    <div className="relative mb-6 overflow-hidden shadow-md">
      <img
        src={post.featuredImage.url}
        alt="Featured Post Image"
        className="h-full w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
      />
    </div>
    <div className="px-4 lg:px-0">
      <div className="mb-8 flex w-full items-center">
        <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
            src={post.author.photo.url}
          />
          <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
      <RichText className="rounded-lg" content={post.content.raw} 
                renderers={{
                      h1: ({ children }) => <h1 className="text-black font-bold text-3xl">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-black font-bold text-2xl mt-4 mb-2">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-blue-800 font-bold text-2xl underline mb-6 hover:text-sky-500">{children}</h3>,
                      h4: ({ children }) => <h4 className="text-stone-700 text-base font-semibold mt-2">{children}</h4>,
                      h5: ({ children }) => <h5 className="text-black text-base">{children}</h5>,
                      h6: ({ children }) => <h6 className="text-black">{children}</h6>,
                      p: ({ children }) => <p className="text-black text-sm font-light mb-2 mt-2">{children}</p>,
                      a: ({ children, href }) => <a href={href} className="text-blue-800 hover:text-sky-500">{children}</a>,
                      b: ({ children }) => <b className="text-black font-black">{children}</b>,
                      underline: ({ children }) => <u className="text-light">{children}</u>,
                      ul: ({ children }) => <ul className="mx-4 font-light text-sm text-left leading-6 list-disc">{children}</ul>,
                      ol: ({ children }) => <ol className="mx-4 font-light text-sm text-left leading-6 list-decimal">{children}</ol>,
                     li: ({ children }) => <li className="mx-4 font-light text-sm text-left leading-6">{children}</li>,
                    code_block: ({ children }) => <code className="mx-24 mb-8 text-sm sm:text-sm inline-flex text-left items-center space-x-4 bg-gray-700 text-gray-200 rounded-md p-8">{children}</code>,

                }}/>
    </div>
  </div>
)

export default PostDetail
