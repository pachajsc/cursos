import React from "react";

export const SideBarActionsContext = React.createContext(); 


const SideBarActionsContextTag = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [openSide, setOpenSide] = React.useState(true);
  const [openExpand, setOpenExpand] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenExpand(true)
  };

  const handleDrawerCloseAll = () => {
    setOpen(false);
    setOpenSide(false);
    setOpenExpand(true)
  };

  const handleCommentsOpen = () => {
    setOpenSide(!openSide);
  }
  return (
    <SideBarActionsContext.Provider value={{open, openSide, openExpand, handleDrawerOpen, handleDrawerClose, handleDrawerCloseAll, handleCommentsOpen}}>
      {children}
    </SideBarActionsContext.Provider>
  );
}

export default SideBarActionsContextTag;