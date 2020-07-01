import styled from 'styled-components';
import { SCREEN } from 'lib/enums';

export const Container = styled.footer`
  position: relative;
  width: 100%;
  height: 125px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: ${({ theme }): string => theme.text};
  background-color: #fafafa;

  @media ${SCREEN.md}{
    padding: 25px 0;
    grid-template-columns: auto;
  }
`;
export const IconNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    margin: 0 15px;
  }

  @media ${SCREEN.md}{
    margin-bottom: 10px;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  p{
    display: block;
  }
  @media ${SCREEN.lg}{
    flex-direction: column;
    .divider{
      display: none;
    }
  }
`;

export const LinkNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    margin-left: 10px;
    margin-right: 10px;
  }
  @media ${SCREEN.md}{
    display: none;
  }
`;

export const Massief = styled.a`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 20px;
    height: auto;
  }
`;
