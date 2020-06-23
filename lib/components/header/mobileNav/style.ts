import styled from 'styled-components';
import { darken } from 'polished';
import { SCREEN } from 'lib/enums';

export const Container = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }): string => theme.main};
  z-index: 1;

  @media ${SCREEN.md}{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transition: height .3s ease-out;
    overflow: hidden;
  }
`;

export const Nav = styled.nav`
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;
 a{
   margin-bottom: 10px;
   margin-top: 10px;
   color: white;
   font-size: 1.3rem;

   &:hover{
     color: ${darken(0.05, '#FFFFFF')};
   }
 }
`;
