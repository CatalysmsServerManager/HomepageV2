import React from 'react'
import { Helmet } from 'react-helmet'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'
import Style from './constants/globalStyle'
import history from './constants/history'

export default function App(){
  return (
    <ThemeProvider>
      <Helmet>
        <title>title here</title>
        <link href="https://csmm.app/" rel="canonical"/>
        <meta content="csmm - a 7 days to die server manager" name="description"/>
      </Helmet>
      <Style/>
      <Routing history={history}/>
    </ThemeProvider>
  )
}
