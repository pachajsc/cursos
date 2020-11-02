import React from "react";
import {course} from "../mock/courses"
export const DataActionsContext = React.createContext(); 

// const getCourses = async () => {
//     const { data } = await ListItem.getListItems();
//     return data
// };

const DataActionsContextTag = ({ children }) => {
    const [courses, setCourses] = React.useState(course);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
        //const {data, status} = useQuery('contextData.courses', getCourses)
        console.log('mi data', courses)
    
        // React.useEffect(() => { 
        //   if(status === "success"){setCourses(data)}
        //   if(status === "loading"){setLoading(true)}
        //   if(status === "error"){setError(true)}
       
        // }, [setCourses,data, status]);
  return (
    <DataActionsContext.Provider value={{courses, setCourses}}>
      {children}
    </DataActionsContext.Provider>
  );
}

export default DataActionsContextTag;