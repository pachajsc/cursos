import React from "react";
import { ListItem } from "../services/list.item.services";
import {course} from "../mock/courses"
import {useQuery} from 'react-query'
export const ListItemsContext = React.createContext(); 

// const getCourses = async () => {
//     const { data } = await ListItem.getListItems();
//     return data
// };

const ListItemsContextTag = ({ children }) => {
    const [selectedSubtopic, setSelectedSubtopic] = React.useState(0);
    const [selectedTopic, setSelectedTopic] = React.useState(0);
    const [options, setOptions] = React.useState(0);
    const [disabledOption, setDisabledOption] = React.useState();
    const [expanded, setExpanded] = React.useState(0);
    const [courses, setCourses] = React.useState(course);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    
    //const {data, status} = useQuery('courses', getCourses)

    console.log('mi data', courses)
    
    // React.useEffect(() => { 
    //   if(status === "success"){setCourses(data)}
    //   if(status === "loading"){setLoading(true)}
    //   if(status === "error"){setError(true)}
   
    // }, [setCourses,data, status]);
    

    const maxTopics = courses &&  courses.topics.length;
    const maxSubTopics = courses && courses.topics[selectedTopic].subTopics.length;
    const maxOptions = courses.topics[selectedTopic].subTopics[selectedSubtopic].options && courses.topics[selectedTopic].subTopics[selectedSubtopic].options.length;
     
    const handleResetTopic = () => {
      setSelectedSubtopic(0)
      setSelectedTopic(0)
    }
    const handleNext = () => {
        if ((selectedSubtopic + 1) >= maxSubTopics) {
          setSelectedTopic((prevActiveStep) => prevActiveStep + 1);
          setSelectedSubtopic(0)
        } else if(courses.topics[selectedTopic].subTopics[selectedSubtopic].options === undefined || options + 2 > maxOptions ){ 
          setSelectedSubtopic((prevActiveStep) => prevActiveStep + 1);
          setOptions(0)
        } else{
          setOptions((prevActiveStep) => prevActiveStep + 1)   
        }
        if(options + 2 > maxOptions){
          let topics = courses.topics;
          topics[selectedTopic].subTopics[selectedSubtopic].viewed = true;
        }
      
        
      };
      const handleBack = () => {
        if ((selectedSubtopic) == 0) {
          setSelectedTopic((prevActiveStep) => prevActiveStep - 1);
          setSelectedSubtopic(courses.topics[selectedTopic - 1].subTopics.length - 1)
        } else if (courses.topics[selectedTopic].subTopics[selectedSubtopic].options === undefined || options < 1 ) {
          
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
        let topics = courses.topics;
        topics[selectedTopic].subTopics[selectedSubtopic].viewed = true;
        setCourses({ ...courses});
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
      courses, 
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