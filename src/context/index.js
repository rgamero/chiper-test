import React, { useState } from 'react';

export const AppContext = React.createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    toggleMenu: false,
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
