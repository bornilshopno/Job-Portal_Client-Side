import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase.init";
import axios from "axios";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [jobs, setJobs] = useState([])
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(res => console.log("user Signed Out"))
            .then(error => console.log(error))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
                    .then(res => { console.log("LoggedinUser :", res.data); setloading(false) })

            }
            else {
                axios("http://localhost:5000/logout", {}, { withCredentials: true })
                    .then(res => {
                        console.log("logout :", res.data);
                        setloading(false)
                    })
            }



        })
        return () => { unSubscribe() }
    }, [])



    const authInfo = { user, setUser, loading, setloading, createUser, loginUser, handleSignOut, jobs, setJobs }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;