import { Button, Flex, useMantineTheme } from '@mantine/core';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useResponsive } from '../hooks/useResponsive';
import { useTheme } from '../hooks/useTheme';



function SubHeader() {
    const theme = useMantineTheme();
    const { authenticated, currentUser } = useAuth();
    const { isSmallScreen } = useResponsive();
    const { toggleTheme } = useTheme();
  
    return (
      <header className='subheader' style={{ backgroundColor: theme.colors.darkGrey[0] }}>
        <Flex
          mih={50}
          gap={isSmallScreen ? '0%' : '10%'}
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Link to="/">
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
  
          <Link to="/books">
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
            <Link to={`/profile/${currentUser?.userId}`}>
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
            <Link to="/login">
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