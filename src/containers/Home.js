import React from 'react';
import { Layout } from '../components'
import { ListItemsContext } from "../contexts/listItemsContext";
import { ListItem } from "../services/list.item.services";
import { course } from "../mock/courses";

const Home = () => {
  const ctx = React.useContext(ListItemsContext);
  
  React.useEffect(() => {
    let getCourses = async () => {
      // try {
      //   const { data, error } = await ListItem.getListItems();
      //   if (data) {
      //     ctx.setCourses(data);
      //     ctx.setMax({
      //       ...ctx.max,
      //       maxTopics: data.topics.length,
      //       maxSubTopics: data.topics[ctx.selectedTopic].subTopics.length,
      //     });
      //   } else {
      //     throw error;
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
      ctx.setCourses(course);
          ctx.setMax({
            ...ctx.max,
            maxTopics: course.topics.length,
            maxSubTopics: course.topics[ctx.selectedTopic].subTopics.length,
          });
    };;

    getCourses();
  }, [ctx.setCourses, ctx.setMax]);
  return (
   
    <Layout>
    //   {/* <div className={classes.toolbar} />

    //   <div className={classes.videoWrapper}>
    //     <iframe className={classes.videoIframe} width="560" height="315" src={courses.topics[selectedTopic].subTopics[selectedSubtopic].video !== "" ? courses.topics[selectedTopic].subTopics[selectedSubtopic].video + "?autoplay=1" : null} frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    //     {courses.topics[selectedTopic].subTopics[selectedSubtopic].video ? null : (<Typography variant="p">{courses.topics[selectedTopic].subTopics[selectedSubtopic].slug}</Typography>)}
    //   </div>

    //   <Grid container
    //     direction="row"
    //     justify="space-between"
    //     alignItems="start" className='mt-4'>
    //     <Typography variant={'h6'}><b>{courses.topics[selectedTopic].title}</b> - {courses.topics[selectedTopic].subTopics[selectedSubtopic].title}</Typography>
    //     <PaginatorButtons />
    //   </Grid> */}

    </Layout>
  );
}

export default Home;
