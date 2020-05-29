import React from 'react';
import PropTypes from 'prop-types';
import { ItemsWrapper, ItemContainer, ItemTitle, ItemText } from './styles';
import { FirstSubMenuImg, SecondSubMenuImg, ThirdSubMenuImg } from './Images';

const Benefits = ({ desktop }) => (
  <ItemsWrapper>
    <ItemContainer>
      <FirstSubMenuImg />
      <ItemTitle>Pide todo desde tu celular</ItemTitle>
      {desktop && (
        <ItemText>
          Te ofrecemos facilidades de pago y una amplia red de recaudo.
        </ItemText>
      )}
    </ItemContainer>
    <ItemContainer>
      <SecondSubMenuImg />
      <ItemTitle>Encuentra los mejores precios</ItemTitle>
      {desktop && (
        <ItemText>
          Más de 1300 SKUs de marcas líderes, secundarias y de bajo costo.
        </ItemText>
      )}
    </ItemContainer>
    <ItemContainer>
      <ThirdSubMenuImg />
      <ItemTitle>Recibe en menos de 24 horas</ItemTitle>
      {desktop && (
        <ItemText>
          Llevamos tu pedido a domicilio para que tu negocio siempre este
          abastecido.
        </ItemText>
      )}
    </ItemContainer>
  </ItemsWrapper>
);

Benefits.propTypes = {
  desktop: PropTypes.string,
};

export default Benefits;
