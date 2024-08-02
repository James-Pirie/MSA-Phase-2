// dependencies
import { useState } from 'react';
import { PasswordInput, Input, Button, Container, Notification, useMantineTheme } from '@mantine/core';

// hooks
import { useResponsive } from '../hooks/useResponsive';
import useAuth from '../hooks/useAuth'; 

// style
import styles from './Login.module.css'

function Login() {
    const { isSmallScreen } = useResponsive(); // check if on mobile
    const { login, signUp, currentUser, registerError } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signingUp, setSigningUp] = useState(false);
    const [showFailedNotification, setShowFailedNotification] = useState(false);
    const theme = useMantineTheme();

    // login functionality
    const handleLogin = async () => {
        await login(username, password);
        setShowFailedNotification(true);
    };

    // sign up functionality
    const handleSignUp = async () => {
        await signUp(username, password, confirmPassword)
        if(registerError != null){
            setShowFailedNotification(true)
            setSigningUp(true);
        }
        else{
            setSigningUp(false);
        }
    };

    // display sign up form is sign up is true
    // otherwise login form
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
                minHeight: '92vh',
                background: theme.other.primaryGradient, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {showFailedNotification && (
                <Notification
                    ml='1%'
                    color={theme.colors.mediumGrey[0]}
                    mr='1%'
                    style={{
                        backgroundColor: theme.colors.brandGreen[0],
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

            <div 
                className={isSmallScreen ? (styles.loginFormMobile):(styles.loginForm)}
                style={{backgroundColor: theme.colors.darkGrey[0]}}
                >
                <Input 
                    aria-label='Username Input'
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    size='xl'
                    disabled={currentUser != null}
                />
                <PasswordInput 
                    aria-label='Password Input'
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
                            aria-label='Confirm Password Input'
                            mt='5%'
                            placeholder="Confirm Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            size='xl'
                            disabled={currentUser != null}
                        />
                    
                        <Button 
                            aria-label='Submit sign up button'
                            c={theme.colors.darkGrey[0]}
                            mt='5%'
                            size='xl'
                            fullWidth
                            variant="filled" 
                            color={theme.colors.brandGreen[0]}
                            onClick={handleSignUp}
                            disabled={currentUser != null}
                        >
                            Sign Up
                        </Button>
                        <Button 
                            mt='5%'
                            size='xl'
                            variant="light"
                            aria-label='Go to login form button'

                            fullWidth
                            color={theme.colors.brandGreen[0]}
                            disabled={currentUser != null}
                            onClick={handleNotSigningUp}
                        >
                            Login
                        </Button>
                    </>
                ) : (
                    <>
                        <Button 
                            mt='5%'
                            size='xl'
                            fullWidth
                            variant="filled" 
                            color={theme.colors.brandGreen[0]} 
                            onClick={handleLogin}
                            disabled={currentUser != null}
                            styles={{ label: { color: theme.colors.darkGrey[0] } }}
                            aria-label='Submit login button'
                        >
                            Login
                        </Button>
                        <Button 
                            mt='5%'
                            size='xl'
                            variant="light"
                            fullWidth
                            color={theme.colors.brandGreen[0]} 
                            disabled={currentUser != null}
                            onClick={handleSigningUp}
                            aria-label='Go to sign up form button'
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
