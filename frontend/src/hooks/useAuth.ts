// useAuth.ts
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, verifyUser } from '../services/UserServices';

const useAuth = () => {
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
                    } else {
                        setAuthenticated(false);
                    }
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                console.error('Failed to verify token:', error);
                setAuthenticated(false);
            }
        };

        checkAuthentication();
    }, [navigate]);

    const login = async (username: string, password: string) => {
        try {
            const token = await authenticateUser(username, password);
            localStorage.setItem('token', token);
            setAuthenticated(true);
            navigate('/'); 
        } catch (error) {
            console.error('Failed to login:', error);
            setAuthenticated(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthenticated(false);
        navigate('/'); 
    };

    return { authenticated, login, logout };
};

export default useAuth;
