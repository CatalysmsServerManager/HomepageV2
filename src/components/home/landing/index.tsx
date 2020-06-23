import * as React from 'react';
import { Window } from 'lib/components';
import { BackgroundIcon, Block, Container, TextContainer } from './style';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Carousel
import landing1 from '../../../images/landing-1.png';
import landing2 from '../../../images/landing-2.gif';
import landing3 from '../../../images/landing-3.png';
import landing4 from '../../../images/landing-4.png';

import CsmmIcon from '../../../images/csmm-icon.svg';

export const Landing: React.FC = () => (
  <Container>
    <TextContainer>
      <h1>The <strong>BEST</strong> 7 days to Die server manager.</h1>
      <p>CSMM is a web based server manager for 7 Days to die. Bring your server(s) to the next level with CSMM&apos;s advanced features! Join <strong>hundreds</strong> of other servers in a new generation of server management.</p>
      <BackgroundIcon alt="7 days to Die server manager icon" src={CsmmIcon} />
    </TextContainer>
    <Window>
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        infiniteLoop={true}
        interval={5000}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}>
        <Block><img alt="landing-2" src={landing2} /></Block>
        <Block><img alt="landing-1" src={landing1} /></Block>
        <Block><img alt="landing-3" src={landing3} /></Block>
        <Block><img alt="landing-4" src={landing4} /></Block>
      </Carousel>
    </Window>
  </Container>
);
