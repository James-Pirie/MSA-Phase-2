import './Header.moduel.css';
import '../styles/colours.css'
import { Button, Flex } from '@mantine/core';
import '../styles/colours.css'




function SubHeader() {
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
            <Button variant="subtle" color="var(--color-primary)" size="xl" radius="xs"   styles={{
                label: {fontSize: '2vh'}}}>Books</Button>
            <Button variant="subtle" color="var(--color-primary)" size="xl" radius="xs"   styles={{
                label: {fontSize: '2vh'}}}>Authors</Button>
            <Button variant="subtle" color="var(--color-primary)" size="xl" radius="xs"   styles={{
                label: {fontSize: '2vh'}}}>Reviews</Button>
            <Button variant="subtle" color="var(--color-primary)" size="xl" radius="xs"   styles={{
                label: {fontSize: '2vh'}}}>Settings</Button>
        </Flex>
                

        </header>
    )
}

export default SubHeader;
