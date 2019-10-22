import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import illustration from '../../Assets/MsCreator-4.png'
import NavButtons from './NavButtons'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const translations = window.props.translations

const colorFields = ['primaryColor','secondaryColor']
const textFields = ['micrositeName','font']
const imageFields = ['logo','favicon','backgroundImage']
const displayableFields = textFields.concat(colorFields).concat(imageFields)
console.log(displayableFields)

export class MicrositeSummary extends Component {

  getFieldDisplay = (element)=>{
    if(colorFields.includes(element[0])){
      return <ColorDisplay color={element[1]}/>
    }
    else if(textFields.includes(element[0])){
      return element[1]
    }
    else if(imageFields.includes(element[0])){
       if(element[1]){
        return <img style={{maxHeight:100,maxWidth:"100%"}} src={URL.createObjectURL(element[1])}/>
       }
       else{
         return <p>NO IMAGE</p>
       } 

    }
  }

  summarizeElements=()=>{
    const {values, classes}=this.props
    return(
      Object.entries(values)
      .filter(element=>displayableFields.includes(element[0]))
      .map((element, key)=> {
          return(
          <ListItem>
            <ListItemText className={classes.SummaryField}>
                {translations[element[0]] || element[0]}
            </ListItemText>
            <ListItemText>
                {this.getFieldDisplay(element)}
            </ListItemText>
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
          <Typography variant="h4" gutterBottom>
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


const ColorDisplay = (props)=>{
  return(
    <div style={{width:30, height:30, backgroundColor:props.color, borderRadius:5}}>
    </div>)
}

const ImageDisplay=(props)=>{
  return(
    <p>IMAGE</p>
  )
}