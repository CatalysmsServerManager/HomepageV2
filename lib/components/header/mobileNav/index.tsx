import * as React from 'react';
import { Container, Nav } from './style';
import { StatusCircle } from '../statusCircle';
import { Link } from 'react-router-dom';
import { useLockBodyScroll } from 'lib/hooks';

export const MobileNav: React.FC = () => {
  useLockBodyScroll();

  return (
    <Container>
      <Nav>
        <a href="https://status.csmm.app"> <StatusCircle coloredBackground /> Status</a>
        <a href="https://www.patreon.com/bePatron?c=1523282">Premium</a>
        <Link to="/terms-of-service">Terms of service</Link>
        <a href="https://docs.csmm.app/">Documentation</a>
        <a href="https://github.com/CatalysmsServerManager/7-days-to-die-server-manager">Source code</a>
      </Nav>
    </Container>
  );
};
