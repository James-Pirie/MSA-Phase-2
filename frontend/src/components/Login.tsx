import { useState } from 'react';
import { PasswordInput, Input, Button, Container, Notification } from '@mantine/core';
import useAuth from '../hooks/useAuth'; 

import './Login.moduel.css'

function Login() {
    const { login, signUp, currentUser, registerError } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signingUp, setSigningUp] = useState(false);
    const [showFailedNotification, setShowFailedNotification] = useState(false);

    const handleLogin = async () => {
        await login(username, password);
        setShowFailedNotification(true);
    };

    const handleSignUp = async () => {
        await signUp(username, password, confirmPassword)
        if(registerError){
            setShowFailedNotification(true)
        }
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
            {showFailedNotification && (
                <Notification
                    ml='1%'
                    color='var(--colour-primary-gradient)'
                    mr='1%'
                    style={{
                        backgroundColor: 'var(--colour-primary)',
                        fontWeight: 'bold',
                        position: 'absolute',
                        top: '14%',
                        width: '29%'
                    }}
                    onClose={() => setShowFailedNotification(false)}
                >
                    Invalid Username or Password
                </Notification>
            )}


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
                            styles={{ label: { color: 'var(--colour-primary-gradient)' } }}
                            mt='5%'
                            size='xl'
                            fullWidth
                            variant="filled" 
                            color="green" 
                            onClick={handleSignUp}
                            disabled={currentUser != null}
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
