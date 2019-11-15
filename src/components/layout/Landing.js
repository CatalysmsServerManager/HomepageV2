import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Landing(){
  return (
    <Container>
      this is the landing
    </Container>
  )
}
