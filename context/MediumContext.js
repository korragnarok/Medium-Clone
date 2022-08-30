import { signInWithPopup } from "firebase/auth";
import { getDocs, collection, setDoc, doc, query, orderBy, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { db, auth, provider } from "../firebase";



const MediumContext = createContext();

const MediumProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users' ));
    
            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }));
        }

        getUsers();

    }, []);

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'articles'))

            setPosts(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        body: doc.data().body,
                        brief: doc.data().brief,
                        category: doc.data().category,
                        postLength: doc.data().postLength,
                        thumbnail: doc.data().thumbnail,
                        title: doc.data().title,
                        // comments: doc.data().comments,
                        postedOn: doc.data().postedOn,
                        author: doc.data().author,
                        number: doc.data().number,
                    }
                }
            }));
        }
        getPosts();
    }, []);

    const addUserToFirebase = async user => {
        await setDoc(doc(db, 'users', user.email), {
            email: user.email,
            name: user.displayName,
            imageUrl: user.photoURL,
            followerCount: 0
        })
    }

    const handleUserAuth = async () => {
        const userData =await signInWithPopup(auth, provider)
        const user = userData.user
        console.log( user, '🤩');
        setCurrentUser(user)
        addUserToFirebase(user)
    }

    const limitPosts = query(collection(db, 'articles'), orderBy('number', 'desc'), limit(6));

    return (
        <MediumContext.Provider 
            value={{ posts, users, handleUserAuth, currentUser }}>
            {children}
        </MediumContext.Provider>
    )

};



export { MediumContext, MediumProvider };