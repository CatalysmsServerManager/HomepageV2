import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 600px;
  height: 450px;
  background-color: ${({ theme }) => theme.shade};
  border-radius: 10px;
  padding: 0 25px calc(25px + 15px) 25px;
`
const Dot = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
  width: 9px;
  height: 9px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 50%;
  transition: .2s background-color ease-in-out;

  &:hover{
    background-color: ${({ theme }) => theme.title};
  }
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`

export default function Window(){
  return (
    <Container>
      <Dot/>
      <Dot/>
      <Dot/>
      <Inner/>
    </Container>
  )
}
