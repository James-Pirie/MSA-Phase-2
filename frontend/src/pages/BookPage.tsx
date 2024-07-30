import { useEffect } from 'react';
import SubHeader from "../components/SubHeader";
import BookPageDetails from "../components/BookPageDetails";
import { useMantineTheme } from '@mantine/core';

function BookPage() {
    const theme = useMantineTheme();

    useEffect(() => {
        const hasReloaded = sessionStorage.getItem('hasReloaded');
        if (!hasReloaded) {
            sessionStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    }, []);

    return (
        <div style={{ backgroundColor: theme.colors.darkGrey[0], minHeight: '100vh' }}>
            <SubHeader />
            <BookPageDetails />
        </div>
    );
}

export default BookPage;
