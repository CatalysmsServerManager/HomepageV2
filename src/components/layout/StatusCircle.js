import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  width: 5px;
  height: 5px;
  border: 3px solid ${({ color }) => color};
`

export default function StatusCircle(){
  // 3 states, active, issues, down
  function showState(){
    // fetch here
    const state = 'active'
    switch (state){
      case 'active':
        return <Circle color="#28B766"/>
      case 'issues':
        return <Circle color="#FF8C00"/>
      case 'down':
        return <Circle color="#DC143C"/>
    }
  }
  return (
    showState()
  )
}