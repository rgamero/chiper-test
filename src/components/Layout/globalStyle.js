import { createGlobalStyle, css } from 'styled-components';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';
import pointsBackground from '../../assets/images/pointsBg.png';

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    line-height: 1;
    color: ${(props) => props.theme.fontColor};
    background-image: url(${pointsBackground});
    background-color: ${(props) => props.theme.baseColorOpacity};
    background-size: contain;
    background-blend-mode: multiply;
    ${StyledComponentMedia.phablet`
      background-image: none;
      background-color: ${(props) => props.theme.baseColor};
    `};
  }
`;

export default GlobalStyle;
