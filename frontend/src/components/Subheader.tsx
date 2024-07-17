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
                <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vh' } }}>
                    Books
                </Button>
                <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vh' } }}>
                    Authors
                </Button>
                <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vh' } }}>
                    Reviews
                </Button>
                
                {authenticated ? (
                    <Link to="/profile">
                        <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vh' } }}>
                            My Profile
                        </Button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <Button variant="subtle" color="var(--colour-primary)" size="xl" radius="xs" styles={{ label: { fontSize: '2vh' } }}>
                            Log In
                        </Button>
                    </Link>
                )}
            </Flex>
        </header>
    );
}

export default SubHeader;
