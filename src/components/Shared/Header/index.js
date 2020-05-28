import React from 'react';
import Container from '../../../utils/styledContainer';
import { HeaderWrapper, HeaderBg, HeaderContent, HeaderTitle } from './styles';
import LogoChiper from '../Icons/LogoChiper';
import GooglePlay from '../Icons/GooglePlay';

const Header = () => (
  <HeaderWrapper>
    <Container header>
      <HeaderBg
        href="https://play.google.com/store/apps/details?id=co.chiper.empresario"
        target="_blank"
      >
        <HeaderContent>
          <LogoChiper />
          <HeaderTitle>
            Descarga gratis la App Chiper y empieza a pedir
          </HeaderTitle>
        </HeaderContent>
        <GooglePlay />
      </HeaderBg>
    </Container>
  </HeaderWrapper>
);

export default Header;
