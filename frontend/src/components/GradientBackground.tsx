import { Container  } from '@mantine/core';
import '../styles/colours.css'

const GradientBackground = () => {
    return (
      <Container
        style={{
          minWidth: '100vw',
          background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: '#fff' }}>Hello, Mantine!</h1>
      </Container>
    )
  }  

  export default GradientBackground;
