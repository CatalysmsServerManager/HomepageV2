import * as React from 'react';
import { Header } from 'lib/components';
import { Terms } from '../components/terms';
import { Footer } from 'lib/components';

export const TermsOfService: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Terms />
      <Footer />
    </React.Fragment>
  );
};
