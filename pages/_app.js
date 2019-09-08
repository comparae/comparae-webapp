import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Dark } from '@comparae/ui';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Dark}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
