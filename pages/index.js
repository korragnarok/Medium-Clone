import Banner from '../components/Banner';
import Image from 'next/image';
import TrendingArrow from '../assets/trending.png';
import Header from '../components/Header';
import Post from '../components/PostCard';
import Trending from '../components/Trending';
import { MediumContext } from '../context/MediumContext';
import { useContext } from 'react';

const styles = {
    container: 'grid grid-cols-3 gap-10 pr-10 w-full mb-[100px] pt-10 pb-10 pl-[5rem] border-b-2',
    heading: 'flex gap-3 font-bold uppercase text-xs tracking-widest pt-3',
}

export default function Home() {
  
  const { posts } = useContext(MediumContext);

  return (
    <div>
      <Header />
      <Banner />
      <div className={styles.heading}>
          <Image className={styles.arrow} src={TrendingArrow} width={20} height={20} />
          <div>Trending on medium</div>
      </div>
      <div className={styles.container}>
        {posts.map((post) => (
          <Trending post={post} key={post.id}/>
        ))}
      </div>
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  )
}
