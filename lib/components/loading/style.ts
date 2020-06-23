import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div) <{ width: number; height: number }>`
  width: ${({ width }): number => width}px;
  height: ${({ height }): number => height}px;
  img{
    width: ${({ width }): number => width}px;
    height: auto;
  }
`;

export const Icon = styled.svg`
  fill: ${({ theme }): string => theme.main};
`;
