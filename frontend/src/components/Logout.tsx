// Logout.tsx
import { Button, useMantineTheme } from '@mantine/core';
import useAuth from '../hooks/useAuth';
import { useResponsive } from '../hooks/useResponsive';




function Logout() {
    const { logout, authenticated, currentUser } = useAuth();
    const { isSmallScreen } = useResponsive();

    const theme = useMantineTheme();

    const handleLogout = () => {
        logout();
    };

    return (
        <> 
            {authenticated && (
            <Button
                color={theme.colors.brandGreen[0]}
                c={theme.colors.mediumGrey[0]}
                onClick={handleLogout} 
                disabled={currentUser === null}
                size={isSmallScreen? ('xs'):(undefined)}
            >
                Log Out
            </Button>)}
            
        </>
    );
}

export default Logout;
