import React from "react";
import { courses } from '../mock/courses'

export const ListItemsContext = React.createContext(); 

const ListItemsContextTag = ({ children }) => {
    const [selectedSubtopic, setSelectedSubtopic] = React.useState(0);
    const [selectedTopic, setSelectedTopic] = React.useState(0);

    const maxTopics = courses[0].topics.length;
    const maxSubTopics = courses[0].topics[selectedTopic].subTopics.length;

    const handleNext = () => {
        if ((selectedSubtopic + 1) >= maxSubTopics) {
          setSelectedTopic((prevActiveStep) => prevActiveStep + 1);
          setSelectedSubtopic(0)
        } else {
          setSelectedSubtopic((prevActiveStep) => prevActiveStep + 1);
        }
      };
      const handleBack = () => {
        if ((selectedSubtopic) == 0) {
          setSelectedTopic((prevActiveStep) => prevActiveStep - 1);
          setSelectedSubtopic(courses[0].topics[selectedTopic - 1].subTopics.length - 1)
        } else {
          setSelectedSubtopic((prevActiveStep) => prevActiveStep - 1);
        }
      };

      const handleSubTopic = (value) => () => {
        setSelectedSubtopic(value);
        ;
      };
      const handleTopic = (valueTopic) => () => {
        setSelectedTopic(valueTopic);
        setSelectedSubtopic(0);
      };

  return (
    <ListItemsContext.Provider value={{handleNext, handleBack, handleSubTopic, handleTopic, selectedSubtopic, selectedTopic, courses}}>
      {children}
    </ListItemsContext.Provider>
  );
}

export default ListItemsContextTag;