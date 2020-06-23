import styled, { keyframes } from 'styled-components';
import { SCREEN } from 'lib/enums';

const dotAnimation = keyframes`
  0% {
  background-color: #00cd6a;
  }

  25%{
  background-color: #00cd6a;
  }

  50%{
    background-color: #3a4763;
  }
  75%{
    background-color: #00cd6a;
  }
  100%{
    background-color: #00cd6a;
  }

`;

export const Container = styled.div`
  width: 800px;
  height: auto;
  max-height: 65vh;
  background-color: ${({ theme }): string => theme.shade};
  border-radius: 10px;
  padding: 0 25px calc(25px + 15px) 25px;

li.slide{
  background-color: white;
}

@media ${ SCREEN.xl} {
  width: 700px;
}
@media ${ SCREEN.sm} {
  width: 100%;
}
`;

export const Dot = styled.div`
margin-left: 5px;
margin-right: 5px;
display: inline-block;
width: 9px;
height: 9px;
border-radius: 50%;
transition: .2s background-color ease-in-out;
background-color: ${ ({ theme }): string => theme.main};

  &.first{
  animation: 3s ${ dotAnimation} infinite;
}
  &.second{
  animation: 3s ${ dotAnimation} infinite;
  animation-delay: 1s;
}
  &.third{
  animation: 3s ${ dotAnimation} infinite;
  animation-delay: 2s;
}
`;

export const Inner = styled.div`
width: calc(100% - 40px);
height: calc(100% - 40px);
background-color: white;
border-radius: 10px;
padding: 20px;
transition: height 0.2s linear;
`;
