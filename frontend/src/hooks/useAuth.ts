// useAuth.ts
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, getUserByUsername, verifyUser, getCurrentUsername, registerUser } from '../services/UserServices';
import { User } from '../models/User';

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [registerError, setRegisterError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const isValid = await verifyUser(token);
                    if (isValid) {
                        setAuthenticated(true);

                        // extract username from token
                        var username: any;
                        username = await getCurrentUsername(token)
                        
                        // identify current user and assign to currentUser
                        var user: User;
                        user = await getUserByUsername(username);
                        setCurrentUser(user) 
                    } else {
                        localStorage.removeItem('token');
                        setAuthenticated(false);
                    }
                } else {
                    localStorage.removeItem('token');
                    setAuthenticated(false);
                }
            } catch (error) {
                localStorage.removeItem('token');
                setAuthenticated(false);
            }
        };

        checkAuthentication();
    }, [navigate]);

    const signUp = async (username: string, password: string, confirmPassword: string) => {
        try{
            if(password === confirmPassword){
                await registerUser(username, password)
            }else{
                setRegisterError(`Failed to register`)
            }
        } catch (err){
            setRegisterError(`Failed to register ${err}`)
        }
    }

    const login = async (username: string, password: string) => {
        try {
            // check the user is in the database
            const token = await authenticateUser(username, password);
            localStorage.setItem('token', token);
            // get the details of the user logging in
            var user: User;
            user = await getUserByUsername(username);
            setCurrentUser(user);
            setAuthenticated(true);
            navigate('/'); 
        } catch (error) {
            setCurrentUser(null);
            setAuthenticated(false);
            localStorage.removeItem('token');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
        setAuthenticated(false);
        navigate('/'); 
    };

    return { authenticated, currentUser, login, logout, signUp, registerError };
};

export default useAuth;
