import { getDocs, collection, setDoc, doc } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { db } from "../firebase";


const MediumContext = createContext();

const MediumProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

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
                        catergory: doc.data().catergory,
                        postLength: doc.data().postLength,
                        bannerImg: doc.data().bannerImg,
                        title: doc.data().title,
                        // comments: doc.data().comments,
                        postedOn: doc.data().postedOn,
                        author: doc.data().author,
                    }
                }
            }));
        }
        getPosts();
    }, []);

    return (
        <MediumContext.Provider 
            value={{ posts, users }}>
            {children}
        </MediumContext.Provider>
    )

};



export { MediumContext, MediumProvider };