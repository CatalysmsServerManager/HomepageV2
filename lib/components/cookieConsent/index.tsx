import * as React from 'react';
import { default as ReactCookieConsent } from 'react-cookie-consent';

export const CookieConsent: React.FC = () => (
  <ReactCookieConsent
    acceptOnScroll={true}
    acceptOnScrollPercentage={33}
    buttonStyle={{ backgroundColor: '#fff', color: '#00cc6a', fontSize: '700', borderRadius: '5px' }}
    buttonText="I consent"
    debug={true}
    expires={150}
    location="bottom"
    style={{ backgroundColor: '#00cd6a', color: '#fff' }}
  >
    This website uses cookies to enhance the user experience! More about this <a href="/terms-of-service" rel="noreferrer noopener" target="_blank">here</a>.
  </ReactCookieConsent>
);
