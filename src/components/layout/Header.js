import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import Button from './Button'
import StatusCircle from './StatusCircle'
import icon from '../../images/icon.svg'

const Container = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 18px 11px -17px rgba(0,0,0,0.16);
`
const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.4rem;
  font-weight: 400;
  width: 50%;
  padding-left: 150px;
  img{
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  padding-right: 150px;

  a{
    margin-left: 45px;
    margin-right: 45px;
  }
  button {
    margin-left: 45px;
    a{
      color: white;
    }
  }
`

export default function Header(){
  return (
    <Container>
      <Name><img alt="change me later" src={icon}/><Link to="/"><h2>csmm</h2></Link></Name>
      <Nav>
        <Link isExternal to="https://status.csmm.app"> <StatusCircle/> Status</Link>
        <Link to="/#pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Button><Link isExternal to="https://www.patreon.com/bePatron?c=1523282">Premium</Link></Button>
      </Nav>
    </Container>
  )
}
