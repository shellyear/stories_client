import React, { useState, useMemo, useEffect } from 'react';
import RouteContainer from 'routes/RouteContainer';
import { useMediaQuery } from 'react-responsive';
import { LayoutContext } from 'constants/context';


const App: React.FC = (): JSX.Element => {
  const size = {
    isBase: useMediaQuery({ query: '(min-width: 750px) and (max-width: 2200px)' }),
    isTablet: useMediaQuery({ query: `(min-width: 351px) and (max-width: 750px)` }),
    isMobile: useMediaQuery({ query: `(max-width: 350px)`}),
  };

  return (
    <LayoutContext.Provider 
      value={size}
    > 
      <RouteContainer />
    </LayoutContext.Provider>
  );
};


export default App;
