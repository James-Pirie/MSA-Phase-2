import Login from '../components/Login.tsx'
import SubHeader from '../components/SubHeader.tsx';
import { useMantineTheme } from '@mantine/core';


function HomePage() {
    const theme = useMantineTheme();


    return (
        <div style={{ backgroundColor: theme.colors.darkGrey[0], minHeight: '100vh' }}>

            <SubHeader/>
            <Login/>
        </div>
    )
}

export default HomePage;
