import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import illustration from '../../Assets/MsCreator-4.png'
import NavButtons from './NavButtons'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';

const translations = window.props.translations

const colorFields = ['primaryColor','secondaryColor']
const textFields = ['micrositeName','font']
const imageFields = ['logo','favicon','backgroundImage']
const fieldsOrder=['micrositeName','font','primaryColor','secondaryColor','logo','backgroundImage','favicon']


export class MicrositeSummary extends Component {
  getFieldDisplay = (element)=>{
    if(colorFields.includes(element[0])){
      return(
        <div style={{width:30, height:30, backgroundColor:element[1], borderRadius:5}}>
        </div>)
    }
    else if(textFields.includes(element[0])){
      return element[1]
    }
    else if(imageFields.includes(element[0])){
       if(element[1]){
        return <img style={{maxHeight:100,maxWidth:"100%"}} src={URL.createObjectURL(element[1])}/>
       }
       else{
         return <p style={{fontStyle:"italic"}}>NO IMAGE</p>
       } 
    }
  }

  summarizeElements=()=>{
    const {values, classes}=this.props
    return(
      Object.entries(values)
      .sort((a,b)=>fieldsOrder.indexOf(a[0])-fieldsOrder.indexOf(b[0]))
      .filter(element=>fieldsOrder.includes(element[0]))
      .map((element, key)=> {
          return(
          <ListItem key={key}>
              <ListItemIcon>
                {element[1] ? <CheckCircleOutlineIcon/> : <ClearIcon color="error"/>}
              </ListItemIcon>
              <ListItemText className={classes.SummaryField} primary={translations[element[0]] || element[0]}/>
              {this.getFieldDisplay(element)}
          </ListItem>
          )
      }

      )
    )
  }

  render() {
    const { values, handleChange, activeStep, maxStep, classes, nextStep, prevStep, handleMicrositeSubmit} = this.props;
    return (
      <>
        <Grid item md={6} className={[classes.GridWrap,classes.formWrapper].join(', ')}>
          <Typography variant="h4" gutterBottom className={classes.stepTitle}>
              {translations.micrositeSummaryTitle || "Summary"}
              <Typography variant="body1" gutterBottom>
              {translations.micrositeSummaryHelper || "Let's recap all information before launching microsite creation."}
              </Typography>
          </Typography>
          <div>
            <List component="nav">
              {
                this.summarizeElements()
              }
            </List>

          </div>
          <NavButtons
          continue={nextStep}
          back={prevStep}
          activeStep={activeStep}
          maxStep={maxStep}
          handleMicrositeSubmit={handleMicrositeSubmit}
          disabledContinue={Object.entries(values).filter(([k,v],i)=>!!v)}
          />
        </Grid>

        <Grid item md={6} sm={12}>
          <img style={{maxWidth:"100%"}} src={illustration}/>
        </Grid>
        </>
    );
  }
}

export default withStyles(styles)(MicrositeSummary);

