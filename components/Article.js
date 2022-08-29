import Image from 'next/image';
import Author from '../assets/author.avif';
import BookmarkPlus from '../assets/bookmarkplus.png';
import Chain from '../assets/chain.png';
import Facebook from '../assets/facebook.png';
import Linkedin from '../assets/linkedin.png';
import Play from '../assets/play.png';
import Twitter from '../assets/twitter.png';

const styles = {
    container: 'px-[5rem] mb-[5rem] ml-[10%] min-w-[600px] h-screen overflow-scroll z-0',
    heading: 'flex items-center gap-[10rem] mt-[4rem]',
    userWrap: 'flex items-center gap-5',
    authorImg: 'flex object-cover rounded-full',
    wrap: '',
    infoWrap: 'flex items-center min-w-[230px]',
    info: 'mr-[5px]',
    listen: 'ml-[5px]',
    socialsWrap: 'flex items-center gap-5',
    socials: 'flex items-center gap-5',
    postWrap: 'font-mediumSerif',
    title: 'max-w-[40rem] mt-[2rem] text-[2rem] font-bold',
    post: 'max-w-[50rem] leading-10',
}


const Article = () => {
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.userWrap}>
                    <Image className={styles.authorImg} src={Author} height={50} width={50}/>                    
                    <div className={styles.wrap}>
                        <h1 className={styles.userName}>Hansel Pratt</h1>
                        <div className={styles.infoWrap}>
                            <h2 className={styles.info}>Mar 14 • 5 min read</h2>
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
                <div className={styles.title}>There was no telling what thoughts would come from the machine.</div>
                <Image />
                <div className={styles.post}>There have been days when I wished to be separated from my body, but today wasn’t one of those days.
                It must be easy to commit crimes as a snake because you don't have to worry about leaving fingerprints.
                Two more days and all his problems would be solved.
                The gloves protect my feet from excess work.
                When he asked her favorite number, she answered without hesitation that it was diamonds.
                He went back to the video to see what had been recorded and was shocked at what he saw.
                Nobody loves a pig wearing lipstick.
                Boulders lined the side of the road foretelling what could come next.
                Everyone was busy, so I went to the movie alone.
                After exploring the abandoned building, he started to believe in ghosts.
                The dead trees waited to be ignited by the smallest spark and seek their revenge.
                A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.
                Swim at your own risk was taken as a challenge for the group of Kansas City college students.
                Blue sounded too cold at the time and yet it seemed to work for gin.
                She couldn't understand why nobody else could see that the sky is full of cotton candy.
                The fog was so dense even a laser decided it wasn't worth the effort.
                Tomatoes make great weapons when water balloons aren’t available.
                That must be the tenth time I've been arrested for selling deep-fried cigars.
                The bread dough reminded her of Santa Clause’s belly.
                There's a reason that roses have thorns.
                We should play with legos at camp.
                Be careful with that butter knife.
                He's in a boy band which doesn't make much sense for a snake.
                Car safety systems have come a long way, but he was out to prove they could be outsmarted.
                The tortoise jumped into the lake with dreams of becoming a sea turtle.
                His get rich quick scheme was to grow a cactus farm.
                Please put on these earmuffs because I can't you hear.
                He set out for a short walk, but now all he could see were mangroves and water were for miles.
                He didn't understand why the bird wanted to ride the bicycle.
                Choosing to do nothing is still a choice, after all.
                He went on a whiskey diet and immediately lost three days.
                There's a growing trend among teenagers of using frisbees as go-cart wheels.
                The body piercing didn't go exactly as he expected.
                I trust everything that's written in purple ink.
                He realized there had been several deaths on this road, but his concern rose when he saw the exact number.
                It would have been a better night if the guys next to us weren't in the splash zone.
                He appeared to be confusingly perplexed.
                Instead of a bachelorette party
                Nobody has encountered an explosive daisy and lived to tell the tale.
                There was no ice cream in the freezer, nor did they have money to go to the store.
                She finally understood that grief was her love with no place for it to go.
                The rain pelted the windshield as the darkness engulfed us.
                Please wait outside of the house.
                I checked to make sure that he was still alive.
                At that moment I was the most fearsome weasel in the entire swamp.
                It took him a month to finish the meal.
                Gwen had her best sleep ever on her new bed of nails.
                For oil spots on the floor, nothing beats parking a motorbike in the lounge.
                She cried diamonds.
                Chocolate covered crickets were his favorite snack.</div>
            </div>
        </div>
    )
};

export default Article;