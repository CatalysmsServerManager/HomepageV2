import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import icon from '../../images/icon.svg'
import Button from '../layout/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 400px;
  border: 5px solid ${({ theme }) => theme.shade};
  border-radius: 20px;
`
const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px;
  padding-top: 25px;
  img {
    width: 21px;
    height: 21px;
    margin-right: 15px;
  }
  h2{
    font-weight: 600;
  }
`
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  background-color: ${({ theme }) => theme.shade};

  .price{
    position: relative;
    color: ${({ theme }) => theme.main};
    font-size: 5rem;
    font-weight: 600;
    .symbol{
      left: -24px;
      position: absolute;
      color: ${({ theme }) => theme.main};
      font-size: 2rem;
      font-weight: 400;
    }
  }
  p{
    font-size: 1.4rem;
    width: 100%;
    text-align: center;
  }
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 215px);
  width: 100%;

  p{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  button{
    margin-top: 15px;
    font-size: 110%;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;

  button{
    font-size: 125%;
  }
`

export default function Plan({ name, price, servers, commands, jobs, notifications, teleports, location, inventory, analytics }){
  return (
    <Container>
      <Name><img alt="later nog aanpassen" src={icon}/><h2>{name}</h2></Name>
      <Price>
        <p>
          <span className="price">
            <span className="symbol">€</span>
            {price}</span>
          <span> / month</span>
        </p>
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
        <Button alt>Try it now</Button>
      </ButtonContainer>
    </Container>
  )
}

Plan.propTypes = {
  analytics:     PropTypes.string.isRequired,
  commands:      PropTypes.string.isRequired,
  inventory:     PropTypes.string.isRequired,
  jobs:          PropTypes.string.isRequired,
  location:      PropTypes.string.isRequired,
  name:          PropTypes.string.isRequired,
  notifications: PropTypes.string.isRequired,
  price:         PropTypes.string.isRequired,
  servers:       PropTypes.string.isRequired,
  teleports:     PropTypes.string.isRequired
}