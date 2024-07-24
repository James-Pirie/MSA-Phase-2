// Logout.tsx
import { Button } from '@mantine/core';
import useAuth from '../hooks/useAuth';

function Logout() {
    const { logout, currentUser } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <Button onClick={handleLogout} disabled={currentUser === null}>Log Out</Button>
        </>
    );
}

export default Logout;
