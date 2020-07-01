import styled from 'styled-components';
import { SCREEN } from 'lib/enums';

export const Container = styled.div`
  position: absolute;
  top: -150px;
  left : 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${SCREEN.sm}{
    top: -100px;
  }
`;
export const ArrowImg = styled.img`
  width: 150px;
  height: auto;
  transform: scaleY(-1);

`;

export const TextContainer = styled.div`
  text-align: center;
  font-family: 'Nanum Pen Script', cursive;
  color: ${({ theme }): string => theme.main};
  font-size: 2rem;
  margin: -60px 0 0 30px;

  a{
    font-family: 'Nanum Pen Script', cursive;
    color: ${({ theme }): string => theme.main};
    font-size: 2rem;
    text-decoration: underline;
  }

`;
