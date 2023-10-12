import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import About  from '../components/Portfolio/About'
import Head from "next/head"


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 border-y md:border-y-0 lg:border-l pl-6">
          <div className="lg:sticky relative top-8 md:border-y">
              <div alt="Listed Posts"><PostWidget /></div>
              <div alt="Post Categories"><Categories /></div>
              </div>
            </div>
        </div>
      </div>
  
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
