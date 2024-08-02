// dependencies and components
import { Container, useMantineTheme } from '@mantine/core';
import RandomReview from './RandomReview'

const GradientBackground = () => {
  const theme = useMantineTheme(); // for theme change

  return (
    <Container
      style={{
        minWidth: '100vw',
        background: theme.other.primaryGradient, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <RandomReview/>
    </Container>
  )
}  

  export default GradientBackground;
