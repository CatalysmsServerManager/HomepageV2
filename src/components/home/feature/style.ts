import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SCREEN } from 'lib/enums';

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 800px;
  margin-top: 200px;
  margin-bottom: 200px;
  padding: 15px 0 0 0;
  background-color: ${({ theme }): string => theme.shade};
  border-radius: 10px;
  h2 {
    font-size: 3rem;
  }

  @media ${SCREEN.md}{
    height: 1000px;
  }

  @media ${SCREEN.sm}{
    height: 1100px;
  }

  @media ${SCREEN.xs}{
    width: 100%;
    height: 1150px;
  }

  @media ${SCREEN.xxs}{
    display: none;
  }
`;

export const Circle = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }): string => theme.main};
  border-radius: 50%;
  margin: 0 10px;
  transition: background-color .3s ease-in-out;
  &:first-child{
    margin-left: 30px;
  }

  &:hover{
    &:first-child{
    background-color: ${({ theme }): string => theme.title};
    }
  }
  @media ${SCREEN.md}{
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }
`;

export const Inner = styled.div`
  width: calc(100% - 50px);
  margin-top: 5px;
  height: calc(100% - 50px);
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const DesktopContentContainer = styled.div`
  width: 80%;
  height: 80%;
  @media ${SCREEN.lg}{
    display: none;
  }
`;

export const MobileContentContainer = styled.div`
  display: none;
  width: 80%;
  height: 80%;
  @media ${SCREEN.lg}{
    display: block;
  }
  @media ${SCREEN.sm}{
    height: 90%;
  }
  @media ${SCREEN.xxs}{
    width: 90%;
    height: 95%;
  }
`;

export const StyledCarousel = styled(Carousel)`
  margin-top: 50px;
  background-color: white;
  height: 500px;

  .control-dots{
    margin-top: 50px;
    .dot{
      width: 12px;
      height: 12px;
      border: none;
      box-shadow: none;
      background-color: ${({ theme }): string => theme.main};
      opacity: 1;
      &.selected{
        background-color: ${({ theme }): string => theme.title};
      }
    }
  }
`;

export const Block = styled.div`
  height: 500px;
  grid-gap: 30px;
  width: 100%;
  padding-bottom: 100px;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto;

  @media ${SCREEN.lg}{
    margin-top: 50px;
    padding-bottom: 0;
  }
  @media ${SCREEN.md}{
    display: block;
    margin-top: 0;
    height: auto;
  }
`;

export const FeatureBlock = styled.div`
  text-align: left;
  h3{
    color: ${({ theme }): string => theme.main};
    font-size: 1.1rem;
  }
  @media ${SCREEN.md}{
    margin-bottom: 25;
    margin-top: 25px;
  }
`;
