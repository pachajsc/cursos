import React from "react";
import { DataActionsContext } from './dataContext';
import { ListItem } from "../services/list.item.services";
import {useQuery} from 'react-query'
export const ListItemsContext = React.createContext(); 



const ListItemsContextTag = ({ children }) => {
    const [selectedSubtopic, setSelectedSubtopic] = React.useState(0);
    const [selectedTopic, setSelectedTopic] = React.useState(0);
    const [options, setOptions] = React.useState(0);
    const [disabledOption, setDisabledOption] = React.useState();
    const [expanded, setExpanded] = React.useState(0);
    
    const contextData = React.useContext(DataActionsContext);

    

    const maxTopics = contextData.courses &&  contextData.courses.topics.length;
    const maxSubTopics = contextData.courses && contextData.courses.topics[selectedTopic].subTopics.length;
    const maxOptions = contextData.courses.topics[selectedTopic].subTopics[selectedSubtopic].options && contextData.courses.topics[selectedTopic].subTopics[selectedSubtopic].options.length;
     
    const handleResetTopic = () => {
      setSelectedSubtopic(0)
      setSelectedTopic(0)
    }
    const handleNext = () => {
        if ((selectedSubtopic + 1) >= maxSubTopics) {
          setSelectedTopic((prevActiveStep) => prevActiveStep + 1);
          setSelectedSubtopic(0)
        } else if(contextData.courses.topics[selectedTopic].subTopics[selectedSubtopic].options === undefined || options + 2 > maxOptions ){ 
          setSelectedSubtopic((prevActiveStep) => prevActiveStep + 1);
          setOptions(0)
        } else{
          setOptions((prevActiveStep) => prevActiveStep + 1)   
        }
        if(options + 2 > maxOptions){
          let topics = contextData.courses.topics;
          topics[selectedTopic].subTopics[selectedSubtopic].viewed = true;
        }
      
        
      };
      const handleBack = () => {
        if ((selectedSubtopic) == 0) {
          setSelectedTopic((prevActiveStep) => prevActiveStep - 1);
          setSelectedSubtopic(contextData.courses.topics[selectedTopic - 1].subTopics.length - 1)
        } else if (contextData.courses.topics[selectedTopic].subTopics[selectedSubtopic].options === undefined || options < 1 ) {
          
          setSelectedSubtopic((prevActiveStep) => prevActiveStep - 1);
        } else 
        {
          console.log('maxioption',options, maxOptions)
          setOptions((prevActiveStep) => prevActiveStep - 1)
        }
      };

      const handleSubTopic = (value) => () => {
        setSelectedSubtopic(value);
        setOptions(0)
        setDisabledOption(false)
      };
      const handleTopic = (valueTopic) => () => {
        setSelectedTopic(valueTopic);
        setSelectedSubtopic(0);
        setDisabledOption(false)
      };
      
      const handleEndVideo = () => () => {
        let topics = contextData.courses.topics;
        topics[selectedTopic].subTopics[selectedSubtopic].viewed = true;
        contextData.setCourses({ ...contextData.courses});
        handleNext();
      };

      

      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : true);
      };

      
      React.useEffect(() => {
        setExpanded(selectedTopic);

      });

  
      
  return (
    <ListItemsContext.Provider value={{
      handleNext, 
      handleBack, 
      handleSubTopic, 
      handleTopic,
      handleChange,
      handleEndVideo, 
      handleResetTopic,
      options, 
      selectedSubtopic, 
      selectedTopic,  
      expanded, 
      maxTopics, 
      maxSubTopics,
      maxOptions,
      disabledOption,
      setDisabledOption}}>
      {children}
    </ListItemsContext.Provider>
  );
}

export default ListItemsContextTag;