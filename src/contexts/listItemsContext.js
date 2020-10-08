import React from "react";
import { course } from '../mock/courses'
import axios from 'axios';
export const ListItemsContext = React.createContext(); 

const ListItemsContextTag = ({ children }) => {
    const [selectedSubtopic, setSelectedSubtopic] = React.useState(0);
    const [selectedTopic, setSelectedTopic] = React.useState(0);
    const [checked, setChecked] = React.useState([]);
    const [expanded, setExpanded] = React.useState(0);
    const [courses, setCourses] = React.useState(course);
    
    // React.useEffect(() => {
    //   axios.get('https://api-lcms-staging.iebs.es/api/admin/lesson/162ba658-c3e3-4ad7-aef3-79be46c3ea1e?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmNjk0MmVhMGE4NTRiN2NhMmNlMjNiMWU3OTRjNDE0NiIsImp0aSI6ImJiOWRjY2VjZTYwNmVmMTNhZTllZDJlY2Y1NmQ3ZDI0ZDljMmNhNTQ0MjQ5YjgzZWYzYjlmMzU0MzdlNzI3OGY0ZTkwYWJhZjk1MDQzNzc4IiwiaWF0IjoxNjAyMDk3NTk1LCJuYmYiOjE2MDIwOTc1OTUsImV4cCI6MTYwNDc3NTk5NSwic3ViIjoiYWRtaW5AaWVicy5jb20iLCJzY29wZXMiOlsiYWRtaW4iXSwiZXh0cmEiOnsidXVpZCI6IjFlYWZkYzgyLWIwMjItNjI2Yy04YWZiLTllNjA0ZWVlM2JmYiIsInVwZGF0ZWRBdCI6IjIwMjAtMDktMjNUMTg6MTE6MTQrMDA6MDAifX0.SFIq4UJ2pPlfpmHPXXi5-Fee6zWaO-Hx0bGSbo15HNF-u14j80l5Tnl_yxbC-qwP6XHSixxAItC3n78JZZIiHVN0kNLO8I4B3sstwWDEzap0hVyWjN0xYhkqqS04brGa2SBfbpeTYgZBByrSyNrD1w3fMWUjoMOIPIBgIcA3O0JhwsM11nvhu1cvImYYvrbwycr3Crh_XpTgIuH05ajvDKnOjrnKfUT1oa1FlKr0SGhreFv4g-b3CsqoUDGTtaiOp2A7orFUXbTyzxJFQexbacYozXtJ-dDbJS53nEYSW-Jspc3Kprhsug_WJ1D8n-Crtezi6WEWplKMT7aL9aAJwg')
    //     .then(result =>{
    //       setCourse(result.data) 
    //     }).catch(console.log('error'))

    // },[setCourse]);

    // console.log("api",course)

    const maxTopics = courses.topics.length;
    const maxSubTopics = courses.topics[selectedTopic].subTopics.length;
  
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
        setChecked([...checked, selectedSubtopic]);
        handleNext();  
      };


      const handleTopic = (valueTopic) => () => {
        setSelectedTopic(valueTopic);
        //setSelectedSubtopic(0);
      };

      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : true);
      };

      
      React.useEffect(() => {
        setExpanded(selectedTopic);

      });

     

        
      
      console.log("mock",courses)
      
  return (
    <ListItemsContext.Provider value={{handleNext, handleBack, handleSubTopic, handleTopic,handleChange,handleEndVideo, handleResetTopic, selectedSubtopic, selectedTopic, courses, checked, expanded, maxTopics, maxSubTopics}}>
      {children}
    </ListItemsContext.Provider>
  );
}

export default ListItemsContextTag;