import SubHeader from '../components/SubHeader.tsx';
import UserDetails from '../components/UserDetails.tsx';
import { useMantineTheme } from '@mantine/core';

function HomePage() {
    const theme = useMantineTheme();

    return (
        <div style={{ backgroundColor: theme.colors.darkGrey[0], minHeight: '100vh' }}>
            <SubHeader/>
            <UserDetails/>
        </div>
        
    )
}

export default HomePage;
