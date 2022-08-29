import Banner from '../components/Banner';
import Header from '../components/Header';
import Post from '../components/PostCard';
import Trending from '../components/Trending';
import { MediumContext } from '../context/MediumContext';
import { useContext } from 'react';

export default function Home() {
  const { posts } = useContext(MediumContext);

  console.log(posts);

  return (
    <div>
      <Header />
      <Banner />
      <Trending />
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  )
}
