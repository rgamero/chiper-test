import styled, { css } from "styled-components"
import StyledComponentMedia from "./mediaQueriesUtils"

export default styled.div`
  display: flex;
  max-width: 120rem;
  width: calc(100% - 4rem);
  margin: auto;
  ${StyledComponentMedia.tablet`
    width: calc(100% - 6rem);
  `};
  ${StyledComponentMedia.desktop`
    width: calc(100% - 8rem);
  `};
  ${props =>
    props.header &&
    css`
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 2rem 0;
      ${StyledComponentMedia.handheld`
      `};
      ${StyledComponentMedia.phablet`
      `};
      ${StyledComponentMedia.desktop`
      `};
    `};
  ${props =>
    props.main &&
    css`
      position: relative;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
    `};
  ${props =>
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
`
