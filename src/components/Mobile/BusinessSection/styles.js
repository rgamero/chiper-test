import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 5rem 0;
`;

export const Title = styled.h3`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 900;
  color: ${(props) => props.theme.fontColor};
  line-height: 1.1;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h4`
  font-family: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 900;
  color: ${(props) => props.theme.fontColor};
  line-height: 1.1;
  letter-spacing: -1px;
  text-align: center;
`;
