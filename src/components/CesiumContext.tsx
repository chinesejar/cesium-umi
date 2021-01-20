import React from 'react';

export const CesiumContext = React.createContext(null);

export const CesiumProvider = props => {
  if (!props.viewer) return null;

  return (
    <CesiumContext.Provider value={props.viewer}>
      {props.children}
    </CesiumContext.Provider>
  );
};

export const CesiumConsumer = () => CesiumContext.Consumer;
