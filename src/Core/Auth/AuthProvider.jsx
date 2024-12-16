import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase.init";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [jobs,setJobs]=useState([])
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(res=>console.log("user Signed Out"))
        .then(error=>console.log(error))
      }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("state captured", currentUser)
            setloading(false)
        })
        return ()=> {unSubscribe()}
    }, [])



    const authInfo = { user, setUser, loading, setloading, createUser, loginUser,handleSignOut,jobs,setJobs }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;