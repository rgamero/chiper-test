/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyle';
import Header from '../Common/Sections/Header';
import './layout.css';

const Layout = ({ children }) => {
  const websiteTheme = {
    fontRegular: 'Avenir',
    fontBold: 'Avenir Black',
    fontColor: '#363636',
    textColor: 'rgba(54,54,54,.6)',
    baseColor: '#f7f4f4',
    baseColorOpacity: 'rgba(247, 244, 244, 0.85)',
    primaryColor: '#ff0136',
    gray: '#e6e6e6',
    gray2: '#b0b0b0',
    gray3: '#c4c4c4',
    white: '#fff',
    orange: '#ff765f',
    blue: '#2742d4',
    lightblue: '#d4d9f6',
    opacity: 'hsla(0,0%,100%,.4)',
    fontSize: {
      xs: '1.4rem',
      reg: '1.8rem',
      sm: '2.5rem',
      md: '3.5rem',
      lg: '5rem',
    },
  };

  return (
    <ThemeProvider theme={websiteTheme}>
      <>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
