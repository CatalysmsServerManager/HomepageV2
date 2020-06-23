import styled from 'styled-components';

export const Circle = styled.div<{ color: string }>`
  display: inline-block;
  margin-right: 5px;
  width: 5px;
  height: 5px;
  border: 3px solid ${({ color }): string => color};
  border-radius: 50%;
`;
