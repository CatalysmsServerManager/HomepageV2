import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { Block, Circle, Container, DesktopContentContainer, FeatureBlock, Inner, MobileContentContainer, StyledCarousel } from './style';
import { featureData } from './featureData';
import { Arrow } from './arrow';

export const Feature: React.FC = () => (
  <Container>
    <Arrow />
    <Circle />
    <Circle />
    <Circle />
    <Inner>
      <DesktopContentContainer>
        <h2>Features.</h2>
        <StyledCarousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {
            featureData.map((featureData) => (
              <Block key={uuid()}>
                {
                  featureData.map((feature) => (
                    <FeatureBlock key={`feature-${uuid()}`}>
                      <h3>{feature[0]}</h3>
                      <p>{feature[1]}</p>
                    </FeatureBlock>
                  ))
                }
              </Block>
            )
            )
          }
        </StyledCarousel>
      </DesktopContentContainer>
      <MobileContentContainer>
        <h2>features.</h2>
        <Block>
          {
            featureData[1].map((feature) => (
              <FeatureBlock key={`feature-mobile-${uuid()}`}>
                <h3>{feature[0]}</h3>
                <p>{feature[1]}</p>
              </FeatureBlock>
            ))
          }
        </Block>
      </MobileContentContainer>
    </Inner>
  </Container>
);
