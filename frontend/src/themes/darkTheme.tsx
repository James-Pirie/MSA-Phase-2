import { MantineThemeOverride } from '@mantine/core';

const darkTheme: MantineThemeOverride = {
  colors: {
    mediumGrey: ['#25262B', '#25262B', '#25262B', '#25262B', '#25262B', '#25262B', '#25262B', '#25262B', '#25262B', '#25262B'],
    brandGreen: ['#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c'], 
    darkGrey: ['#1A1B1E', '#1A1B1E', '#1A1B1E', '#1A1B1E', '#1A1B1E', '#1A1B1E', '#1A1B1E', '#1A1B1E', '#1A1B1E', '#1A1B1E'],
    lightGrey: ['#C1C2C5', '#C1C2C5', '#C1C2C5', '#C1C2C5', '#C1C2C5', '#C1C2C5', '#C1C2C5', '#C1C2C5', '#C1C2C5', '#C1C2C5'],
  },  
  other: {
    primaryGradient: 'linear-gradient(to right, #25262B, #2F7049)', 
  },
};

export default darkTheme;
