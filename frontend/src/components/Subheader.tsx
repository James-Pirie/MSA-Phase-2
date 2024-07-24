import { Button, Flex } from '@mantine/core';
import useAuth from '../hooks/useAuth'; 
import { Link } from 'react-router-dom';
import '../styles/colours.css';

function SubHeader() {
    const { authenticated } = useAuth();
    return (
        <header className='white subheader light-grey'>
            <Flex
                mih={50}
                gap="10%" // Adjust gap as needed
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >   
                <Link to="/">
                    <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vw' } }}>
                        Home
                    </Button>
                </Link>
                
                <Link to="/books">
                    <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vw' } }}>
                        Books
                    </Button>
                </Link>

                {authenticated ? (
                    <Link to="/profile">
                        <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vw' } }}>
                            My Profile
                        </Button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vw' } }}>
                            Log In
                        </Button>
                    </Link>
                )}

                <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vw' } }}>
                    Settings
                </Button>

            </Flex>
        </header>
    );
}

export default SubHeader;
