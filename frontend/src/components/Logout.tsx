// Logout.tsx
import { Button } from '@mantine/core';
import useAuth from '../hooks/useAuth';

function Logout() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <Button onClick={handleLogout}>Log Out</Button>
        </>
    );
}

export default Logout;
