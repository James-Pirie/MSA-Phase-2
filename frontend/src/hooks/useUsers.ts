import { useState } from 'react';
import { User } from '../models/User';
import { getUserById } from '../services/UserServices';


export const useUsers = () => {
    const [user, setUser] = useState<User | null>(null)
    const [userError, setErrorId] = useState<String | null>(null)
    
    const fetchUserById = async (id: number) => {
        try {
            const user = await getUserById(id); 
            setUser(user);  
        } catch (err) {
            setErrorId('Failed to fetch user');
        }
    };

    return { user, userError, fetchUserById };
};
