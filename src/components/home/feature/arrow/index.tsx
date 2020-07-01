import * as React from 'react';
import { Container, ArrowImg, TextContainer } from './style';

import arrow from '../../../../images/arrow-side.png';

export const Arrow: React.FC = () => (
  <Container>
    <ArrowImg alt="arrow png" src={arrow} />
    <TextContainer>Vote for new features, so we know what the community wants! <a href="https://feathub.com/CatalysmsServerManager/7-days-to-die-server-manager" rel="noopener noreferrer" target="_blank">link</a></TextContainer>
  </Container>
);
