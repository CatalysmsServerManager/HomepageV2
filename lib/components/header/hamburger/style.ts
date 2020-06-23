import styled from 'styled-components';
import { SCREEN } from 'lib/enums';

export const Container = styled.div`
  position: relative;
  display: none;
  cursor: pointer;
  z-index: 2;

  @media ${SCREEN.md}{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 100px;
    width: 50%;
    svg{
      width: 25px;
      height: 25px;
      g{
        transition: fill .3s ease-in-out;
      }
    }
  }
  @media ${SCREEN.xxs}{
    padding-right: 50px;
  }
`;
