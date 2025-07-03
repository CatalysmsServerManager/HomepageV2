import styled from 'styled-components';
import { SCREEN } from 'lib/enums';

export const BannerContainer = styled.div<{ isVisible: boolean }>`
  background: linear-gradient(135deg, #664de5 0%, #5640c9 100%);
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  display: ${props => props.isVisible ? 'block' : 'none'};
  animation: slideDown 0.3s ease-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media ${SCREEN.xs} {
    padding: 15px 10px;
  }
`;

export const BannerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media ${SCREEN.xs} {
    flex-direction: column;
    gap: 15px;
  }
`;

export const BannerText = styled.div`
  flex: 1;

  h3 {
    margin: 0 0 8px 0;
    font-size: 1.4rem;
    font-weight: 600;

    @media ${SCREEN.xs} {
      font-size: 1.2rem;
    }
  }

  p {
    margin: 0;
    font-size: 1rem;
    opacity: 0.95;

    @media ${SCREEN.xs} {
      font-size: 0.9rem;
    }
  }
`;

export const BannerButton = styled.a`
  background: white;
  color: #664de5;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f5f5f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  @media ${SCREEN.xs} {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media ${SCREEN.xs} {
    top: 10px;
    right: 10px;
    font-size: 1.3rem;
  }
`;