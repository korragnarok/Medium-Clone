import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const styles = {
    content: 'flex',
    postWrap: 'flex flex-col items-center',
    order: 'text-gray-200 text-[2rem] font-bold pr-7',
    author: 'flex items-center',
    authorImg: 'rounded-full object-cover ',
    authorName: 'pl-2 text-sm font-medium',
    title: 'font-bold pt-1',
    info: 'font-thin text-xs pt-1',
}

const Trending = ({post}) => {

    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
        const getAuthorData = async () => {
            setAuthorData(
                (await  getDoc(doc(db, 'users', post.data.author))).data())}

            getAuthorData();
    }, [])

    return(
        <div>
            <div className={styles.grid}>
            <div className={styles.content}>
                <div className={styles.order}>
                    <div>01</div>
                </div>
                <div className={styles.postWrap}>
                    <div className={styles.author}>
                        <Image 
                            className={styles.authorImg}
                            src={authorData?.imageUrl} 
                            height={30} 
                            width={30} 
                        />
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
                             · {post.data.postLength} min read</div>
                    </div>
                </div>
                    </div> 
                </div>
            </div>
    )
};

export default Trending;