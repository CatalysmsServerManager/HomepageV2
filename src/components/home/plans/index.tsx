import * as React from 'react';
import { planData } from './planData';
import { Container, PlanContainer, BackgroundIcon, ButtonContainer } from './style';
import { Plan } from './plan';
import CsmmIcon from '../../../images/csmm-icon.svg';
import { Button } from 'lib/components';

export const Plans: React.FC = () => (
  <Container id="plans">
    <BackgroundIcon alt="CSMM Icon" src={CsmmIcon} />
    <h2 className="intro">Plans.</h2>
    <p className="intro">
      Installing CSMM on your own server can be hard. However, for a small fee you can make use of CSMM that is hosted and managed by the dev team.

      <ButtonContainer>
        <Button><a href="https://eu.csmm.app" rel="noreferrer noopener" target="_blank">EU Region</a></Button>
        <Button><a href="https://au.csmm.app" rel="noreferrer noopener" target="_blank">AU Region</a></Button>
        <Button><a href="https://us.csmm.app" rel="noreferrer noopener" target="_blank">US Region</a></Button>
      </ButtonContainer>
    </p>
    <PlanContainer>
      {
        planData.map((plan) => <Plan key={plan.name} {...plan} />)
      }
    </PlanContainer>
  </Container>
);
