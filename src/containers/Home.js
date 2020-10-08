import React from 'react';
import { Layout } from '../components'

const Home = () => {
  return (
    <Layout>
      {/* <div className={classes.toolbar} />

      <div className={classes.videoWrapper}>
        <iframe className={classes.videoIframe} width="560" height="315" src={courses.topics[selectedTopic].subTopics[selectedSubtopic].video !== "" ? courses.topics[selectedTopic].subTopics[selectedSubtopic].video + "?autoplay=1" : null} frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        {courses.topics[selectedTopic].subTopics[selectedSubtopic].video ? null : (<Typography variant="p">{courses.topics[selectedTopic].subTopics[selectedSubtopic].slug}</Typography>)}
      </div>

      <Grid container
        direction="row"
        justify="space-between"
        alignItems="start" className='mt-4'>
        <Typography variant={'h6'}><b>{courses.topics[selectedTopic].title}</b> - {courses.topics[selectedTopic].subTopics[selectedSubtopic].title}</Typography>
        <PaginatorButtons />
      </Grid> */}

    </Layout>
  );
}

export default Home;
