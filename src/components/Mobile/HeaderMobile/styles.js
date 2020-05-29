import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 5rem 0;
  background-color: ${(props) => props.theme.baseColor};
`;

export const HeaderTitle = styled.h2`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 900;
  color: ${(props) => props.theme.fontColor};
  max-width: 25rem;
  margin: 3rem 0;
  line-height: 1.1;
  letter-spacing: -1.2px;
  text-align: center;
`;

export const MainButton = styled.button`
  height: 4.8rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.primaryColor};
  margin-top: 2rem;
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.reg};
  font-weight: 900;
  letter-spacing: -0.5px;
`;
