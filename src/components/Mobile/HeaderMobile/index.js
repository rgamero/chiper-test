import React from 'react';
import Container from '../../../utils/styledContainer';
import { EMPRESARIO_CHIPER } from '../../../utils/urlConstants';
import { HeaderWrapper, HeaderTitle, MainButton } from './styles';
import MainImage from '../../Common/Images/MainImage';
import LogoChiperAlt from '../../Common/Icons/LogoChiperAlt';

const HeaderMobile = () => (
  <HeaderWrapper>
    <Container main>
      <LogoChiperAlt />
      <HeaderTitle>¡Compra todo para tu negocio en un solo lugar!</HeaderTitle>
      <MainImage />
      <MainButton
        type="button"
        onClick={() => window.open(EMPRESARIO_CHIPER, '_blank')}
      >
        ¡Empieza a pedir!
      </MainButton>
    </Container>
  </HeaderWrapper>
);

export default HeaderMobile;
