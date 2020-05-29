import React from 'react';
import HeaderMobile from './HeaderMobile';
import BusinessSection from './BusinessSection';
import FinalSection from './FinalSection';
import ChiperWhatsAppAltIcon from '../Common/Icons/ChiperWhatsAppAlt';
import { API_WHATSAPP_CHIPER } from '../../utils/urlConstants';

const MobileLayout = () => (
  <>
    <ChiperWhatsAppAltIcon
      clickEvent={() => window.open(API_WHATSAPP_CHIPER, '_blank')}
    />
    <HeaderMobile />
    <BusinessSection />
    <FinalSection />
  </>
);

export default MobileLayout;
