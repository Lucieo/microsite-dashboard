import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle'


const translations = window.props.translations

const NavButton =(props)=>{
    return(
        <div className={props.classes.NavBtnWrap}>
        {props.activeStep>1 &&
        <Button
            color="secondary"
            variant="contained"
            onClick={props.back}
        >
            {translations.Back || "Back"}
        </Button>
        }
        {
            props.activeStep<props.maxStep &&
            <Button
            color="primary"
            variant="contained"
            onClick={props.continue}
            disabled={props.disabledContinue}
          >
              {translations.Continue || "Continue"}
          </Button>
        }
        {
            props.activeStep==props.maxStep &&
            <Button
            color="primary"
            variant="contained"
            onClick={props.handleMicrositeSubmit}
          >
              {translations.CreateMicrosite || "Create Microsite"}
          </Button>
        }

        </div>
    )
}

export default withStyles(styles)(NavButton)