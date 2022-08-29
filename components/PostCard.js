import Link from 'next/link';
import Image from 'next/image';
import Star from '../assets/star.png'
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


const styles = {
    container: 'w-[100%]',
    wrap: 'flex justify-between',
    content: 'flex justify-between items-center px-[5rem] pb-[2rem]',
    authorWrap: '',
    contentWrap: '',
    authorImg: 'rounded-full object-cover cursor-pointer',
    author: 'text-sm cursor-pointer',
    title: 'text-2xl font-bold pt-1 cursor-pointer w-[250px]',
    brief: 'text-gray-500 font-light',
    infoWrap: 'text-gray-500 text-[12px] flex items-center gap-2 text-sm',
    info: '',
    tag: 'text-[12px] bg-gray-100 rounded-xl px-2 py-[0.5rem] cursor-pointer',
    star: '',
    postImg: 'absolute right-5 object-cover',
}

const PostCard = ({post}) => {

    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
        const getAuthorData = async () => {
            setAuthorData(
                (await  getDoc(doc(db, 'users', post.data.author))).data(), '😎'
            )}

            getAuthorData();
    }, [])
    return(
        <Link href={`/post/${post.id}`}>
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <div className={styles.contentWrap}>
                        <div className={styles.authorWrap}>
                        <Image 
                            className={styles.authorImg}
                            src={authorData?.imageUrl}
                            height={50}
                            width={50}/>
                        <div className={styles.author}>{authorData?.name}</div>
                    </div>
                    <div className={styles.title}>{post.data.title}</div>
                    <div className={styles.brief}>{post.data.brief}</div>
                    <div className={styles.infoWrap}>
                        <div className={styles.info}>
                            {new Date(post.data.postedOn.toDate()).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                            })}
                        </div>
                        <div className={styles.info}>•</div>
                        <div className={styles.info}>{post.data.postLength} min read</div>
                        <div className={styles.info}>•</div>
                        <div className={styles.tag}>{post.data.category}</div>
                        <Image 
                            className={styles.star}
                            src={Star}
                            height={20}
                            width={20} 
                        />
                    </div>
                    </div>
                    
                    <div className={styles.image}>
                    <Image 
                        className={styles.postImg}  
                        src={post?.data.bannerImage}
                        height={200}
                        width={250}/>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
};

export default PostCard;