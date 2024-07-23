// components
import SubHeader from "../components/SubHeader";
import AllBooksPageSearch from "../components/AllBooksPageSearch"
import AllBooksRecommendations from '../components/AllBooksRecommendations';



function AllBooksPage() {
    return (
        <>
            <SubHeader/>
            <AllBooksPageSearch/>
            <AllBooksRecommendations/>
        </>
    )
}

export default AllBooksPage;
