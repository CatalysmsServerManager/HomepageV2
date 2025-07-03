import * as React from 'react';
import { BannerContainer, BannerContent, BannerText, BannerButton, CloseButton } from './style';

export const TakaroBanner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const bannerDismissed = localStorage.getItem('takaroBannerDismissed');
    if (bannerDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('takaroBannerDismissed', 'true');
  };

  return (
    <BannerContainer isVisible={isVisible}>
      <CloseButton onClick={handleClose} aria-label="Close banner">
        ×
      </CloseButton>
      <BannerContent>
        <BannerText>
          <h3>🚀 Introducing Takaro - The Future of Game Server Management</h3>
          <p>CSMM is evolving! Experience the next generation with Takaro - more games, better features, same trusted quality.</p>
        </BannerText>
        <BannerButton href="https://takaro.io?utm_source=csmm&utm_medium=banner&utm_campaign=homepage_migration&utm_content=takaro_banner" target="_blank" rel="noopener noreferrer">
          Discover Takaro →
        </BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};