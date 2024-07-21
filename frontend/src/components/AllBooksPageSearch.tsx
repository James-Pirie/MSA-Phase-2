import '../styles/colours.css'
import { Autocomplete, Container } from '@mantine/core';

function AllBooksPageSearch() {

    return (
        <Container
            style={{
                minWidth: '100vw',
                background: 'linear-gradient(to right, var(--colour-primary-gradient), var(--colour-secondary-gradient))', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2%'
            }}
        >
            <Autocomplete
                className='search-bar'
                placeholder="Search Books"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                size='xl'
            />
            
        </Container>
    )
}

export default AllBooksPageSearch;
