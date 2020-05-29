import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../utils/styledContainer';
import { POS_CHIPER, MERCADITO_CHIPER } from '../../../utils/urlConstants';
import {
  SectionWrapper,
  CardContainer,
  Title,
  Subtitle,
  Button,
} from './styles';
import EvolveImage from './Images/EvolveImage';
import PhoneImage from './Images/PhoneImage';
import Mercadito from '../../Common/Icons/Mercadito';

const FinalSection = () => (
  <SectionWrapper>
    <Container main>
      <Subtitle>Evoluciona</Subtitle>
      <Button type="button" onClick={() => window.open(POS_CHIPER, '_blank')}>
        Conoce más
      </Button>
      <EvolveImage />
      <CardContainer>
        <Title>Para tu hogar</Title>
        <Mercadito />
        <Button
          alt="true"
          type="button"
          onClick={() => window.open(MERCADITO_CHIPER, '_blank')}
        >
          Conoce más
        </Button>
        <PhoneImage />
      </CardContainer>
    </Container>
  </SectionWrapper>
);

FinalSection.propTypes = {
  alt: PropTypes.bool,
};

export default FinalSection;
