import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  *::selection{
    color: white;
    background-color: ${({ theme }) => theme.main};
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
    color: ${({ theme }) => theme.title};
  }
  p,label,input,div,textarea{
    color: ${({ theme }) => theme.text};
  }
  a{
    text-decoration: none;
    cursor: pointer;
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
  button, button:active, button:focus button::-moz-focus-inner, a,
  input[type="reset"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner {
  border: none;
  outline: none;
  border-style: none;
  }
`

export function CosmosGlobalStyle({ children }){
  return (
    <Fragment>
      <Style/>
      { children }
    </Fragment>
  )
}
CosmosGlobalStyle.propTypes = {
  children: PropTypes.node
}

export default Style
