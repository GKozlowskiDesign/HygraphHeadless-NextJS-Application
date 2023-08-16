import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import About  from '../components/Portfolio/About'
import Head from "next/head"

export default function Home({ posts }) {
  return (
    <div>
      {/*Header Text and Icon */}
      <Head>
        <title>GaryKozlowski</title>
        <link rel="icon" href="/favicon.png" />
        <meta description="Checkout GKDesign the Portfolio Website of Gary Kozlowski As a Business Information Systems Graduate, Full-Stack Developer, and AWS Certified Cloud Practitioner."
      </Head>
      <div className="container mx-auto px-10 mb-8 ">
        {/*<FeaturedPosts/>*/}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="lg:col-span-4 col-span-1 lg:border-l-2 pl-6">
              <div className="lg:sticky relative top-8">
              {/* Biography Paragraphs*/}
              <div className='hidden lg:block md:hidden' alt="Biography Section"><About /></div>
              {/* List of Posts */}
              <div className="hidden" alt="Listed Posts"><PostWidget /></div>
              {/* List of Categories */}
              <div alt="Post Categories"><Categories /></div>
              </div>
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
