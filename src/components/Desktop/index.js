import React, { useState } from 'react';
import HeaderDesktop from './HeaderDesktop';
import MenuDesktop from './MenuDesktop';
import SubMenuDesktop from './SubMenuDesktop';

const DesktopLayout = () => {
  const [menuTab, handleMenuTab] = useState('First Tab');
  return (
    <>
      <HeaderDesktop />
      <MenuDesktop menuTab={menuTab} handleMenuTab={handleMenuTab} />
      <SubMenuDesktop menuTab={menuTab} />
    </>
  );
};

export default DesktopLayout;
