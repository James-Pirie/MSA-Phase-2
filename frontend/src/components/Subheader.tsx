import './Header.moduel.css';
import '../styles/colours.css'
import { Button, Flex } from '@mantine/core';



function Subheader() {
    return (
        <header className='white subheader light-grey'>
        <Flex
        mih={50}
        gap="10%"  // 5% of the screen size
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        >
            <Button variant="subtle" color="#5cd48c" size="xl" radius="xs"   styles={{
                label: {fontSize: '2vh'}}}>Books</Button>
            <Button variant="subtle" color="#5cd48c" size="xl" radius="xs"   styles={{
                label: {fontSize: '2vh'}}}>Authors</Button>
            <Button variant="subtle" color="#5cd48c" size="xl" radius="xs"   styles={{
                label: {fontSize: '2vh'}}}>Review</Button>
            <Button variant="subtle" color="#5cd48c" size="xl" radius="xs"   styles={{
                label: {fontSize: '2vh'}}}>Log In</Button>
        </Flex>
                

        </header>
    )
}

export default Subheader;
