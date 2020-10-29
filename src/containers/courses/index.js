import React from 'react';
import { Layout } from '../../components'
import { ReactQueryDevtools } from 'react-query-devtools'
import { ListItemsContext } from '../../contexts/listItemsContext';
import { ContentLayout } from '../../components'
import { Typography, Hidden, Box } from '@material-ui/core';
import TabsMobile from './components/TabsMobile';
import Vimeo from '@u-wave/react-vimeo';
import {useStyles} from '../../components/style.js'
const Courses = () => {
    const classes = useStyles();
    const context = React.useContext(ListItemsContext);
    const [currentTime, setCurrentTime] = React.useState(0)

    const handlePosition = (pp) =>{
        setCurrentTime(currentTime + pp)
        console.log('tiempo', currentTime)
    }


    return (
        <>
            <Layout>
                <ContentLayout>
                    {context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options === undefined ? (
                        <>
                            {
                                context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].video && 
                                    
                                    (
                                        <>
                                        <div className={classes.videoWrapper}>
                                            <Vimeo
                                                onEnd={context.handleEndVideo()}
                                                
                                                //onTimeUpdate={()=>handlePosition(1)}
                                                //onCueChange={()=>handlePosition(1)}
                                                onSeeked={()=>handlePosition(1)}
                                                allowfullscreen
                                                video={context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].video}
                                                autoplay
                                            />
                                        </div>
                                        <button onClick={()=> setCurrentTime()}>currentTime</button>
                                        </>
                                    )
                            }
                            <Hidden mdUp>
                                <Box p={1}>
                                    <TabsMobile>
                                        <Typography variant={'h6'}>{context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].title}</Typography>
                                        <div dangerouslySetInnerHTML={{ __html: context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].description }} />
                                    </TabsMobile>
                                </Box>
                            </Hidden>
                            <Hidden smDown>
                                <Box p={1}>
                                    <Typography variant={'h6'}>{context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].title}</Typography>
                                    <div dangerouslySetInnerHTML={{ __html: context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].description }} />
                                </Box>
                            </Hidden>
                           
                        </>
                    ) :
                        (
                            <>
                                <p>
                                    {context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options[context.options].title ? (
                                        <>
                                        <Hidden mdUp>
                                            <Box p={1}>
                                                <TabsMobile>{context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options[context.options].title}</TabsMobile>
                                            </Box>
                                        </Hidden>
                                         <Hidden smDown>
                                            <Box p={1}>
                                                {context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options[context.options].title}
                                            </Box>
                                        </Hidden>
                                     </>
                                    ) : (
                                        <>
                                            <div className={classes.videoWrapper}>
                                                <Vimeo
                                                    onEnd={() => context.setDisabledOption(false)}
                                                    allowfullscreen
                                                    video={context.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options[context.options].video}
                                                    autoplay
                                                    onReady={() => context.setDisabledOption(true)}
                                                />

                                            </div>
                                        </>
                                    )}
                                </p>

                            </>
                        )}
                </ContentLayout>
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    );
}

export default Courses;
