// dependencies and hooks
import { Image, Center, Space, useMantineTheme  } from '@mantine/core';
import { useResponsive } from '../hooks/useResponsive';


function Header() {
    const theme = useMantineTheme(); // use themese
    const { isSmallScreen } = useResponsive();

    // don't show if on mobile
    if(isSmallScreen){
        return null
    }

    return (
        <header className='header' style={{backgroundColor: theme.colors.mediumGrey[0]}}>
            <Space h={isSmallScreen ? "xs" : "lg"} />
            <Center>

                <Image
                    radius="0"
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
