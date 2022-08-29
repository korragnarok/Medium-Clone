import MainPost from '../../components/Article';
import PostNav from '../../components/PostNav';
import Recommendations from '../../components/Recommendations'; 

const styles = {
    content: 'flex justify-between'
}

const Post = () => {
    return(
        <div className={styles.content}>
            <PostNav />
            <MainPost />
            <Recommendations />
        </div>
    )
}

export default Post;