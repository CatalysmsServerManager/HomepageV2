import styled from 'styled-components';
import { SCREEN } from 'lib/enums';

export const Container = styled.section`
  min-height: 100vh;
  padding-bottom: 100px;
`;

export const Landing = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 5rem;
    color: ${({ theme }): string => theme.main};
    @media ${SCREEN.sm}{
      font-size: 3rem;
      text-align: center;
    }
  }
  p{
    margin-bottom: 40px;
    font-weight: 700;
    color: ${({ theme }): string => theme.title};
    font-size: 120%;
  }
`;

export const ChaptersContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media ${SCREEN.sm}{
    width: 90%;
  }
  @media ${SCREEN.xs}{
    width: 95%;
  }
`;
export const Chapter = styled.div`
  margin: 100px 25px;
  h2{
    font-size: 2.5rem;
    color: ${({ theme }): string => theme.main};
  }
  p{
    margin-bottom: 15px;
    margin-top: 15px;
  }
  @media ${SCREEN.md}{
    margin: 50px 25px;
  }
  @media ${SCREEN.sm}{
    margin: 25px 15px;
  }
`;

export const SubChapter = styled.div`
  margin-top: 50px;
  li{
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
