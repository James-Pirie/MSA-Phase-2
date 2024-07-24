import { useState } from 'react';
import { PasswordInput, Input, Button, Container, Text } from '@mantine/core';
import useAuth from '../hooks/useAuth'; 

import './Login.moduel.css'

function Login() {
    const { login, signUp, currentUser, registerError } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signingUp, setSigningUp] = useState(false);
    const [succesfullyRegistered, setSuccesfullyRegistered] = useState(false);

    const handleLogin = async () => {
        await login(username, password);
    };

    const handleSignUp = async () => {
        await signUp(username, password, confirmPassword)
    };

    const handleSigningUp = async () => {
        setSigningUp(true);
    };

    const handleNotSigningUp = async () => {
        setSigningUp(false);
    };

    return (
        <Container
            h='91vh'
            style={{
                minWidth: '100%',
                background: 'linear-gradient(to right, var(--colour-primary-gradient), var(--colour-secondary-gradient))', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className='login-form light-grey'>
                <Input 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    size='xl'
                    disabled={currentUser != null}
                />
                <PasswordInput 
                    mt='5%'
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    size='xl'
                    disabled={currentUser != null}
                />

                {registerError ? (<Text>Error</Text>):(<></>)}

                {signingUp ? (
                    <>
                        <PasswordInput 
                            mt='5%'
                            placeholder="Confirm Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            size='xl'
                            disabled={currentUser != null}
                        />
                    
                        <Button 
                            c='var(--colour-primary)'
                            mt='5%'
                            size='xl'
                            fullWidth
                            variant="filled" 
                            color="green" 
                            onClick={handleSignUp}
                            disabled={currentUser != null}
                            styles={{ label: { color: 'var(--colour-primary-gradient)' } }}
                        >
                            Sign Up
                        </Button>
                        <Button 
                            mt='5%'
                            size='xl'
                            variant="light"
                            fullWidth
                            color="green" 
                            disabled={currentUser != null}
                            onClick={handleNotSigningUp}
                        >
                            Log In
                        </Button>
                    </>
                ) : (
                    <>
                        <Button 
                            c='var(--colour-primary)'
                            mt='5%'
                            size='xl'
                            fullWidth
                            variant="filled" 
                            color="green" 
                            onClick={handleLogin}
                            disabled={currentUser != null}
                            styles={{ label: { color: 'var(--colour-primary-gradient)' } }}
                        >
                            Login
                        </Button>
                        <Button 
                            mt='5%'
                            size='xl'
                            variant="light"
                            fullWidth
                            color="green" 
                            disabled={currentUser != null}
                            onClick={handleSigningUp}
                        >
                            Sign Up
                        </Button>
                    </>
                )}
            </div>
        </Container>
    );
}

export default Login;
