import { useMediaQuery } from '@mantine/hooks';

export function useResponsive() {
    const isSmallScreen = useMediaQuery('(max-width: 760px)');
    return { isSmallScreen };
}
