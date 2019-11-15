import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import discord from '../../images/discord.svg'
import mail from '../../images/mail.svg'

const Container = styled.footer`
  height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  color: ${({ theme }) => theme.text};
`
const IconNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const LinkNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    margin-left: 10px;
    margin-right: 10px;
  }
`

export default function Footer(){
  return (
    <Container>
      <IconNav>
        <img alt="dit nog aanpassen" src={discord}/>
        <img alt="dit nog aanpassen" src={mail}/>
      </IconNav>
      <div>
        <p>Copyright csmm © {Date.now().getFullYear()} | All rights reserved</p>
      </div>
      <LinkNav>
        <Link to="/terms">Terms of service</Link>
        <a href="https://docs.csmm.app/" rel="noopener noreferrer" target="_blank">Documentation</a>
        <a href="https://github.com/CatalysmsServerManager/7-days-to-die-server-manager">Source code</a>
      </LinkNav>
    </Container>
  )
}
