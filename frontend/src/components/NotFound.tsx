import { Link } from "react-router-dom"
import { Button, useMantineTheme, Container } from '@mantine/core';

function NotFound() {
    const theme = useMantineTheme();

    return (
    <Container p='5%'>
        <h1 style={{color: theme.colors.brandGreen[0]}}>Error 404: Page Not Found</h1>
        <Link to="/">
            <Button 
                color={theme.colors.brandGreen[0]}
                c={theme.colors.darkGrey[0]}
            >
                Go Home
            </Button>
        </Link>
    </Container>
    );
  }
  
  export default NotFound;
  