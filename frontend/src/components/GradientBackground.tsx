import { Container  } from '@mantine/core';
import RandomReview from './RandomReview'

const GradientBackground = () => {

  return (
    <Container
      style={{
        minWidth: '100vw',
        background: 'linear-gradient(to right, var(--colour-primary-gradient), var(--colour-secondary-gradient))', 
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
