import { Link } from "react-router-dom"
import { Button } from '@mantine/core';

function NotFound() {
    return (
    <>
        <h1>404 Not Found</h1>
        <Button><Link to="/">Go Home?</Link></Button>
    </>
    );
  }
  
  export default NotFound;
  