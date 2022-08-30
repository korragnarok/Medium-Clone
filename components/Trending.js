import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Author from '../assets/author.avif';
import TrendingArrow from '../assets/trending.png';
import { db } from '../firebase';

const styles = {
    content: 'flex ml-[8.5rem]',
    heading: 'flex gap-3 font-bold uppercase text-xs tracking-widest pb-5',
    arrow: '',
    postWrap: 'flex flex-col ',
    order: 'text-gray-200 text-[2rem] font-bold pr-7',
    author: 'flex items-center',
    authorImg: 'rounded-full object-cover ',
    authorName: 'pl-2 text-sm font-medium',
    title: 'font-bold pt-1',
    info: 'flex gap-5 font-thin text-xs pt-1',
}

const Trending = ({post}) => {


    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
        const getAuthorData = async () => {
            setAuthorData(
                (await  getDoc(doc(db, 'users', post.data.author))).data(), '😎'
            )}

            getAuthorData();
    }, [post])
    
    return(
        <div>
            <div className={styles.grid}>
            <div className={styles.content}>
                <div className={styles.order}>
                    <div>{post.data.number}</div>
                </div>
                <div className={styles.postWrap}>
                    <div className={styles.author}>
                    {authorData?.imageUrl && ( 
                        <Image 
                            className={styles.authorImg}
                            src={authorData?.imageUrl}
                            height={50}
                            width={50}/>
                            )}    
                        <div className={styles.authorName}>
                            <h1>{authorData?.name}</h1>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h3>{post.data.title}</h3>
                    </div>
                    <div className={styles.info}>
                        <div>
                        {new Date(post.data.postedOn.toDate()).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                            })}
                         {' '} • {' '}
                         {post.data.postLength} min read</div>
                    </div>
                </div>
            </div>           
            </div>
        </div>
    )
};

export default Trending;