import styled from 'styled-components';
import { SCREEN } from 'lib/enums';
import { lighten } from 'polished';
export const Container = styled.div<{ isPopular: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 300px;
  border: 5px solid ${({ theme, isPopular }): string => isPopular ? lighten(0.65, theme.title) : theme.shade};
  border-radius: 20px;

  @media ${SCREEN.xxs}{
    width: 260px;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px;
  padding-top: 25px;
  img {
    width: 21px;
    height: 21px;
    margin-right: 15px;
  }
  h2{
    font-weight: 600;
    margin-left: 10px;
  }
`;

export const Price = styled.div<{ isPopular: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 130px;
  background-color: ${({ theme, isPopular }): string => isPopular ? theme.main : theme.shade};
  .symbol{
      position: relative;
      width: 40px;
      height: 40px;
      span{
        position: absolute;
        top: -20px;
        left: 10px;
        color: ${({ theme, isPopular }): string => isPopular ? 'white' : theme.main};
        font-size: 1.5rem;
        font-weight: 400;
      }
  }
  .price{
    position: relative;
    color: ${({ theme, isPopular }): string => isPopular ? 'white' : theme.main};
    font-size: 3.5rem;
    font-weight: 600;
    }
  .month{
    font-size: 1.4rem;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    color: ${({ theme, isPopular }): string => isPopular ? 'white' : theme.text};
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 215px);
  width: 100%;
  p{
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 0.8rem;
  }
  button{
    margin-top: 25px;
    font-size: 110%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
  button{
    font-size: 110%;
  }
  a{
    color: white;
    &:hover{
      color: white;
    }
  }
`;

export const Popular = styled.div`
  position:absolute;
  width: 100%;
  height: 30px;
  color: white;
  font-weight: 700;
  text-align: center;
  bottom: 2px;
`;
