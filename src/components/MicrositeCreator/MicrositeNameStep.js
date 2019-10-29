import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import illustration from '../../Assets/MsCreator-1.png'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle'
import NavButtons from './NavButtons'
import axios from 'axios';


const translations = window.props.translations

export class MicrositeName extends Component {
  state={
    validName:false
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  checkMicrositeName = async()=>{
      const url = window.props.checkMicrositeName
      const settings = {
          method:'POST',
          headers:{
              Accept:'application/json',
              'Content-Type':'application/json',
              'X-CSRFToken':window.props.csrfToken
          },
          body:JSON.stringify({
            micrositeName:"Flavio"
          })

      }
      const api_call = await fetch(url, settings)
      const data = await api_call.json()
      this.setState({validName:data['valid_name']})
  }
  

  handleMsNameChange=(e)=>{
    this.props.handleChange('micrositeName', e.target.value); 
    this.checkMicrositeName(e.target.value) 
  }

  render() {
    const { values, handleChange, activeStep, maxStep, classes} = this.props;
    return (
      < >
        <React.Fragment>
        <Grid item md={6} className={[classes.GridWrap,classes.formWrapper].join(', ')}>
        <Typography variant="h4" gutterBottom className={classes.stepTitle}>
            {translations.micrositeNameTitle || "Name"}
            <Typography variant="body1" gutterBottom>
            {translations.micrositeNameHelper || "Set here the name of your microsite. It will be used to create the microsite and host your platform. Url can still be changed later on for a custom one."}
            </Typography>
        </Typography>

        <Input
          className={classes.formInput}
          value={values.micrositeName}
          onChange={e=>this.handleMsNameChange(e)}
          endAdornment={<InputAdornment style={{minWidth:200}} position="end">.the-mooc-agency.com</InputAdornment>}
        />
        <NavButtons
          continue={this.continue}
          back={this.back}
          activeStep={activeStep}
          maxStep={maxStep}
          disabledContinue={!this.state.validName}
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
