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
`;

export const ItemText = styled.p`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 900;
  color: ${(props) => props.theme.fontColor};
  line-height: 1.1;
  letter-spacing: -0.8px;
  text-align: center;
  max-width: 75%;
  margin-top: 2rem;
`;
