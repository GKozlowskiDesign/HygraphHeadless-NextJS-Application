import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import About  from '../components/Portfolio/About'

export default function Home({ posts }) {
  return (
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
          <div className='hidden lg:block md:hidden'><About /></div>

          <div><PostWidget /></div>
          <div><Categories /></div>

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