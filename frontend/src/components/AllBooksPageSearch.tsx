// style
import styles from './AllBooksPageSearch.module.css';

// hooks
import { useBooks } from '../hooks/useBooks';
import { useResponsive } from '../hooks/useResponsive';

// dependancies
import { useEffect, useState } from 'react';
import { Autocomplete, Container, Text, useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


// Define the type for autocomplete items
interface AutocompleteItem {
    bookName: string;
    bookId: number;
}

function AllBooksPageSearch() {
    // constants
    const { fetchBookBySearch, booksBySearch, searchLoading } = useBooks();
    const { isSmallScreen } = useResponsive();  // for mobile

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<AutocompleteItem[]>([]);
    const [prevSearchTerm, setPrevSearchTerm] = useState<string>('');
    const navigate = useNavigate();
    const theme = useMantineTheme();  // to change theme
    

    // Fetch books based on search term
    useEffect(() => {
        if (searchTerm !== prevSearchTerm && !searchLoading) {
            fetchBookBySearch(searchTerm);
            setPrevSearchTerm(searchTerm);
        }
    }, [searchTerm, fetchBookBySearch, prevSearchTerm, searchLoading]);

    // update search results when booksBySearch changes and loading is false
    useEffect(() => {
        if (!searchLoading && booksBySearch != null) {
            if (booksBySearch.length > 0) {
                // Use a map to remove duplicate results
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
    }, [booksBySearch, searchLoading]);

    // Handle search term change
    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    // Handle book selection
    const handleSubmit = (bookItem: AutocompleteItem) => {
        console.log(bookItem)
        navigate(`/books/${bookItem.bookId}`)
    };

    return (
        <>
            <Container
                style={{
                    minWidth: '100vw',
                    background: theme.other.primaryGradient,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2%',
                    flexDirection: 'column',
                }}
            >
                <Text 
                    c={theme.colors.lightGrey[0]}
                    fw={600} 
                    size={isSmallScreen ? ('5vw'): ('2.5vw')}
                    mb='1%'
                    mt={isSmallScreen ? ('2%'): (undefined)}

                >
                    Search for a Book
                </Text>

                <Autocomplete
                    className={styles.searchBar}
                    placeholder="Books Title"
                    data={searchResults.map(item => ({
                        value: item.bookName,
                        label: item.bookName
                    }))}
                    ml={isSmallScreen ? ('4%'): (undefined)}
                    mr={isSmallScreen ? ('4%'): (undefined)}
                    mb={isSmallScreen ? ('2%'): (undefined)}
                    size={isSmallScreen ? (undefined): ('xl')}


                    style={{ marginTop: '1%' }}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onOptionSubmit={(item: string) => {
                        const selectedItem = searchResults.find(result => result.bookName === item);
                        if (selectedItem) handleSubmit(selectedItem);
                    }}
                />
            </Container>


        </>
    );
}

export default AllBooksPageSearch;
