import * as React from 'react';
import { planData } from './planData';
import { Container, PlanContainer, BackgroundIcon } from './style';
import { Plan } from './plan';
import CsmmIcon from '../../../images/csmm-icon.svg';

export const Plans: React.FC = () => (
  <Container id="plans">
    <BackgroundIcon alt="CSMM Icon" src={CsmmIcon} />
    <h2 className="intro">Plans.</h2>
    <p className="intro">
      I use the money for rent, electricity, water and basic living costs. Instead of getting a part time job, I can spend my time working on my applications.
    </p>
    <PlanContainer>
      {
        planData.map((plan) => <Plan key={plan.name} {...plan} />)
      }
    </PlanContainer>
  </Container>
);
