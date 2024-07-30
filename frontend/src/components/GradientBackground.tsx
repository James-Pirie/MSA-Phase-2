import { Container, useMantineTheme } from '@mantine/core';
import RandomReview from './RandomReview'

const GradientBackground = () => {
  const theme = useMantineTheme();


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
