import * as React from 'react';
import { ButtonContainer, Container, Details, Name, Price, Popular } from './style';
import { Button } from 'lib/components';
import { IPlan } from '../planData';
import { Csmm } from 'lib/icons';

export const Plan: React.FC<IPlan> = ({ analytics, name, price, servers, commands, jobs, notifications, teleports, location, inventory, isPopular = false }) => (
  <Container isPopular={isPopular}>
    <Name>
      <Csmm fill={isPopular ? '#00cd6a' : '#3A4763'} />
      <h2>{name}</h2>
    </Name>
    <Price isPopular={isPopular}>
      {isPopular ? <Popular>Most Popular!</Popular> : ''}
      <div className="symbol">
        <span>€</span>
      </div>
      <div className="price">{price}</div>
      <p className="month"> / month</p>
    </Price>
    <Details>
      <p>max servers: {servers}</p>
      <p>max custom commands: {commands}</p>
      <p>max cron jobs: {jobs}</p>
      <p>max custom notifications: {notifications}</p>
      <p>max teleport locations: {teleports}</p>
      <p>location tracking data kept {location}</p>
      <p>inventory tracking data kept for {inventory}</p>
      <p>Analytics data kept for {analytics}</p>
    </Details>
    <ButtonContainer>
      <Button alternative={!isPopular}>
        <a href="https://www.patreon.com/bePatron?c=1523282" rel="noreferrer noopener" target="_blank">Try it now!</a>
      </Button>
    </ButtonContainer>
  </Container >
);
