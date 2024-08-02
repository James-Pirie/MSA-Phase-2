// dependencies
import { Link } from "react-router-dom"
import { Button, useMantineTheme } from '@mantine/core';

function NotFound() {
    const theme = useMantineTheme();

    return (
    <div style={{backgroundColor: theme.colors.darkGrey[0], width:'100vw', height:'100vh', padding: '5%'}}>
        <h1 style={{color: theme.colors.brandGreen[0]}}>Error 404: Page Not Found</h1>
        <Link to="/" aria-label='Go to home page button'
        >
            <Button 
                color={theme.colors.brandGreen[0]}
                c={theme.colors.darkGrey[0]}
            >
                Go Home
            </Button>
        </Link>
    </div>
    );
  }
  
  export default NotFound;
  