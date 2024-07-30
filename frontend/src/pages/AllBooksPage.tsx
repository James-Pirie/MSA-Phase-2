// components
import SubHeader from "../components/SubHeader";
import AllBooksPageSearch from "../components/AllBooksPageSearch";
import AllBooksRecommendations from '../components/AllBooksRecommendations';
import { useMantineTheme } from '@mantine/core';


function AllBooksPage() {
    const theme = useMantineTheme();

    return (
        <div style={{ backgroundColor: theme.colors.darkGrey[0], minHeight: '100vh' }}>
            <SubHeader/>
            <AllBooksPageSearch/>
            <AllBooksRecommendations/>
        </div>
    );
}

export default AllBooksPage;
