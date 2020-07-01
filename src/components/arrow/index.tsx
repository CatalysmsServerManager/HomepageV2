import * as React from 'react';
import { Container, ArrowImg, ArrowDownImg, TextContainer } from './style';
import arrowSide from '../../images/arrow-side.png';
import arrowDown from '../../images/arrow-down.png';

export const Arrow: React.FC = () => (
  <Container>
    <ArrowImg alt="arrow image" src={arrowSide} />
    <ArrowDownImg alt="arrow down" src={arrowDown} />
    <TextContainer>Get started for free in each region!</TextContainer>
  </Container >
);
