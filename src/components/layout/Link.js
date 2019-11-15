import React from 'react'
import PropTypes from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'

const StyledLink = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.title};
  font-weight: 500;
  transition: color .1s ease-in-out;

  &:hover{
    color: ${({ theme }) => lighten(0.2, theme.title)};
  }
`
export default function Link({ children, to }){
  return (
    <StyledLink to={to}>{children}</StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to:       PropTypes.string.isRequired
}
