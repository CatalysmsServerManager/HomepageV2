import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Routing } from './routing';
import { ThemeProvider } from 'lib/hooks';
import { GlobalStyle, theme } from 'lib/style';
import 'c3/c3.css';
import favicon from './images/csmm-icon.png';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <base href="/" />
      <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
      <meta content="true" name="HandHeldFriendly" />
      <meta content="index, follow" name="robots" />

      <meta content="Massief.biz" name="author" />
      <meta content="Massief.biz" name="designer" />
      <meta content="csmm" name="copyright" />

      <meta content="CSMM is a web based server manager for 7 Days to die. Bring your server(s) to the next level with CSMMs advanced features! Join hundreds of other servers in a new generation of server management." name="description" />
      <meta content="7 Days to Die, server manager, web, cloud, open source, csmm, Catalysm, Massief, 7 Days to Die server manager, monitor" name="keywords" />
      <title>CSMM | THE 7 Days to Die Server manager you need.</title>
      <link href="https://csmm.app/" rel="canonical" />
      <meta content="#28B766" name="theme-color" />
      <link href={favicon} rel="icon" type="image/png" />
    </Helmet>
    <GlobalStyle />
    <Routing />
  </ThemeProvider>
);
