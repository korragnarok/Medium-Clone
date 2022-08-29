import Image from 'next/image';
import BannerImg from '../assets/banner.png';

const styles = {
    container: 'bg-[#FFC116] h-[550px] border-b border-black',
    banner:'relative flex justify-around',
    leftDiv: 'absolute left-12 pt-[140px]',
    rightDiv: 'absolute right-1 top-[90px]',
    bannerImage: 'xsm:hidden',
    title: 'font-mediumSerif text-[6.5rem]',
    subTitle: 'font-light w-[420px] text-[24px] leading-none',
    bannerButton: 'bg-black text-white px-14 py-2 mt-[50px] text-[20px] rounded-3xl'
};

const Banner =() => {
    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.leftDiv}>
                    <h1 className={styles.title}>Stay curious.</h1>
                    <h4 className={styles.subTitle}>Discover stories, thinking, and expertise from writers on any topic.</h4>
                    <button className={styles.bannerButton}>Start reading</button>
                </div>
                <div className={styles.rightDiv}>
                    <Image 
                        className={styles.bannerImage}
                        src={BannerImg}
                        height={420}
                        width={550}/>
                </div>
            </div>
        </div>
    )
};

export default Banner;