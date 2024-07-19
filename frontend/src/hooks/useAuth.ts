// useAuth.ts
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, getUserByUsername, verifyUser, getCurrentUsername } from '../services/UserServices';
import { User } from '../models/User';

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [authenticated, setAuthenticated] = useState<boolean>(false);

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
            console.log(currentUser);
        };

        checkAuthentication();
    }, [navigate]);

    const login = async (username: string, password: string) => {
        try {
            // check the user is in the database
            const token = await authenticateUser(username, password);
            console.log(token)
            localStorage.setItem('token', token);
            // get the details of the user logging in
            var user: User;
            user = await getUserByUsername(username);
            console.log(user)
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

    return { authenticated, currentUser, login, logout };
};

export default useAuth;
