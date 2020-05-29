import React from 'react';
import Container from '../../../utils/styledContainer';
import { API_WHATSAPP_CHIPER } from '../../../utils/urlConstants';
import { HeaderWrapper, InnerWrapper, PhoneGroup, PhoneText } from './styles';
import LogoChiperAlt from '../../Common/Icons/LogoChiperAlt';
import ChiperWhatsAppIcon from '../../Common/Icons/ChiperWhatsApp';

const MainSection = () => (
  <HeaderWrapper>
    <Container main>
      <InnerWrapper>
        <LogoChiperAlt />
        <PhoneGroup onClick={() => window.open(API_WHATSAPP_CHIPER, '_blank')}>
          <PhoneText>Escríbenos al +57 3124120040</PhoneText>
          <ChiperWhatsAppIcon />
        </PhoneGroup>
      </InnerWrapper>
    </Container>
  </HeaderWrapper>
);

export default MainSection;
