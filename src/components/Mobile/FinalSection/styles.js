import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h3`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 900;
  color: ${(props) => props.theme.white};
  line-height: 1.2;
  letter-spacing: -1px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 900;
  color: ${(props) => props.theme.blue};
  line-height: 1.1;
  letter-spacing: -1px;
  text-align: center;
  margin: 0;
`;

export const Button = styled.button`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.reg};
  font-weight: 900;
  letter-spacing: -0.5px;
  background-color: ${(props) => props.theme.lightblue};
  color: ${(props) => props.theme.blue};
  margin-top: 1.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  line-height: normal;
  ${(props) =>
    props.alt &&
    css`
      background-color: ${(props) => props.theme.opacity};
      color: ${(props) => props.theme.white};
    `};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.theme.orange};
  width: 100%;
  margin: 5rem 0;
  padding: 3.5rem 3.5rem 0 3.5rem;
`;
