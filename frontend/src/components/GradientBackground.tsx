import { Container  } from '@mantine/core';
import RandomReview from './RandomReview'
import '../styles/colours.css'

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
