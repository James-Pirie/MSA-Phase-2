import { useEffect } from 'react';
import SubHeader from "../components/SubHeader";
import BookPageDetails from "../components/BookPageDetails";

function BookPage() {
    useEffect(() => {
        const hasReloaded = sessionStorage.getItem('hasReloaded');
        if (!hasReloaded) {
            sessionStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    }, []);

    return (
        <>
            <SubHeader />
            <BookPageDetails />
        </>
    );
}

export default BookPage;
