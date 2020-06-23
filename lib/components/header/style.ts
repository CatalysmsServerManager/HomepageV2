import styled from 'styled-components';
import { lighten } from 'polished';
import { SCREEN } from 'lib/enums';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 18px 11px -17px rgba(0,0,0,0.16);
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.4rem;
  font-weight: 400;
  width: 50%;
  padding-left: 150px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      margin-left: 24px;
    }
  }

  @media ${SCREEN.xl}{
    padding-left: 150px;
    width: 30%;
  }
  @media ${SCREEN.lg}{
    padding-left: 100px;
    width: 25%;
    font-size: 1.2rem;
    img{
      width:25px;
      height: 25px;
      margin-right: 10px;
    }
  }
  @media ${SCREEN.md}{
    padding-left: 100px;
    width: 50%;
  }
  @media ${SCREEN.sm}{
    padding-left: 50px;
  }
  @media ${SCREEN.xxs}{
    padding-left: 25px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  padding-right: 50px;
  a, .link{
    margin: 0 45px;

    .flex{
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }): string => theme.title};
      transition: color .1s ease-in-out;

      &:hover {
        color: ${({ theme }): string => theme.title}AA;
      }
    }
  }

  button {
    a{
      color: white;
      &:hover{
        color: white;
      }
    }
  }
  @media ${SCREEN.md}{ display: none;}
`;

export const OnPageLink = styled.div`
  color: ${({ theme }): string => theme.title};
  font-weight: 500;
  transition: color .1s ease-in-out;
  cursor: pointer;

  &:hover{
    color: ${({ theme }): string => lighten(0.2, theme.title)};
  }
`;
