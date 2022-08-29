import Image from 'next/image';
import Logo from '../assets/logo.png';
import React, { useState, useEffect } from 'react';

const styles = {
    container: 'text-sm fixed w-full bg-[#FFC116] border-b border-black z-50 transition-colors duration-350 ease-in',
    colorChange: 'text-sm fixed w-full bg-white border-b border-black z-50 transition-colors duration-350 ease-in',
    content: 'flex justify-between px-12 py-4',
    logoContainer: '',
    logo: 'object-contain',
    nav: '',
    navBar: 'flex items-center gap-5',
    list: 'flex items-center gap-5 sm:hidden',
    signInDiv: 'flex items-center gap-5',
    signIn: 'flex xxs:hidden',
    navButton: 'bg-black text-white px-4 py-2 text-[13px] rounded-3xl',
};

const Header =() => {

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
                <div className={styles.nav}>
                    <ul className={styles.navBar}>
                        <div className={styles.list}>
                           <li>Our Story</li>
                            <li>Membership</li>
                            <li>Write</li> 
                        </div>
                        <div className={styles.signInDiv}>
                            <li className={styles.signIn}>Sign In</li>
                            <button className={styles.navButton}>Get started</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;