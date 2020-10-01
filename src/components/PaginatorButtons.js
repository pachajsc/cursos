import React from 'react';
import { Button } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { ListItemsContext } from '../contexts/listItemsContext';
const PaginatorButtons = () => {
  const context = React.useContext(ListItemsContext);
  return (
    <>
    <div>
    <Button
      onClick={context.handleBack}
      disabled={context.selectedTopic === 0 && context.selectedSubtopic === 0 ? true : false}
      variant="contained"
      color="secondary"
      startIcon={<ChevronLeft fontSize="large" />}
    >Volver</Button>
    <Button
      variant="contained"
      className='ml-2'
      color="primary"
      onClick={context.handleNext}
      disabled={context.selectedTopic === (context.maxTopics - 1) && context.selectedSubtopic === (context.maxSubTopics - 1) ? true : false}
      endIcon={<ChevronRight fontSize="large" />}
    >Continuar</Button>
    </div>
  </>
  );
}

export default PaginatorButtons;
