import React from 'react'
import BottomScrollListener from 'react-bottom-scroll-listener'
import { ListItemsContext } from '../contexts/listItemsContext';
const ContentLayout = (props) => {
    const [textContent, setTextContent] = React.useState(false);
    const context = React.useContext(ListItemsContext);
    
   
    return (
        <div className="root">
            <BottomScrollListener onBottom={context.handleEndVideo()}>
                
                {scrollRef => (
                    <div ref={textContent ? scrollRef : null} className='inner-scroll'>
                        {props.children}    
                    </div>
                )}
            </BottomScrollListener>
        </div>
    )
    
}

export default ContentLayout
