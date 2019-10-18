
import React, { Component } from 'react';
import MicrositeNameStep from '../components/MicrositeCreator/MicrositeNameStep';
import MicrositeStyleStep from '../components/MicrositeCreator/MicrositeStyleStep';
import MicrositeImagesStep from '../components/MicrositeCreator/MicrositeImagesStep';
import MicrositeSummary from '../components/MicrositeCreator/MicrositeSummary';
import Grid from '@material-ui/core/Grid';
import MicrositeStepper from "./../components/MicrositeCreator/MicrositeStepper"
import { withStyles } from '@material-ui/core';
import styles from '../Styles/MicrositeCreatorStyle'
import Typography from '@material-ui/core/Typography';

const translations = window.props.translations

export class MicrositeCreator extends Component {
  state = {
    step: 3,
    micrositeName: '',
    primaryColor:window.props.tma_primary_color || "#009CDF",
    secondaryColor:window.props.tma_secondary_color || "#001640",
    maxStep:4
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = (input,value) => {
    this.setState({ [input]: value });
  };

  renderFormStep=(step, values)=>{
    switch (step) {
      case 1:
        return (
          <MicrositeNameStep
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          activeStep={this.state.step}
          maxStep={this.state.maxStep}
          />
        );
      case 2:
        return (
          <MicrositeStyleStep
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            activeStep={this.state.step}
            maxStep={this.state.maxStep}
          />
        );
      case 3:
      return (
        <MicrositeImagesStep
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          activeStep={this.state.step}
          maxStep={this.state.maxStep}
        />
      );
      case 4:
      return (
        <MicrositeSummary
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          activeStep={this.state.step}
          maxStep={this.state.maxStep}
        />
      );
    }
  }

  render() {
    const { step, maxStep } = this.state;
    const {classes}=this.props;
    const values = { ...this.state };

    return(
      <div
      style={{
        padding:"10px 10px 10px 90px",
      }}
      >
      <Typography variant="h5" gutterBottom>
        {translations.createMicrosite || "Create Microsite"}
      </Typography>
      <div>
        <MicrositeStepper activeStep={step}/>
      </div>
      <Grid 
      container 
      className={classes.MsCreatorWrapper}
      >
      {
        this.renderFormStep(step, values)
      }
      </Grid> 
      </div>
    )
  }
}

export default withStyles(styles)(MicrositeCreator);


