import styled from 'styled-components';
import { SCREEN } from 'lib/enums';

export const Container = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  height: 100%;
  margin: 50 0;

  @media ${SCREEN.lg}{
    margin: 100px 0;
    grid-template-columns: auto auto;
    grid-gap: 25px;
  }
  @media ${SCREEN.sm}{
    grid-template-columns: auto;
  }
`;

export const Block = styled.div`
  min-width: 25%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img{
    width: 45px;
    height: auto;
  }
  h3{
    font-size: 1.1rem;
    margin: 30px 0;
    font-weight: 500;
  }
  p{
    font-size: 1rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  @media ${SCREEN.sm}{
    height: 200px;
  }

  @media ${SCREEN.xxs}{
    height: 250px;
  }
`;
