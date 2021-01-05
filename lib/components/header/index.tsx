import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Name, Nav, OnPageLink } from './style';
import { MobileNav } from './mobileNav';
import { Hamburger } from './hamburger';
import { Button } from 'lib/components';
import { StatusCircle } from './statusCircle';
import { useWindowSize } from 'lib/hooks';
import { Csmm } from 'lib/icons';

export const Header: React.FC = () => {
  const [isOpen, toggleOpen] = React.useState(false);
  const size = useWindowSize();

  function scrollToPlans(e: React.MouseEvent<HTMLDivElement>): void {
    e.preventDefault();
    window.scrollTo({ top: document.getElementById('plans').getBoundingClientRect().top, behavior: 'smooth' });
  }
  function scrollToStatistics(e: React.MouseEvent<HTMLDivElement>): void {
    e.preventDefault();
    window.scrollTo({ top: document.getElementById('statistics').getBoundingClientRect().top, behavior: 'smooth' });
  }

  return (
    <Container>
      <Name>
        <Link to="/">
          <Csmm scale={2} />
          <h2>CSMM</h2>
        </Link>
      </Name>
      <Nav>
        <a href="https://status.csmm.app" rel="noreferrer noopener" target="_blank">
          <div className="flex">
            <StatusCircle />
            Status
          </div>
        </a>
        <OnPageLink className="link" onClick={scrollToPlans}>Plans</OnPageLink>
        <OnPageLink className="link" onClick={scrollToStatistics}>Statistics</OnPageLink>
        <a href="https://docs.csmm.app" rel="noreferrer noopener" target="_blank">Docs</a>
        <a href="https://catalysm.net/discord" rel="noreferrer noopener" target="_blank">Support</a>
        <a href="https://www.patreon.com/bePatron?c=1523282" rel="noreferrer noopener" target="_blank"><Button >Premium</Button></a>
      </Nav>
      <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
      {isOpen ? <MobileNav /> : null}
    </Container>
  );
};
