import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../utils/styledContainer';
import { POS_CHIPER } from '../../../utils/urlConstants';
import {
  SectionWrapper,
  InnerWrapper,
  CardContainer,
  CardTitle,
  CardText,
  SubMenu,
  SubMenuContent,
  SubMenuItem,
} from './styles';
import Benefits from '../../Common/Sections/Benefits';
import MainImage from '../../Common/Images/MainImage';

// Tab Contents
const ConocenosContent = () => (
  <SectionWrapper>
    <Container main>
      <InnerWrapper>
        <CardContainer>
          <CardTitle>¡Compra todo para tu negocio en un solo lugar!</CardTitle>
          <CardText>
            Somos una plataforma digital que facilita el abastecimiento de tu
            tienda y tus clientes.
          </CardText>
        </CardContainer>
        <MainImage />
      </InnerWrapper>
    </Container>
  </SectionWrapper>
);

const BusinessContent = () => (
  <SectionWrapper>
    <SubMenu>
      <Container main>
        <SubMenuContent>
          <SubMenuItem active>Beneficios</SubMenuItem>
          <SubMenuItem onClick={() => window.open(POS_CHIPER, '_blank')}>
            Evoluciona
          </SubMenuItem>
        </SubMenuContent>
      </Container>
    </SubMenu>
    <Container main>
      <InnerWrapper>
        <Benefits desktop="true" />
      </InnerWrapper>
    </Container>
  </SectionWrapper>
);

// Switch render
const SubMenuDesktop = ({ menuTab }) => {
  const renderTabContent = (menuTab) => {
    switch (menuTab) {
      case 'First Tab':
        return <ConocenosContent />;
      case 'Second Tab':
        return <BusinessContent />;
      default:
        return null;
    }
  };

  return renderTabContent(menuTab);
};

SubMenuDesktop.propTypes = {
  menuTab: PropTypes.string,
};

export default SubMenuDesktop;
