import React from "react";

export const ListItemsContext = React.createContext();

const ListItemsContextTag = ({ children }) => {
  const [selectedSubtopic, setSelectedSubtopic] = React.useState(0);
  const [selectedTopic, setSelectedTopic] = React.useState(0);
  const [checked, setChecked] = React.useState([]);
  const [expanded, setExpanded] = React.useState(0);
  const [courses, setCourses] = React.useState({});
  const [max, setMax] = React.useState({ maxTopics: 0, maxSubTopics: 0 });

  const handleResetTopic = () => {
    setSelectedSubtopic(0);
    setSelectedTopic(0);
  };
  const handleNext = () => {
    if (selectedSubtopic + 1 >= max.maxSubTopics) {
      setSelectedTopic((prevActiveStep) => prevActiveStep + 1);
      setSelectedSubtopic(0);
    } else {
      setSelectedSubtopic((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    if (selectedSubtopic == 0) {
      setSelectedTopic((prevActiveStep) => prevActiveStep - 1);
      setSelectedSubtopic(
        courses.topics[selectedTopic - 1].subTopics.length - 1
      );
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
    // setChecked([...checked, selectedSubtopic]);
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

  console.log("mock", courses);

  return (
    <ListItemsContext.Provider
      value={{
        handleNext,
        handleBack,
        handleSubTopic,
        handleTopic,
        handleChange,
        handleEndVideo,
        handleResetTopic,
        selectedSubtopic,
        selectedTopic,
        courses,
        checked,
        expanded,
        max,
        setMax,
        setCourses,
      }}
    >
      {children}
    </ListItemsContext.Provider>
  );
};

export default ListItemsContextTag;
