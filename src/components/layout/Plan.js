import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 350px;
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.shade};
  border-radius: 20px;
`
const Name = styled.div``
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  background-color: ${({ theme }) => theme.price};

  .symbol{
    height: 100%;
    margin-top: -10px;
  }
  p{
    font-size: 1.4rem;
  }

`

export default function Plan({ name, price, servers, commands, jobs, notifications, teleports, location, inventory, analytics }){
  return (
    <Container>
      <Name>{name}</Name>
      <Price>
        <p>
          <span className="symbol">€</span>
          <span className="price">{price}</span>
          <span> / month</span>
        </p>
      </Price>
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