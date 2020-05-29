import styled from 'styled-components';
import StyledComponentMedia from '../../../../utils/mediaQueriesUtils';

export const HeaderWrapper = styled.header`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.baseColor};
`;

export const HeaderBg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem 1rem;
  width: 100%;
  border-radius: 16px;
  background-color: hsla(0, 0%, 61.6%, 0.15);
  ${StyledComponentMedia.tablet`
    padding: 1.5rem 2rem;
  `};
  ${StyledComponentMedia.desktop`
    padding: 2rem 4rem;
  `};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 75%;
  ${StyledComponentMedia.giant`
    flex: none;
  `};
`;

export const HeaderTitle = styled.h1`
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
