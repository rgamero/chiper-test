import React from 'react';
import Container from '../../../utils/styledContainer';
import Benefits from '../../Common/Sections/Benefits';
import { SectionWrapper, Title, Subtitle } from './styles';

const BusinessSection = () => (
  <SectionWrapper>
    <Container main>
      <Title>Para tu negocio</Title>
      <Subtitle>Beneficios</Subtitle>
      <Benefits />
    </Container>
  </SectionWrapper>
);

export default BusinessSection;
