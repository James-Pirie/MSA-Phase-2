// dependencies
import { Link } from 'react-router-dom';
import { Button, Flex, useMantineTheme } from '@mantine/core';

// hooks
import useAuth from '../hooks/useAuth';
import { useResponsive } from '../hooks/useResponsive';
import { useTheme } from '../hooks/useTheme';

function SubHeader() {
    const theme = useMantineTheme(); // theme checker
    const { authenticated, currentUser } = useAuth();
    const { isSmallScreen } = useResponsive(); // mobile view checker
    const { toggleTheme } = useTheme();
  
    return (
      <header
        className='subheader'
        style={{
          backgroundColor: theme.colors.darkGrey[0],
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
      >
        <Flex
          mih={50}
          gap={isSmallScreen ? '0%' : '10%'}
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Link to="/"  aria-label='Link to home page'>
            <Button
              variant="subtle"
              color={theme.colors.brandGreen[0]}
              size="xl"
              radius="xs"
              styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}
            >
              Home
            </Button>
          </Link>
  
          <Link to="/books" aria-label='Link to books page'>
            <Button
              variant="subtle"
              color={theme.colors.brandGreen[0]}
              size="xl"
              radius="xs"
              styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}
            >
              Books
            </Button>
          </Link>
  
          {authenticated && currentUser != null ? (
            <Link to={`/profile/${currentUser?.userId}`} aria-label='Link to your profile'>
              <Button
                variant="subtle"
                color={theme.colors.brandGreen[0]}
                size="xl"
                radius="xs"
                styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}
              >
                {isSmallScreen ? 'Profile' : 'My Profile'}
              </Button>
            </Link>
          ) : (
            <Link to="/login" aria-label='Link to login page'>
              <Button
                variant="subtle"
                color={theme.colors.brandGreen[0]}
                size="xl"
                radius="xs"
                styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}
              >
                Log In
              </Button>
            </Link>
          )}
  
          {!isSmallScreen && (
            <Button
              aria-label='Change theme button'
              variant="subtle"
              color={theme.colors.brandGreen[0]}
              size="xl"
              radius="xs"
              styles={{ label: { fontSize: isSmallScreen ? '5vw' : '2vw' } }}
              onClick={toggleTheme}
            >
              Theme
            </Button>
          )}
        </Flex>
      </header>
    );
  }
  
  export default SubHeader;
