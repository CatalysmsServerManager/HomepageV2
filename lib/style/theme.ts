import { DefaultTheme } from 'styled-components';

export const main = '#00cd6a';
const shade = '#EAF8F0';
const text = '#8d96A7';
export const title = '#3A4763';

const lightTheme: DefaultTheme = {
  dark: false,
  main: main,
  shade: shade,
  text: text,
  title: title
};

const darkTheme: DefaultTheme = {
  dark: true,
  main: main,
  shade: shade,
  text: text,
  title: title
};

export const chartColorPattern = [main, title, 'orange'];

export const theme = (mode: string): DefaultTheme => (mode === 'dark' ? darkTheme : lightTheme);
