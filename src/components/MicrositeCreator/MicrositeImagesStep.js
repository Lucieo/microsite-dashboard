import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import illustration from '../../Assets/MsCreator-3.png'
import NavButtons from './NavButtons'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle'
import FileUpload from "./FileUpload"


const translations = window.props.translations

const uploadFields=[
  'logo',
  'backgroundImage',
  'favicon'
]

export class MicrositeImagesStep extends Component {
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

        <Grid item md={6} className={[classes.GridWrap,classes.formWrapper].join(', ')}>
          <Typography variant="h4" gutterBottom>
              {translations.micrositeStyleTitle || "Images"}
              <Typography variant="body1" gutterBottom>
              {translations.micrositeImagesHelper || "Add all the images that will be used to create microsite theme."}
              </Typography>
          </Typography>
          <div>
            {
              uploadFields.map((field, key)=> <FileUpload key={key} field={field} handleChange={handleChange} fieldValue={values[field]}/>)
            }
          </div>
          <NavButtons
          continue={this.continue}
          back={this.back}
          activeStep={activeStep}
          maxStep={maxStep}
          disabledContinue={!values['logo'] || !values['backgroundImage'] || !values['favicon']}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <img style={{maxWidth:"100%"}} src={illustration}/>
        </Grid>

      </>
    );
  }
}

export default withStyles(styles)(MicrositeImagesStep);
