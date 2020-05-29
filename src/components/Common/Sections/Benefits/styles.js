import styled from 'styled-components';
import StyledComponentMedia from '../../../../utils/mediaQueriesUtils';

export const ItemsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
  padding: 5rem 0;
  ${StyledComponentMedia.tablet`
    flex-flow: row nowrap;
    padding: 3.5rem 0;
  `};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.theme.white};
  width: 100%;
  margin: 1rem 0;
  padding: 3.5rem;
  ${StyledComponentMedia.tablet`
    flex-flow: column nowrap;
    margin: 0 1rem;
  `};
`;

export const ItemTitle = styled.p`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 900;
  color: ${(props) => props.theme.fontColor};
  line-height: 1.1;
  letter-spacing: -0.8px;
  text-align: center;
  max-width: 75%;
  margin-top: 2rem;
  ${StyledComponentMedia.tablet`
    font-size: ${(props) => props.theme.fontSize.reg};
  `};
  ${StyledComponentMedia.desktop`
    font-size: ${(props) => props.theme.fontSize.sm};
  `};
`;

export const ItemText = styled.p`
  font-family: ${(props) => props.theme.fontRegular};
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  margin-top: 1rem;
  width: 75%;
  ${StyledComponentMedia.desktop`
    font-size: ${(props) => props.theme.fontSize.reg};
  `};
`;
