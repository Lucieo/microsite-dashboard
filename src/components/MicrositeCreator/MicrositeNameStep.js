import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import illustration from '../../Assets/MsCreator-1.png'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle'
import NavButtons from './NavButtons'


const translations = window.props.translations

export class MicrositeName extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, activeStep, maxStep, classes} = this.props;
    return (
      < >
        <React.Fragment>
        <Grid item md={6} className={[classes.GridWrap,classes.formWrapper].join(', ')}>
        <Typography variant="h4" gutterBottom>
            {translations.micrositeNameTitle || "Name"}
            <Typography variant="body1" gutterBottom>
            {translations.micrositeNameHelper || "Set here the name of your microsite. It will be used to create the microsite and host your platform. Url can still be changed later on for a custom one."}
            </Typography>
        </Typography>

        <Input
          className={classes.formInput}
          value={values.micrositeName}
          onChange={e=>handleChange('micrositeName', e.target.value)}
          endAdornment={<InputAdornment style={{minWidth:200}} position="end">.the-mooc-agency.com</InputAdornment>}
        />
        <NavButtons
          continue={this.continue}
          back={this.back}
          activeStep={activeStep}
          maxStep={maxStep}
        />
      </Grid>

        <Grid item md={6}>
          <img style={{maxWidth:"100%"}} src={illustration}/>
        </Grid>

        </React.Fragment>
      </>
    );
  }
}

export default withStyles(styles)(MicrositeName);
