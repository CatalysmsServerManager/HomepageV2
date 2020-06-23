import * as React from 'react';
import { Container, Dot, Inner } from './style';

export const Window: React.FC = ({ children }) => (
  <Container>
    <Dot className="first" />
    <Dot className="second" />
    <Dot className="third" />
    <Inner>
      {children}
    </Inner>
  </Container>
);
