import styled, { css } from 'styled-components';
import StyledComponentMedia from '../../../utils/mediaQueriesUtils';

export const MenuWrapper = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const InnerWrapper = styled.ul`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1.5rem 0;
  margin: 0;
`;

export const ItemMenu = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  opacity: 0.4;
  transition: opacity 0.3s;
  margin-right: 3rem;
  ${StyledComponentMedia.giant`
    font-size: ${(props) => props.theme.fontSize.md};
    margin-right: 6rem;
  `};
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `};
`;
