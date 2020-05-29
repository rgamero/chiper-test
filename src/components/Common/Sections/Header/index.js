import React from 'react';
import Container from '../../../../utils/styledContainer';
import { GOOGLE_PLAY } from '../../../../utils/urlConstants';
import { HeaderWrapper, HeaderBg, HeaderContent, HeaderTitle } from './styles';
import LogoChiper from '../../Icons/LogoChiper';
import GooglePlay from '../../Icons/GooglePlay';

const Header = () => (
  <HeaderWrapper>
    <Container header>
      <HeaderBg onClick={() => window.open(GOOGLE_PLAY, '_blank')}>
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
