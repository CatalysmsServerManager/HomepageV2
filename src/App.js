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
        <title>csmm | THE 7 Days to Die Server manager you need.</title>
        <meta charset="UTF-8"/>
        <meta content="ie=edge" httpEquiv="X-UA-Compatible"/>
        <meta name="robots" content="index, follow">

        <meta content="Massief" name="author"/>
        <meta content="massief"name="designer"/>

        <meta content="csmm" name="copyright"/>
        <meta content="csmm - a 7 days to die server manager" name="description"/>

        <link href="https://csmm.app/" rel="canonical"/>
      </Helmet>
      <Style/>
      <Routing history={history}/>
    </ThemeProvider>
  )
}
