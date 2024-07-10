import React, { createContext, useContext, useState } from "react";

const RenderContext = createContext();

export const RenderProvider = ({ children }) => {
  const [rerender, setRerender] = useState(false);

  const contextValue = {
    rerender,

    resetConfirmation: () => setRerender(false),
  };

  return (
    <RenderContext.Provider value={contextValue}>
      {children}
    </RenderContext.Provider>
  );
};

// Hook để sử dụng Context
export const useConfirmation = () => useContext(RenderContext);
