import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1.5rem 0;
`;

export const PhoneGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
`;

export const PhoneText = styled.p`
  font-family: ${(props) => props.theme.fontRegular};
  font-size: ${(props) => props.theme.fontSize.reg};
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  margin: 0;
`;
