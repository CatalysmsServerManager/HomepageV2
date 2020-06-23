import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { SCREEN } from 'lib/enums';

export const GlobalStyle = createGlobalStyle`
  *::selection{
    color: white;
    background-color: ${({ theme }): string => theme.main};
  }
  :root{
    font-size: 16px;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    transition: 0.4s background-color;
    overflow-x: hidden;
  }
  h1,h2,h3,h4,h5,h6,p,a,button,label,input,div,textarea{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    transition: 0.4s color;
  }
  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }): string => theme.title};
  }
  p,label,input,div,textarea{
    color: ${({ theme }): string => theme.text};
  }
  a{
    text-decoration: none;
    color: ${({ theme }): string => theme.title};
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s color ease-in-out;

    &:hover{
      color: ${({ theme }): string => theme.title}AA;
    }
  }

  p{
    font-size: 1rem;
  }
  input{
     display: block;
  }
  button{
    cursor: pointer;
  }
  li::marker{
    color: ${({ theme }): string => theme.main};
  }
  button, button:active, button:hover, button:focus button::-moz-focus-inner, a,
  input[type="reset"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner {
  border: none;
  outline: none;
  border-style: none;
  }

  /* c3-related */
  .c3-line {
    stroke-width: 3px;
  }
  .c3-axis-y-label, .c3-axis-x-label, .c3-axis-y2-label {
    font-size: 120%;
  }
  @media ${SCREEN.sm} {
    .c3-axis-x .tick {
      display: none;
    }
    .c3-legend-item {
      display: none;
    }
  }
  @media ${SCREEN.xs}{
    .c3-axis-y .tick, .c3-axis-y2 .tick {
      display: none;
    }
  }
  /* cookie consent */
  .CookieConsent {
    div {
      color: white;
      font-weight: 500;
    }
    a{
      color: white;
      text-decoration: underline;
    }
    #rcc-confirm-button {
      font-weight: 600;
    }
  }
`;

export interface IProps {
  children: React.ReactNode;
}

export const StorybookGlobalStyle: React.FC<IProps> = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);
