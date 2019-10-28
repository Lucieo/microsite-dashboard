import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const translations = window.props.translations
 
class FileUpload extends Component{
  constructor(props){
    super(props);
    this.state = {
      image: this.props.fieldValue || undefined,
      uploadsNumber:0
    };
  }
  handleImageChange=(files)=>{
    this.setState(prevState=>({
      image: files[0],
      uploadsNumber:prevState.uploadsNumber+1
    }));
    this.props.handleChange(this.props.field, files[0])
  }
  render(){
    const {classes, field} = this.props
    return (
      <>
      <Typography variant="h6" gutterBottom  className={classes.fieldTitle}>
        {translations[field]|| field}
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <DropzoneArea 
          onChange={files=>this.handleImageChange(files)}
          dropzoneText={translations.uploadFile || "Upload your file"}
          dropzoneClass={classes.dropZone}
          filesLimit={1}
          acceptedFiles={['image/*']}
          showAlerts={false}
          showPreviewsInDropzone={false}
          key={this.state.uploadsNumber}
          />
        </Grid>
        <Grid item xs={6} className={classes.ImgWrapper}>
          {
            this.state.image &&
            <img style={{maxWidth:"100%",maxHeight:100}} src={URL.createObjectURL(this.state.image)}/>
          }
        </Grid>
      </Grid>
      </>
    )  
  }
} 
 
export default withStyles(styles)(FileUpload);