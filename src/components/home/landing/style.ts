import styled from 'styled-components';
import { SCREEN } from 'lib/enums';

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${SCREEN.xl}{
    width: 80%;
  }
  @media ${SCREEN.lg}{
    flex-direction: column;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;

  h1 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: ${({ theme }): string => theme.main};
    font-weight: 500;
    strong {
    text-decoration: underline ${({ theme }): string => theme.main} 5px;
    }
  }
  p{
    text-align: left;
    width: 60%;
  }
  @media ${SCREEN.lg}{
    height: calc(100vh - 100px);
    width: 100%;
    align-items: center;
    text-align: center;

    h1{
      font-size: 2rem;
    }
    p{
      font-size: 1.2rem;
      width: 80%;
      text-align: center;
    }
  }

  @media ${SCREEN.xs}{
    h1{font-size: 1.5rem;}
    p{ font-size: 1rem;}
  }
`;

export const BackgroundIcon = styled.img`
  position: absolute;
  width: 800px;
  opacity: 0.06;
  z-index: -1;

  @media ${SCREEN.xl}{
    width: 600px;
  }
  @media ${SCREEN.lg}{
    width: 600px;
  }
  @media ${SCREEN.sm}{
    width: 400px;
  }
  @media ${SCREEN.xs}{
    width: 300px;
  }
  @media ${SCREEN.xxs}{
    width: 250px;
  }
`;

export const Block = styled.div`
  max-height: 100%;

  img{
    height: 100%;
  }
`;
