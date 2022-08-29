import Image from 'next/image';
import Author from '../assets/author.avif';
import TrendingArrow from '../assets/trending.png';

const styles = {
    container: 'mb-[100px] pt-10 pb-10 pl-[5rem] border-b-2',
    grid: 'grid grid-cols-3 gap-10 pr-10 w-full',
    content: 'flex',
    heading: 'flex gap-3 font-bold uppercase text-xs tracking-widest pb-5',
    arrow: '',
    postWrap: 'flex flex-col items-center',
    order: 'text-gray-200 text-[2rem] font-bold pr-7',
    author: 'flex items-center',
    authorImg: 'rounded-full object-cover ',
    authorName: 'pl-2 text-sm font-medium',
    title: 'font-bold pt-1',
    info: 'font-thin text-xs pt-1',
}

const Trending = () => {

    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                    <Image 
                        className={styles.arrow}
                        src={TrendingArrow}
                        width={20}
                        height={20} 
                    />
                    <div>Trending on medium</div>
                </div>
            <div className={styles.grid}>
            <div className={styles.content}>
                <div className={styles.order}>
                    <div>01</div>
                </div>
                <div className={styles.postWrap}>
                    <div className={styles.author}>
                        <Image 
                            className={styles.authorImg}
                            src={Author} 
                            height={30} 
                            width={30} 
                        />
                        <div className={styles.authorName}>
                            <h1>Hansel Pratt</h1>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h3>How to build a website with React</h3>
                    </div>
                    <div className={styles.info}>
                        <div>Aug 27 · 16 min read</div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.order}>
                    <div>02</div>
                </div>
                <div className={styles.postWrap}>
                    <div className={styles.author}>
                        <Image 
                            className={styles.authorImg}
                            src={Author} 
                            height={30} 
                            width={30} 
                        />
                        <div className={styles.authorName}>
                            <h1>Hansel Pratt</h1>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h3>How to build a website with React</h3>
                    </div>
                    <div className={styles.info}>
                        <div>Aug 27 · 16 min read</div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.order}>
                    <div>03</div>
                </div>
                <div classname={styles.postWrap}>
                    <div className={styles.author}>
                        <Image 
                            className={styles.authorImg}
                            src={Author} 
                            height={30} 
                            width={30} 
                        />
                        <div className={styles.authorName}>
                            <h1>Hansel Pratt</h1>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h3>How to build a website with React</h3>
                    </div>
                    <div className={styles.info}>
                        <div>Aug 27 · 16 min read</div>
                    </div>
                </div>
            </div>
                <div className={styles.content}>
                <div className={styles.order}>
                    <div>04</div>
                </div>
                <div className={styles.postWrap}>
                    <div className={styles.author}>
                        <Image 
                            className={styles.authorImg}
                            src={Author} 
                            height={30} 
                            width={30} 
                        />
                        <div className={styles.authorName}>
                            <h1>Hansel Pratt</h1>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h3>How to build a website with React</h3>
                    </div>
                    <div className={styles.info}>
                        <div>Aug 27 · 16 min read</div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.order}>
                    <div>05</div>
                </div>
                <div className={styles.postWrap}>
                    <div className={styles.author}>
                        <Image 
                            className={styles.authorImg}
                            src={Author} 
                            height={30} 
                            width={30} 
                        />
                        <div className={styles.authorName}>
                            <h1>Hansel Pratt</h1>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h3>How to build a website with React</h3>
                    </div>
                    <div className={styles.info}>
                        <div>Aug 27 · 16 min read</div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.order}>
                    <div>06</div>
                </div>
                <div className={styles.postWrap}>
                    <div className={styles.author}>
                        <Image 
                            className={styles.authorImg}
                            src={Author} 
                            height={30} 
                            width={30} 
                        />
                        <div className={styles.authorName}>
                            <h1>Hansel Pratt</h1>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h3>How to build a website with React</h3>
                    </div>
                    <div className={styles.info}>
                        <div>Aug 27 · 16 min read</div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
};

export default Trending;