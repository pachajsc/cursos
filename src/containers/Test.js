import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {courses} from '../mock/courses'
import LinearProgress from '@material-ui/core/LinearProgress';
import ProgressBar from './../components/ProgressBar'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper({steps, LinearProgressProps}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeSubStep, setActiveSubStep] = React.useState(0);
  const maxSteps = courses[0].topics.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleActiveStep =() => {
    setActiveStep()
  }
  const subtopic = courses[0].topics.subTopics;

  return (
    <div className={classes.root}>
      
        <Typography>{courses[0].topics[activeStep].title}</Typography><br/>
        <Typography variant="p">{courses[0].topics[activeStep].slug}</Typography>
     
      
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      <ProgressBar  value={Math.ceil((activeStep / (maxSteps - 1)) * 100)}/>
      <ul  >
      {courses[0].topics.map((text, uuid) => (
        
          <li key={uuid} onClick={()=>setActiveStep(uuid)}style={uuid === activeStep ? {color:'red'} : {color:'black'}}>
            <>
            {text.title}
            </>
            <ul>
             {courses[0].topics[uuid].subTopics.map((texts1, id) => (
              <>
              <li onClick={()=>setActiveSubStep(id)} style={id === activeSubStep ? {color:'green'} : {color:'black'}}>{texts1.title}</li>
              </>
            ))} 
            </ul>
          </li>
        
        ))}
</ul>
    </div>
  );
}
