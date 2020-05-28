/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyle';
import Header from '../Shared/Header';
import './layout.css';

const Layout = ({ children }) => {
  const websiteTheme = {
    fontRegular: 'Avenir',
    fontBold: 'Avenir Black',
    fontColor: '#363636',
    baseColor: '#f7f4f4',
    primaryColor: '#ff0136',
    gray: '#e6e6e6',
    gray2: '#b0b0b0',
    gray3: '#c4c4c4',
    white: '#fff',
    orange: '#ff765f',
    fontSize: {
      xs: '1.4rem',
      sm: '2.5rem',
      md: '3.5rem',
      lg: '5rem',
    },
  };
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={websiteTheme}>
      <>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
