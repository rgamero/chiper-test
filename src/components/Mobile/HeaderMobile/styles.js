import styled from 'styled-components';
import StyledComponentMedia from '../../../utils/mediaQueriesUtils';

export const HeaderWrapper = styled.header`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const HeaderTitle = styled.h2`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.fontColor};
  margin-left: 0.8rem;
  letter-spacing: -0.2px;
  max-width: 75%;
  ${StyledComponentMedia.tablet`
    font-size: ${(props) => props.theme.fontSize.sm};
    margin-left: 1.5rem;
  `};
  ${StyledComponentMedia.giant`
    font-size: ${(props) => props.theme.fontSize.md};
    margin-left: 2rem;
    letter-spacing: 0;
    max-width: 100%;
  `};
`;
