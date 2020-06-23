import styled from 'styled-components';

export interface IIconProps {
  rotate?: number;
  pointer?: boolean;
  fill?: string;
  scale?: number;
  outline?: boolean;
  onClick?: () => void;
  className?: string;
  stroke?: string;
}

export const defaultProps: IIconProps = {
  fill: '#00cd6a',
  outline: false,
  pointer: undefined,
  rotate: undefined,
  scale: 1,
  stroke: undefined,
  onClick: () => { }
};

export const Icon = styled.svg<IIconProps>`
  transition: 0.2s fill ease-in-out, transform 0.5s ease-in-out;
  width: 24px;
  height: 24px;
  scale: ${({ scale }): number => scale};
  fill: ${({ fill }): string => fill};
  transform: ${({ rotate }): string => (rotate ? `rotate(${rotate}deg)` : '')};
  cursor: ${({ pointer }): string => (pointer ? 'pointer' : 'auto')};
  stroke: ${({ stroke }): string => stroke ? stroke : 'none'};
`;
