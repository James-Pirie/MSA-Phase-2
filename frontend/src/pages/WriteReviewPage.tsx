// components
import SubHeader from "../components/SubHeader";
import WriteReview from "../components/WriteReview";
import { useMantineTheme } from '@mantine/core';


function WriteReviewPage() {
    const theme = useMantineTheme();

    return (
        <div style={{ backgroundColor: theme.colors.mediumGrey[0], minHeight: '100vh' }}>
            <SubHeader/>
            <WriteReview/>
        </div>
    )
}

export default WriteReviewPage;
