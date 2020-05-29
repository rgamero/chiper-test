import React from 'react';
import { ItemsWrapper, ItemContainer, ItemText } from './styles';
import { FirstSubMenuImg, SecondSubMenuImg, ThirdSubMenuImg } from './Images';

const Benefits = () => (
  <ItemsWrapper>
    <ItemContainer>
      <FirstSubMenuImg />
      <ItemText>Pide todo desde tu celular</ItemText>
    </ItemContainer>
    <ItemContainer>
      <SecondSubMenuImg />
      <ItemText>Encuentra los mejores precios</ItemText>
    </ItemContainer>
    <ItemContainer>
      <ThirdSubMenuImg />
      <ItemText>Recibe en menos de 24 horas</ItemText>
    </ItemContainer>
  </ItemsWrapper>
);

export default Benefits;
