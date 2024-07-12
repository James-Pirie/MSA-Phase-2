import { useState } from 'react';
import { Author } from '../models/Author';
import { getAuthorById } from '../services/AuthorServices';


export const useAuthors = () => {
    const [author, setAuthor] = useState<Author | null>(null)
    const [authorError, setErrorId] = useState<String | null>(null)

    
    const fetchAuthorById = async (id: number) => {
        try {
            const author = await getAuthorById(id); 
            setAuthor(author);  
        } catch (err) {
            setErrorId('Failed to fetch review');
        }
    };

    return { author, authorError, fetchAuthorById };
};
