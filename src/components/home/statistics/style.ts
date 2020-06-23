import styled from 'styled-components';
import { SCREEN } from 'lib/enums';

export const Container = styled.section`
  margin: 150px 0;
  width: 80%;
  h2{
    font-size: 3rem;
    @media ${SCREEN.xs}{
    font-size: 2rem;
    text-align: center;
    }
    @media ${SCREEN.xxs}{
      font-size: 1.5rem;
    }
  }
  @media ${SCREEN.lg}{
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 45px;

  .players {
    display: inline;
    color: ${({ theme }): string => theme.title};
    font-weight: 700;
    border-bottom: 3px solid ${({ theme }): string => theme.title}};
  }
  .servers {
    display: inline;
    color: ${({ theme }): string => theme.main};
    font-weight: 700;
    border-bottom: 3px solid ${({ theme }): string => theme.main}};
  }
`;
