import React from 'react';
import { Button, Hidden } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { ListItemsContext } from '../contexts/listItemsContext';
const PaginatorButtons = () => {
  const context = React.useContext(ListItemsContext);
  return (
    <>
    <div className="pagination-buttons">
    <Button
      onClick={context.handleBack}
      disabled={context.selectedTopic === 0 && context.selectedSubtopic === 0 ? true : false}
      variant="contained"
      color="secondary"
    ><ChevronLeft fontSize="large" /><Hidden smDown>Volver</Hidden></Button>
    <Button
      variant="contained"
      className='ml-2'
      color="primary"
      onClick={context.handleNext}
      disabled={context.selectedTopic === (context.maxTopics - 1) && context.selectedSubtopic === (context.maxSubTopics - 1) || context.disabledOption ? true : false}
    ><Hidden smDown>Continuar</Hidden><ChevronRight fontSize="large" /></Button>
    </div>
  </>
  );
}

export default PaginatorButtons;
