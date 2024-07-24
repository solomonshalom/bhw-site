import React, { useEffect } from 'react';
import Head from 'next/head';

import Meta from '@hackclub/meta';
import '@hackclub/theme/fonts/reg-bold.css';
import theme from '../lib/theme';
import { ThemeProvider } from 'theme-ui';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cloud.umami.is/script.js';
    script.defer = true;
    script.setAttribute('data-website-id', '57b3767b-b825-4b2a-bed8-4afe9d8f9af1');
    document.head.appendChild(script);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Meta as={Head}>
        <meta
          name="google-site-verification"
          content="7zE7h5foPaxIcnv5Frq6BkcUb9-3UzVc8q3P_cexf9I"
        />
      </Meta>
      <BalancerProvider>
        <Component {...pageProps} />
      </BalancerProvider>
    </ThemeProvider>
  );
};

export default App;
