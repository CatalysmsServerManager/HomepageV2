import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after{
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: url('icon-black.svg');
    opacity: 0.1;
  }
`

const TextContainer = styled.div`
  width: 50%;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.main};
  }
  p{
    text-align: center;
    width: 50%;
  }
`
const Window = styled.div`
  width: 675px;
  height: 575px;
  background-color: ${({ theme }) => theme.shade};
  border-radius: 10px;
  padding: calc(25px - 15px) 25px calc(25px + 15px ) 25px;
  .circles {
    div{
      margin-left: 5px;
      margin-right: 5px;
      display: inline-block;
      width: 9px;
      height: 9px;
      background-color: ${({ theme }) => theme.main};
      border-radius: 50%;
    }
 }
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`

export default function Landing(){
  return (
    <Container>
      <TextContainer>
        <h1>The best 7 days to Die server manager.</h1>
        <p>CSMM gives admins unprecedent control over 7 Days to Die and insight into users 7 days to Die servers. because csmm for 7 days to Die is highly customizable. You can make your server.</p>
      </TextContainer>
      <Window>
        <div className="circles"><div/><div/><div/></div>
        <Inner>

        </Inner>
      </Window>
    </Container>
  )
}
