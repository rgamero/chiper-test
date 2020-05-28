import styled, { css } from 'styled-components';
import StyledComponentMedia from './mediaQueriesUtils';

export default styled.div`
  display: flex;
  max-width: 140rem;
  width: calc(100% - 2rem);
  margin: auto;
  ${StyledComponentMedia.tablet`
    width: calc(100% - 8rem);
  `};
  ${StyledComponentMedia.giant`
    width: calc(100% - 16rem);
  `};
  ${(props) =>
    props.header &&
    css`
      align-items: center;
      margin: 0 auto;
      padding: 1.5rem 0;
      ${StyledComponentMedia.tablet`
        padding: 2rem 0;
      `};
      ${StyledComponentMedia.desktop`
        padding: 3rem 0;
      `};
    `};
  ${(props) =>
    props.main &&
    css`
      position: relative;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
    `};
  ${(props) =>
    props.footer &&
    css`
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      padding: 3rem;
      margin: auto;
      ${StyledComponentMedia.tablet`
        padding: 3.5rem;
      `};
    `};
`;
