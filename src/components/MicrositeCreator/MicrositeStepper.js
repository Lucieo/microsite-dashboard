import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const translations = window.props.translations

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    translations.MicrositeStepNameTitle || "Name", 
    translations.MicrositeStepStyleTitle || "Style",
    translations.MicrositeStepImagesTitle || "Images",
    translations.MicrositeStepSummaryTitle || "Summary",
    ];
}

export default function MicrositeStepper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper activeStep={props.activeStep-1}>
        {getSteps().map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

    </div>
  );
}