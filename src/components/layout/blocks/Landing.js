import React from 'react'
import styled from 'styled-components'

import iconBlack from '../../../images/icon-black.svg'
import Window from '../Window'

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 270px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.main};
    font-weight: 500;
  }
  p{
    text-align: left;
    width: 60%;
  }

  .icon{
    position: absolute;
    width: 500px;
    height: 500px;
    opacity: 0.04;
    z-index: -1;
  }
`

export default function Landing(){
  return (
    <Container>
      <TextContainer>
        <h1>The best 7 days to Die server manager.</h1>
        <p>CSMM is a web based server manager for 7 Days to die. Bring your server(s) to the next level with CSMMs advanced features! Join hundreds of other servers in a new generation of server management.</p>
        <img alt="csmm - 7 Days to Die Server Monitor icon" className="icon" src={iconBlack} title="7 Days to Die Server Monitor icon"/>
      </TextContainer>
      <Window/>
    </Container>
  )
}
