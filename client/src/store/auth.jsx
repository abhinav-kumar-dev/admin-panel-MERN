import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState(null);

    const isLoggedIn = !!token;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }

    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    const getUserData = async () => {
        try {
            let response = await fetch("https://admin-panel-backend-mtq8.onrender.com/api/v1/getUser",{
                method: "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });

            if(response.ok){
                response = await response.json();
                setUserData(response.data);
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        if(token){
            getUserData();
        }
    },[token])
    
    return <AuthContext.Provider value={{storeTokenInLS,logoutUser,isLoggedIn,userData}}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () =>{
    return useContext(AuthContext);
}