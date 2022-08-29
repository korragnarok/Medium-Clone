import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/smallLogo.png';
import Bookmark from '../assets/bookmark.png';
import Home from '../assets/home.png';
import Letter from '../assets/letter.png';
import Write from '../assets/write.png';
import Bell from '../assets/bell.png';
import User from '../assets/user.jpeg';

const styles = {
    wrapper: 'bg-white fixed flex flex-col items-center justify-around w-20 h-screen border-r border-slate-300 z-50',
    content: 'z-50',
    logoContainer: 'absolute top-6 left-2.5 p-2',
    iconContainer: 'flex flex-col gap-10 items-center mb-6 border-b', 
    grayLine: 'w-15 h-2 bg-slate-300',
    writeIcon: 'pt-6',
    userContainer: 'absolute bottom-5',
    user: 'rounded-full'
}

const PostNav = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Link href='/'>
                        <Image 
                            className={styles.logo}
                            src={Logo}
                            height={40}
                            width={40}
                            style={{cursor: 'pointer'}}
                        />
                    </Link>
                   
                </div>
                <div className={styles.iconContainer}>
                <Link href='/'>
                    <Image 
                        src={Home} 
                        height={25} 
                        width={25}
                        style={{cursor: 'pointer'}}/>
                </Link>
                <Link href='/'>
                    <Image 
                        src={Bell} 
                        height={25} 
                        width={25}
                        style={{cursor: 'pointer'}}/>
                </Link>
                <Link href='/'>
                    <Image 
                        src={Bookmark} 
                        height={25} 
                        width={25}
                        style={{cursor: 'pointer'}}/>
                </Link>
                <Link href='/'>
                    <Image 
                        src={Letter} 
                        height={25} 
                        width={25}
                        style={{cursor: 'pointer'}}/>
                </Link>
                    <div className={styles.grayLine}></div>
                </div>
                <div className={styles.writeIcon}>
                <Link href='/'>
                    <Image 
                        src={Write} 
                        height={25} 
                        width={25}
                        style={{cursor: 'pointer'}}/>
                </Link>
                </div>
                <div className={styles.userContainer}>
                <Link href='/'>
                    <Image 
                        className={styles.user}
                        src={User} 
                        height={35} 
                        width={35}
                        style={{cursor: 'pointer'}}/>
                </Link>
                </div>
            </div>
        </div>
    )
};

export default PostNav;