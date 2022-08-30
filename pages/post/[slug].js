import { useContext, useEffect, useState } from 'react';
import MainPost from '../../components/Article';
import PostNav from '../../components/PostNav';
import Recommendations from '../../components/Recommendations'; 
import { MediumContext } from '../../context/MediumContext';
import { useRouter } from 'next/router';

const styles = {
    content: 'flex justify-between'
}

const Post = () => {
    const {posts, users} = useContext(MediumContext);
    const router = useRouter();
    const [post, setPost] = useState([]);
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        if (posts.length === 0) {
            return
        } 

        setPost(posts.find(post => post.id === router.query.slug))

        setAuthor(users.find(user => user.id === post?.data?.author))
    }, [post])

    

    return(
        <div className={styles.content}>
            <PostNav />
            <MainPost post={post} author={author}/>
            <Recommendations />
        </div>
    )  
}

export default Post;