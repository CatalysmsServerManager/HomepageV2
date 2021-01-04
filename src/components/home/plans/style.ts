import styled, { keyframes } from 'styled-components';
import { SCREEN } from 'lib/enums';

const rotateAnimation = keyframes`
  from {
    rotate: 0deg;
  }
  to{
    rotate: 360deg;
  }
`;

export const Container = styled.section`
  position: relative;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  h2.intro{
    font-size: 3rem;
  }
  p.intro{
    margin: 25px 0;
  }
  @media ${SCREEN.xl}{
    p.intro{
      margin-bottom: 45px;
    }
  }
  @media ${SCREEN.lg}{
    text-align: center;
    margin-bottom: 0;

    p.intro{
      margin: 25px auto 100px auto;
    }
  }
  @media ${SCREEN.sm}{
    p.intro{
      margin-bottom: 25px;
    }
  }
  @media ${SCREEN.xs}{
    p.intro{
    }
  }
`;

export const PlanContainer = styled.div`
  display: grid;
  padding: 0 150px;
  grid-template-columns: auto auto auto;
  grid-gap: 45px;

  @media ${SCREEN.xl}{
    padding: 0;
  }
  @media ${SCREEN.lg}{
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    grid-gap: 15px;
  }
  @media ${SCREEN.sm}{
    grid-template-columns: auto;
  }
`;

export const BackgroundIcon = styled.img`
  position: absolute;
  top: -150px;
  right: 0;
  width: 300px;
  opacity: 0.06;
  z-index: -1;

  animation: ${rotateAnimation} 20s linear infinite;

  @media ${SCREEN.lg}{
    width: 200px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 25px;

  button{
    margin: 0 10px;
    a{
      color: white;
    }

    &:first-child{
      margin-left: 0;
    }
  }

  @media ${SCREEN.lg}{
    justify-content: center;
  }
  @media ${SCREEN.xxs}{
    flex-direction: column;
    button{
    margin: 15px 0;
    }
  }

`;
