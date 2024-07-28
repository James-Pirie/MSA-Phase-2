// Logout.tsx
import { Button } from '@mantine/core';
import useAuth from '../hooks/useAuth';
import { useResponsive } from '../hooks/useResponsive';
import '../styles/colours.css'




function Logout() {
    const { logout, authenticated, currentUser } = useAuth();
    const { isSmallScreen } = useResponsive();

    const handleLogout = () => {
        logout();
    };

    return (
        <> 
            {authenticated && (
            <Button
                color='var(--colour-primary)'
                c='var(--colour-primary-gradient)'
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
