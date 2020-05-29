import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  padding: 7.5rem 5rem;
  flex: 1 1 75%;
  align-items: center;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px 10px rgba(0, 0, 0, 0.16);
  background-color: ${(props) => props.theme.white};
`;

export const CardTitle = styled.h2`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 900;
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 3rem;
  line-height: 1.05;
  letter-spacing: -1.2px;
  text-align: left;
`;

export const CardText = styled.p`
  font-family: ${(props) => props.theme.fontRegular};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};
  line-height: 1.35;
  letter-spacing: -0.8px;
  text-align: left;
  margin-bottom: 0;
`;

export const SubMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  box-shadow: 0 2px 2px -2px rgba(54, 54, 54, 0.6);
`;

export const SubMenuContent = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const SubMenuItem = styled.li`
  cursor: pointer;
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.reg};
  font-weight: 900;
  color: ${(props) => props.theme.fontColor};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  height: 3.5rem;
  margin: 0 5rem 0 0;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid ${(props) => props.theme.primaryColor};
    `};
`;
