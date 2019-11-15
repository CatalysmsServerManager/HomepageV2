import React, { Fragment } from 'react'
import styled from 'styled-components'

import Header from '../layout/Header'
import Landing from '../layout/Landing'
import Footer from '../layout/Footer'

const Body = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default function Home(){
  return (
    <Fragment>
      <Header/>
      <Body>
        <Landing/>
      </Body>
      <Footer/>
    </Fragment>
  )
}
