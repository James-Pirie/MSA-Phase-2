import { MantineThemeOverride } from '@mantine/core';

const darkTheme: MantineThemeOverride = {
  colors: {
    mediumGrey: ['#dad9d4', '#dad9d4', '#dad9d4', '#dad9d4', '#dad9d4', '#dad9d4', '#dad9d4', '#dad9d4', '#dad9d4', '#dad9d4'],
    brandGreen: ['#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c', '#5cd48c'],  
    darkGrey: ['#e5e4e1', '#e5e4e1', '#e5e4e1', '#e5e4e1', '#e5e4e1', '#e5e4e1', '#e5e4e1', '#e5e4e1', '#e5e4e1', '#e5e4e1'],
    lightGrey: ['#3e3d3a', '#3e3d3a', '#3e3d3a', '#3e3d3a', '#3e3d3a', '#3e3d3a', '#3e3d3a', '#3e3d3a', '#3e3d3a', '#3e3d3a'],
  },  
  other: {
    primaryGradient: 'linear-gradient(to right, #db782c, #2F7049)', 
  },
};

export default darkTheme;
