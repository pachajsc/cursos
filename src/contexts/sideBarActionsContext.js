import React from "react";

export const sideBarActionsContext = React.createContext(); 

const sideBarActionsContextTag = ({ children }) => {

  return (
    <sideBarActionsContext.Provider value={{}}>
      {children}
    </sideBarActionsContext.Provider>
  );
}

export default sideBarActionsContextTag;