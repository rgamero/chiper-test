import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../utils/styledContainer';
import Mercadito from '../../Common/Icons/Mercadito';
import { MERCADITO_CHIPER } from '../../../utils/urlConstants';
import { MenuWrapper, InnerWrapper, ItemMenu } from './styles';

const MenuDesktop = ({ menuTab, handleMenuTab }) => (
  <MenuWrapper>
    <Container main>
      <InnerWrapper>
        <ItemMenu
          active={menuTab === 'First Tab'}
          onClick={() => handleMenuTab('First Tab')}
        >
          Conócenos
        </ItemMenu>
        <ItemMenu
          active={menuTab === 'Second Tab'}
          onClick={() => handleMenuTab('Second Tab')}
        >
          Para tu negocio
        </ItemMenu>
        <ItemMenu onClick={() => window.open(MERCADITO_CHIPER, '_blank')}>
          Para tu hogar
          <Mercadito desktop="true" />
        </ItemMenu>
      </InnerWrapper>
    </Container>
  </MenuWrapper>
);

MenuDesktop.propTypes = {
  menuTab: PropTypes.string,
  handleMenuTab: PropTypes.func.isRequired,
};

export default MenuDesktop;
