import { Button, Flex } from '@mantine/core';
import useAuth from '../hooks/useAuth'; 
import { Link } from 'react-router-dom';
import '../styles/colours.css';
import { useResponsive } from '../hooks/useResponsive';


function SubHeader() {
    const { authenticated, currentUser } = useAuth();
    const { isSmallScreen } = useResponsive();


    return (
        <header className='white subheader light-grey'>
            <Flex
                mih={50}
                gap={isSmallScreen ? ('0%'):('10%')}
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >   
                <Link to="/">
                    <Button 
                        variant="subtle" 
                        color="var(--colour-primary)" 
                        size="xl" 
                        radius="xs" 
                        styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}>
                        Home
                    </Button>
                </Link>
                
                <Link to="/books">
                    <Button 
                        variant="subtle"
                        color="var(--colour-primary)" 
                        size="xl" 
                        radius="xs" 
                        styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}>
                        Books
                    </Button>
                </Link>

                {authenticated && currentUser != null ? (
                    <Link to={`/profile/${currentUser?.userId}`}>
                        <Button 
                            variant="subtle" 
                            color="var(--colour-primary)" 
                            size="xl" 
                            radius="xs" 
                            styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}
                        >
                            {isSmallScreen ? ('Profile'):('My Profile')}
                        </Button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <Button 
                            variant="subtle" 
                            color="var(--colour-primary)" 
                            size="xl" radius="xs" 
                            styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}
                        >
                            Log In
                        </Button>
                    </Link>
                )}
                {isSmallScreen? (
                    <></>
                ):(
                    <Button 
                        variant="subtle"
                        color="var(--colour-primary)" 
                        size="xl" 
                        radius="xs" 
                        styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}
                    >
                        Theme
                    </Button>
                )}
                

            </Flex>
        </header>
    );
}

export default SubHeader;
