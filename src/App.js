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
        <meta charset="UTF-8"/>
        <meta content="ie=edge" httpEquiv="X-UA-Compatible"/>
        <meta content="true" name="HandHeldFriendly"/>
        <meta content="index, follow" name="robots"/>

        <meta content="Massief" name="author"/>
        <meta content="massief"name="designer"/>

        <meta content="csmm" name="copyright"/>
        {/*deze nog invullen */}
        <meta content="csmm - a 7 days to die server manager" name="description"/>
        <meta content="" name="keywords"/>
        <title>csmm | THE 7 Days to Die Server manager you need.</title>

        <link href="https://csmm.app/" rel="canonical"/>
        <meta content="#28B766" name="theme-color"/>
      </Helmet>
      <Style/>
      <Routing history={history}/>
    </ThemeProvider>
  )
}
