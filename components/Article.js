import Image from 'next/image';
import BookmarkPlus from '../assets/bookmarkplus.png';
import Chain from '../assets/chain.png';
import Facebook from '../assets/facebook.png';
import Linkedin from '../assets/linkedin.png';
import Play from '../assets/play.png';
import Twitter from '../assets/twitter.png';

const styles = {
    container: 'font-mediumSerif px-[5rem] mb-[5rem] ml-[10%] min-w-[600px] h-screen overflow-scroll z-0',
    heading: 'flex items-center gap-[10rem] mt-[4rem] min-w-[700px]',
    userWrap: 'flex items-center gap-5',
    authorImg: 'flex object-cover rounded-full',
    wrap: 'min-width-[500px]',
    infoWrap: 'flex items-center',
    info: 'mr-[5px]',
    listen: 'ml-[5px]',
    socialsWrap: 'flex items-center gap-5 min-w-[190px]',
    socials: 'flex items-center gap-5',
    postWrap: 'font-mediumSerif',
    title: 'max-w-[40rem] mt-[2rem] text-[2rem] font-bold',
    brief: 'text-[#858484] text-[1.25rem] pb-[2rem]',
    post: 'max-w-[50rem] min-w-[30rem] leading-10',
}


const Article = ({post, author}) => {
    console.log(post, author, '%%%')
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.userWrap}>
                {author?.data?.imageUrl && ( 
                    <Image c
                        lassName={styles.authorImg} 
                        src={author?.data?.imageUrl} 
                        height={50} 
                        width={50}/>
                    )}                                        
                    <div className={styles.wrap}>
                        <h1 className={styles.userName}>{author?.data?.name}</h1>
                        <div className={styles.infoWrap}>
                            <h2 className={styles.info}>
                            {new Date(post.data?.postedOn.toDate()).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            })}
                                 {' '}•{' '}{post.data?.postLength} min read</h2>
                            <h2 className={styles.info}></h2>
                            <Image className={styles.playImg} src={Play} height={15} width={15} />
                            <h2 className={styles.listen}>Listen</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.socialsWrap}>
                    <div className={styles.socials}>
                        <Image className={styles.socialImg} src={Twitter} height={20} width={20} />
                        <Image className={styles.socialImg} src={Facebook} height={20} width={20} />
                        <Image className={styles.socialImg} src={Linkedin} height={20} width={20} />
                        <Image className={styles.chainImg} src={Chain} height={20} width={20}/>
                    </div>
                </div>
            </div>
            <div className={styles.postWrap}>
                <div className={styles.title}>{post?.data?.title}</div>
                <div className={styles.brief}>{post?.data?.brief}</div>
                <div className={styles.post}>{post?.data?.body}</div>
            </div>
        </div>
    )
};

export default Article;