import * as React from 'react';
import styled from 'styled-components';
import { SCREEN } from 'lib/enums';
import { Info, Landing, Plans, Statistics } from '../components/home';

import { Header, Footer, CookieConsent } from 'lib/components';

const Body = styled.div`
  width: 80%;
  margin: 0 auto;

  @media ${SCREEN.xs}{
    width: 90%;
  }
`;

export const Home: React.FC = () => (
  <React.Fragment>
    <Header />
    <Landing />
    <Body>
      <Info />
      <Plans />
      <Statistics />
    </Body>
    <Footer />
    <CookieConsent />
  </React.Fragment>
);
