import React from 'react';
import { Layout, ActionsVideo } from '../../components'
import { ReactQueryDevtools } from 'react-query-devtools'
import { ListItemsContext } from '../../contexts/listItemsContext';
import { DataActionsContext } from '../../contexts/dataContext';
import { SideBarActionsContext } from '../../contexts/sideBarActionsContext';
import { ContentLayout } from '../../components'
import { Typography, Hidden, Box,Fab } from '@material-ui/core';
import TabsMobile from './components/TabsMobile';
import Vimeo from '@u-wave/react-vimeo';
import {useStyles} from '../../components/style.js'
const Courses = () => {
    const classes = useStyles();
    const context = React.useContext(ListItemsContext);
    const contextData = React.useContext(DataActionsContext);
    const contextSide = React.useContext(SideBarActionsContext)
    console.log('position:', contextSide.markTimePosition.time)

    return (
        <>
            <Layout>
                <ContentLayout>
                    {contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options === undefined ? (
                        <>
                            {
                                contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].video && 
                                    
                                    (
                                        <>
                                        <div className={classes.videoWrapper}>
                                            <Vimeo
                                                onEnd={context.handleEndVideo()}
                                                paused={contextSide.markTime}
                                                start={contextSide.markTimePosition.time}
                                                onPause={time => contextSide.setMarkTimePosition({time: time.seconds})}
                                                allowfullscreen
                                                video={contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].video}
                                                autoplay
                                            />
                                            
                                        </div>
                                        <ActionsVideo handleCreate={()=>contextSide.handlePosition()}/>
                                        
                                        </>
                                    )
                            }
                            <Hidden mdUp>
                                <Box p={1}>
                                    <TabsMobile>
                                        <Typography variant={'h6'}>{contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].title}</Typography>
                                        <div dangerouslySetInnerHTML={{ __html: contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].description }} />
                                    </TabsMobile>
                                </Box>
                            </Hidden>
                            <Hidden smDown>
                                <Box p={1}>
                                    <Typography variant={'h6'}>{contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].title}</Typography>
                                    <div dangerouslySetInnerHTML={{ __html: contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].description }} />
                                </Box>
                            </Hidden>
                           
                        </>
                    ) :
                        (
                            <>
                                <p>
                                    {contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options[context.options].title ? (
                                        <>
                                        <Hidden mdUp>
                                            <Box p={1}>
                                                <TabsMobile>{contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options[context.options].title}</TabsMobile>
                                            </Box>
                                        </Hidden>
                                         <Hidden smDown>
                                            <Box p={1}>
                                                {contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options[context.options].title}
                                            </Box>
                                        </Hidden>
                                     </>
                                    ) : (
                                        <>
                                            <div className={classes.videoWrapper}>
                                                <Vimeo
                                                    onEnd={() => context.setDisabledOption(false)}
                                                    allowfullscreen
                                                    video={contextData.courses.topics[context.selectedTopic].subTopics[context.selectedSubtopic].options[context.options].video}
                                                    autoplay
                                                    onReady={() => context.setDisabledOption(true)}
                                                />

                                            </div>
                                            <ActionsVideo handleCreate={contextSide.handlePosition}/>
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
