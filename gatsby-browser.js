/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';

import AppProvider from './src/context';
import { MediaContextProvider } from './src/utils/mediaQueriesUtils';

export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
      ReactDOM.render(element, container, callback);
    });
  };
};

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
