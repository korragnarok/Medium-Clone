import Image from 'next/image';
import Author from '../assets/author.avif';
import PostImg from '../assets/post.avif';
import NewMessage from '../assets/newmessage.png';


const styles = {
    container: 'h-screen min-w-[400px] max-w-[30rem] flex-[1.2] p-[2rem] overflow-scroll',
    wrap: '',
    accentButton: 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[0.6rem] w-full rounded-full',
    searchForm: 'w-full border border-gray-400 rounded-full p-[0.5rem] mb-[50px] active:none focus:outline-none',
    image: 'object-cover rounded-full mb-3',
    authorTitle: 'text-med font-semibold mb-1',
    authorInfo: 'text-[#858484] max-w-[300px] text-[14px]',
    followers: 'text-[#858484] mb-3',
    buttonDiv: '',
    userBtn: 'bg-[#858484] text-white rounded-full py-[0.6rem] px-[2rem] my-7',
    title: 'font-semibold my-5',
    recommendsWrap: 'flex items-center gap-[50px] mb-5 last:pb-[100px]',
    authorWrap: 'flex items-center',
    authorImg: 'rounded-[50%] object-cover cursor-pointer',
    authorName: 'text-xs ml-[5px]',
    postTitle: 'max-w-[200px] text-md font-bold',
    author: 'text-sm ml-2',
}


const Recommendations = () => {
    return(
        <div className={styles.container}>
            <div className={styles.wrap}>
                <button className={styles.accentButton}>Get started</button>
                <input className={styles.searchForm} placeholder='Search' type='text' />
                <Image className={styles.image} src={Author} height={90} width={90}/>
                <h1 className={styles.authorTitle}>Hansel Pratt</h1>
                <div className={styles.followers}>98K Followers</div>
                <div className={styles.authorInfo}>
                        I teach people to use ReactJS, NextJS, vanilla Javascript, and to become professional developers in less than 180 days.
                </div>
                <div className={styles.buttonDiv}>
                    <button className={styles.userBtn}>Follow</button>
                </div>
            </div>
            <div className={styles.title}>More from Medium</div>
            <div className={styles.recommendsWrap}>
                <div>
                    <div className={styles.authorWrap}>
                        <Image className={styles.authorImg} src={Author} height={25} width={25}/>
                        <div className={styles.authorName}>Hansel Pratt</div>
                    </div>
                    <div className={styles.postTitle}>7 lessons John Malkovich taught me about React</div>
                </div>
                <Image src={PostImg} height={50} width={50}/>
            </div>
            <div className={styles.recommendsWrap}>
                <div>
                    <div className={styles.authorWrap}>
                        <Image className={styles.authorImg} src={Author} height={25} width={25}/>
                        <div className={styles.authorName}>Hansel Pratt</div>
                    </div>
                    <div className={styles.postTitle}>7 lessons John Malkovich taught me about React</div>  
                </div>
                <Image src={PostImg} height={50} width={50}/>
            </div>
            <div className={styles.recommendsWrap}>
                <div>
                    <div className={styles.authorWrap}>
                        <Image className={styles.authorImg} src={Author} height={25} width={25}/>
                        <div className={styles.authorName}>Hansel Pratt</div>
                    </div>
                    <div className={styles.postTitle}>7 lessons John Malkovich taught me about React</div>  
                </div>
                <Image src={PostImg} height={50} width={50}/>
            </div>
            <div className={styles.recommendsWrap}>
                <div>
                    <div className={styles.authorWrap}>
                        <Image className={styles.authorImg} src={Author} height={25} width={25}/>
                        <div className={styles.authorName}>Hansel Pratt</div>
                    </div>
                    <div className={styles.postTitle}>7 lessons John Malkovich taught me about React</div>  
                </div>
                <Image src={PostImg} height={50} width={50}/>
            </div>
        </div>
    )
};

export default Recommendations;