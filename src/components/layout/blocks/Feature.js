import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 800px;
  padding: 25px;
  background-color: ${({ theme }) => theme.shade};
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
`

export default function Feature(){
  return (
    <Container>
      <Inner>something</Inner>
    </Container>   
  )
}
