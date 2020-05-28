import React from 'react';
import Container from '../../../utils/styledContainer';
import { HeaderWrapper, HeaderTitle } from './styles';
import LogoChiperAlt from '../Icons/LogoChiperAlt';

const HeaderMobile = () => (
  <HeaderWrapper>
    <Container main>
      <LogoChiperAlt />
      <HeaderTitle>¡Compra todo para tu negocio en un solo lugar!</HeaderTitle>
    </Container>
  </HeaderWrapper>
);

export default HeaderMobile;
