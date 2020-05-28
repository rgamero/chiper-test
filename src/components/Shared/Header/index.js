import React from 'react';
import Container from '../../utils/styledContainer';
import { HeaderWrapper, HeaderTitle } from './styles';

const Header = () => {
  return (
    <HeaderWrapper bgAnim={bgAnim} visible={visible}>
      <Container header>
        <HeaderTitle>{siteTitle}</HeaderTitle>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
