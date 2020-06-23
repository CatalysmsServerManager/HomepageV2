import * as React from 'react';
import { Container, TextContainer } from './style';
import { Chart } from '../../chart';

export const Statistics: React.FC = () => (
  <Container id="statistics">
    <h2>Statistics.</h2>
    <TextContainer>Not convinced of CSMM&apos;s capabilities? Below are the amount of <div className="servers">servers</div> and <div className="players">players</div> of the last month that use CSMM software.</TextContainer>
    <Chart />
  </Container>
);
