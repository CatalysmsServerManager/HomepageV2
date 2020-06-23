import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import { Container, CopyrightContainer, IconNav, LinkNav, Massief } from './style';
import { Link } from 'react-router-dom';

import { Discord, Mail, Github } from 'lib/icons';
import massief from './massief.svg';

export const Footer: React.FC = () => (
  <Container>
    <IconNav>
      <a href="https://discordapp.com/invite/%45wy%44d%4E%41" rel="noreferrer noopener" target="_blank">
        <Discord pointer scale={1} />
      </a>
      <a href="https://github.com/CatalysmsServerManager/7-days-to-die-server-manager" rel="noreferrer noopener" target="_blank">
        <Github pointer scale={1.2} />
      </a>
      <a href="mailto:info@csmm.app" rel="noreferrer noopener" target="_blank">
        <Mail pointer scale={1.2} />
        <ReactTooltip effect="solid" />
      </a>
    </IconNav>
    <CopyrightContainer>
      <p>Copyright <strong>CSMM</strong> © {new Date().getFullYear()} </p> <div className="divider">&nbsp;|&nbsp;</div><p>All rights reserved</p>
    </CopyrightContainer>
    <LinkNav>
      <Link to="/terms-of-service">Terms of service</Link>
      <a href="https://docs.csmm.app/" rel="noreferrer noopener" target="_blank">Documentation</a>
    </LinkNav>
    <Massief href="https://massief.biz" rel="noreferrer noopener" target="_blank"><img alt="Website Creator Massief" src={massief} /></Massief>
  </Container>
);
