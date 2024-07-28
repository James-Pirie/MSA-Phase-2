import { Image, Center, Space  } from '@mantine/core';
import { useResponsive } from '../hooks/useResponsive';


function Header() {
    const { isSmallScreen } = useResponsive();

    if(isSmallScreen){
        return null
    }

    return (
        <header className='header white'>
            <Space h={isSmallScreen ? "xs" : "lg"} />
            <Center>

                <Image
                radius="md"
                h={isSmallScreen ? 50 : 100} // Example: smaller height for small screens
                w="auto"
                fit="contain"
                src="src/assets/images/LogoColouredDarkTheme.png"
                />
            </Center>

            <Space h={isSmallScreen ? "sm" : "lg"} />
        </header>
    )
}

export default Header;
