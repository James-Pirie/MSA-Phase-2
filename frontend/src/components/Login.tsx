import { useState } from 'react';
import { PasswordInput, Input, Button, Text } from '@mantine/core';
import useAuth from '../hooks/useAuth'; 

function Login() {
    const { login, authenticated } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        await login(username, password);
    };

    return (
        <>
            <Text>{authenticated ? 'Authenticated' : 'Not Authenticated'}</Text>
            <Input 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <PasswordInput 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <Button 
                variant="filled" 
                color="green" 
                onClick={handleLogin}
            >
                Login
            </Button>
        </>
    );
}

export default Login;
