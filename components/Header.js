import Image from 'next/image';
import Logo from '../assets/logo.png';
import React, { useState, useEffect, useContext } from 'react';
import { MediumContext } from '../context/MediumContext';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PostModal from './PostModal';

Modal.setAppElement('#__next');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        border: 'none',
    },
    overlay: {
        backgroundColor: 'rgba(10, 11, 13, 0.75)',
    }
};

const styles = {
    container: 'text-sm fixed w-full bg-[#FFC116] border-b border-black z-50 transition-colors duration-350 ease-in',
    colorChange: 'text-sm fixed w-full bg-white border-b border-black z-50 transition-colors duration-350 ease-in',
    content: 'flex justify-between px-12 py-4',
    logoContainer: '',
    logo: 'object-contain',
    nav: '',
    navBar: 'flex items-center gap-5',
    list: 'flex items-center gap-5 sm:hidden cursor-pointer',
    signInDiv: 'flex items-center gap-5',
    signIn: 'flex xxs:hidden cursor-pointer',
    navButton: 'bg-black text-white px-4 py-2 text-[13px] rounded-3xl',
};

const Header =() => {

    const router = useRouter();

    const { currentUser, handleUserAuth} = useContext(MediumContext);

    const [colorChange, setColorChange] = useState(false);
    const changeHeaderColor = () => {
        if (window.scrollY >= 470) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeHeaderColor);
        return () => {
            window.removeEventListener('scroll', changeHeaderColor);
        }
    })

    return(
        <div className={ colorChange ? styles.colorChange : styles.container}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image 
                        className={styles.logo}
                        src={Logo} 
                        height={40}
                        width={175} />
                </div>
                {currentUser ? 
                (<div className={styles.nav}>
                    <ul className={styles.navBar}>
                        <div className={styles.list}>
                           <li>Our Story</li>
                            <li>Membership</li>
                        </div>
                        <div className={styles.signInDiv}>
                            <Link href={'/?addNew=1'}>
                                <li style={{ cursor: 'pointer'}}>Write</li> 
                            </Link>
                            <button className={styles.navButton}>Get unlimited access</button>
                        </div>
                    </ul>
                </div> )
                : (
                    <div className={styles.nav}>
                    <ul className={styles.navBar}>
                        <div className={styles.list}>
                           <li>Our Story</li>
                            <li>Membership</li>
                        </div>
                        <div className={styles.signInDiv}>
                            <li className={styles.signIn} onClick={handleUserAuth}>Sign In</li>
                            <button className={styles.navButton}>Get started</button>
                        </div>
                    </ul>
                </div> 
                )
                }
            </div>
            <Modal
                isOpen={Boolean(router.query.addNew)}
                onRequestClose={() => router.push('/')}
                style={customStyles}
                >
                    <PostModal />
            </Modal>
        </div>
    )
};

export default Header;