import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import illustration from '../../Assets/MsCreator-4.png'
import NavButtons from './NavButtons'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle'

const translations = window.props.translations

export class MicrositeSummary extends Component {
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
      <MuiThemeProvider >

        <Grid item md={6} className={[classes.GridWrap,classes.formWrapper].join(', ')}>
          <Typography variant="h4" gutterBottom>
              {translations.micrositeSummaryTitle || "Summary"}
              <Typography variant="body1" gutterBottom>
              {translations.micrositeSummaryHelper || "Let's recap all information before launching microsite creation."}
              </Typography>
          </Typography>
          <NavButtons
          continue={this.continue}
          back={this.back}
          activeStep={activeStep}
          maxStep={maxStep}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <img style={{maxWidth:"100%"}} src={illustration}/>
        </Grid>

      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(MicrositeSummary);
