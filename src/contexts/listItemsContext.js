import React from "react";
//import { ListItem } from "../services/list.item.services";
import {course} from "../mock/courses"

export const ListItemsContext = React.createContext(); 

const ListItemsContextTag = ({ children }) => {
    const [selectedSubtopic, setSelectedSubtopic] = React.useState(0);
    const [selectedTopic, setSelectedTopic] = React.useState(0);
    const [expanded, setExpanded] = React.useState(0);
    const [courses, setCourses] = React.useState(course);
    
    // React.useEffect(() => {
    //   let getCourses = async () => {
    //      try {
    //        const { data, error } = await ListItem.getListItems();
    //        if (data) {
    //          setCourses(data);
    //        } else {
    //          throw error;
    //        }
    //      } catch (error) {
    //        alert("error")
    //      }   
    //   };
    //   getCourses();
    // }, [setCourses]);


    const maxTopics = Object.values(courses).length > 0 &&  courses.topics.length;
    const maxSubTopics = Object.values(courses).length > 0 && courses.topics[selectedTopic].subTopics.length;
     
    const handleResetTopic = () => {
      setSelectedSubtopic(0)
      setSelectedTopic(0)
    }
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
          setSelectedSubtopic(courses.topics[selectedTopic - 1].subTopics.length - 1)
        } else {
          setSelectedSubtopic((prevActiveStep) => prevActiveStep - 1);
        }
      };

      const handleSubTopic = (value) => () => {
        setSelectedSubtopic(value);
      };
      
      const handleEndVideo = () => () => {
        let topics = courses.topics;
        topics[selectedTopic].subTopics[selectedSubtopic].viewed = true;
        setCourses({ ...courses, topics: topics });
        if(selectedTopic === (maxTopics - 1) && selectedSubtopic === (maxSubTopics - 1))
        {return null}else{handleNext();}
      };


      const handleTopic = (valueTopic) => () => {
        setSelectedTopic(valueTopic);
        setSelectedSubtopic(0);
      };

      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : true);
      };

      
      React.useEffect(() => {
        setExpanded(selectedTopic);

      });

     

        
      
      console.log("mock",courses)
      
  return (
    <ListItemsContext.Provider value={{handleNext, handleBack, handleSubTopic, handleTopic,handleChange,handleEndVideo, handleResetTopic, selectedSubtopic, selectedTopic, courses, expanded, maxTopics, maxSubTopics}}>
      {children}
    </ListItemsContext.Provider>
  );
}

export default ListItemsContextTag;