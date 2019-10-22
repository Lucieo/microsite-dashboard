import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ColorPicker from './ColorPicker'
import FontPicker from './FontPicker'
import illustration from '../../Assets/MsCreator-2.png'
import NavButtons from './NavButtons'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle'

const translations = window.props.translations

class MicrositeStyleStep extends Component {
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
        <Grid item md={6} className={classes.GridWrap}>
          <Typography variant="h4" gutterBottom>
              {translations.micrositeStyleTitle || "Style"}
          </Typography>
          <Typography variant="body1" gutterBottom>
              {translations.micrositeStyleHelper || "Set here the styles option that will be applied to your platform."}
          </Typography>

          <div className={classes.formElement}>
            <Typography variant="h6" gutterBottom className={classes.fieldTitle}>
                {translations.micrositeColorsTitle|| "Pick Colors"}
            </Typography>
            <Grid container>
              <Grid md={6} className={classes.fieldWrapper}>
                <Typography variant="body1" gutterBottom>
                  {translations.micrositePrimary || "Primary Color :"}
                </Typography>
              </Grid >
              <Grid md={6} className={classes.fieldWrapper}>
                <ColorPicker
                  saveChanges={handleChange}
                  field="primaryColor"
                  color={values.primaryColor}
                />
              </Grid >
              <Grid md={6} className={classes.fieldWrapper}>
                <Typography variant="body1" gutterBottom>
                  {translations.micrositeSecondary || "Secondary Color :"}
                </Typography>
              </Grid >
              <Grid md={6} className={classes.fieldWrapper}>
                <ColorPicker
                  saveChanges={handleChange}
                  field="secondaryColor"
                  color={values.secondaryColor}
                />
              </Grid >
            </Grid>
          </div>


          <div className={classes.formElement}>
          <Typography variant="h6" gutterBottom className={classes.fieldTitle}>
              {translations.micrositeStyleFont|| "Pick a font"}
          </Typography>
          <FontPicker
            handleChange={handleChange}
          />
          </div>
          <NavButtons
          continue={this.continue}
          back={this.back}
          activeStep={activeStep}
          maxStep={maxStep}
          disabledContinue={!values['primaryColor'] || !values['secondaryColor'] || !values['font']}
          />
        </Grid>

        <Grid item md={6}>
          <img style={{maxWidth:"100%"}}src={illustration}/>
        </Grid>

        </React.Fragment>
      </>
    );
  }
}

export default withStyles(styles)(MicrositeStyleStep);
