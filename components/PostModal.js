import { useContext, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const styles = {
    container: '',
}

const PostModal = () => {
    const { currentUser } = useContext(MediumContext);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [brief, setBrief] = useState("");
    const [category, setCategory] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [postLength, setPostLength] = useState("");

    const addPostToFirebase = async () => {
        event.preventDefault();

        await addDoc(collection(db, 'articles'), {
            body: body,
            brief: brief,
            category: category,
            thumbnail: thumbnail,
            title: title,
            postedOn: serverTimestamp(),
            postLength: Number(postLength),
            author: currentUser.email
        })
    }

    return(
        
        <div className={styles.container}>
            <input 
                type='text'
                placeholder='Title'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Caption'
                value={brief}
                onChange={event => setBrief(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Image URL'
                value={thumbnail}
                onChange={event => setThumbnail(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Length'
                value={postLength}
                onChange={event => setPostLength(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Category'
                value={category}
                onChange={event => setCategory(event.target.value)}
            />
            <input 
                type='text'
                placeholder='Tell your story...'
                value={body}
                onChange={event => setBody(event.target.value)}
            />

            <button onClick={addPostToFirebase}>Publish</button>
        </div>
    )
};

export default PostModal;