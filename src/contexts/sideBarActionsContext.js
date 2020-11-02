import React from "react";

export const SideBarActionsContext = React.createContext(); 


const SideBarActionsContextTag = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [openSide, setOpenSide] = React.useState(true);
  const [openExpand, setOpenExpand] = React.useState(true);
  const [markTime, setmarkTime] = React.useState(false)
  const [markTimePosition, setMarkTimePosition] = React.useState({time:''})
  const [valueTab, setValueTab] = React.useState(0);
  const [addMarker, setAddMarker] = React.useState(false)
  const [activeMarkerList, setActiveMarkerList] = React.useState()
  const handleMarkList = (index, time) =>{
    setActiveMarkerList(index)
    setMarkTimePosition({time:time}) 
  }
  console.log('position', markTimePosition)
  const handlePosition = () =>{
    setmarkTime(true)
    setValueTab(1)
    setAddMarker(true)
    setActiveMarkerList('')
  }
  console.log('posicion', markTimePosition)
  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };
  
 
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
    <SideBarActionsContext.Provider value={{
      open, 
      openSide, 
      openExpand, 
      markTime,
      valueTab,
      addMarker,
      activeMarkerList,
      markTimePosition,
      handleMarkList,
      setmarkTime,
      setMarkTimePosition,
      setAddMarker,
      handleDrawerOpen, 
      handleDrawerClose, 
      handleDrawerCloseAll, 
      handleCommentsOpen,
      handlePosition,
      handleChange}}>
      {children}
    </SideBarActionsContext.Provider>
  );
}

export default SideBarActionsContextTag;