/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from 'react';

import AppProvider from './src/context';
import { MediaContextProvider } from './src/utils/mediaQueriesUtils';

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
