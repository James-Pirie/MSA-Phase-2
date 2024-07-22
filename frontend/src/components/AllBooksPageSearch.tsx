import '../styles/colours.css';
import './AllBooksPageSearch.moduel.css';

import { useBooks } from '../hooks/useBooks';
import { useEffect, useState } from 'react';

import { Autocomplete, Container, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


// Define the type for autocomplete items
interface AutocompleteItem {
    bookName: string;
    bookId: number;
}

function AllBooksPageSearch() {
    const { fetchBookBySearch, booksBySearch, loading } = useBooks();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<AutocompleteItem[]>([]);
    const [prevSearchTerm, setPrevSearchTerm] = useState<string>('');
    const navigate = useNavigate();

    // fetch books based on search term
    useEffect(() => {
        if (searchTerm !== prevSearchTerm && !loading) {
            fetchBookBySearch(searchTerm);
            setPrevSearchTerm(searchTerm);
        }
    }, [searchTerm, fetchBookBySearch, prevSearchTerm]);

    // update search results when booksBySearch changes and loading is false
    useEffect(() => {
        if (!loading && booksBySearch != null) {
            if (booksBySearch.length > 0) {
                // Use a map to keep unique books by name
                const uniqueBooksMap = new Map<string, AutocompleteItem>();
                
                booksBySearch.forEach(book => {
                    if (!uniqueBooksMap.has(book.bookName)) {
                        uniqueBooksMap.set(book.bookName, {
                            bookName: book.bookName,
                            bookId: book.bookId
                        });
                    }
                });
                const autocompleteItems: AutocompleteItem[] = Array.from(uniqueBooksMap.values());
                setSearchResults(autocompleteItems);
            } else {
                setSearchResults([]);
            }
        }
    }, [booksBySearch, loading]);

    // handle search term change
    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    // handle book selection
    const handleSubmit = (bookItem: AutocompleteItem) => {
        console.log(bookItem)
        navigate(`/books/${bookItem.bookId}`)
    };

    return (
        <Container
            style={{
                minWidth: '100vw',
                background: 'linear-gradient(to right, var(--colour-primary-gradient), var(--colour-secondary-gradient))',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2%',
                flexDirection: 'column',
            }}
        >
            <Text 
                className='lighter-grey-font'
                fw={600} size='2.5vw'
                mb='1%'
            >
                Search for a Book
            </Text>

            <Autocomplete
                className="search-bar"
                placeholder="Books Title"
                data={searchResults.map(item => ({
                    value: item.bookName,
                    label: item.bookName
                }))}
                size="xl"
                style={{ marginTop: '1%' }}
                value={searchTerm}
                onChange={handleSearchChange}
                onOptionSubmit={(item: string) => {
                    const selectedItem = searchResults.find(result => result.bookName === item);
                    if (selectedItem) handleSubmit(selectedItem);
                }}
            />
        </Container>
    );
}

export default AllBooksPageSearch;
